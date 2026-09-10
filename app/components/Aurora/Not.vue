<script
  setup
  lang="ts"
>
const notCards = [
  {
    title: 'NOT A FLAVOR',
    description: "Aurora isn't designed to make beverages taste like mushrooms.",
  },
  {
    title: 'NOT A SINGLE FORMULA',
    description:
      'It is a platform capable of supporting different mushroom combinations and beverage applications.',
  },
  {
    title: 'NOT THE BEVERAGE',
    description:
      'Aurora operates behind the experience. The finished drink remains the product consumers interact with.',
  },
]
</script>

<template>
  <section class="border-b border-[#28232f] bg-[#0e0c12] px-4 py-14 sm:px-8 sm:py-24 lg:px-12">
    <UContainer class="mx-auto w-full max-w-7xl">
      <div class="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <p class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">
          Clarifying Aurora
        </p>
        <h2 class="font-['Cormorant_Garamond'] text-[32px] tracking-[1.08px] text-[#f4f3f5] sm:text-[40px] lg:text-5xl">
          What Aurora Is Not
        </h2>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <UCard
          v-for="card in notCards"
          :key="card.title"
          variant="outline"
          :ui="{
            root: 'bg-[#0b0a0d] border-[#28232f]',
            body: 'p-7 flex flex-col gap-4',
          }"
        >
          <h3 class="font-['Cinzel'] text-sm font-bold tracking-[2px] text-[#d68e49] uppercase sm:text-base">
            {{ card.title }}
          </h3>

          <p class="text-sm leading-[1.75] text-[#c9c5cf] sm:text-base">
            {{ card.description }}
          </p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<style scoped></style>
