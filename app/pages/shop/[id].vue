<script setup lang="ts">
import { products } from '~/data/products'

const route = useRoute()
const productId = route.params.id as string

// Find the product by id
const product = computed(() => products.find(p => p.id === productId))

// If product not found, redirect to shop
if (!product.value) {
  navigateTo('/shop')
}

useSeoMeta({
  title: `${product.value?.name} - LUMN`,
  description: product.value?.description
})

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

<template>
  <div
    v-if="product"
    class="bg-[#0b0a0d] min-h-screen"
  >
    <!-- Product Detail Section -->
    <section class="px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div class="max-w-7xl mx-auto">
        <!-- Back Button -->
        <NuxtLink
          to="/shop"
          class="flex items-center gap-2 text-[#a5a2aa] hover:text-white transition-colors mb-8 w-fit"
        >
          <UIcon
            name="i-mdi-arrow-left"
            class="text-xl"
          />
          <span class="text-sm font-medium">Back to Shop</span>
        </NuxtLink>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Product Image -->
          <div class="bg-[#111114] border border-[#2a2a2e] rounded-[20px] overflow-hidden relative">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-auto object-cover"
            >
            <div
              v-if="product.badge === 'coming-soon'"
              class="absolute backdrop-blur-sm bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] flex items-center left-4 px-4 py-2 rounded-full top-4"
            >
              <span class="text-white text-xs font-bold tracking-[0.72px]">COMING SOON</span>
            </div>
            <div
              v-if="product.badge === 'best-seller'"
              class="absolute backdrop-blur-sm bg-[rgba(214,142,73,0.15)] border border-[#d68e49] flex items-center left-4 px-4 py-2 rounded-full top-4"
            >
              <span class="text-[#d68e49] text-xs font-bold tracking-[0.72px]">BEST SELLER</span>
            </div>
          </div>

          <!-- Product Info -->
          <div class="flex flex-col gap-6">
            <!-- Title & Rating -->
            <div class="flex flex-col gap-3">
              <h1 class="font-['Cormorant_Garamond'] text-[#f4f3f5] text-[40px] sm:text-[48px] leading-[1.1] tracking-[-1px]">
                {{ product.name }}
              </h1>
              <div
                v-if="product.rating"
                class="flex gap-2 items-center"
              >
                <div class="flex gap-1">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    class="size-5"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 0L10.3511 5.52786L16 6.38197L12 10.2721L12.9443 16L8 13.5279L3.05573 16L4 10.2721L0 6.38197L5.64886 5.52786L8 0Z"
                      :fill="i <= product.rating! ? '#FFD700' : '#3f3f46'"
                    />
                  </svg>
                </div>
                <span class="text-[#a5a2aa] text-sm">{{ product.rating }} / 5.0</span>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-[1px] w-full bg-[#28232f]" />

            <!-- Description -->
            <div class="flex flex-col gap-3">
              <h2 class="text-[#f4f3f5] text-lg font-semibold">
                About This Product
              </h2>
              <p class="text-[#a5a2aa] text-base leading-[1.7]">
                {{ product.description }}
              </p>
            </div>

            <!-- Divider -->
            <div class="h-[1px] w-full bg-[#28232f]" />

            <!-- Price & Actions -->
            <div class="flex flex-col gap-4">
              <div class="flex items-baseline gap-2">
                <span class="text-[#f4f3f5] text-3xl font-bold">
                  ${{ product.price.toFixed(2) }}
                </span>
                <span class="text-[#a5a2aa] text-sm">per pack</span>
              </div>

              <!-- Action Buttons -->
              <div
                v-if="product.available"
                class="w-full h-14 relative"
              >
                <Transition
                  name="counter"
                  mode="out-in"
                >
                  <!-- Quantity Counter (shown when quantity > 0) -->
                  <div
                    v-if="quantity > 0"
                    key="counter"
                    class="flex gap-3 h-14 absolute inset-0"
                  >
                    <button
                      class="cursor-pointer bg-white/10 border border-white/20 w-14 h-full flex items-center justify-center rounded-xl hover:bg-white/20 transition-all duration-200"
                      @click="decrementQuantity"
                    >
                      <UIcon
                        name="i-mdi-minus"
                        class="text-white text-2xl"
                      />
                    </button>
                    <div class="flex-1 bg-white flex items-center justify-center rounded-xl transition-all duration-200">
                      <span class="text-[#0b0b0f] text-lg font-bold">{{ quantity }}</span>
                    </div>
                    <button
                      class="cursor-pointer bg-white/10 border border-white/20 w-14 h-full flex items-center justify-center rounded-xl hover:bg-white/20 transition-all duration-200"
                      @click="incrementQuantity"
                    >
                      <UIcon
                        name="i-mdi-plus"
                        class="text-white text-2xl"
                      />
                    </button>
                  </div>
                  <!-- Add to Cart Button (shown when quantity = 0) -->
                  <button
                    v-else
                    key="add-button"
                    class="cursor-pointer bg-white w-full h-14 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-200 absolute inset-0"
                    @click="addToCart"
                  >
                    <span class="text-[#0b0b0f] text-base font-bold">Add to Cart</span>
                  </button>
                </Transition>
              </div>
              <button
                v-else
                class="cursor-pointer bg-transparent border-2 border-white w-full h-14 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
              >
                <span class="text-white text-base font-bold">Notify Me</span>
              </button>

              <!-- Product Features -->
              <div class="flex flex-col gap-3 mt-4">
                <div class="flex items-center gap-3 text-[#a5a2aa] text-sm">
                  <UIcon
                    name="i-mdi-check-circle"
                    class="text-[#d68e49] text-lg"
                  />
                  <span>Premium quality ingredients</span>
                </div>
                <div class="flex items-center gap-3 text-[#a5a2aa] text-sm">
                  <UIcon
                    name="i-mdi-check-circle"
                    class="text-[#d68e49] text-lg"
                  />
                  <span>Locally sourced & crafted</span>
                </div>
                <div class="flex items-center gap-3 text-[#a5a2aa] text-sm">
                  <UIcon
                    name="i-mdi-check-circle"
                    class="text-[#d68e49] text-lg"
                  />
                  <span>Aurora Protocol certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

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
</style>
