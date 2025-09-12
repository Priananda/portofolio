<script setup>
defineProps({
  isActive: Boolean, // untuk style aktif
})
</script>

<template>
  <button
    :class="[
      'px-14 py-4 text-md cursor-pointer rounded-full shadow-md w-full sm:w-auto transition-all',
      isActive
        ? 'btn-shadow bg-gradient-to-r  from-blue-500 to-indigo-800 hover:from-blue-600 hover:to-indigo-600 text-white font-normal'
        : 'bg-gradient-to-r from-cyan-700 to-blue-800 text-transparent bg-clip-text font-normal',
    ]"
  >
    <slot />
  </button>
</template>
