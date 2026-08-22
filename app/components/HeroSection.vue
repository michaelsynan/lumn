<template>
  <section class="bg-[#0b0a0d] h-auto min-h-[600px] lg:h-[820px] overflow-hidden relative w-full">
    <!-- Background Gradient -->
    <div
      class="absolute h-full left-0 top-0 w-full opacity-20 transition-opacity duration-[800ms] ease-in-out"
      style="background: radial-gradient(ellipse 1440px 820px at 50% 50%, rgba(255,222,91,1) 0%, rgba(191,167,68,1) 25%, rgba(159,139,57,1) 37.5%, rgba(128,111,46,1) 50%, rgba(96,83,34,1) 62.5%, rgba(64,56,23,1) 75%, rgba(32,28,11,1) 87.5%, rgba(16,14,6,1) 93.75%, rgba(8,7,3,1) 96.875%, rgba(0,0,0,1) 100%)"
    />

    <!-- Noise Overlay -->
    <div
      class="absolute h-full left-0 top-0 w-full mix-blend-overlay opacity-30"
      style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%273.5%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E');"
    />

    <!-- Hero Content -->
    <div
      class="absolute flex flex-col lg:flex-row h-auto lg:h-[732px] items-center justify-between left-0 px-4 sm:px-8 lg:px-20 py-8 lg:py-16 top-0 w-full gap-8 lg:gap-0"
    >
      <!-- Left Content -->
      <div class="flex flex-col gap-6 lg:gap-9 items-start w-full lg:w-[640px]">
        <!-- Toggle -->
        <div class="bg-[#0f0f0f] border border-[#2b2b2b] flex items-center overflow-hidden p-[3px] rounded-full">
          <button
            class="cursor-pointer flex gap-1.5 items-center px-3.5 py-1.5 rounded-full transition-all duration-[400ms] ease-in-out"
            :class="activeTime === 'evening' ? 'bg-[rgba(214,142,73,0.2)] border border-[#d68e49]' : ''"
            @mouseenter="setActiveTime('evening')"
          >
            <UIcon
              name="i-mdi-moon-waning-crescent"
              class="size-3.5 transition-colors duration-[400ms] ease-in-out"
              :class="activeTime === 'evening' ? 'text-[#f4f3f5]' : 'text-[#8c8791]'"
            />
            <span
              class="text-[11px] tracking-[0.22px] transition-all duration-[400ms] ease-in-out"
              :class="activeTime === 'evening' ? 'text-[#f4f3f5] font-semibold' : 'text-[#8c8791]'"
            >
              Evening
            </span>
          </button>
          <button
            class="cursor-pointer flex gap-1.5 items-center px-3.5 py-1.5 rounded-full transition-all duration-[400ms] ease-in-out"
            :class="activeTime === 'morning' ? 'bg-[rgba(214,142,73,0.2)] border border-[#d68e49]' : ''"
            @mouseenter="setActiveTime('morning')"
          >
            <UIcon
              name="i-mdi-white-balance-sunny"
              class="size-3.5 transition-colors duration-[400ms] ease-in-out"
              :class="activeTime === 'morning' ? 'text-[#f4f3f5]' : 'text-[#8c8791]'"
            />
            <span
              class="text-[11px] tracking-[0.22px] transition-all duration-[400ms] ease-in-out"
              :class="activeTime === 'morning' ? 'text-[#f4f3f5] font-semibold' : 'text-[#8c8791]'"
            >
              Morning
            </span>
          </button>
        </div>

        <!-- Title Stack -->
        <div class="flex flex-col gap-4 w-full">
          <Transition
            name="fade"
            mode="out-in"
          >
            <p
              :key="activeTime + '-subtitle'"
              class="font-semibold text-[#d68e49] text-[13px] tracking-[3px] uppercase"
            >
              {{ heroContent[activeTime].subtitle }}
            </p>
          </Transition>
          <Transition
            name="fade"
            mode="out-in"
          >
            <h1
              :key="activeTime + '-title'"
              class="font-['Cinzel'] text-[#f4f3f5] text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1] tracking-[-1.5px]"
            >
              <span>{{ heroContent[activeTime].titlePart1 }}</span>
              <span class="text-[#d68e49]">{{ heroContent[activeTime].titlePart2 }}</span>
            </h1>
          </Transition>
        </div>

        <!-- Description -->
        <Transition
          name="fade"
          mode="out-in"
        >
          <p
            :key="activeTime + '-description'"
            class="text-[#a5a2aa] text-base lg:text-lg leading-[1.6]"
            v-html="heroContent[activeTime].description"
          />
        </Transition>

        <!-- Actions -->
        <div class="flex gap-4 items-center">
          <FancyButton />

          <NuxtLink
            to="#why-lumn"
            class="cursor-pointer group text-[#d68e49] text-sm font-semibold tracking-[1.12px] transition-all duration-300 flex items-center gap-1"
          >
            WHY LUMN
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Right Visual -->
      <div
        class="hidden lg:flex border border-[#28232f] flex-col h-[520px] overflow-hidden relative rounded-3xl w-[480px] bg-[#0b0b0f]"
      >
        <!-- Morning Image -->
        <img
          :src="heroContent.morning.image"
          alt="Hero Product - morning"
          :class="heroContent.morning.imageClass"
          class="absolute transition-opacity duration-600 ease-in-out"
          :style="{ opacity: activeTime === 'morning' ? 1 : 0 }"
        />
        <!-- Evening Image -->
        <img
          :src="heroContent.evening.image"
          alt="Hero Product - evening"
          :class="heroContent.evening.imageClass"
          class="absolute transition-opacity duration-600 ease-in-out"
          :style="{ opacity: activeTime === 'evening' ? 1 : 0 }"
        />
        <Transition
          name="fade"
          mode="out-in"
        >
          <div
            :key="activeTime + '-badge'"
            class="absolute backdrop-blur-sm bg-[rgba(15,15,15,0.8)] border border-[#493c30] flex items-center px-3 py-1.5 right-6 rounded-full top-6 z-10"
          >
            <span class="text-[#d68e49] text-[11px] font-medium">{{ heroContent[activeTime].badge }}</span>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
const activeTime = ref<'morning' | 'evening'>('morning')

const heroContent = {
  morning: {
    subtitle: 'Cold Brew Coffee Ritual',
    titlePart1: 'ELEVATE YOUR ',
    titlePart2: 'MORNING',
    description: 'Premium, mushroom-infused cold brew coffee. Smooth and rich with hints of chocolate. Functional beverages without the jitters.',
    badge: 'COMING SOON',
    image: '/hero-morning.png',
    imageClass: 'absolute h-[123.59%] left-0 top-[-22.37%] w-full object-cover'
  },
  evening: {
    subtitle: 'Functional Hard Cider Ritual',
    titlePart1: 'ILLUMINATE YOUR ',
    titlePart2: 'EVENING',
    description: 'Mango hard cider. Functional mushrooms. No mushroom taste.<br>Small-batch crafted. 7% ABV.',
    badge: '7% Adaptogens',
    image: '/hero-evening.png',
    imageClass: 'absolute inset-0 w-full h-full object-cover rounded-3xl'
  }
}

const setActiveTime = (time: 'morning' | 'evening') => {
  activeTime.value = time
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
