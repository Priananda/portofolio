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
    class="sticky top-0 z-20 bg-slate-900 px-5 md:px-10 lg:px-16 py-5 flex items-center justify-between"
  >
    <h1 class="text-2xl font-semibold text-white">Portfolio</h1>
    <!-- Laptop dan Dekstop -->
    <nav class="hidden md:flex">
      <ul class="flex space-x-8 text-white">
        <li>
          <a
            href=""
            @click.prevent="scrollToSection('section1')"
            class="hover:text-gray-200 transition-colors"
          >
            Home
          </a>
        </li>

        <li>
          <a
            @click.prevent="scrollToSection('section3')"
            href=""
            class="hover:text-gray-200 transition-colors"
            >Skills & Tools</a
          >
        </li>
        <li>
          <a
            @click.prevent="scrollToSection('section4')"
            href=""
            class="hover:text-gray-200 transition-colors"
            >My Projects</a
          >
        </li>
        <li>
          <a
            @click.prevent="scrollToSection('section5')"
            href=""
            class="hover:text-gray-200 transition-colors"
            >Contact</a
          >
        </li>
      </ul>
    </nav>

    <!-- Hamburger Button -->
    <button @click="openSidebar = true" class="md:hidden text-white focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
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
      class="fixed top-0 left-0 h-full w-64 bg-slate-900 text-white shadow-lg transform transition-transform duration-300 z-30"
      :class="openSidebar ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex justify-between items-center px-5 py-5 border-slate-900">
        <h2 class="text-lg">Menu</h2>
        <button @click="openSidebar = false" class="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul class="flex flex-col mt-6 space-y-5 px-5 text-white text-md">
        <li>
          <a
            href="#section1"
            @click="handleMenuClick('section1')"
            class="hover:text-gray-200 transition-colors"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#section3"
            @click="handleMenuClick('section3')"
            class="hover:text-gray-200 transition-colors"
            >Skills & Tools</a
          >
        </li>
        <li>
          <a
            href="#section4"
            @click="handleMenuClick('section4')"
            class="hover:text-gray-200 transition-colors"
            >My Projects</a
          >
        </li>
        <li>
          <a
            href="#section5"
            @click="handleMenuClick('section5')"
            class="hover:text-gray-200 transition-colors"
            >Contact</a
          >
        </li>
      </ul>
    </div>

    <!-- Overlay -->
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 backdrop-blur-sm transition-opacity z-20"
    ></div>
  </header>
</template>
