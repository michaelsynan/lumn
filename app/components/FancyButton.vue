<template>
  <NuxtLink
    to="/find-lumn"
    class="cursor-pointer bg-[#1e1e1e] border border-[#d68e49] flex items-center justify-between p-1 relative rounded-full overflow-visible hover:bg-[#d68e49]/10 transition-colors duration-300 w-[186px] h-[46px]"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <!-- Single Icon Circle that slides through the button -->
    <div
      class="absolute border border-[#d68e49] flex items-center justify-center rounded-full size-[38px] z-10 transition-colors duration-300"
      :class="[
        isAnimating && 'animate-spin-coin',
        isHovered ? 'bg-[#1e1e1e]' : 'bg-[rgba(214,142,73,0.12)]'
      ]"
      :style="{
        left: isHovered ? 'calc(100% - 42px)' : '4px',
        transition: 'left 500ms ease-in-out, background-color 300ms ease'
      }"
    >
      <!-- Logo or Arrow with transition -->
      <Transition
        name="icon-fade"
        mode="out-in"
      >
        <img
          v-if="!isHovered"
          key="logo"
          src="/button-icon.png"
          alt="Lumn Logo"
          class="h-[34px] w-[18px]"
          style="filter: brightness(1.2);"
        >
        <svg
          v-else
          key="arrow"
          class="size-4 text-white"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.78033 1.21967C8.48744 0.926777 8.01256 0.926777 7.71967 1.21967C7.42678 1.51256 7.42678 1.98744 7.71967 2.28033L12.9393 7.5H1.5C1.08579 7.5 0.75 7.83579 0.75 8.25C0.75 8.66421 1.08579 9 1.5 9H12.9393L7.71967 14.2197C7.42678 14.5126 7.42678 14.9874 7.71967 15.2803C8.01256 15.5732 8.48744 15.5732 8.78033 15.2803L15.0303 9.03033C15.3232 8.73744 15.3232 8.26256 15.0303 7.96967L8.78033 1.21967Z"
            fill="currentColor"
          />
        </svg>
      </Transition>
    </div>

    <!-- Text Container that slides with the circle -->
    <div
      class="flex items-center justify-center w-full transition-all duration-500 ease-in-out"
      :style="{
        transform: isHovered ? 'translateX(-18px)' : 'translateX(16px)'
      }"
    >
      <span class="font-['Cinzel'] text-white text-lg tracking-[1.08px] whitespace-nowrap">
        Find Lumn
      </span>
    </div>
  </NuxtLink>
</template>

<script
  setup
  lang="ts"
>
const isHovered = ref(false)
const isAnimating = ref(false)

const handleHover = (hover: boolean) => {
  isHovered.value = hover
  isAnimating.value = true
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}
</script>

<style scoped>
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.2s ease;
}

.icon-fade-enter-from,
.icon-fade-leave-to {
  opacity: 0;
}

@keyframes spin-coin {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

.animate-spin-coin {
  animation: spin-coin 500ms ease-in-out;
}
</style>
