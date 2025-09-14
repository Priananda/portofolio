<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <!-- <button
    class="z-10 text-md mt-5 px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-indigo-800 hover:from-blue-600 hover:to-indigo-600 text-white font-normal transition-all btn-shadow"
  >
    {{ label }}
  </button> -->
  <button
    class="relative z-10 appearance-none text-md mt-5 px-8 py-3 cursor-pointer rounded-full text-white font-normal transition-all btn-shadow bg-[linear-gradient(to_right,_#3B82F6,_#3730A3)] hover:bg-[linear-gradient(to_right,_#2563EB,_#4F46E5)]"
  >
    {{ label }}
  </button>
</template>
