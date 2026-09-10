<template>
  <div class="aurora-cta-hover group relative overflow-hidden">
    <PageCTA
      badge="The Technology Behind LUMN"
      title="Aurora Protocol"
      description="Every LUMN beverage is powered by Aurora Protocol - our proprietary, patent-pending mushroom-infusion platform designed to integrate functional mushrooms without compromising the intended flavor, aroma, or appearance of the beverage."
    />

    <div
      class="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    >
      <div class="absolute inset-0 bg-linear-to-b from-[#d68e49]/6 via-transparent to-[#d68e49]/10" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(214,142,73,0.18),transparent_55%)]" />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
</script>

<style scoped>
.aurora-cta-hover :deep(section) {
  transition: transform 450ms ease, filter 450ms ease, box-shadow 450ms ease;
}

.aurora-cta-hover:hover :deep(section) {
  transform: translateY(-4px);
  filter: saturate(1.08) brightness(1.04);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
}
</style>
