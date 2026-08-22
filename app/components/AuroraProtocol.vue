<template>
  <section
    class="flex flex-col items-center px-4 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-[140px] relative w-full overflow-hidden"
    style="background: radial-gradient(ellipse 1600px 601px at 50% 50%, rgba(26,16,32,1) 0%, rgba(11,10,13,1) 100%)"
  >
    <!-- Aurora Glow Effect -->
    <div
      class="absolute h-full left-0 top-0 w-full pointer-events-none"
      style="background: radial-gradient(ellipse 60% 90% at 50% 20%, rgba(214,142,73,0.15) 0%, rgba(214,142,73,0.05) 30%, rgba(214,142,73,0) 70%)"
    />

    <!-- Content -->
    <div class="flex flex-col gap-8 items-center relative z-10 w-full max-w-[760px]">
      <!-- Top Rule -->
      <img
        src="/aurora-icon-1.svg"
        alt="Top Rule"
        class="h-[8.485px] w-[250px] sm:w-[400px]"
      >

      <!-- Subtitle -->
      <p class="font-semibold text-[#d68e49] text-[11px] text-center tracking-[3px] uppercase">
        The Technology Behind LUMN
      </p>

      <!-- Title -->
      <h2
        class="font-['Cinzel'] text-[#f4f3f5] text-[36px] sm:text-[48px] lg:text-[64px] text-center leading-[1.05] tracking-[-1px]"
      >
        Aurora Protocol
      </h2>

      <!-- Bottom Rule -->
      <img
        src="/aurora-icon-2.svg"
        alt="Bottom Rule"
        class="h-[8.485px] w-[250px] sm:w-[400px]"
      >

      <!-- Description -->
      <p class="text-[#a5a2aa] text-base lg:text-lg text-center leading-[1.75] px-4">
        Every LUMN beverage is powered by Aurora Protocol - our proprietary, patent-pending mushroom-infusion platform.
        The result: functional ingredients, fully integrated, completely undetectable.
      </p>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
</script>
