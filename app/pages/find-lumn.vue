<script
  setup
  lang="ts"
>
import { onBeforeUnmount, onMounted, ref } from 'vue'

useSeoMeta({
  title: 'Find LUMN - Store Locator',
  description: 'Find where to purchase LUMN functional beverages near you.'
})

interface StoreLocation {
  id: string
  name: string
  address: string
  coordinates: [number, number]
  website?: string
  featured?: boolean
}

const locations: StoreLocation[] = [
  {
    id: 'electric-city',
    name: 'Electric City Roasting Company',
    address: '101 N. Blakely St., Dunmore, PA 18512',
    coordinates: [-75.6322, 41.4197],
    website: 'https://electriccityroasting.com/',
    featured: true
  },
  {
    id: 'ritters-farm',
    name: 'The Shoppes At Ritter\'s Farm',
    address: 'Lake Ariel, Pennsylvania',
    coordinates: [-75.4947, 41.4190],
    website: 'https://ritterswinery.com/'
  },
  {
    id: 'qwik-mart',
    name: 'Qwik Mart',
    address: '1242 Hamlin Hwy, Lake Ariel, PA 18436',
    coordinates: [-75.3460, 41.4115]
  },
  {
    id: 'sunoco',
    name: 'Sunoco',
    address: '466 Hamlin Hwy, Hamlin, PA 18427',
    coordinates: [-75.4134541, 41.4043990]
  },
  {
    id: 'sunoco-keyser',
    name: 'Sunoco',
    address: '1735 N Keyser Avenue, Scranton, PA 18508',
    coordinates: [-75.6693503, 41.4449891]
  },
  {
    id: 'pieros-pizza',
    name: 'Piero\'s Pizza',
    address: '590 Hamlin Hwy, Lake Ariel, PA 18436',
    coordinates: [-75.4050307, 41.4039342]
  },
  {
    id: 'jorobs-naturals',
    name: 'JoRob\'s Naturals',
    address: '1130 Texas Palmyra Highway, Honesdale, PA 18431',
    coordinates: [-75.2193932, 41.5519030],
    website: 'https://jorobsnaturals.com/'
  }
]

const featuredLocation = locations.find(location => location.featured)
const initialMapCenter = locations.find(location => location.id === 'ritters-farm')?.coordinates

const getDirectionsUrl = (location: StoreLocation) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${location.name}, ${location.address}`)}`

const runtimeConfig = useRuntimeConfig()
const mapContainer = ref<HTMLElement | null>(null)
const mapLoadError = ref('')
const selectedLocation = ref(featuredLocation?.id ?? '')

let map: import('mapbox-gl').Map | null = null
const locationPopups = new Map<string, import('mapbox-gl').Popup>()

const createLogoMarker = () => {
  const el = document.createElement('div')
  el.className = 'lumn-map-marker'

  const img = document.createElement('img')
  img.src = '/nav-logo.png'
  img.alt = 'LUMN location'
  el.appendChild(img)

  return el
}

const selectLocation = (locationId: string) => {
  selectedLocation.value = locationId

  const location = locations.find(item => item.id === locationId)

  if (!map || !location) {
    return
  }

  map.flyTo({ center: location.coordinates, zoom: 13, speed: 0.9, curve: 1.2 })

  locationPopups.forEach(locationPopup => locationPopup.remove())
  locationPopups.get(location.id)?.addTo(map)
}

const setLayerPaintIfExists = (
  mapInstance: import('mapbox-gl').Map,
  layerId: string,
  paintProperty: string,
  value: unknown
) => {
  if (mapInstance.getLayer(layerId)) {
    ; (mapInstance as any).setPaintProperty(layerId, paintProperty, value)
  }
}

const setLayerLayoutIfExists = (
  mapInstance: import('mapbox-gl').Map,
  layerId: string,
  layoutProperty: string,
  value: unknown
) => {
  if (mapInstance.getLayer(layerId)) {
    ; (mapInstance as any).setLayoutProperty(layerId, layoutProperty, value)
  }
}

const jumpToFeaturedLocation = () => {
  mapContainer.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  if (!map || !featuredLocation) {
    return
  }

  selectLocation(featuredLocation.id)
}

onMounted(async () => {
  if (!runtimeConfig.public.mapboxAccessToken) {
    mapLoadError.value = 'Map is not configured yet. Add NUXT_PUBLIC_MAPBOX_ACCESS_TOKEN to your .env file.'
    return
  }

  if (!mapContainer.value) {
    return
  }

  try {
    const mapboxgl = (await import('mapbox-gl')).default
    mapboxgl.accessToken = runtimeConfig.public.mapboxAccessToken

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: initialMapCenter,
      zoom: 12,
      pitch: 24,
      antialias: true,
      attributionControl: false
    })

    map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-left')
    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right')

    for (const location of locations) {
      const locationPopup = new mapboxgl.Popup({
        offset: 28,
        closeButton: false,
        className: 'lumn-map-popup'
      }).setHTML(
        '<div class="space-y-1">'
        + `<p class="text-sm font-semibold">${location.name}</p>`
        + `<p class="text-xs text-[#cfc8d8]">${location.address}</p>`
        + `<a href="${getDirectionsUrl(location)}" target="_blank" rel="noopener noreferrer" class="mt-1 inline-flex py-0.5 text-xs font-semibold text-[#d68e49] no-underline">Get Directions <span class="lumn-popup-icon" aria-hidden="true">&#8599;</span></a>`
        + '</div>'
      )

      locationPopups.set(location.id, locationPopup)

      const locationMarker = new mapboxgl.Marker({ element: createLogoMarker() })
        .setLngLat(location.coordinates)
        .setPopup(locationPopup)
        .addTo(map)
      locationMarker.getElement().addEventListener('click', () => selectLocation(location.id))
    }

    map.on('load', () => {
      map?.resize()

      if (featuredLocation) {
        locationPopups.get(featuredLocation.id)?.addTo(map!)
      }

      if (!map) {
        return
      }

      const locationBounds = new mapboxgl.LngLatBounds()
      for (const location of locations) {
        locationBounds.extend(location.coordinates)
      }
      map.fitBounds(locationBounds, { padding: 80, maxZoom: 11.5 })

      // Slightly lighter dark-map palette for better readability.
      setLayerPaintIfExists(map, 'background', 'background-color', '#12131a')
      setLayerPaintIfExists(map, 'land', 'background-color', '#1a1d26')
      setLayerPaintIfExists(map, 'water', 'fill-color', '#1c2533')
      setLayerPaintIfExists(map, 'water', 'fill-opacity', 0.9)

      // Brighter roads for easier scanning.
      setLayerPaintIfExists(map, 'road-primary', 'line-color', '#f2f4fb')
      setLayerPaintIfExists(map, 'road-secondary-tertiary', 'line-color', '#d9deea')
      setLayerPaintIfExists(map, 'road-street', 'line-color', '#c5cbda')
      setLayerPaintIfExists(map, 'bridge-primary', 'line-color', '#fafbff')
      setLayerPaintIfExists(map, 'bridge-secondary-tertiary', 'line-color', '#e4e8f2')

      // Improve label legibility.
      setLayerPaintIfExists(map, 'road-label', 'text-color', '#ffffff')
      setLayerPaintIfExists(map, 'road-label', 'text-halo-color', '#171923')
      setLayerPaintIfExists(map, 'road-label', 'text-halo-width', 1.25)

      // Push feature/place labels close to white and slightly larger.
      setLayerPaintIfExists(map, 'settlement-subdivision-label', 'text-color', '#f2f6ff')
      setLayerPaintIfExists(map, 'settlement-major-label', 'text-color', '#f7f9ff')
      setLayerPaintIfExists(map, 'place-label', 'text-color', '#f5f8ff')
      setLayerPaintIfExists(map, 'poi-label', 'text-color', '#edf3ff')
      setLayerPaintIfExists(map, 'natural-point-label', 'text-color', '#eaf0ff')

      setLayerPaintIfExists(map, 'settlement-subdivision-label', 'text-halo-color', '#151821')
      setLayerPaintIfExists(map, 'settlement-major-label', 'text-halo-color', '#151821')
      setLayerPaintIfExists(map, 'place-label', 'text-halo-color', '#151821')
      setLayerPaintIfExists(map, 'poi-label', 'text-halo-color', '#151821')
      setLayerPaintIfExists(map, 'natural-point-label', 'text-halo-color', '#151821')

      setLayerPaintIfExists(map, 'settlement-subdivision-label', 'text-halo-width', 1.05)
      setLayerPaintIfExists(map, 'settlement-major-label', 'text-halo-width', 1.1)
      setLayerPaintIfExists(map, 'place-label', 'text-halo-width', 1.05)
      setLayerPaintIfExists(map, 'poi-label', 'text-halo-width', 1)
      setLayerPaintIfExists(map, 'natural-point-label', 'text-halo-width', 1)

      setLayerLayoutIfExists(map, 'settlement-subdivision-label', 'text-size', [
        'interpolate',
        ['linear'],
        ['zoom'],
        6,
        10,
        10,
        13,
        14,
        17
      ])
      setLayerLayoutIfExists(map, 'settlement-major-label', 'text-size', [
        'interpolate',
        ['linear'],
        ['zoom'],
        5,
        11,
        9,
        15,
        13,
        19
      ])
      setLayerLayoutIfExists(map, 'place-label', 'text-size', [
        'interpolate',
        ['linear'],
        ['zoom'],
        5,
        10,
        9,
        13,
        13,
        17
      ])
      setLayerLayoutIfExists(map, 'poi-label', 'text-size', [
        'interpolate',
        ['linear'],
        ['zoom'],
        10,
        10,
        14,
        13
      ])
      setLayerLayoutIfExists(map, 'natural-point-label', 'text-size', [
        'interpolate',
        ['linear'],
        ['zoom'],
        7,
        11,
        12,
        14
      ])

      if (map.getSource('composite') && !map.getLayer('lumn-road-highlight')) {
        map.addLayer({
          id: 'lumn-road-highlight',
          type: 'line',
          source: 'composite',
          'source-layer': 'road',
          filter: ['in', ['get', 'class'], ['literal', ['motorway', 'trunk', 'primary', 'secondary']]],
          paint: {
            'line-color': '#ffffff',
            'line-opacity': 0.4,
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              8,
              0.7,
              12,
              1.5,
              15,
              2.8
            ]
          }
        })
      }
    })
  }
  catch {
    mapLoadError.value = 'Unable to load map right now. Please try again in a moment.'
  }
})

onBeforeUnmount(() => {
  locationPopups.clear()

  if (map) {
    map.remove()
    map = null
  }
})
</script>

<template>
  <div class="bg-[#0b0a0d] min-h-screen">
    <PageHero
      badge="Store Locator"
      title="FIND LUMN"
      description="Locate cafes and specialty grocers carrying LUMN functional beverages near you."
    />

    <section class="border-b border-[#28232f] bg-[#0e0c12] px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div class="mx-auto w-full max-w-6xl">
        <div class="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.6px] text-[#d68e49]">Featured Location
            </p>
            <h2 class="mt-2 font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[42px]">
              {{ featuredLocation?.name }}
            </h2>
            <p class="mt-2 text-sm text-[#d7d3dc] sm:text-base">{{ featuredLocation?.address }}</p>

            <div class="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                v-if="featuredLocation?.website"
                :href="featuredLocation.website"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 -mx-1.5 text-sm font-semibold text-[#d68e49] underline underline-offset-4 transition-colors duration-300 hover:bg-[#d68e49]/10 hover:text-[#f7efe4]"
              >
                Visit Location Website
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-4 shrink-0"
                />
              </a>

              <a
                v-if="featuredLocation"
                :href="getDirectionsUrl(featuredLocation)"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 -mx-1.5 text-sm font-semibold text-[#d68e49] underline underline-offset-4 transition-colors duration-300 hover:bg-[#d68e49]/10 hover:text-[#f7efe4]"
              >
                Get Directions
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-4 shrink-0"
                />
              </a>
            </div>
          </div>

          <button
            type="button"
            class="inline-flex w-full items-center justify-center border border-[#d68e49] bg-[#d68e49]/10 px-4 py-2 font-['Cinzel'] text-[11px] font-semibold uppercase tracking-[1.4px] text-[#f7efe4] transition-colors duration-300 hover:bg-[#d68e49]/20 sm:w-auto"
            @click="jumpToFeaturedLocation"
          >
            Jump To Location
          </button>
        </div>

        <div class="overflow-hidden border border-[#9e7a53] bg-[#20222b] shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
          <div
            ref="mapContainer"
            class="h-80 w-full sm:h-110"
          />
        </div>

        <div class="mt-6 flex flex-col gap-4">
          <article
            v-for="location in locations"
            :key="location.id"
            class="cursor-pointer border bg-[#15131a] p-5 transition-colors sm:p-6 hover:bg-[#191720]"
            :class="selectedLocation === location.id ? 'border-[#d68e49] shadow-[0_0_24px_rgba(214,142,73,0.12)]' : 'border-[#28232f]'"
          >
            <button
              type="button"
              class="w-full cursor-pointer text-left"
              @click="selectLocation(location.id)"
            >
              <p
                v-if="location.featured"
                class="font-['Cinzel'] text-[10px] font-semibold uppercase tracking-[1.4px] text-[#d68e49]"
              >
                Featured Location
              </p>
              <h3
                class="font-['Cormorant_Garamond'] text-2xl text-[#f4f3f5]"
                :class="{ 'mt-2': location.featured }"
              >
                {{ location.name }}
              </h3>
              <p class="mt-1 text-sm text-[#d7d3dc]">{{ location.address }}</p>
            </button>
            <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                v-if="location.website"
                :href="location.website"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex w-fit items-center gap-1 rounded-sm px-1.5 py-0.5 -mx-1.5 text-sm font-semibold text-[#d68e49] underline underline-offset-4 transition-colors duration-300 hover:bg-[#d68e49]/10 hover:text-[#f7efe4]"
              >
                Visit Location Website
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-4 shrink-0"
                />
              </a>
              <a
                :href="getDirectionsUrl(location)"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex w-fit items-center gap-1 rounded-sm px-1.5 py-0.5 -mx-1.5 text-sm font-semibold text-[#d68e49] underline underline-offset-4 transition-colors duration-300 hover:bg-[#d68e49]/10 hover:text-[#f7efe4]"
              >
                Get Directions
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-4 shrink-0"
                />
              </a>
            </div>
          </article>
        </div>

        <p
          v-if="mapLoadError"
          class="mt-4 border border-[#7f2a2a]/50 bg-[#2a1212] px-4 py-3 text-sm text-[#ffd9d9] sm:text-base"
        >
          {{ mapLoadError }}
        </p>
      </div>
    </section>
    <section
      class="relative py-20 overflow-hidden border-b border-[#28232f] px-4 sm:px-8 sm:py-24 lg:px-12"
      style="background: radial-gradient(ellipse 1200px 520px at 50% 30%, rgba(214,142,73,0.13) 0%, rgba(11,10,13,1) 100%);"
    >
      <div
        class="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%273.5%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E');"
      />

      <div class="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">
          RETAIL PARTNERSHIPS
        </h2>
        <h3 class="font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[46px] lg:text-[58px]">
          Interested in Carrying LUMN?
        </h3>
        <p class="max-w-3xl text-base leading-[1.8] text-[#d7d3dc] sm:text-lg">
          Tell us about your store and location. We will follow up with wholesale information, product specs, and next
          steps.
        </p>

        <div class="mt-4 flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row">
          <FancyButton
            to="/wholesale-retailers"
            label="Learn More"
            width-class="w-56"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
:deep(.lumn-map-marker) {
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  border: 2px solid #d68e49;
  overflow: hidden;
  background: #0b0a0d;
  box-shadow: 0 0 16px rgba(214, 142, 73, 0.45), 0 8px 18px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

:deep(.lumn-map-marker:hover) {
  transform: scale(1.1);
  box-shadow: 0 0 24px rgba(214, 142, 73, 0.65), 0 10px 22px rgba(0, 0, 0, 0.55);
}

:deep(.lumn-map-marker img) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  box-sizing: border-box;
}

:deep(.lumn-map-popup .mapboxgl-popup-content) {
  border: 1px solid #8f6b43;
  border-radius: 0;
  background: #121017;
  color: #f4f3f5;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.45);
  padding: 12px 14px;
}

:deep(.lumn-map-popup .lumn-popup-icon) {
  font-size: 11px;
  line-height: 1;
}

:deep(.lumn-map-popup a:focus),
:deep(.lumn-map-popup a:focus-visible) {
  outline: none;
  box-shadow: none;
}

:deep(.lumn-map-popup a) {
  text-decoration: none;
  border-radius: 2px;
  padding: 2px 6px;
  margin: -2px -6px;
  transition: background-color 0.2s ease;
}

:deep(.lumn-map-popup a:hover) {
  background: rgba(214, 142, 73, 0.12);
}

:deep(.lumn-map-popup .mapboxgl-popup-tip) {
  border-top-color: #121017;
}
</style>
