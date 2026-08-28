<template>
  <section
    class="relative w-full overflow-hidden border-b border-[#28232f]"
    style="background: radial-gradient(ellipse 1200px 400px at 50% 50%, rgba(214,142,73,0.08) 0%, rgba(11,10,13,1) 100%)"
  >
    <!-- Noise Overlay -->
    <div
      class="absolute h-full left-0 top-0 w-full mix-blend-overlay opacity-20 pointer-events-none"
      style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%273.5%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E');"
    />

    <div
      class="relative z-10 flex flex-col items-center px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-38 max-w-7xl mx-auto"
    >
      <!-- Badge -->
      <div
        v-if="badge"
        class="backdrop-blur-sm bg-[rgba(214,142,73,0.15)] border border-[#d68e49] flex items-center px-4 py-2 rounded-full mb-6"
      >
        <span class="text-[#d68e49] text-[11px] font-semibold tracking-[1px] uppercase">{{ badge }}</span>
      </div>

      <!-- Title -->
      <h1
        class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-[40px] sm:text-[56px] lg:text-[72px] text-center leading-[1.1] tracking-[-1.5px] mb-6"
      >
        {{ title }}
      </h1>

      <!-- Description -->
      <p
        v-if="description"
        class="text-[#a5a2aa] text-base lg:text-lg text-center leading-[1.7] max-w-[700px] mb-8"
      >
        {{ description }}
      </p>

      <!-- Decorative Divider -->
      <div class="h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[#d68e49] to-transparent opacity-30" />
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
defineProps<{
  badge?: string
  title: string
  description?: string
}>()
</script>
