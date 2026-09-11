<script
  setup
  lang="ts"
>
import { onBeforeUnmount, onMounted, ref } from 'vue'

useSeoMeta({
  title: 'Find LUMN - Store Locator',
  description: 'Find where to purchase LUMN functional beverages near you.'
})

const runtimeConfig = useRuntimeConfig()
const mapContainer = ref<HTMLElement | null>(null)
const mapLoadError = ref('')
const featuredLocationUrl = 'https://www.theshoppesatrittersfarm.com'
const rittersFarm: [number, number] = [-75.4947, 41.4190]

let map: import('mapbox-gl').Map | null = null
let popup: import('mapbox-gl').Popup | null = null

const jumpToFeaturedLocation = () => {
  mapContainer.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  if (!map) {
    return
  }

  map.flyTo({ center: rittersFarm, zoom: 13, speed: 0.9, curve: 1.2 })

  if (popup) {
    popup.addTo(map)
  }
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
      center: rittersFarm,
      zoom: 12,
      pitch: 24,
      antialias: true,
      attributionControl: false
    })

    map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-left')
    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right')

    popup = new mapboxgl.Popup({
      offset: 18,
      closeButton: false,
      className: 'lumn-map-popup'
    }).setHTML(
      '<div class="space-y-1">'
      + '<p class="text-sm font-semibold">The Shoppes At Ritter\'s Farm</p>'
      + '<p class="text-xs text-[#cfc8d8]">Lake Ariel, Pennsylvania</p>'
      + '<a href="https://ritterswinery.com/" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-[#d68e49] underline underline-offset-3">Visit Website</a>'
      + '</div>'
    )

    new mapboxgl.Marker({ color: '#d68e49' })
      .setLngLat(rittersFarm)
      .setPopup(popup)
      .addTo(map)

    map.on('load', () => {
      map?.resize()
      popup?.addTo(map!)
    })
  }
  catch {
    mapLoadError.value = 'Unable to load map right now. Please try again in a moment.'
  }
})

onBeforeUnmount(() => {
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
            <h2 class="mt-2 font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[42px]">The
              Shoppes At Ritter's Farm</h2>
            <p class="mt-2 text-sm text-[#d7d3dc] sm:text-base">Lake Ariel, Pennsylvania</p>

            <a
              :href="featuredLocationUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-flex items-center text-sm font-semibold text-[#d68e49] underline underline-offset-4 transition-colors duration-300 hover:text-[#f7efe4]"
            >
              Visit Location Website
            </a>
          </div>

          <button
            type="button"
            class="inline-flex w-full items-center justify-center border border-[#d68e49] bg-[#d68e49]/10 px-4 py-2 font-['Cinzel'] text-[11px] font-semibold uppercase tracking-[1.4px] text-[#f7efe4] transition-colors duration-300 hover:bg-[#d68e49]/20 sm:w-auto"
            @click="jumpToFeaturedLocation"
          >
            Jump To Location
          </button>
        </div>

        <div class="overflow-hidden border border-[#2f2b38] bg-[#16151b] shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
          <div
            ref="mapContainer"
            class="h-80 w-full sm:h-110"
          />
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
          Interest in Carrying LUMN?
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
:deep(.lumn-map-popup .mapboxgl-popup-content) {
  border: 1px solid #2f2b38;
  border-radius: 0;
  background: #121017;
  color: #f4f3f5;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.45);
  padding: 12px 14px;
}

:deep(.lumn-map-popup .mapboxgl-popup-tip) {
  border-top-color: #121017;
}
</style>
