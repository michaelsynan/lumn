<template>
  <footer
    class="bg-[#0b0a0d] border-t border-[#28232f] flex flex-col gap-8 pb-12 pt-12 sm:pt-24 px-4 sm:px-8 lg:px-20 w-full"
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
          Flavor-first functional beverages powered by proprietary mushroom-infusion technology.
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
        <!-- <NuxtLink
          to="/difference"
          class="text-[#a5a2aa] text-sm hover:text-white transition-colors"
        >
          The LUMN Difference
        </NuxtLink> -->
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

      <!-- Social Column -->
      <div class="flex flex-col gap-4 w-full md:w-[405px]">
        <h3 class="text-[#f4f3f5] text-sm font-bold">
          Follow LUMN
        </h3>
        <p class="text-[#a5a2aa] text-xs leading-[1.6]">
          Stay connected for product drops, behind-the-scenes updates, and community highlights.
        </p>
        <div class="flex items-center gap-4 pt-1">
          <a
            href="https://instagram.com/lumnbeverages/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LUMN Instagram"
            class="inline-flex size-11 items-center justify-center rounded-full border border-[#3a3542] bg-[#141217] text-[#d68e49] transition-colors hover:border-[#d68e49] hover:bg-[#1a1820] hover:text-[#f7efe4]"
          >
            <UIcon
              name="i-mdi-instagram"
              class="size-6"
            />
            <span class="sr-only">Instagram</span>
          </a>

          <a
            href="https://facebook.com/lumnbeverages"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LUMN Facebook"
            class="inline-flex size-11 items-center justify-center rounded-full border border-[#3a3542] bg-[#141217] text-[#d68e49] transition-colors hover:border-[#d68e49] hover:bg-[#1a1820] hover:text-[#f7efe4]"
          >
            <UIcon
              name="i-mdi-facebook"
              class="size-6"
            />
            <span class="sr-only">Facebook</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Divider -->
    <div class="border-t border-[#28232f] w-full" />

    <!-- Footer Bottom -->
    <div class="grid w-full grid-cols-1 gap-3 text-xs text-[#a5a2aa] sm:grid-cols-3 sm:items-center">
      <p class="text-center sm:text-left">© 2026 LUMN Beverages, LLC. All rights reserved.</p>

      <div class="flex justify-center gap-6">
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

      <a
        href="https://formworkstudios.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-center font-mono text-[11px] uppercase tracking-[1.2px] text-[#9c98a6] transition-colors hover:text-[#d68e49] sm:text-right"
      >
        Website by Formwork Studios
      </a>
    </div>
  </footer>
</template>
