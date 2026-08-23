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
        <h3 class="flex-1 font-['Cormorant_Garamond'] font-bold text-white text-[22px]">
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

      <!-- Action Buttons -->
      <div class="flex gap-2">
        <!-- Add to Cart / Counter / Notify Me -->
        <div
          v-if="product.available"
          class="flex-1 h-12 relative"
        >
          <!-- Quantity Counter (shown when quantity > 0) -->
          <Transition
            name="counter"
            mode="out-in"
          >
            <div
              v-if="quantity > 0"
              key="counter"
              class="flex gap-2 h-full absolute inset-0"
            >
              <button
                class="cursor-pointer bg-white/10 border border-white/20 w-12 h-full flex items-center justify-center rounded-xl hover:bg-white/20 transition-all duration-200"
                @click="decrementQuantity"
              >
                <UIcon
                  name="i-mdi-minus"
                  class="text-white text-xl"
                />
              </button>
              <div class="flex-1 bg-white flex items-center justify-center rounded-xl transition-all duration-200">
                <span class="text-[#0b0b0f] text-sm font-bold">{{ quantity }}</span>
              </div>
              <button
                class="cursor-pointer bg-white/10 border border-white/20 w-12 h-full flex items-center justify-center rounded-xl hover:bg-white/20 transition-all duration-200"
                @click="incrementQuantity"
              >
                <UIcon
                  name="i-mdi-plus"
                  class="text-white text-xl"
                />
              </button>
            </div>
            <!-- Add to Cart Button (shown when quantity = 0) -->
            <button
              v-else
              key="add-button"
              class="cursor-pointer bg-white w-full h-full flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-200 absolute inset-0"
              @click="addToCart"
            >
              <span class="text-[#0b0b0f] text-sm font-bold">Add to Cart</span>
            </button>
          </Transition>
        </div>
        <button
          v-else
          class="cursor-pointer bg-transparent border border-white flex-1 h-12 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
        >
          <span class="text-white text-sm font-bold">Notify Me</span>
        </button>

        <!-- View Details Button (only shown when quantity is 0) -->
        <Transition name="arrow">
          <NuxtLink
            v-if="detailsRoute && quantity === 0"
            :to="detailsRoute"
            class="cursor-pointer bg-transparent border border-[#a1a1aa] w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white/5 hover:border-white transition-all duration-200 group"
          >
            <UIcon
              name="i-mdi-arrow-right"
              class="text-[#a1a1aa] text-xl group-hover:text-white group-hover:translate-x-0.5 transition-all"
            />
          </NuxtLink>
        </Transition>
      </div>
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
  detailsRoute?: string
}>()

const quantity = ref(0)

const addToCart = () => {
  quantity.value = 1
  // TODO: Add to cart logic
}

const incrementQuantity = () => {
  quantity.value++
  // TODO: Update cart logic
}

const decrementQuantity = () => {
  if (quantity.value > 0) {
    quantity.value--
    // TODO: Update cart logic
  }
}
</script>

<style scoped>
/* Counter transition - fade and scale */
.counter-enter-active,
.counter-leave-active {
  transition: all 0.25s ease;
}

.counter-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.counter-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Arrow transition - fade and slide */
.arrow-enter-active,
.arrow-leave-active {
  transition: all 0.25s ease;
}

.arrow-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.arrow-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
