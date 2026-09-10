<script
  setup
  lang="ts"
>
useSeoMeta({
  title: 'Aurora Protocol - LUMN',
  description: 'The patent-pending infusion platform bringing functional mushrooms to premium beverages without compromising flavor.'
})
</script>

<template>
  <div class="bg-[#0b0a0d] min-h-screen">
    <PageHero
      badge="The Technology Behind LUMN"
      title="Aurora Protocol"
      description="Built around the beverage-first standard that defines every bottle."
    />


    <!-- 
    <section class="border-b border-[#28232f] bg-[#0e0c12] px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div class="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
        <img
          src="/what-is-lumn.png"
          alt="Aurora section mark"
          class="h-[90px] w-[140px] object-cover sm:h-[131px] sm:w-[206px]"
        >

        <p class="font-['Cormorant_Garamond'] text-3xl leading-tight text-[#f4f3f5] sm:text-4xl lg:text-5xl">
          Aurora Protocol powers the next chapter of LUMN.
        </p>

        <img
          src="/what-is-lumn-icon.svg"
          alt="Section divider"
          class="h-2 w-[300px] sm:w-[450px] lg:w-[600px]"
        >

        <p class="max-w-3xl text-sm leading-[1.8] text-[#a5a2aa] sm:text-base lg:text-lg">
          Built around the beverage-first standard that defines every bottle.
        </p>
      </div>
    </section> -->

    <AuroraOverviewTabs />
    <AuroraApproach />
    <AuroraExperience />
    <AuroraLumn />
    <AuroraProtect />
    <AuroraNot />
    <AuroraNextGeneration />
    <PageCTA
      title="EXPERIENCE AURORA IN THE BOTTLE"
      description="Premium cold brew infused with Lion's Mane, Cordyceps, and Chaga through Aurora Protocol™."
      badge="LUMN Original Cold Brew"
      fancy-button
    />
  </div>


</template>

<style scoped></style>
