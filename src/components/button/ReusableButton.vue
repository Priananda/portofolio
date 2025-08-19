<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <button
    class="z-10 text-lg btn-shadow px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-indigo-800 hover:from-blue-600 hover:to-indigo-600 text-white font-normal transition-all"
  >
    {{ label }}
  </button>
</template>
