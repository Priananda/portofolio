<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import ReusableButton from './button/ReusableButton.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import p from '@/assets/images/p.jpg'
import profilSection2 from '@/assets/images/foto.png'

// Typing text otomatis
const textFull = 'Hello, I’m Priananda'
const typeText = ref('')
const typingSpeed = 90

onMounted(async () => {
  // Typing
  let index = 0
  const type = () => {
    if (index < textFull.length) {
      typeText.value += textFull.charAt(index)
      index++
      setTimeout(type, typingSpeed)
    } else {
      // default ke awal
      setTimeout(() => {
        typeText.value = ''
        index = 0
        type()
      }, 1000)
    }
  }
  type()

  // AOS
  await nextTick()
  AOS.init({
    duration: 900,
    once: false,
    easing: 'ease-out-cubic',
    offset: 50,
    startEvent: 'load',
  })
  AOS.refresh()
})

// Fungsi scroll ke section 2
function scrollToSection2() {
  const targetSection2 = document.getElementById('section2')
  targetSection2.scrollIntoView({ behavior: 'smooth' })
}
// Fungsi scroll ke section 3
function scrollToSection3() {
  const targetSection3 = document.getElementById('section3')
  targetSection3.scrollIntoView({ behavior: 'smooth' })
}

// Button project pada section
const selectedCard = ref(null)
const openModalOnDetail = (item) => {
  selectedCard.value = item
}
const closeModalOnDetail = () => {
  selectedCard.value = null
}

const clickTab = ['Projects', 'Certificates']
const defaultTab = ref('Projects')
const projects = [
  {
    title: 'Sistem Ordering Menu & Dashboard Admin on Ikan Bakar Bli Putu',
    description: 'Prog.',
    fullDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.`,
    image: p,
  },
  {
    title: 'Company Profile on Ikan Bakar Bli Putu',
    description: 'We.',
    image: p,
  },
  {
    title: 'Sistem Jinom Resellers',
    description: 'Solus.',
    image: p,
  },
  {
    title: 'Sistem TaskList',
    description: 'We.',
    image: p,
  },
  {
    title: 'Sistem Chatting',
    description: 'We.',
    image: p,
  },
]
const certificates = [
  {
    title: 'Certificate Internship Front-end Developer on PT Jinom Network Indonesia',
    description: 'Prog.',
    fullDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque id sem in nulla commodo tincidunt. Quisque nec facilisis nulla.
      Morbi vel tincidunt sapien, ut porta erat. Cras sit amet dapibus est.`,
    image: p,
  },
  {
    title: 'Certificate MBKM Web Developer on PT Amanah Karya Indonesia',
    description: 'Solus.',
    image: p,
  },
  {
    title:
      'Certificate Programmer BNSP (Badan Nasional Sertifikasi Profesi) on Primakara University',
    description: 'We.',
    image: p,
  },
  {
    title:
      'Certificate PELP TEST (Primakara English Language Proficiency Test) on Primakara University',
    description: 'We.',
    image: p,
  },
  {
    title: 'Certificate CAREER PREPARATION on Primakara University',
    description: 'We.',
    image: p,
  },
  {
    title: 'Certificate FCNS (Foresec Certified in Networking Security) on Primakara University',
    description: 'We.',
    image: p,
  },
]

// Download CV
const downloadCV = () => {
  const urlPDF = '/assets/pdf/CV_I_Kadek_Priananda.pdf'
  const fileName = 'CV_I_Kadek_Priananda.pdf'

  const link = document.createElement('a')
  link.href = urlPDF
  link.download = fileName
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <!-- Section 1 -->
  <section
    id="section1"
    class="container mx-auto relative min-h-screen scroll-mt-44 bg-white flex flex-col items-center justify-center"
  >
    <div class="absolute inset-0 z-5">
      <div class="bubble-section1"></div>
      <div class="bubble-section1 bubble-delay-2000"></div>
      <div class="bubble-section1 bubble-delay-4000"></div>
      <div class="bubble-section1 bubble-delay-6000"></div>
    </div>

    <h1
      data-aos="fade-down"
      data-aos-delay="100"
      class="z-10 mb-6 text-center text-5xl md:text-7xl lg:text-7xl text-shadow-md font-bold text-blue-800 leading-20"
    >
      Welcome to My Portfolio
    </h1>
    <p
      data-aos="fade-up"
      data-aos-delay="300"
      class="z-10 mb-6 px-2 md:px-0 lg:px-0 text-lg text-center leading-8 text-gray-800"
    >
      Welcome to my portfolio. Discover my work and experience below.
    </p>
    <ReusableButton label="See More" @click="scrollToSection2" />
  </section>

  <!-- Section 2 -->
  <section
    id="section2"
    class="container mx-auto scroll-mt-20 bg-white mt-24 md:-mt-40 lg:mt-0 px-5 md:px-2 lg:px-14 py-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-16"
  >
    <!-- Gambar -->
    <div class="flex justify-center" data-aos="fade-down">
      <img
        :src="profilSection2"
        alt="Profile"
        class="w-full md:max-w-xl lg:max-w-xl object-contain rounded-xl shadow-md shadow-blue-800/20"
      />
    </div>

    <!-- Konten -->
    <div class="space-y-5" data-aos="fade-up">
      <h2
        class="text-3xl md:text-4xl lg:text-4xl font-bold text-shadow-sm bg-gradient-to-r from-blue-800 to-indigo-500 text-transparent bg-clip-text"
      >
        {{ typeText }}
      </h2>

      <p class="text-lg text-gray-800 leading-8 text-justify">
        I'm a web developer specializing in building website-based applications. I've worked on
        various projects, including an online menu ordering system, an admin panel system, a Jinom
        reseller system, a personal task system, and other applications. I'm accustomed to working
        both in teams and independently, and remain committed to learning and contributing to the
        technology world.
      </p>

      <ReusableButton label="Download CV" @click="downloadCV" />
    </div>
  </section>

  <!-- Section 3 -->
  <section
    id="section3"
    class="container mx-auto scroll-mt-28 mt-24 px-5 md:px-2 lg:px-14 bg-white"
  >
    <div class="">
      <!-- Heading -->
      <div class="text-center">
        <h2 data-aos="zoom-in" class="mb-6 text-4xl text-blue-800 font-bold text-shadow-sm">
          Skills & Tools
        </h2>
        <p
          data-aos="fade-up"
          class="z-10 mb-14 px-2 md:px-0 lg:px-0 text-lg text-center leading-8 text-gray-800"
        >
          Here are some of the key skills and technologies I use to build web-based applications.
        </p>
      </div>

      <!-- Grid Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Frontend -->
        <div data-aos="fade-up" data-aos-delay="200" class="border-wrapper bg-white flex flex-col">
          <div class="p-6 flex flex-col items-center justify-center space-y-5">
            <h3
              class="text-2xl font-bold text-center bg-gradient-to-r from-cyan-700 to-blue-800 text-transparent bg-clip-text"
            >
              Front-end
            </h3>
            <ul class="grid grid-cols-2 text-gray-800 text-md list-disc list-inside gap-3">
              <li>Responsive</li>
              <li>Vanilla JS</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>Element UI</li>
              <li>Slicing UI</li>
              <li>Consume API</li>
              <li>Vue.js</li>
              <li>Nuxt.js</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>

        <!-- Backend -->
        <div data-aos="fade-up" data-aos-delay="400" class="border-wrapper bg-white flex flex-col">
          <div class="p-6 flex flex-col items-center justify-center space-y-5">
            <h3
              class="text-2xl font-bold text-center bg-gradient-to-r from-cyan-700 to-blue-800 text-transparent bg-clip-text"
            >
              Back-end
            </h3>
            <ul class="grid grid-cols-2 text-gray-800 text-md list-disc list-inside gap-3">
              <li>Laravel</li>
              <li>Express.js</li>
              <li>REST API</li>
              <li>RESTful API</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <!-- Tools -->
        <div data-aos="fade-up" data-aos-delay="600" class="border-wrapper bg-white flex flex-col">
          <div class="p-6 flex flex-col items-center justify-center space-y-5">
            <h3
              class="text-2xl font-bold text-center bg-gradient-to-r from-cyan-700 to-blue-800 text-transparent bg-clip-text"
            >
              Tools & Workflow
            </h3>
            <ul class="grid grid-cols-2 text-gray-800 text-md list-disc list-inside gap-3">
              <li class="col-span-1">Github</li>
              <li class="col-span-1">Gitlab</li>
              <li class="col-span-1">VS Code</li>
              <li class="col-span-1">Postman</li>
              <li class="col-span-1">Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4 -->
  <section
    id="section4"
    class="scroll-mt-28 container mx-auto mt-24 px-5 md:px-2 lg:px-14 bg-white"
  >
    <div class="">
      <div class="text-center">
        <h2 data-aos="zoom-in" class="mb-6 text-4xl text-blue-800 font-bold text-shadow-sm">
          My Projects
        </h2>
        <p
          data-aos="fade-up"
          class="z-10 mb-14 px-2 md:px-0 lg:px-0 text-lg text-center leading-8 text-gray-800"
        >
          The following are the projects that i have developed
        </p>
      </div>
      <div class="">
        <div
          class="md:p-3 lg:p-3 mb-14 md:shadow-xl mx-auto max-w-xl md:bg-blue-300/20 rounded-full flex justify-center items-center"
        >
          <div class="flex flex-wrap justify-center gap-10 w-full md:flex-nowrap md:space-x-10">
            <button
              v-for="tab in clickTab"
              :key="tab"
              @click="defaultTab = tab"
              :class="[
                'px-14 py-4 text-md cursor-pointer rounded-full shadow-md w-full sm:w-auto',
                defaultTab === tab
                  ? 'btn-shadow bg-gradient-to-r from-blue-800 to-indigo-800 hover:text-white hover:to-indigo-600 text-white font-normal'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text font-normal',
              ]"
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <div>
          <div v-if="defaultTab === 'Projects'">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="(project, index) in projects"
                :key="project.title"
                class="flex flex-col bg-white overflow-hidden rounded-md shadow-lg"
                :data-aos="'fade-up'"
                :data-aos-delay="(index + 1) * 200"
              >
                <img :src="project.image" :alt="project.title" class="h-56 w-full object-cover" />
                <div class="p-6 flex-1 flex flex-col">
                  <div>
                    <h3 class="mb-3 text-lg text-black font-bold">
                      {{ project.title }}
                    </h3>
                    <p class="mb-5 text-md text-gray-800">{{ project.description }}</p>
                  </div>
                  <div class="flex justify-between mt-auto">
                    <button
                      type="button"
                      @click="openModalOnDetail(project)"
                      class="text-blue-800 hover:text-blue-800/90 text-md cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="defaultTab === 'Certificates'">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="(certificate, index) in certificates"
                :key="certificate.title"
                class="flex flex-col bg-white overflow-hidden rounded-md shadow-lg"
                :data-aos="'fade-up'"
                :data-aos-delay="(index + 1) * 200"
              >
                <img
                  :src="certificate.image"
                  :alt="certificate.title"
                  class="h-56 w-full object-cover"
                />
                <div class="p-6 flex-1 flex flex-col">
                  <div>
                    <h3 class="mb-3 text-lg text-black font-bold">
                      {{ certificate.title }}
                    </h3>
                    <p class="mb-5 text-md text-gray-800">{{ certificate.description }}</p>
                  </div>
                  <div class="flex justify-between mt-auto">
                    <button
                      type="button"
                      @click="openModalOnDetail(certificate)"
                      class="text-blue-800 hover:text-blue-800/90 text-md cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5 -->
  <section
    id="section5"
    class="container mx-auto scroll-mt-28 mt-24 mb-24 px-5 md:px-2 lg:px-14 bg-white"
  >
    <div class="">
      <div class="text-center">
        <h2 data-aos="zoom-in" class="mb-6 text-4xl text-blue-800 font-bold text-shadow-sm">
          My Contact
        </h2>
        <p
          data-aos="fade-up"
          class="z-10 mb-14 px-2 md:px-0 lg:px-0 text-lg text-center leading-8 text-gray-800"
        >
          Here is my contact listed below
        </p>
      </div>

      <div
        data-aos="fade-up"
        class="flex flex-col lg:flex-row mx-auto max-w-7xl justify-between gap-8"
      >
        <div class="lg:w-1/2 p-16 px-10 border-wrapper rounded-md shadow-lg bg-white">
          <div class="mb-6 space-y-2">
            <h3 class="font-medium text-lg text-gray-800">Email</h3>
            <a
              href="mailto:kadekpriananda12@gmail.com"
              class="break-words text-md text-blue-800 hover:text-blue-800/90 hover:underline"
            >
              kadekpriananda12@gmail.com
            </a>
          </div>
          <div class="mb-6 space-y-2">
            <h3 class="font-medium text-lg text-gray-800">Phone</h3>
            <a
              href="https://wa.me/6285964306002?text=Hallo%20saya%20ingin%20%20berdiskusi%20lebih%20lanjut%20dengan%20anda%20terkait%20portofolio%20anda"
              target="_blank"
              rel="noopener noreferrer"
              class="break-words text-md text-blue-800 hover:text-blue-800/90 hover:underline"
            >
              +62 859-6430-6002
            </a>
          </div>
          <div class="mb-6 space-y-2">
            <h3 class="font-medium text-lg text-gray-800">Address</h3>
            <p class="text-md text-gray-800">
              Jalan by pass ngurah rai, jalan merta sari No. 76 Jimbaran, Kec. Kuta Sel., Kabupaten
              Badung, Bali 80361
            </p>
          </div>
        </div>

        <div class="lg:w-1/2 p-16 px-10 border-wrapper rounded-md shadow-lg bg-white">
          <div class="mb-6 space-y-2">
            <h3 class="font-medium text-lg text-gray-800">Github</h3>
            <a
              href="https://github.com/Priananda"
              target="_blank"
              class="break-words text-md text-blue-800 hover:text-blue-800/90 hover:underline"
            >
              https://github.com/Priananda
            </a>
          </div>
          <div class="mb-6 space-y-2">
            <h3 class="font-medium text-lg text-gray-800">Gitlab</h3>
            <a
              href="https://gitlab.com/kadekpriananda12"
              target="_blank"
              class="break-words text-md text-blue-800 hover:text-blue-800/90 hover:underline"
            >
              https://gitlab.com/kadekpriananda12
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6 Modal  -->
  <section>
    <transition
      enter-active-class="transition transform duration-300"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition transform duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div
        v-if="selectedCard"
        class="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
      >
        <div
          class="relative bg-white w-full max-w-xl max-h-[70vh] rounded-xl shadow-md shadow-blue-800/20 overflow-hidden"
        >
          <div class="px-9 py-10 overflow-y-auto max-h-[70vh] text-justify hide-scrollbar-to-modal">
            <h2 class="text-lg font-bold mb-4">{{ selectedCard.title }}</h2>
            <p class="text-md text-gray-800 leading-relaxed">
              {{ selectedCard.fullDescription }}
            </p>
          </div>

          <button
            @click="closeModalOnDetail"
            class="absolute top-3 right-3 focus:outline-none text-blue-800 hover:text-blue-800/90 cursor-pointer"
            type="button"
          >
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
      </div>
    </transition>
  </section>

  <!-- Section 7 name  -->
  <section>
    <div class="fixed top-[80px] left-5 md:left-10 lg:left-14 flex flex-col items-center z-10">
      <div class="flex gap-6">
        <div class="w-1 h-9 bg-blue-800 rounded-b"></div>
        <div class="w-1 h-9 bg-blue-800 rounded-b"></div>
      </div>

      <div
        class="mt-0 px-6 py-3 font-bold text-center bg-white/90 text-blue-800 border-2 border-blue-800 rounded-md shadow-md shadow-blue-800/20"
      >
        <h2 class="text-sm">I Kadek Priananda</h2>
        <span class="text-xs font-medium text-blue-500">Full-Stack Developer</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.border-wrapper {
  box-shadow: 0 1px 8px #0422a5;
  border-radius: 5px;
}
.bubble-section1 {
  background: radial-gradient(circle at center, rgba(15, 48, 155, 0.838), transparent);
  animation: bubble 10s linear infinite alternate;
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
}
.bubble-section1:nth-child(2) {
  left: 20%;
  top: 60%;
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
.bubble-delay-2000,
.bubble-delay-4000,
.bubble-delay-6000 {
  animation-delay: 4s;
}

/* Mobile */
.bubble-section1:nth-child(3) {
  left: 40%;
  top: 8%;
}
.bubble-section1:nth-child(4) {
  left: 40%;
  top: 80%;
}
/* Tablet */
@media (min-width: 800px) and (max-width: 1023px) {
  .bubble-section1:nth-child(3) {
    left: 45%;
    top: 10%;
  }
  .bubble-section1:nth-child(4) {
    left: 55%;
    top: 50%;
  }
}
/* Laptop / Desktop */
@media (min-width: 1024px) {
  .bubble-section1:nth-child(3) {
    left: 40%;
    top: 10%;
  }
  .bubble-section1:nth-child(4) {
    left: 60%;
    top: 50%;
  }
}

.btn-shadow {
  box-shadow: 0 0 16px 2px #0b48d6be;
}

/* CSS untuk menyembunyikan scrollbar tapi tetap bisa scroll */
.hide-scrollbar-to-modal {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.hide-scrollbar-to-moda::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
