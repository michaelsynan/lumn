<script
  setup
  lang="ts"
>
const activeTab = ref('technology')

const items = [
  {
    label: 'Technology',
    value: 'technology',
    slot: 'technology'
  },
  {
    label: 'Why Aurora Exists',
    value: 'why',
    slot: 'why'
  },
  {
    label: 'The Platform',
    value: 'platform',
    slot: 'platform'
  },
  {
    label: 'Proprietary',
    value: 'proprietary',
    slot: 'proprietary'
  }
]
</script>

<template>
  <section class="border-b border-[#28232f] bg-[#141217] px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
    <div class="mx-auto w-full max-w-6xl">

      <section class=" px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div class="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
          <img
            src="/what-is-lumn.png"
            alt="Aurora section mark"
            class="h-[90px] w-[140px] object-cover sm:h-[131px] sm:w-[206px]"
          >

          <p class="font-['Cormorant_Garamond'] text-3xl leading-tight text-[#f4f3f5] sm:text-4xl lg:text-5xl">
            Aurora Protocol powers <br /> next chapter of LUMN
          </p>

          <!-- <img
            src="/what-is-lumn-icon.svg"
            alt="Section divider"
            class="h-2 w-[300px] sm:w-[450px] lg:w-[600px]"
          >

          <p class="max-w-3xl text-sm leading-[1.8] text-[#a5a2aa] sm:text-base lg:text-lg">
            Built around the beverage-first standard that defines every bottle.
          </p> -->
        </div>
      </section>
      <UTabs
        v-model="activeTab"
        :items="items"
        variant="pill"
        color="neutral"
        :ui="{
          root: 'w-full',
          list: 'relative mx-auto grid w-full max-w-4xl grid-cols-2 sm:grid-cols-4 border border-[#2f2a38] bg-[#100e15] p-1 !rounded-none',
          indicator: 'hidden sm:block bg-[#f4f3f5] shadow-[0_8px_22px_rgba(0,0,0,0.32)] transition-all duration-300 ease-out !rounded-none',
          trigger: 'relative z-10 h-14 sm:h-11 justify-center px-2 py-2 text-center text-[10px] font-medium uppercase tracking-[0.12em] cursor-pointer !rounded-none transition-[height,opacity,color,background-color] duration-300 ease-out sm:px-3 sm:text-sm data-[state=active]:h-[58px] sm:data-[state=active]:h-[46px] data-[state=active]:opacity-100 data-[state=active]:bg-[#f4f3f5] sm:data-[state=active]:bg-transparent data-[state=active]:text-[#111014] data-[state=active]:hover:!text-[#111014] data-[state=inactive]:h-14 sm:data-[state=inactive]:h-11 data-[state=inactive]:opacity-70 data-[state=inactive]:text-[#a5a2aa] data-[state=inactive]:hover:opacity-100 data-[state=inactive]:hover:!text-[#d68e49]',
          label: 'whitespace-normal text-center leading-tight',
          content: 'mt-8 sm:mt-10'
        }"
      >
        <template #technology>
          <div class="border border-[#2a2532] bg-[#0f0d13] p-6 sm:p-8 lg:p-10">
            <AuroraTech />
          </div>
        </template>

        <template #why>
          <div class="border border-[#2a2532] bg-[#0f0d13] p-6 sm:p-8 lg:p-10">
            <AuroraWhy />
          </div>
        </template>

        <template #platform>
          <div class="border border-[#2a2532] bg-[#0f0d13] p-6 sm:p-8 lg:p-10">
            <AuroraPlatform />
          </div>
        </template>

        <template #proprietary>
          <div class="border border-[#2a2532] bg-[#0f0d13] p-6 sm:p-8 lg:p-10">
            <AuroraProprietary />
          </div>
        </template>
      </UTabs>
    </div>
  </section>
</template>

<style scoped></style>