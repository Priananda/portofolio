<script setup>
// import { ref } from 'vue'

// Fungsi jika scroll ke bawah dan klik home maka kembali keatas
function scrollToSection1() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
// Fungsi untukk scroll ke bawah untuk section 3
function scrollToSection3() {
  const targetSection3 = document.getElementById('section3')
  targetSection3.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header
    class="sticky z-20 top-0 px-12 py-5 flex w-full bg-slate-900 text-md items-center justify-between"
  >
    <div>
      <h1 class="font-semibold text-2xl text-white">Portfolio</h1>
    </div>
    <nav class="">
      <ul class="flex text-sm space-x-10">
        <li>
          <a
            @click.prevent="scrollToSection1"
            href=""
            class="flex items-center space-x-1 text-white hover:text-gray-200 duration-300 transition-colors ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            @click.prevent="scrollToSection3"
            href="#"
            class="flex items-center space-x-1 text-white hover:text-gray-200 duration-300 transition-colors ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <span>Skills & Tools</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center space-x-1 text-white hover:text-gray-200 duration-300 transition-colors ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <span>My Projects</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center space-x-1 text-white hover:text-gray-200 duration-300 transition-colors ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <span>Contact</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center space-x-1 text-white hover:text-gray-200 duration-300 transition-colors ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>

            <span>Curriculum Vitae</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
