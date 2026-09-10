<script
  setup
  lang="ts"
>
const sensoryCards = [
  {
    title: 'FLAVOR',
    icon: 'i-mdi-silverware-fork-knife',
    description:
      'Designed to minimize disruption to the intended flavor profile of the finished beverage.',
  },
  {
    title: 'AROMA',
    icon: 'i-mdi-weather-windy',
    description:
      "Developed with the goal of allowing the beverage's native aroma to remain in the foreground.",
  },
  {
    title: 'APPEARANCE',
    icon: 'i-mdi-eye-outline',
    description:
      'Designed for integration without unnecessarily redefining the visual character of the drink.',
  },
]
</script>

<template>
  <section class="border-b border-t border-[#28232f] bg-[#141217] px-4 py-14 sm:px-8 sm:py-24 lg:px-12">
    <UContainer class="mx-auto w-full max-w-7xl">
      <div class="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <p class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">
          Aurora Protocol
        </p>
        <h2 class="font-['Cormorant_Garamond'] text-[32px] tracking-[1.08px] text-[#f4f3f5] sm:text-[40px] lg:text-5xl">
          Designed Around The Sensory Experience
        </h2>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <UCard
          v-for="card in sensoryCards"
          :key="card.title"
          variant="outline"
          :ui="{
            root: 'bg-[#0b0a0d] !ring-1 !ring-[#16131b] !divide-[#16131b]',
            body: 'p-7 flex flex-col gap-5',
          }"
        >
          <div class="flex size-14 items-center justify-center bg-[rgba(214,142,73,0.15)]">
            <UIcon
              :name="card.icon"
              class="size-7 text-[#d68e49]"
            />
          </div>

          <h3 class="font-['Cormorant_Garamond'] text-3xl leading-none text-[#f4f3f5]">
            {{ card.title }}
          </h3>

          <p class="text-sm leading-[1.7] text-[#a5a2aa]">
            {{ card.description }}
          </p>
        </UCard>
      </div>

      <p class="mx-auto mt-10 max-w-3xl text-center text-base leading-[1.8] text-[#d7d3dc] sm:text-lg">
        Aurora doesn't exist to turn beverages into mushroom beverages.
        It exists to make functional mushrooms work within beverages people already want to drink.
      </p>
    </UContainer>
  </section>
</template>
