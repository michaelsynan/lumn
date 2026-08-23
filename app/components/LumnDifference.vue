<template>
  <section
    class="bg-[#141217] border-b border-t border-[#28232f] flex flex-col gap-14 px-4 sm:px-8 lg:px-12 py-12 sm:py-24 w-full"
  >
    <div class="mx-auto w-full max-w-7xl">
      <!-- Section Header -->
      <div class="flex flex-col gap-4 items-center text-center">
        <p class="font-semibold text-[#d68e49] text-[13px] tracking-[3px] uppercase">
          What sets us apart
        </p>
        <h2
          class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-[32px] sm:text-[40px] lg:text-5xl !pb-10 sm:pb-2 tracking-[1.08px]"
        >
          The LUMN Difference
        </h2>
      </div>

      <!-- Difference Cards Grid -->
      <div class="flex flex-col md:flex-row gap-8 w-full">
        <!-- Card 1 -->
        <div class="bg-[#0b0a0d] border border-[#28232f] flex flex-1 flex-col gap-6 p-8 rounded-2xl">
          <div class="bg-[rgba(214,142,73,0.15)] flex items-center justify-center rounded-xl size-14">
            <img
              src="/difference-icon-1.svg"
              alt="Bottle icon"
              class="size-7"
            >
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="font-['Cormorant_Garamond'] font-medium text-[#f4f3f5] text-[28px]">
              Real Beverages
            </h3>
            <p class="font-semibold text-[#d68e49] text-xs tracking-[1px] uppercase">
              Flavor First
            </p>
          </div>
          <p class="text-[#a5a2aa] text-sm leading-[1.6]">
            Beverage quality comes first. Every LUMN product is crafted to stand on its own - no compromises, no
            aftertaste.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-[#0b0a0d] border border-[#28232f] flex flex-1 flex-col gap-6 p-8 rounded-2xl">
          <div class="bg-[rgba(214,142,73,0.15)] flex items-center justify-center rounded-xl size-14">
            <img
              src="/difference-icon-2.svg"
              alt="Mushroom icon"
              class="size-7"
            >
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="font-['Cormorant_Garamond'] font-medium text-[#f4f3f5] text-[28px]">
              Functional Mushrooms
            </h3>
            <p class="font-semibold text-[#d68e49] text-xs tracking-[1px] uppercase">
              Thoughtfully Selected
            </p>
          </div>
          <p class="text-[#a5a2aa] text-sm leading-[1.6]">
            Thoughtfully selected mushroom blends chosen for their functional properties and compatibility with each
            beverage.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-[#0b0a0d] border border-[#28232f] flex flex-1 flex-col gap-6 p-8 rounded-2xl">
          <div class="bg-[rgba(214,142,73,0.15)] flex items-center justify-center rounded-xl size-14">
            <img
              src="/difference-icon-3.svg"
              alt="Beaker icon"
              class="size-7"
            >
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="font-['Cormorant_Garamond'] font-medium text-[#f4f3f5] text-[28px]">
              Proprietary Infusion
            </h3>
            <p class="font-semibold text-[#d68e49] text-xs tracking-[1px] uppercase">
              Undetectable Integration
            </p>
          </div>
          <p class="text-[#a5a2aa] text-sm leading-[1.6]">
            Designed to preserve the beverage's intended sensory profile - flavor, aroma, and appearance.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
</script>
