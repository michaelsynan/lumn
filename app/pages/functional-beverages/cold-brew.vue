<script
  setup
  lang="ts"
>
useSeoMeta({
  title: 'Original Cold Brew Coffee - LUMN',
  description: 'LUMN Original Mushroom Infused Cold Brew Coffee (12 fl oz). Smooth, slow-steeped Arabica infused with Lion\'s Mane, Cordyceps, and Chaga.'
})

// FAQ Items
const faqs = ref([
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    isOpen: false
  },
  {
    question: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    isOpen: false
  },
  {
    question: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur?',
    answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    isOpen: false
  },
  {
    question: 'At vero eos et accusamus et iusto odio dignissimos ducimus?',
    answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  const item = faqs.value[index]
  if (item) {
    item.isOpen = !item.isOpen
  }
}
</script>

<template>
  <div class="bg-[#0b0a0d] min-h-screen text-[#f4f3f5]">
    <!-- Hero / Header -->
    <PageHero
      badge="Functional Beverage"
      title="Original Mushroom Infused Cold Brew Coffee"
      description="lorem ipsum, mention the beans and mushrooms"
    />

    <!-- Main Content Container -->
    <main class="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 space-y-20">
      <!-- Section 1: Product Showcase & Details -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Product Imagery -->
        <div class="flex items-center justify-center p-6 sm:p-10">
          <img
            src="/product-morning-cold-brew.png"
            alt="Product placeholder"
            class="max-h-[440px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
          >
        </div>

        <!-- Product Details -->
        <div class="space-y-6">
          <div class="space-y-2">
            <span class="text-xs font-semibold tracking-widest text-[#d68e49] uppercase">Product Overview</span>
            <h2 class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-3xl sm:text-4xl">
              Lorem Ipsum Dolor Sit Amet
            </h2>
          </div>

          <p class="text-[#a5a2aa] text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
          </p>

          <!-- Specifications Summary -->
          <ul class="space-y-3 text-sm text-[#a5a2aa] border-t border-b border-[#28232f] py-4">
            <li class="flex justify-between">
              <span>Lorem Attribute</span>
              <span class="text-white font-medium">Lorem Ipsum</span>
            </li>
            <li class="flex justify-between">
              <span>Dolor Spec</span>
              <span class="text-white font-medium">000 mg / unit</span>
            </li>
            <li class="flex justify-between">
              <span>Consectetur Stack</span>
              <span class="text-white font-medium">Element A, Element B, Element C</span>
            </li>
            <li class="flex justify-between">
              <span>Adipiscing Info</span>
              <span class="text-[#86e3ce] font-medium">Lorem Ipsum Details</span>
            </li>
          </ul>

          <!-- Full Width CTA Button -->
          <div>
            <NuxtLink
              to="/find-lumn"
              class="w-full inline-flex items-center justify-center gap-2 bg-[#d68e49] hover:bg-[#c47d3a] text-[#0b0a0d] font-bold text-base py-4 rounded-full transition-colors duration-300"
            >
              <UIcon
                name="i-mdi-map-marker-outline"
                class="size-5"
              />
              <span>Find LUMN</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Section 2: Flavor Profile / Section A -->
      <!-- <section class="space-y-6 border-t border-[#28232f] pt-12">
        <div class="space-y-2">
          <span class="text-xs font-semibold tracking-widest text-[#d68e49] uppercase">Section Subtitle</span>
          <h2 class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-2xl sm:text-3xl">
            Lorem Ipsum Headline
          </h2>
        </div>
        <p class="text-[#a5a2aa] text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section> -->

      <!-- Section 3: Mushroom Stack / Section B -->
      <!-- <section class="space-y-6 border-t border-[#28232f] pt-12">
        <div class="space-y-2">
          <span class="text-xs font-semibold tracking-widest text-[#d68e49] uppercase">Section Subtitle</span>
          <h2 class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-2xl sm:text-3xl">
            Consectetur Adipiscing Elit
          </h2>
        </div>
        <p class="text-[#a5a2aa] text-sm leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section> -->

      <!-- Section 4: FAQ Section -->
      <section class="space-y-6 border-t border-[#28232f] pt-12">
        <div class="space-y-2">
          <span class="text-xs font-semibold tracking-widest text-[#d68e49] uppercase">FAQ</span>
          <h2 class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-2xl sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="divide-y divide-[#28232f]">
          <div
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="py-4"
          >
            <button
              class="w-full flex items-center justify-between text-left py-2 text-white font-medium hover:text-[#d68e49] transition-colors cursor-pointer"
              @click="toggleFaq(idx)"
            >
              <span>{{ faq.question }}</span>
              <UIcon
                name="i-mdi-chevron-down"
                class="size-5 text-[#d68e49] transition-transform duration-200 ml-4 flex-shrink-0"
                :class="faq.isOpen ? 'rotate-180' : ''"
              />
            </button>
            <div
              v-show="faq.isOpen"
              class="pt-2 pb-2 text-sm text-[#a5a2aa] leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Full-Width Bottom CTA Section (Edge-to-Edge with Radial Gradient and Hero/Homepage Button Vibe) -->
    <section
      class="relative w-full border-t border-[#28232f] py-20 sm:py-28 overflow-hidden"
      style="background: radial-gradient(ellipse 1200px 500px at 50% 50%, rgba(214,142,73,0.12) 0%, rgba(11,10,13,1) 100%)"
    >
      <!-- Noise Overlay -->
      <div
        class="absolute inset-0 w-full h-full mix-blend-overlay opacity-20 pointer-events-none"
        style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%273.5%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E');"
      />

      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center gap-6">
        <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">Retail Availability</span>
        <h2 class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-3xl sm:text-5xl lg:text-6xl tracking-tight">
          Where to Buy
        </h2>
        <p class="text-[#a5a2aa] text-base sm:text-lg max-w-xl leading-relaxed">
          Find LUMN Original Cold Brew in refrigerated coolers at participating specialty retailers, natural grocers,
          and craft cafes.
        </p>
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <FancyButton />
          <NuxtLink
            to="/find-lumn"
            class="cursor-pointer group text-[#d68e49] text-sm font-semibold tracking-[1.12px] transition-all duration-300 flex items-center gap-1.5"
          >
            STORE LOCATOR
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
