<script
  setup
  lang="ts"
>
const narrativeRef = ref<HTMLElement | null>(null)
const revealProgress = ref(0)

const narrativeText =
  'Aurora is not built around covering mushroom flavor with sugar, flavorings, creamers, or excessive sweetness. Instead, the platform is designed around integrating mushroom ingredients before they enter the finished beverage, so the drink stays recognizable as the drink. Rather than asking the final beverage to hide function, Aurora addresses function as part of the formulation itself, keeping the beverage experience in focus.'

const narrativeChars = computed(() => Array.from(narrativeText))
const revealCount = computed(() => Math.floor(revealProgress.value * narrativeChars.value.length))
const mushroomScale = computed(() => 1 + revealProgress.value * 0.28)
const glowScale = computed(() => 0.98 + revealProgress.value * 0.32)

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

let ticking = false

const updateReveal = () => {
  if (!narrativeRef.value) return

  const rect = narrativeRef.value.getBoundingClientRect()
  const start = window.innerHeight * 0.88
  const end = -rect.height * 0.3
  const progress = clamp((start - rect.top) / (start - end), 0, 1)

  revealProgress.value = progress
}

const onScrollOrResize = () => {
  if (ticking) return

  ticking = true
  requestAnimationFrame(() => {
    updateReveal()
    ticking = false
  })
}

onMounted(() => {
  updateReveal()
  window.addEventListener('scroll', onScrollOrResize, { passive: true })
  window.addEventListener('resize', onScrollOrResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScrollOrResize)
  window.removeEventListener('resize', onScrollOrResize)
})
</script>

<template>
  <UContainer class="flex flex-col items-center justify-center gap-12 pt-12 md:pt-20">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">
        The Aurora Approach
      </h2>
      <h3
        class="mt-4 font-['Cormorant_Garamond'] text-[34px] tracking-[1.08px] text-[#f4f3f5] sm:text-[42px] lg:text-5xl"
      >
        Integration, Not Disguise
      </h3>
    </div>

    <div
      ref="narrativeRef"
      class="mx-auto w-full max-w-5xl px-1"
    >
      <div class="relative">
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        >
          <div
            class="absolute h-56 w-56 bg-[#d68e49]/14 blur-3xl sm:h-72 sm:w-72"
            :style="{ transform: `scale(${glowScale})` }"
          />
          <img
            src="/mushroom.png"
            alt=""
            class="relative z-10 w-36 opacity-16 sm:w-44 lg:w-52"
            :style="{ transform: `scale(${mushroomScale})` }"
          >
        </div>

        <p
          class="relative z-10 font-['Cormorant_Garamond'] whitespace-pre-wrap break-words text-center text-[26px] leading-[1.5] tracking-[0.02em] text-[#7e7888] sm:text-[34px] lg:text-[42px]">
          <span
            v-for="(char, idx) in narrativeChars"
            :key="`base-${idx}`"
          >{{ char }}</span>
        </p>

        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 z-20"
        >
          <p
            class="font-['Cormorant_Garamond'] whitespace-pre-wrap break-words text-center text-[26px] leading-[1.5] tracking-[0.02em] text-[#f4f3f5] sm:text-[34px] lg:text-[42px]">
            <span
              v-for="(char, idx) in narrativeChars"
              :key="`overlay-${idx}`"
              :style="{ opacity: idx < revealCount ? 1 : 0 }"
            >{{ char }}</span>
          </p>
        </div>
      </div>

    </div>

    <div class="full-bleed-strip border-y border-[#d68e49]/45 bg-[#2a1a0c] px-4 py-4 sm:px-8 lg:px-12">
      <p
        class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-center font-['Cinzel'] text-[11px] font-semibold uppercase tracking-[1.8px] text-[#f7efe4] sm:flex-row sm:text-left sm:text-sm">
        <span>No masking-first philosophy</span>
        <span class="hidden h-px w-10 bg-[#d68e49]/55 sm:block" />
        <span>No medicinal drinking experience</span>
        <span class="hidden h-px w-10 bg-[#d68e49]/55 sm:block" />
        <span>The beverage remains the focus</span>
      </p>
    </div>
  </UContainer>
</template>

<style scoped>
.full-bleed-strip {
  width: 100dvw;
  margin-left: calc(50% - 50dvw);
  margin-right: calc(50% - 50dvw);
}
</style>
