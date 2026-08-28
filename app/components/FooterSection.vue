<template>
  <footer
    class="bg-[#0b0a0d] border-t border-[#28232f] flex flex-col gap-20 pb-12 pt-12 sm:pt-24 px-4 sm:px-8 lg:px-20 w-full"
  >
    <!-- Footer Upper -->
    <div class="flex flex-col md:flex-row items-start justify-between w-full gap-8 md:gap-4">
      <!-- Brand Column -->
      <div class="flex flex-col gap-6 w-full md:w-[405px]">
        <img
          src="/footer-logo.png"
          alt="LUMN Logo"
          class="h-14 w-[123px]"
        >
        <p class="text-[#a5a2aa] text-sm leading-[1.6]">
          Premium adaptogenic beverages crafted for a conscious tomorrow. Enjoy cold, responsibly, and with absolute
          clarity.
        </p>
      </div>

      <!-- Shop Column -->
      <div class="flex flex-col gap-4 w-full md:w-[187px]">
        <h3 class="text-[#d68e49] text-xs font-bold tracking-[1px] uppercase">
          Shop
        </h3>
        <!-- <NuxtLink
          to="/shop/hard-cider"
          class="text-[#a5a2aa] text-sm hover:text-white transition-colors"
        >
          LUMN Hard Cider
        </NuxtLink> -->
        <NuxtLink
          to="/functional-beverages/cold-brew"
          class="text-[#a5a2aa] text-sm hover:text-white transition-colors"
        >
          Cold Brew
        </NuxtLink>
      </div>

      <!-- Learn Column -->
      <div class="flex flex-col gap-4 w-full md:w-[187px]">
        <h3 class="text-[#d68e49] text-xs font-bold tracking-[1px] uppercase">
          Learn
        </h3>
        <NuxtLink
          to="/our-story"
          class="text-[#a5a2aa] text-sm hover:text-white transition-colors"
        >
          Our Story
        </NuxtLink>
        <NuxtLink
          to="/aurora-protocol"
          class="text-[#a5a2aa] text-sm hover:text-white transition-colors"
        >
          Aurora Protocol
        </NuxtLink>
        <NuxtLink
          to="/difference"
          class="text-[#a5a2aa] text-sm hover:text-white transition-colors"
        >
          The LUMN Difference
        </NuxtLink>
        <NuxtLink
          to="/wholesale-retailers"
          class="text-[#a5a2aa] text-sm hover:text-white transition-colors"
        >
          Wholesale & Retailers
        </NuxtLink>
        <!-- <NuxtLink
          to="/blog"
          class="text-[#a5a2aa] text-sm hover:text-white transition-colors"
        >
          Blog
        </NuxtLink> -->
      </div>

      <!-- Newsletter Column -->
      <div class="flex flex-col gap-4 w-full md:w-[405px]">
        <h3 class="text-[#f4f3f5] text-sm font-bold">
          Stay Illuminated
        </h3>
        <p class="text-[#a5a2aa] text-xs">
          Join our mailing list for exclusive offers, recipes and more.
        </p>
        <form
          class="bg-[#141217] border border-[#28232f] flex h-12 items-center justify-between pl-4 pr-2 rounded-lg"
          @submit.prevent="handleSubmit"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Enter email address"
            class="bg-transparent text-[#a5a2aa] text-sm outline-none flex-1"
          >
          <button
            type="submit"
            class="cursor-pointer bg-[#d68e49] flex items-center justify-center rounded-md size-8 hover:bg-[#d68e49]/90 transition-colors"
          >
            <svg
              class="size-4"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Footer Divider -->
    <div class="border-t border-[#28232f] w-full" />

    <!-- Footer Bottom -->
    <div class="flex items-center justify-between text-[#a5a2aa] text-xs w-full">
      <p>© 2026 LUMN Beverages Inc. All rights reserved.</p>
      <div class="flex gap-6">
        <NuxtLink
          to="/terms"
          class="hover:text-white transition-colors"
        >
          Terms of Service
        </NuxtLink>
        <NuxtLink
          to="/privacy"
          class="hover:text-white transition-colors"
        >
          Privacy Policy
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script
  setup
  lang="ts"
>
const email = ref('')

const handleSubmit = () => {
  console.log('Email submitted:', email.value)
  // Handle newsletter signup
  email.value = ''
}
</script>
