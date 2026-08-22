<template>
  <div
    class="bg-[#111114] border border-[#2a2a2e] flex flex-1 flex-col overflow-hidden rounded-[20px] shadow-[0px_10px_24px_-8px_rgba(0,0,0,0.25)]"
  >
    <!-- Product Image -->
    <div class="bg-[#0b0b0f] flex flex-col h-[600px] overflow-hidden relative rounded-t-[20px]">
      <img
        :src="product.image"
        :alt="product.name"
        class="h-full w-full object-cover"
      >
      <div
        v-if="product.badge === 'coming-soon'"
        class="absolute backdrop-blur-sm bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] flex items-center left-3 px-3 py-2 rounded-full top-3"
      >
        <span class="text-white text-xs font-bold tracking-[0.72px]">COMING SOON</span>
      </div>
    </div>

    <!-- Product Content -->
    <div class="flex flex-col gap-4 p-5">
      <!-- Title Row -->
      <div class="flex items-center justify-between">
        <h3 class="flex-1 font-['Cinzel'] font-bold text-white text-[22px]">
          {{ product.name }}
        </h3>
        <div
          v-if="product.rating"
          class="flex gap-1.5 items-center"
        >
          <svg
            class="size-4"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 0L10.3511 5.52786L16 6.38197L12 10.2721L12.9443 16L8 13.5279L3.05573 16L4 10.2721L0 6.38197L5.64886 5.52786L8 0Z"
              fill="#FFD700"
            />
          </svg>
          <span class="text-white text-sm font-semibold">{{ product.rating }}</span>
        </div>
      </div>

      <!-- Description -->
      <p class="text-[#a1a1aa] text-sm leading-[1.5]">
        {{ product.description }}
      </p>

      <!-- Meta Row -->
      <div class="flex items-center justify-between">
        <span class="text-white text-sm font-semibold">
          ${{ product.price.toFixed(2) }}
        </span>
        <div
          v-if="product.badge === 'best-seller'"
          class="backdrop-blur-sm bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] flex items-center px-2.5 py-1.5 rounded-full"
        >
          <span class="text-white text-xs font-bold tracking-[0.72px]">BEST SELLER</span>
        </div>
      </div>

      <!-- Action Button -->
      <button
        v-if="product.available"
        class="cursor-pointer bg-white flex h-12 items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
      >
        <span class="text-[#0b0b0f] text-sm font-bold">Add to Cart</span>
      </button>
      <button
        v-else
        class="cursor-pointer bg-transparent border border-white flex h-12 items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
      >
        <span class="text-white text-sm font-bold">Notify Me</span>
      </button>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import type { Product } from '~/data/products'

defineProps<{
  product: Product
}>()
</script>
