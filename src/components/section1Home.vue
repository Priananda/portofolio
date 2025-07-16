<script setup>
import { ref, onMounted } from 'vue'
import profilSection2 from '@/assets/images/foto.png'

// Fungsi typing teks
const textFull = 'Haii, saya Priananda'
const typeText = ref('')
const typingSpeed = 90
onMounted(() => {
  let index = 0
  const type = () => {
    if (index < textFull.length) {
      typeText.value += textFull.charAt(index)
      index++
      setTimeout(type, typingSpeed)
    } else {
      // blok else untuk panggil ulang lagi teksnya
      setTimeout(() => {
        typeText.value = ''
        index = 0
        type()
      }, 1000)
    }
  }

  type()
})
//Fungsi klik btn lihat selengkapnya maka scroll ke section2
const section2 = ref(null)
function scrollToSection2() {
  section2.value.scrollIntoView({
    behavior: 'smooth',
  })
}
// Fungsi scroll ke bawah dari klik selengkapnya ke section 3
function scrollToSection3() {
  const targetSection3 = document.getElementById('section3')
  targetSection3.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- section 1 -->
  <section class="relative bg-slate-900 min-h-screen flex flex-col items-center justify-center">
    <div class="absolute inset-0 z-5">
      <div class="bubble-section1"></div>
      <div class="bubble-section1 bubble-delay-2000"></div>
      <div class="bubble-section1 bubble-delay-4000"></div>
      <div class="bubble-section1 bubble-delay-6000"></div>
    </div>

    <h1 class="z-10 -mt-14 mb-6 text-5xl font-semibold text-white">Welcome to My Portofolio</h1>
    <p class="z-10 mb-6 text-lg text-center leading-8 text-white">
      Selamat datang di portofolio saya.<br />
      Temukan karya dan pengalaman saya di bawah ini.
    </p>
    <button
      @click="scrollToSection2"
      class="z-10 px-5 py-3 cursor-pointer bg-amber-600 rounded-full hover:bg-amber-700 text-white font-normal transition duration-300 hover:scale-105"
    >
      Lihat Selengkapnya
    </button>
  </section>

  <!-- section 2 -->
  <section
    ref="section2"
    class="px-5 py-10 grid grid-cols-1 md:grid-cols-2 min-h-screen items-center bg-slate-900 text-white gap-14"
  >
    <div class="flex justify-center -mt-24">
      <img :src="profilSection2" alt="" class="w-[93%] object-contain rounded-full shadow-xl" />
    </div>

    <div class="space-y-5">
      <h1 class="text-4xl font-semibold">{{ typeText }}</h1>
      <p class="text-lg text-white">
        Saya adalah seorang Web Developer yang bertugas membangun aplikasi statis maupun dinamis
        dengan ketentuan project yang ada.
      </p>
      <p class="text-lg text-white">
        <span class="font-semibold text-amber-500">Front-End Developer</span> dengan keahlian
        Vue.js....<span
          @click="scrollToSection3"
          class="text-blue-500 underline text-sm cursor-pointer hover:text-blue-400"
          >selengkapnya</span
        >
      </p>
      <p class="text-lg text-white">
        Saya juga berpengalaman di bidang
        <span class="font-semibold text-amber-500">Back-End Developer</span> menggunakan
        Laravel....<span
          @click="scrollToSection3"
          class="text-blue-500 underline text-sm cursor-pointer hover:text-blue-400"
          >selengkapnya</span
        >
      </p>
      <button
        class="mt-3 px-5 py-3 cursor-pointer bg-amber-600 rounded-full hover:bg-amber-700 transition duration-300 hover:scale-105"
      >
        Lihat Portofolio
      </button>
    </div>
  </section>

  <!-- section 3 -->
  <section id="section3" class="px-5 md:px-10 py-16 text-white bg-slate-900">
    <div class="-mt-12 mb-10 text-center">
      <h2 class="mb-5 text-4xl font-semibold">Skills & Tools</h2>
      <p class="text-lg text-center leading-8 text-white">
        Berikut beberapa keahlian utama dan teknologi yang saya gunakan untuk<br />
        membangun aplikasi berbasis web.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-5">
      <!-- Frontend -->
      <div class="border-wrapper">
        <div class="p-5 bg-slate-800 rounded-xl flex flex-col items-center justify-center">
          <h3 class="mb-4 text-center text-2xl font-semibold text-amber-500">Frontend</h3>
          <ul class="grid grid-cols-2 gap-2 text-gray-300 list-disc list-inside">
            <li>Responsive Design</li>
            <li>JavaScript Native</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>Vue JS 3</li>
            <li>Nuxt JS</li>
          </ul>
        </div>
      </div>

      <!-- Backend -->
      <div class="p-5 bg-slate-800 rounded-xl flex flex-col items-center justify-center">
        <h3 class="lg:-mt-16 mb-4 text-center text-2xl font-semibold text-amber-500">Backend</h3>
        <ul class="grid grid-cols-2 gap-2 text-gray-300 list-disc list-inside">
          <li>Laravel</li>
          <li>PHP</li>
          <li>MYSQL</li>
          <li>Consume API</li>
        </ul>
      </div>

      <!-- Tools -->
      <div class="p-5 bg-slate-800 rounded-xl flex flex-col items-center justify-center">
        <h3 class="lg:-mt-0 mb-4 text-center text-2xl font-semibold text-amber-500">
          Tools & Workflow
        </h3>
        <ul class="grid grid-cols-2 gap-2 text-gray-300 list-disc list-inside">
          <li>Communication</li>
          <li>Collaboration</li>
          <li>Github</li>
          <li>Gitlab</li>
          <li>VS Code</li>
          <li>Postman</li>
          <li>Figma</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.border-wrapper {
  box-shadow:
    0 1px 20px rgba(220, 2, 2, 0.548),
    0 1px 60px rgba(255, 255, 255, 0.1);
  position: relative;
  border-radius: 13px; /* sama dengan rounded-xl */
  padding: 2px; /* ketebalan border */
  background: linear-gradient(270deg, #d97706, #a8600d);
  background-size: 400% 400%;
  animation: borderRGB 8s linear infinite;
}

@keyframes borderRGB {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bubble-section1 {
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle at center, rgba(202, 145, 59, 0.76), transparent);
  border-radius: 50%;
  animation: bubble 10s linear infinite alternate;
}

.bubble-section1:nth-child(2) {
  left: 20%;
  top: 60%;
  background: radial-gradient(circle at center, rgba(202, 145, 59, 0.76), transparent);
}

.bubble-section1:nth-child(3) {
  left: 70%;
  top: 20%;
  background: radial-gradient(circle at center, rgba(169, 167, 164, 0.571), transparent);
}

.bubble-section1:nth-child(4) {
  left: 50%;
  top: 80%;
  background: radial-gradient(circle at center, rgba(100, 112, 219, 0.559), transparent);
}

@keyframes bubble {
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }
  50% {
    transform: translateY(-50px) translateX(50px) scale(1.2);
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }
}

.bubble-delay-2000 {
  animation-delay: 5s;
}

.bubble-delay-4000 {
  animation-delay: 5s;
}

.bubble-delay-6000 {
  animation-delay: 5s;
}
</style>
