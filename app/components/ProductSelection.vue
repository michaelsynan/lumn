<template>
  <section
    class="bg-[#0b0b0f] border-b border-t border-[#28232f] flex flex-col gap-14 overflow-hidden px-4 sm:px-8 lg:px-12 py-12 sm:py-24 w-full"
  >
    <div class="mx-auto w-full max-w-7xl">
      <!-- Product Grid -->
      <div class="flex flex-col md:flex-row gap-6 w-full">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- Shop All Link -->
      <NuxtLink
        to="/shop"
        class="cursor-pointer group text-[#d68e49] text-sm font-semibold text-center tracking-[1.12px] transition-all duration-300 flex items-center justify-center gap-1 pt-4 md:pt-10"
      >
        SHOP ALL PRODUCTS
        <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script
  setup
  lang="ts"
>
import { products } from '~/data/products'
</script>
