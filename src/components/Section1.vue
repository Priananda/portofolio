<script setup>
import { ref, onMounted, nextTick } from 'vue'
import ReusableButton from './button/reusableButton.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import p from '@/assets/images/p.jpg'
import profilSection2 from '@/assets/images/foto.png'

// Fungsi typing text otomatis
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

// Fungsi button project pada section
const clickTab = ['Projects', 'Certificates', 'Tech Stack']
const defaultTab = ref('Projects')
const projects = [
  {
    title: 'web programming',
    description: 'Prog.',
    image: p,
  },
  {
    title: 'web',
    description: 'Solus.',
    image: p,
  },
  {
    title: 'web',
    description: 'We.',
    image: p,
  },
]
const certificates = [
  {
    title: 'web programming',
    description: 'Prog.',
    image: p,
  },
  {
    title: 'web',
    description: 'Solus.',
    image: p,
  },
  {
    title: 'web',
    description: 'We.',
    image: p,
  },
]
const techStacks = [
  {
    title: 'web programming',
    description: 'Prog.',
    image: p,
  },
  {
    title: 'web',
    description: 'Solus.',
    image: p,
  },
  {
    title: 'web',
    description: 'We.',
    image: p,
  },
]

// Fungsi download CV
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
    class="container scroll-mt-44 relative bg-slate-900 min-h-screen flex flex-col items-center justify-center"
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
      class="z-10 -mt-14 mb-6 text-center text-6xl font-bold text-white leading-20"
    >
      Welcome to My Portfolio
    </h1>
    <p
      data-aos="fade-up"
      data-aos-delay="300"
      class="z-10 mb-6 text-lg text-center leading-8 text-white"
    >
      Welcome to my portfolio. Discover my work and experience below.
    </p>
    <!-- <button
      @click="scrollToSection2"
      data-aos="fade-up"
      data-aos-delay="700"
      class="z-10 text-lg btn-shadow px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-indigo-800 hover:from-blue-600 hover:to-indigo-600 text-white font-normal"
    >
      See More
    </button> -->
    <ReusableButton label="See More" @click="scrollToSection2" />
  </section>

  <!-- Section 2 -->
  <section
    id="section2"
    class="container scroll-mt-36 -mt-1 md:-mt-32 lg:mt-20 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center bg-slate-900 text-white gap-14 md:gap-0 lg:gap-14"
  >
    <div class="flex justify-center mt-1 md:-mt-32 lg:-mt-20" data-aos="fade-down">
      <img
        :src="profilSection2"
        alt=""
        class="w-[100%] md:w-[100%] lg:w-[93%] object-contain rounded-full shadow-xl"
      />
    </div>

    <div class="space-y-5 mb-5" data-aos="fade-up">
      <h1
        class="text-4xl mt-5 md:mt-0 lg:mt-0 font-semibold bg-gradient-to-r from-blue-400 to-indigo-50 text-transparent bg-clip-text"
      >
        {{ typeText }}
      </h1>
      <p class="text-lg text-white leading-8 text-justify">
        I am a web developer tasked with building static and dynamic applications, according to
        existing project requirements.
      </p>
      <p class="text-lg text-white">
        <span class="font-semibold text-amber-500">Front-End Developer</span> with expertise....
        <span
          @click="scrollToSection3"
          class="text-blue-500 underline text-md cursor-pointer hover:text-blue-400"
        >
          read more
        </span>
      </p>
      <p class="text-lg text-white">
        I am also experienced in the field
        <span class="font-semibold text-amber-500">Back-End Developer</span><br />
        use....
        <span
          @click="scrollToSection3"
          class="text-blue-500 underline text-md cursor-pointer hover:text-blue-400"
        >
          read more
        </span>
      </p>
      <ReusableButton label="Download CV" @click="downloadCV" />
    </div>
  </section>

  <!-- Section 3 -->
  <section
    id="section3"
    class="scroll-mt-3 pb-5 -mt-1 px-5 md:px-10 pt-20 lg:pt-36 text-white bg-slate-900"
  >
    <div class="container mx-auto">
      <div class="mb-14 text-center">
        <h2 data-aos="zoom-in" class="mb-7 text-4xl font-semibold">Skills & Tools</h2>
        <p data-aos="fade-up" class="text-lg text-center leading-8 text-white">
          Here are some of the key skills and technologies I use to build web-based applications.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="border-wrapper bg-slate-900 h-full flex flex-col"
        >
          <div class="p-5 lg:py-8 rounded-xl flex flex-col items-center justify-center">
            <h1
              class="mb-7 text-center text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            >
              Frontend
            </h1>

            <ul
              class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 text-md text-gray-300 list-disc list-inside"
            >
              <li>Responsive Design</li>
              <li>Vanila JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>Element UI</li>
              <li>Slicing UI</li>
              <li>Consume API</li>
              <li>Vue js</li>
              <li>Nuxt js</li>
              <li>React js</li>
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="border-wrapper bg-slate-900 h-full flex flex-col"
        >
          <div class="p-5 lg:-mt-14 rounded-xl flex flex-col items-center justify-center flex-1">
            <h1
              class="mb-7 text-center text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            >
              Backend
            </h1>
            <ul
              class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 text-md text-gray-300 list-disc list-inside"
            >
              <li>Laravel</li>
              <li>Express js</li>
              <li>REST API</li>
              <li>RESTful API</li>
              <li>MYSQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          class="border-wrapper bg-slate-900 h-full flex flex-col"
        >
          <div class="p-5 mt-3 rounded-xl flex flex-col items-center justify-center">
            <h1
              class="mb-7 text-center text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            >
              Tools & Workflow
            </h1>
            <ul
              class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-md gap-2 text-gray-300 list-disc list-inside"
            >
              <li>Communication</li>
              <li>Collaboration</li>
              <li>Github</li>
              <li>Gitlab</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4 -->
  <section id="section4" class="scroll-mt-0 mb-5 px-5 md:px-10 pt-24 text-white bg-slate-900">
    <div class="container mx-auto">
      <div class="md:mt-10 mb-16 text-center">
        <h2 data-aos="fade-up" class="mb-7 text-4xl font-semibold">My Projects</h2>
        <p data-aos="fade-up" data-aos-delay="200" class="text-lg">
          The following are the projects that I have developed
        </p>
      </div>
      <div class="">
        <div
          class="lg:p-3 mb-14 md:shadow-xl mx-auto max-w-2xl md:bg-slate-700/20 rounded-full flex justify-center items-center"
        >
          <div class="flex flex-wrap justify-center gap-4 w-full md:flex-nowrap md:space-x-10">
            <button
              v-for="tab in clickTab"
              :key="tab"
              @click="defaultTab = tab"
              :class="[
                'px-10 py-3 text-lg cursor-pointer rounded-full shadow-xl w-full sm:w-auto',
                defaultTab === tab
                  ? 'btn-shadow bg-gradient-to-r from-blue-500 to-indigo-800 hover:from-blue-600 hover:to-indigo-600 text-white font-normal'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-normal',
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
                class="flex flex-col bg-slate-900 border-wrapper overflow-hidden shadow-lg"
                :data-aos="'fade-up'"
                :data-aos-delay="(index + 1) * 200"
              >
                <img :src="project.image" :alt="project.title" class="h-52 w-full object-cover" />
                <div class="p-5 flex-1 flex flex-col">
                  <div>
                    <h3
                      class="mb-3 text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    >
                      {{ project.title }}
                    </h3>
                    <p class="text-md mb-5">{{ project.description }}</p>
                  </div>
                  <div class="flex justify-between mt-auto">
                    <button class="text-blue-500 text-md cursor-pointer hover:text-blue-400">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="defaultTab === 'Certificates'" class="text-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="(certificate, index) in certificates"
                :key="certificate.title"
                class="flex flex-col bg-slate-900 border-wrapper overflow-hidden shadow-lg"
                :data-aos="'fade-up'"
                :data-aos-delay="(index + 1) * 200"
              >
                <img
                  :src="certificate.image"
                  :alt="certificate.title"
                  class="h-52 w-full object-cover"
                />
                <div class="p-5 flex-1 flex flex-col">
                  <div>
                    <h3
                      class="mb-3 text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    >
                      {{ certificate.title }}
                    </h3>
                    <p class="text-md mb-5">{{ certificate.description }}</p>
                  </div>
                  <div class="flex justify-between mt-auto">
                    <button class="text-blue-500 text-md cursor-pointer hover:text-blue-400">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="defaultTab === 'Tech Stack'" class="text-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="(techStack, index) in techStacks"
                :key="techStack.title"
                class="flex flex-col bg-slate-900 border-wrapper overflow-hidden shadow-lg"
                :data-aos="'fade-up'"
                :data-aos-delay="(index + 1) * 200"
              >
                <img
                  :src="techStack.image"
                  :alt="techStack.title"
                  class="h-52 w-full object-cover"
                />
                <div class="p-5 flex-1 flex flex-col">
                  <div>
                    <h3
                      class="mb-3 text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    >
                      {{ techStack.title }}
                    </h3>
                    <p class="text-md mb-5">{{ techStack.description }}</p>
                  </div>
                  <div class="flex justify-between mt-auto">
                    <button class="text-blue-500 text-md cursor-pointer hover:text-blue-400">
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
  <section id="section5" class="scroll-mt-28 px-5 md:px-10 mb-20 text-white bg-slate-900">
    <div class="container mx-auto">
      <div class="mb-14 mt-28 lg:mt-36 md:-mt-30 text-center text-white">
        <h2 data-aos="fade-up" class="mb-7 text-4xl font-semibold">Contact</h2>
        <p data-aos="fade-up" data-aos-delay="200" class="text-lg">
          Here is my contact listed below
        </p>
      </div>

      <div
        data-aos="fade-up"
        class="flex flex-col lg:flex-row mx-auto max-w-7xl justify-between gap-8"
      >
        <div
          class="lg:w-1/2 p-16 px-10 border-wrapper rounded-xl shadow-xl bg-slate-900 text-white"
        >
          <div class="mb-6">
            <h3
              class="font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            >
              Email
            </h3>
            <a
              href="mailto:kadekpriananda12@gmail.com"
              class="text-md text-white hover:underline hover:text-gray-200"
            >
              kadekpriananda12@gmail.com
            </a>
          </div>
          <div class="mb-6">
            <h3
              class="font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            >
              Phone
            </h3>
            <a
              href="tel:+6285964306002"
              class="text-md text-white hover:underline hover:text-gray-200"
            >
              +62 859-6430-6002
            </a>
          </div>
          <div class="mb-6">
            <h3
              class="font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            >
              Address
            </h3>
            <p class="text-md text-white">
              Jalan by pass ngurah rai, jalan merta sari No. 76 Jimbaran, Kec. Kuta Sel., Kabupaten
              Badung, Bali 80361
            </p>
          </div>
        </div>

        <div
          class="lg:w-1/2 p-16 px-10 border-wrapper rounded-xl shadow-xl bg-slate-900 text-white"
        >
          <div class="mb-6">
            <h3
              class="font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            >
              Github
            </h3>
            <a
              href="https://github.com/Priananda"
              target="_blank"
              class="text-md text-white hover:underline hover:text-gray-200"
            >
              https://github.com/Priananda
            </a>
          </div>
          <div class="mb-6">
            <h3
              class="font-medium text-md bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            >
              Gitlab
            </h3>
            <a
              href="https://github.com/Priananda"
              target="_blank"
              class="text-sm text-white hover:underline hover:text-gray-200"
            >
              https://gitlab.com/kadekpriananda12
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.border-wrapper {
  box-shadow:
    0 3px 14px #0b42c0cb,
    0 1px 60px rgba(255, 255, 255, 0.1);
  border-radius: 13px;
}
.bubble-section1 {
  background: radial-gradient(circle at center, rgba(12, 78, 201, 0.792), transparent);
  animation: bubble 10s linear infinite alternate;
  position: absolute;
  width: 160px;
  height: 160px;
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
  box-shadow: 0 0 16px 2px #0b42c0cb;
}
</style>
