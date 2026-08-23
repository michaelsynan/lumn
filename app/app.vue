<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'LUMN - Functional Beverages'
const description = 'Premium, mushroom-infused beverages. Functional beverages without the functional flavor.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="bg-[#0b0a0d] min-h-screen">
    <NavBar />

    <main class="pt-[88px]">
      <NuxtPage :transition="{
        name: 'page',
        mode: 'out-in'
      }" />
    </main>

    <FooterSection />
  </div>
</template>
