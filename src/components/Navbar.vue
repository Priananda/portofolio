<script setup>
import { ref } from 'vue'

// State untuk hamburger
const openSidebar = ref(false)

// Fungsi scroll dari banyan section
function scrollToSection(id, smooth = true) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' })
  }
}

// Fungsi tutup sidebar dan scroll
function handleMenuClick(id) {
  scrollToSection(id)
  openSidebar.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-20 bg-white px-4 md:px-10 lg:px-14 py-6 flex items-center justify-between"
  >
    <h1 class="text-3xl font-bold text-shadow-sm text-blue-800">Portfolio</h1>
    <!-- Laptop dan Dekstop -->
    <nav class="hidden md:flex">
      <ul class="flex space-x-8 font-medium text-md">
        <li>
          <a
            href=""
            @click.prevent="scrollToSection('section1')"
            class="text-blue-800 hover:text-blue-800/90"
          >
            Home
          </a>
        </li>

        <li>
          <a
            @click.prevent="scrollToSection('section3')"
            href=""
            class="text-blue-800 hover:text-blue-800/90"
            >Skills & Tools</a
          >
        </li>
        <li>
          <a
            @click.prevent="scrollToSection('section4')"
            href=""
            class="text-blue-800 hover:text-blue-800/90"
            >My Projects</a
          >
        </li>
        <li>
          <a
            @click.prevent="scrollToSection('section5')"
            href=""
            class="text-blue-800 hover:text-blue-800/90"
            >Contact</a
          >
        </li>
      </ul>
    </nav>

    <!-- Hamburger Button -->
    <button
      @click="openSidebar = true"
      class="md:hidden text-blue-800 focus:outline-none cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Sidebar -->
    <div
      class="fixed top-0 left-0 h-full w-64 bg-white text-blue-800 shadow-lg transform transition-transform duration-300 z-30"
      :class="openSidebar ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex mt-5 px-5 py-5 justify-between items-center">
        <h2 class="text-lg font-bold">Menu</h2>
        <button
          @click="openSidebar = false"
          class="focus:outline-none text-blue-800 hover:text-blue-800/90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul class="flex flex-col mt-6 space-y-5 px-5 text-md">
        <li>
          <a @click="handleMenuClick('section1')" class="text-blue-800 hover:text-blue-800/90"
            >Home</a
          >
        </li>
        <li>
          <a @click="handleMenuClick('section3')" class="text-blue-800 hover:text-blue-800/90"
            >Skills & Tools</a
          >
        </li>
        <li>
          <a @click="handleMenuClick('section4')" class="text-blue-800 hover:text-blue-800/90"
            >My Projects</a
          >
        </li>
        <li>
          <a @click="handleMenuClick('section5')" class="text-blue-800 hover:text-blue-800/90"
            >Contact</a
          >
        </li>
      </ul>
    </div>

    <!-- Overlay -->
    <div
      v-if="openSidebar"
      @click="openSidebar = false"
      class="fixed inset-0 backdrop-blur-xs transition-opacity z-20"
    ></div>
  </header>
</template>
