<!-- <script setup>
import { ref } from 'vue'

const openSidebar = ref(false)
const closing = ref(false)

// Scroll smooth
function scrollToSection(id, smooth = true) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' })
}

// Tutup sidebar lalu scroll
function handleSidebarClick(id) {
  closing.value = true
  setTimeout(() => {
    openSidebar.value = false
    closing.value = false
    scrollToSection(id)
  }, 400)
}

// Tutup sidebar (overlay klik / tombol X)
function closeSidebar() {
  closing.value = true
  setTimeout(() => {
    openSidebar.value = false
    closing.value = false
  }, 400)
}
</script> -->

<!-- <template> -->
<!-- <header class="sticky top-5 md:top-5 lg:top-3 z-30 max-w-md md:max-w-3xl lg:max-w-6xl mx-auto">
    <div
      class="px-6 md:px-8 lg:px-12 py-5 md:py-4 lg:py-4 flex items-center justify-between  transition-colors duration-300 bg-white/30 backdrop-blur-xl border border-white/10 shadow-lg shadow-blue-900/10 md:bg-slate-900 md:backdrop-blur-none md:border-slate-800 md:shadow-none"
    >
      <h1 class="text-3xl font-bold text-blue-800 drop-shadow">Portfolio</h1>


      <nav class="hidden md:flex cursor-pointer">
        <ul class="flex space-x-8 font-medium text-md text-blue-800">
          <li>
            <a
              @click.prevent="scrollToSection('section1')"
              class="relative pb-1 after:absolute after:left-1/2 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-800 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
            >
              Home
            </a>
          </li>

          <li>
            <a
              @click.prevent="scrollToSection('section3')"
              class="relative pb-1 after:absolute after:left-1/2 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-800 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
            >
              Skills & Tools
            </a>
          </li>

          <li>
            <a
              @click.prevent="scrollToSection('section4')"
              class="relative pb-1 after:absolute after:left-1/2 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-800 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
            >
              My Projects
            </a>
          </li>

          <li>
            <a
              @click.prevent="scrollToSection('section5')"
              class="relative pb-1 after:absolute after:left-1/2 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-800 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button @click="openSidebar = true" class="md:hidden text-blue-900 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>

  <div v-if="openSidebar" class="fixed inset-0 z-40">

    <div
      class="absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300"
      @click="closeSidebar"
    ></div>


    <aside
      :class="[
        'fixed top-0 right-0 w-64 h-full px-6 py-5 rounded-l-3xl',
        'bg-gradient-to-br from-blue-700 to-indigo-900 text-white',
        'shadow-2xl z-50',
        closing ? 'animate-slideOut' : 'animate-slideIn',
      ]"
    >

      <button
        @click="closeSidebar"
        class="absolute top-5 right-5 text-white hover:scale-110 transition-transform duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 class="text-xl font-semibold mt-12">Menu</h2>

      <nav class="flex flex-col space-y-4 mt-4">
        <a
          @click.prevent="handleSidebarClick('section1')"
          class="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:shadow-lg"
          >Home</a
        >

        <a
          @click.prevent="handleSidebarClick('section3')"
          class="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:shadow-lg"
          >Skills & Tools</a
        >

        <a
          @click.prevent="handleSidebarClick('section4')"
          class="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:shadow-lg"
          >My Projects</a
        >

        <a
          @click.prevent="handleSidebarClick('section5')"
          class="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:shadow-lg"
          >Contact</a
        >
      </nav>
    </aside>
  </div> -->
<!-- </template> -->

<!-- <style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.animate-slideIn {
  animation: slideIn 0.45s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
.animate-slideOut {
  animation: slideOut 0.45s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}
</style> -->
