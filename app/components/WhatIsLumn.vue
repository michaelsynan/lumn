<template>
  <section
    ref="sectionRef"
    class="bg-[#0b0a0d] flex flex-col items-center px-4 sm:px-8 lg:px-20 py-12 sm:py-30 w-full"
  >
    <div class="flex flex-col gap-8 items-center w-full max-w-[900px]">
      <!-- Sun Icon -->
      <img
        ref="iconRef"
        src="/what-is-lumn.png"
        alt="Sun Icon"
        class="h-[90px] sm:h-[131px] w-[140px] sm:w-[206px] object-cover transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >

      <!-- Title -->
      <h2
        ref="titleRef"
        class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-[28px] sm:text-[36px] lg:text-5xl text-center leading-[1.1] transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        :style="{ transitionDelay: '150ms' }"
      >
        FUNCTIONAL BEVERAGES.<br>
        WITHOUT THE FUNCTIONAL FLAVOR.
      </h2>

      <!-- Divider -->
      <img
        ref="dividerRef"
        src="/what-is-lumn-icon.svg"
        alt="Divider"
        class="h-2 w-[300px] sm:w-[450px] lg:w-[600px] transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
        :style="{ transitionDelay: '300ms' }"
      >

      <!-- Description -->
      <p
        ref="descriptionRef"
        class="text-[#a5a2aa] text-base lg:text-lg text-center leading-[1.7] font-light px-4 transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        :style="{ transitionDelay: '450ms' }"
      >
        LUMN creates flavor-first beverages
        infused with functional mushrooms through our proprietary, patent-pending Aurora
        Protocol. Designed to preserve the intended beverage experience, so what you taste
        first is the drink itself.
      </p>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // Optionally unobserve after animation triggers once
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of the section is visible
      rootMargin: '0px 0px 150px 0px' // Start 150px before entering viewport
    }
  )

  observer.observe(sectionRef.value)

  // Cleanup
  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value)
    }
  })
})
</script>
