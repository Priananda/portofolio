<script setup>
defineProps({
  isActive: Boolean,
})
</script>

<template>
  <button
    :class="[
      'px-14 py-4 text-md cursor-pointer rounded-full shadow-md w-full sm:w-auto transition-all',
      isActive
        ? 'font-normal btn-shadow text-white bg-[linear-gradient(to_right,_#3B82F6,_#3730A3)] hover:bg-[linear-gradient(to_right,_#2563EB,_#4F46E5)]'
        : 'font-normal text-transparent bg-clip-text bg-[linear-gradient(to_right,_#0E7490,_#1D4ED8)]',
    ]"
  >
    <slot />
  </button>
</template>
