<script
  setup
  lang="ts"
>
import { products } from '~/data/products'

useSeoMeta({
  title: 'Shop - LUMN',
  description: 'Shop premium functional beverages from LUMN. Mushroom-infused drinks without the mushroom taste.'
})
</script>

<template>
  <div class="bg-[#0b0a0d] min-h-screen">
    <PageHero
      badge="Premium Selection"
      title="SHOP LUMN"
      description="Discover our collection of functional mushroom-infused beverages. Each crafted to deliver uncompromising flavor with the benefits you deserve."
    />

    <!-- Products Section -->
    <section class="px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="flex flex-col gap-3 mb-12">
          <!-- <p class="font-semibold text-[#d68e49] text-[13px] tracking-[3px] uppercase">
            Our Collection
          </p>
          <h2 class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-[32px] sm:text-[40px] lg:text-5xl">
            Available Products
          </h2> -->
        </div>

        <!-- Products Grid -->
        <div class="flex flex-col md:flex-row gap-6 w-full">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            :details-route="`/shop/${product.id}`"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
