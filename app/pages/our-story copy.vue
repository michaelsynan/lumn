<script
  setup
  lang="ts"
>
useSeoMeta({
  title: 'Our Story - LUMN',
  description: 'Built Around the Beverage. Discover the story, philosophy, and Aurora Protocol behind LUMN functional beverages.'
})
</script>

<template>
  <div class="bg-[#0b0a0d] min-h-screen text-[#f4f3f5]">
    <!-- Header / Hero -->
    <PageHero
      badge="Our Story"
      title="BUILT AROUND THE BEVERAGE"
      description="LUMN began with a simple belief: functional ingredients should never come at the expense of the drink itself."
    />

    <!-- Section 1: The Foundation / Built Around the Beverage -->
    <section class="py-20 sm:py-28 border-b border-[#28232f] bg-[#0b0a0d] relative overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none opacity-15"
        style="background: radial-gradient(ellipse 900px 500px at 50% 50%, rgba(214,142,73,0.2) 0%, rgba(11,10,13,0) 100%)"
      />
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-8">
        <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
          OUR FOUNDING PRINCIPLE
        </span>

        <h2 class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl lg:text-6xl text-[#f4f3f5] leading-tight">
          The Beverage Comes First.
        </h2>

        <p class="text-[#cfccd4] text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
          Too often, functional beverages ask consumers to accept an unfamiliar taste, medicinal profile, or compromised
          drinking experience in exchange for what has been added to the bottle. We wanted to approach it differently.
        </p>

        <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          The coffee should taste like coffee. The flavor should feel intentional. And the ingredients behind it should
          support the product without overpowering it. That philosophy became the foundation for everything we build.
        </p>

        <div class="pt-4">
          <div
            class="inline-block py-3 px-6 rounded-full border border-[#d68e49]/30 bg-[#d68e49]/10 text-[#d68e49] font-['Cinzel'] font-bold text-sm tracking-[2px] uppercase"
          >
            Flavor-First Philosophy
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Flavor First & The Problem We Wanted to Solve -->
    <section class="py-20 sm:py-32 border-b border-[#28232f] bg-[#0e0c12]">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2">

          <!-- Flavor First -->
          <div class="lg:pr-24 pb-14 lg:pb-0 space-y-6">
            <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
              Flavor First
            </span>

            <h3 class="font-['Cormorant_Garamond'] text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#f4f3f5]">
              Functional should still taste exceptional.
            </h3>

            <p class="text-[#a5a2aa] text-base leading-relaxed">
              From the beginning, LUMN has been developed around one standard: if we wouldn’t want to drink the beverage
              on its own merits, it doesn’t belong in a LUMN bottle.
            </p>

            <ul class="pt-2 space-y-3 text-sm sm:text-base text-[#cfccd4]">
              <li class="group relative border-b border-[#28232f] pb-3 pl-0 hover:pl-7 transition-all duration-300">
                <span
                  class="absolute left-0 -translate-x-4 opacity-0 text-[#d68e49] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                >
                  »
                </span>
                Not masking unpleasant flavors.
              </li>

              <li class="group relative border-b border-[#28232f] pb-3 pl-0 hover:pl-7 transition-all duration-300">
                <span
                  class="absolute left-0 -translate-x-4 opacity-0 text-[#d68e49] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                >
                  »
                </span>
                Not asking consumers to acquire a taste for something medicinal.
              </li>

              <li class="group relative border-b border-[#28232f] pb-3 pl-0 hover:pl-7 transition-all duration-300">
                <span
                  class="absolute left-0 -translate-x-4 opacity-0 text-[#d68e49] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                >
                  »
                </span>
                Not treating flavor as an afterthought.
              </li>
            </ul>

            <p class="font-['Cinzel'] text-[#d68e49] font-bold text-sm tracking-wider uppercase pt-2">
              The drink has to stand on its own.
            </p>
          </div>

          <!-- The Challenge -->
          <div class="lg:pl-24 pt-14 lg:pt-0 lg:border-l border-[#28232f] space-y-6">
            <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
              The Challenge
            </span>

            <h3 class="font-['Cormorant_Garamond'] text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#f4f3f5]">
              The problem we wanted to solve.
            </h3>

            <p class="text-[#a5a2aa] text-base leading-relaxed">
              Functional mushrooms have increasingly found their way into coffee, powders, supplements, and wellness
              beverages. But the same challenge kept appearing:
            </p>

            <blockquote
              class="border-l border-[#d68e49] pl-5 py-1 italic text-[#f4f3f5] font-['Cormorant_Garamond'] text-xl sm:text-2xl leading-relaxed"
            >
              “How do you incorporate functional mushrooms without changing what people already love about the
              beverage?”
            </blockquote>

            <p class="text-[#a5a2aa] text-base leading-relaxed">
              That question ultimately led to the development of the Aurora Protocol™ — our proprietary infusion
              platform created specifically to preserve the intended flavor, aroma, and character of the beverage.
            </p>
          </div>

        </div>
      </div>
    </section>
    <!-- Section 3: From Experiment to Beverage Company (Visual Callout) -->
    <section
      class=" border-b border-[#28232f] bg-[url('/functional-beverages.webp')] bg-cover bg-center bg-fixed text-white relative bg-black/80"
    >
      <div class="py-20 sm:py-32 bg-black/80 h-full">
        <div class=" px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div class="max-w-4xl mx-auto text-center space-y-8">
            <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
              EVOLUTION
            </span>

            <h2 class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl lg:text-6xl text-[#f4f3f5] leading-tight">
              From Experiment to Beverage Company
            </h2>

            <p class="text-[#cfccd4] text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
              What began as small-batch experimentation evolved into a broader vision for functional beverages.
              Different beverages were tested. Different formulations were explored. And one principle remained
              consistent throughout the process:
            </p>

            <div class="py-6 border-t border-b border-[#d68e49]/30 max-w-2xl mx-auto">
              <p class="font-['Cinzel'] text-xl sm:text-2xl text-[#d68e49] tracking-wider uppercase font-semibold">
                The functional component should complement the experience, not become the experience.
              </p>
            </div>

            <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              LUMN Original Cold Brew is the clearest expression of that philosophy today — rich, smooth cold brew
              infused with Lion’s Mane, Cordyceps, and Chaga through Aurora Protocol™. It is the first major step in a
              much larger vision.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: More Than Coffee & Built Small. Designed to Grow. -->
    <section class="py-20 sm:py-32 border-b border-[#28232f] bg-[#0b0a0d]">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2">

          <!-- More Than Coffee -->
          <div class="lg:pr-24 pb-14 lg:pb-0 space-y-6">
            <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
              Broader Vision
            </span>

            <h2 class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl text-[#f4f3f5]">
              More Than Coffee
            </h2>

            <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed">
              LUMN is being built as a beverage company. Cold brew is where our focus is today, but the idea behind LUMN
              is intentionally broader. Aurora Protocol™ was developed as a platform capable of supporting different
              beverage categories while maintaining the same flavor-first philosophy.
            </p>

            <div class="flex items-center justify-between w-full pt-2 text-center">
              <span class="font-['Cinzel'] text-xs sm:text-sm font-bold text-[#f4f3f5] tracking-wider uppercase">
                New Beverages
              </span>

              <span class="text-[#d68e49] text-sm">/</span>

              <span class="font-['Cinzel'] text-xs sm:text-sm font-bold text-[#f4f3f5] tracking-wider uppercase">
                New Formats
              </span>

              <span class="text-[#d68e49] text-sm">/</span>

              <span class="font-['Cinzel'] text-xs sm:text-sm font-bold text-[#f4f3f5] tracking-wider uppercase">
                New Occasions
              </span>
            </div>

            <p class="text-[#d68e49] font-['Cinzel'] text-sm sm:text-base font-semibold tracking-wide pt-2">
              Real beverages. Functional mushrooms. No compromise on the drinking experience.
            </p>
          </div>

          <!-- Built Small. Designed to Grow. -->
          <div class="lg:pl-24 pt-14 lg:pt-0 lg:border-l border-[#28232f] space-y-6">
            <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
              Our Roots
            </span>

            <h2 class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl text-[#f4f3f5]">
              Built Small. <br class="hidden sm:inline">Designed to Grow.
            </h2>

            <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed">
              LUMN began through hands-on, small-batch development in Pennsylvania — testing formulations, refining the
              process, producing real beverages, and learning directly from the people drinking them.
            </p>

            <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed">
              That early-stage approach remains important to how we think about the brand. We would rather build
              deliberately than rush something to market simply because it fits a trend.
            </p>

            <ul class="space-y-0 border-t border-[#28232f] text-sm sm:text-base text-[#cfccd4]">
              <li class="py-3 border-b border-[#28232f]">
                Every product has to earn its place.
              </li>

              <li class="py-3 border-b border-[#28232f]">
                Every formulation has to make sense.
              </li>

              <li class="py-3 border-b border-[#28232f]">
                Every beverage has to taste like something people genuinely choose to drink again.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 5: The Technology Behind LUMN (Aurora Protocol Teaser) -->
    <section class="py-20 sm:py-28 border-b border-[#28232f] bg-[#0e0c12] relative overflow-hidden">
      <div
        class="absolute inset-0 pointer-events-none opacity-20"
        style="background: radial-gradient(ellipse 900px 500px at 50% 50%, rgba(214,142,73,0.18) 0%, rgba(11,10,13,0) 100%)"
      />
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
          THE TECHNOLOGY BEHIND LUMN
        </span>
        <h2 class="font-['Cormorant_Garamond'] text-3xl sm:text-5xl lg:text-6xl text-[#f4f3f5]">
          Aurora Protocol™
        </h2>
        <p class="text-[#cfccd4] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Every LUMN beverage is powered by Aurora Protocol™, our proprietary, patent-pending mushroom-infusion platform
          designed to integrate functional mushrooms without compromising the intended beverage experience.
        </p>
        <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Aurora is what allows us to think beyond conventional mushroom beverages and toward an entire generation of
          flavor-first functional drinks.
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

    <!-- Section 6: Where We're Going -->
    <section class="py-24 sm:py-32 border-b border-[#28232f] bg-[#0b0a0d]">
      <div class="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 text-center">

        <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">
          Where We're Going
        </span>

        <h2 class="mt-3 font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl text-[#f4f3f5]">
          WHERE WE’RE GOING
        </h2>

        <div class="mt-12 space-y-2">
          <p class="text-[#cfccd4] text-lg sm:text-xl leading-relaxed pb-10">
            We believe functional beverages can be better.
          </p>

          <p class="text-[#f4f3f5] text-2xl sm:text-3xl font-['Cormorant_Garamond']">
            More familiar.
          </p>

          <p class="text-[#f4f3f5] text-2xl sm:text-3xl font-['Cormorant_Garamond']">
            More enjoyable.
          </p>

          <p class="text-[#f4f3f5] text-2xl sm:text-3xl font-['Cormorant_Garamond']">
            More thoughtfully made.
          </p>

          <p class="text-[#f4f3f5] text-2xl sm:text-3xl font-['Cormorant_Garamond']">
            And far less defined by the taste of the functional ingredients themselves.
          </p>
        </div>

        <div class="mt-14 pt-8 border-t border-[#28232f]">
          <p class="text-[#a5a2aa] text-base sm:text-lg leading-relaxed">
            LUMN is being built around that belief.
          </p>

          <p class="mt-3 text-[#d68e49] font-['Cinzel'] text-sm sm:text-base font-semibold tracking-wider uppercase">
            One beverage at a time.
          </p>
        </div>

      </div>
    </section>
    <!-- Bottom CTA: PageCTA with Experience LUMN -->
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
        <span class="text-xs font-semibold tracking-[3px] text-[#d68e49] uppercase">EXPERIENCE LUMN</span>
        <h2 class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-3xl sm:text-5xl lg:text-6xl tracking-tight">
          Start with Original Cold Brew.
        </h2>
        <p class="text-[#a5a2aa] text-base sm:text-lg max-w-xl leading-relaxed">
          Premium cold brew coffee infused with Lion’s Mane, Cordyceps, and Chaga — powered by Aurora Protocol™.
        </p>
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <FancyButton />
          <NuxtLink
            to="/functional-beverages/cold-brew"
            class="cursor-pointer group text-[#d68e49] text-sm font-semibold tracking-[1.12px] uppercase transition-all duration-300 flex items-center gap-1.5"
          >
            DISCOVER COLD BREW
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
