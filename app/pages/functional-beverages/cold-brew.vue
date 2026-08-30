<script
  setup
  lang="ts"
>
useSeoMeta({
  title: 'Original Cold Brew Coffee - LUMN',
  description: 'Premium cold brew coffee infused with Lion\'s Mane, Cordyceps, and Chaga through Aurora Protocol™. Smooth, rich, and chocolate-forward — with the coffee experience kept firmly in front.'
})

const mushrooms = [
  {
    name: "Lion's Mane",
    image: '/lions-mane.png',
    alt: "Lion's Mane mushroom"
  },
  {
    name: 'Cordyceps',
    image: '/codyceps.png',
    alt: 'Cordyceps mushroom'
  },
  {
    name: 'Chaga',
    image: '/chaga.png',
    alt: 'Chaga mushroom'
  }
]

const tasteDescriptors = [
  { label: 'SMOOTH', icon: 'i-mdi-water-outline', iconClass: 'size-7' },
  { label: 'RICH', icon: 'i-mdi-coffee-outline', iconClass: 'size-7' },
  { label: 'CHOCOLATE-FORWARD', icon: 'i-mdi-cookie-outline', iconClass: 'size-7' }
]

const productSpecs = [
  { label: 'Product', value: 'LUMN Original Cold Brew' },
  { label: 'Type', value: 'Mushroom-Infused Cold Brew Coffee' },
  { label: 'Volume', value: '12 fl oz' },
  { label: 'Active Blend', value: 'Lion’s Mane • Cordyceps • Chaga' },
  { label: 'Storage', value: 'Keep Refrigerated' }
]

const faqs = ref([
  {
    question: 'Does LUMN taste like mushrooms?',
    answer: 'LUMN is designed to preserve the intended coffee experience. The finished cold brew is smooth and coffee-forward without a mushroom-forward flavor.',
    isOpen: false
  },
  {
    question: 'Which mushrooms are in LUMN Original Cold Brew?',
    answer: 'Lion’s Mane, Cordyceps, and Chaga.',
    isOpen: false
  },
  {
    question: 'Does LUMN contain caffeine?',
    answer: 'Yes. LUMN Original Cold Brew is a caffeinated coffee beverage. Once the final production specification is locked, the exact caffeine amount can be displayed here.',
    isOpen: false
  },
  {
    question: 'Does it need to be refrigerated?',
    answer: 'Yes. LUMN Original Cold Brew should be kept refrigerated.',
    isOpen: false
  },
  {
    question: 'What is Aurora Protocol™?',
    answer: 'Aurora Protocol™ is the proprietary infusion platform behind LUMN. Learn more on the Aurora Protocol page.',
    isOpen: false
  },
  {
    question: 'Where can I buy it?',
    answer: 'Use the Find LUMN page to see current retail locations.',
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
    <!-- 1. Hero Section -->
    <section class="relative w-full overflow-hidden border-b border-[#28232f] bg-[#0b0a0d] py-16 sm:py-20 lg:py-28">
      <!-- Ambient Glow & Noise -->
      <div
        class="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        style="background: radial-gradient(ellipse 1000px 600px at 70% 50%, rgba(214,142,73,0.2) 0%, rgba(11,10,13,0) 100%)"
      />
      <div
        class="absolute inset-0 w-full h-full mix-blend-overlay opacity-25 pointer-events-none"
        style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%273.5%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E');"
      />

      <div
        class="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
      >
        <!-- Hero Copy -->
        <div class="lg:col-span-7 flex flex-col items-start gap-6">
          <span class="text-xs sm:text-[13px] font-semibold tracking-[3px] text-[#d68e49] uppercase">
            LUMN ORIGINAL
          </span>

          <h1
            class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05]"
          >
            COLD BREW, <br class="hidden sm:inline">REIMAGINED.
          </h1>

          <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed max-w-xl">
            Premium cold brew coffee infused with Lion’s Mane, Cordyceps, and Chaga through Aurora Protocol™. Smooth,
            rich, and chocolate-forward — with the coffee experience kept firmly in front.
          </p>

          <!-- CTAs -->
          <div class="pt-4 flex flex-wrap items-center gap-5">
            <FancyButton />

            <NuxtLink
              to="/aurora-protocol"
              class="cursor-pointer group text-[#d68e49] text-sm font-semibold tracking-[1.12px] uppercase transition-all duration-300 flex items-center gap-1.5 py-3 px-2 hover:text-[#f4f3f5]"
            >
              DISCOVER AURORA
              <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Hero Bottle Shot -->
        <div class="lg:col-span-5 flex items-center justify-center relative">
          <div class="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none flex items-center justify-center">
            <!-- Copper glow behind bottle -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#d68e49]/20 via-[#d68e49]/5 to-transparent blur-3xl rounded-full scale-90 -z-0"
            />
            <img
              src="/lumn-mushroom-infused-cold-brew.webp"
              alt="LUMN Original Mushroom Infused Cold Brew"
              class="relative z-10 max-h-[480px] sm:max-h-[560px] lg:max-h-[620px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)]"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Coffee-First Section with Coffee Bean Background -->
    <section
      class="relative w-full overflow-hidden border-b border-[#28232f] bg-[url('/functional-beverages.webp')] bg-cover bg-center bg-fixed text-white"
    >
      <div class="bg-black/75 px-4 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
            FOUNDATIONAL PHILOSOPHY
          </span>

          <h2
            class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#f4f3f5]"
          >
            THE COFFEE COMES FIRST.
          </h2>

          <p class="text-[#cfccd4] text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            LUMN was built around a simple idea: functional ingredients should never require sacrificing the beverage
            itself. Original Cold Brew starts with rich, full-bodied coffee and is crafted to taste like exactly what it
            is supposed to be — great cold brew.
          </p>

          <div class="pt-6 border-t border-[#d68e49]/30 max-w-2xl mx-auto">
            <blockquote
              class="font-['Cinzel'] text-xl sm:text-2xl md:text-3xl text-[#d68e49] tracking-wide uppercase font-semibold leading-snug"
            >
              “FUNCTIONAL BEVERAGES. WITHOUT THE FUNCTIONAL FLAVOR.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Caffeine + Mushrooms Section (with 3 Mushroom Images) -->
    <section class="w-full py-20 sm:py-28 border-b border-[#28232f] bg-[#0b0a0d]">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div class="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
            ACTIVE INGREDIENTS
          </span>
          <h2 class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl lg:text-6xl text-[#f4f3f5]">
            CAFFEINE + MUSHROOMS
          </h2>
          <p class="font-['Cinzel'] text-lg sm:text-xl text-[#d68e49] tracking-wide">
            A familiar ritual, reimagined.
          </p>
          <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed pt-2">
            Original Cold Brew combines coffee with a three-mushroom blend of Lion’s Mane, Cordyceps, and Chaga. Aurora
            Protocol™ integrates the mushroom infusion into the beverage while preserving the intended flavor, aroma,
            and character of the coffee.
          </p>
        </div>

        <!-- 3 Mushrooms Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <div
            v-for="(shroom, idx) in mushrooms"
            :key="idx"
            class="group bg-[#131117] border border-[#28232f] hover:border-[#d68e49]/60 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_12px_30px_rgba(214,142,73,0.15)]"
          >
            <!-- Flush Image Container matching the ~450x610 image aspect ratio -->
            <div class="w-full aspect-[450/610] bg-[#0c0a0f] overflow-hidden flex items-center justify-center">
              <img
                :src="shroom.image"
                :alt="shroom.alt"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
            </div>
            <!-- Text Content Under Image -->
            <div class="p-6 text-center border-t border-[#28232f] bg-[#131117]">
              <h3 class="font-['Cinzel'] text-lg sm:text-xl font-bold tracking-widest text-[#f4f3f5] uppercase">
                {{ shroom.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. The Drinking Experience -->
    <section class="w-full py-20 sm:py-28 border-b border-[#28232f] bg-[#0e0c12]">
      <div class="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-12">
        <div class="space-y-4 max-w-3xl mx-auto">
          <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
            FLAVOR PROFILE
          </span>
          <h2 class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl lg:text-6xl text-[#f4f3f5]">
            WHAT DOES LUMN TASTE LIKE?
          </h2>
          <p class="font-['Cinzel'] text-xl sm:text-2xl text-[#d68e49] font-medium tracking-wide">
            Cold brew. Not mushroom coffee.
          </p>
          <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed pt-2">
            Smooth, dark and full-bodied with a naturally chocolate-forward coffee profile. The mushroom infusion is
            designed to sit behind the beverage rather than redefine it. No earthy mushroom-forward finish. No herbal
            profile. Just a premium cold brew experience.
          </p>
        </div>

        <!-- Three Descriptors (Clean Icon + Label Column - Top Aligned) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-6 max-w-3xl mx-auto items-start">
          <div
            v-for="(item, idx) in tasteDescriptors"
            :key="idx"
            class="flex flex-col items-center justify-start gap-4 group text-center"
          >
            <div
              class="w-16 h-16 min-w-[64px] min-h-[64px] flex-shrink-0 rounded-full bg-[rgba(214,142,73,0.12)] border border-[#d68e49]/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#d68e49] group-hover:bg-[rgba(214,142,73,0.2)]"
            >
              <UIcon
                :name="item.icon"
                :class="[item.iconClass || 'size-7', 'text-[#d68e49] transition-colors']"
              />
            </div>
            <span
              class="font-['Cinzel'] text-sm sm:text-base font-bold tracking-[2px] text-[#f4f3f5] uppercase transition-colors group-hover:text-[#d68e49] leading-snug"
            >
              {{ item.label }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Aurora Protocol Teaser -->
    <section class="w-full py-20 sm:py-24 border-b border-[#28232f] bg-[#0b0a0d] relative overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none opacity-20"
        style="background: radial-gradient(ellipse 800px 400px at 50% 50%, rgba(214,142,73,0.18) 0%, rgba(11,10,13,0) 100%)"
      />

      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
          PROPRIETARY INFUSION
        </span>
        <h2 class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl lg:text-6xl text-[#f4f3f5]">
          POWERED BY AURORA PROTOCOL™
        </h2>
        <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Aurora Protocol™ is LUMN’s proprietary, patent-pending mushroom-infusion platform, developed to integrate
          functional mushrooms into familiar beverages without compromising their intended sensory experience.
        </p>
        <div class="pt-4">
          <NuxtLink
            to="/aurora-protocol"
            class="inline-flex items-center gap-2 text-[#d68e49] hover:text-[#f4f3f5] font-['Cinzel'] font-bold text-sm tracking-[2px] uppercase transition-colors"
          >
            EXPLORE AURORA PROTOCOL
            <span class="text-lg">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 6. Product Facts / Technical Specifications -->
    <section class="w-full py-20 sm:py-28 border-b border-[#28232f] bg-[#0e0c12]">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <!-- Product Image -->
          <div class="flex justify-center items-center">
            <nuxt-img
              class="block w-auto max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] h-auto"
              src="/mushroom-infused-cold-brew.webp"
              alt="Mushroom Infused Cold Brew"
            />
          </div>

          <!-- Product Facts -->
          <div class="w-full max-w-xl mx-auto lg:mx-0">
            <div class="mb-10">
              <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
                Product Specifications
              </span>

              <h2 class="mt-2 font-['Cormorant_Garamond'] text-4xl sm:text-5xl text-[#f4f3f5]">
                Our Original Cold Brew
              </h2>
            </div>

            <div>
              <div
                v-for="(spec, idx) in productSpecs"
                :key="idx"
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-5 border-b border-[#28232f]"
              >
                <span class="text-[#8c8791] font-medium tracking-[1.5px] uppercase text-xs">
                  {{ spec.label }}
                </span>

                <span class="text-[#f4f3f5] font-medium text-sm sm:text-base sm:text-right">
                  {{ spec.value }}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- 7. Where to buy + FAQ -->
    <section class="w-full py-20 sm:py-28 bg-[#0b0a0d]">
      <div class="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-20">
        <!-- Ready to Try -->
        <div class="text-center space-y-6">
          <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
            AVAILABILITY
          </span>
          <h2 class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl lg:text-6xl text-[#f4f3f5]">
            READY TO TRY LUMN?
          </h2>
          <p class="text-[#a5a2aa] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            LUMN Original Cold Brew is rolling out through select local retailers. Find the location nearest you.
          </p>
          <div class="pt-2 flex justify-center">
            <FancyButton />
          </div>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-6 border-t border-[#28232f] pt-16">
          <div class="text-center sm:text-left space-y-2 mb-8">
            <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
              QUESTIONS & ANSWERS
            </span>
            <h3 class="font-['Cormorant_Garamond'] text-2xl sm:text-4xl text-[#f4f3f5]">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>

          <div class="divide-y divide-[#28232f] border-t border-b border-[#28232f]">
            <div
              v-for="(faq, idx) in faqs"
              :key="idx"
              class="py-5"
            >
              <button
                class="w-full flex items-center justify-between text-left py-2 text-white font-medium hover:text-[#d68e49] transition-colors cursor-pointer"
                @click="toggleFaq(idx)"
              >
                <span class="text-base sm:text-lg font-['Cinzel'] tracking-wide">{{ faq.question }}</span>
                <UIcon
                  name="i-mdi-chevron-down"
                  class="size-5 text-[#d68e49] transition-transform duration-200 ml-4 flex-shrink-0"
                  :class="faq.isOpen ? 'rotate-180' : ''"
                />
              </button>
              <div
                v-show="faq.isOpen"
                class="pt-3 pb-2 text-sm sm:text-base text-[#a5a2aa] leading-relaxed"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
