<template>
  <nav
    class="bg-[#0b0a0d] border-b border-[#28232f] flex h-[88px] items-center justify-between px-4 sm:px-8 lg:px-20 w-full fixed top-0 left-0 z-50 transition-transform duration-300"
    :class="isVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    <!-- Logo -->
    <NuxtLink
      to="/"
      class="flex gap-2 sm:gap-4 items-center"
    >
      <img
        src="/nav-logo.png"
        alt="LUMN Logo"
        class="h-[57px] w-6 object-cover"
      >
      <span class="font-['Cinzel'] text-2xl text-white">Lumn</span>
    </NuxtLink>

    <!-- Nav Links (Desktop) -->
    <div class="hidden md:flex gap-6 lg:gap-10 items-center text-[#a5a2aa] text-sm font-medium tracking-[0.5px]">
      <NuxtLink
        to="/shop"
        class="hover:text-white transition-colors"
      >
        Shop
      </NuxtLink>
      <NuxtLink
        to="/our-story"
        class="hover:text-white transition-colors"
      >
        Our Story
      </NuxtLink>
      <NuxtLink
        to="/aurora-protocol"
        class="hover:text-white transition-colors"
      >
        Aurora Protocol
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="hover:text-white transition-colors"
      >
        Contact
      </NuxtLink>
    </div>

    <!-- Right Actions -->
    <div class="flex gap-4 sm:gap-8 items-center">
      <button class="cursor-pointer hover:opacity-80 transition-opacity">
        <UIcon
          name="i-mdi-account"
          class="text-[#d68e49] text-[24px]"
        />
      </button>
      <button class="cursor-pointer hover:opacity-80 transition-opacity">
        <UIcon
          name="i-mdi-shopping-cart"
          class="text-[#d68e49] text-[24px]"
        />
      </button>
      <!-- Mobile Menu Button -->
      <button
        class="md:hidden cursor-pointer hover:opacity-80 transition-opacity"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <UIcon
          :name="mobileMenuOpen ? 'i-mdi-close' : 'i-mdi-menu'"
          class="text-[#d68e49] text-[28px]"
        />
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <Transition name="mobile-menu">
    <div
      v-if="mobileMenuOpen"
      class="md:hidden fixed top-[88px] left-0 w-full bg-[#0b0a0d] border-b border-[#28232f] z-40 overflow-hidden"
    >
      <div class="flex flex-col px-4 py-6 gap-4">
        <NuxtLink
          to="/shop"
          class="text-[#a5a2aa] hover:text-white transition-colors py-3 text-base font-medium tracking-[0.5px]"
          @click="mobileMenuOpen = false"
        >
          Shop
        </NuxtLink>
        <NuxtLink
          to="/our-story"
          class="text-[#a5a2aa] hover:text-white transition-colors py-3 text-base font-medium tracking-[0.5px]"
          @click="mobileMenuOpen = false"
        >
          Our Story
        </NuxtLink>
        <NuxtLink
          to="/aurora-protocol"
          class="text-[#a5a2aa] hover:text-white transition-colors py-3 text-base font-medium tracking-[0.5px]"
          @click="mobileMenuOpen = false"
        >
          Aurora Protocol
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-[#a5a2aa] hover:text-white transition-colors py-3 text-base font-medium tracking-[0.5px]"
          @click="mobileMenuOpen = false"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script
  setup
  lang="ts"
>
const isVisible = ref(true)
const mobileMenuOpen = ref(false)
let lastScrollY = 0
let ticking = false

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // If at the top of page, always show navbar
  if (currentScrollY < 10) {
    isVisible.value = true
    lastScrollY = currentScrollY
    return
  }

  // Scrolling down - hide navbar
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isVisible.value = false
  }
  // Scrolling up - show navbar
  else if (currentScrollY < lastScrollY) {
    isVisible.value = true
  }

  lastScrollY = currentScrollY
}

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
