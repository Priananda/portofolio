<script setup>
import { ref, onMounted, nextTick } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import profilSection2 from '@/assets/images/foto.png'
import p from '@/assets/images/p.jpg'

// Typing Text
const textFull = 'Hello, I’m Priananda'
const typeText = ref('')
const typingSpeed = 90

onMounted(async () => {
  // 1) Fix scroll restore agar reload tetap di atas
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  window.addEventListener('load', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  })

  // 2) Typing
  let index = 0
  const type = () => {
    if (index < textFull.length) {
      typeText.value += textFull.charAt(index)
      index++
      setTimeout(type, typingSpeed)
    } else {
      setTimeout(() => {
        typeText.value = ''
        index = 0
        type()
      }, 1000)
    }
  }
  type()

  // 3) Init AOS
  await nextTick()
  AOS.init({
    duration: 900, // Lebih cepat
    once: false,
    easing: 'ease-out-cubic', // Lebih responsive, tidak terlalu lambat di akhir
    offset: 50,
    startEvent: 'load',
  })

  AOS.refresh()
})

// Scroll fungsi
const section2 = ref(null)
function scrollToSection2() {
  section2.value.scrollIntoView({ behavior: 'smooth' })
}
function scrollToSection3() {
  const targetSection3 = document.getElementById('section3')
  targetSection3.scrollIntoView({ behavior: 'smooth' })
}

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

// Define form data and errors
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Handle form submission
const handleSubmit = () => {
  // Reset errors
  errors.value = {}

  // Validate inputs
  if (!formData.value.name) {
    errors.value.name = 'Please enter your name'
  }
  if (!formData.value.email) {
    errors.value.email = 'Please enter a valid email address'
  } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  if (!formData.value.subject) {
    errors.value.subject = 'Please enter your subject'
  }
  if (!formData.value.message) {
    errors.value.message = 'Please enter a message'
  }

  // If there are no errors, submit the form
  if (Object.keys(errors.value).length === 0) {
    console.log('Form submitted:', formData.value)
    // Simulate form submission, you can replace this with an actual API call
    alert('Your message has been sent successfully!')
    formData.value = { name: '', email: '', subject: '', message: '' } // Reset form
  }
}
</script>

<template>
  <!-- Section 1 -->
  <section class="relative bg-slate-900 min-h-screen flex flex-col items-center justify-center">
    <div class="absolute inset-0 z-5">
      <div class="bubble-section1"></div>
      <div class="bubble-section1 bubble-delay-2000"></div>
      <div class="bubble-section1 bubble-delay-4000"></div>
      <div class="bubble-section1 bubble-delay-6000"></div>
    </div>

    <h1
      data-aos="fade-down"
      data-aos-delay="100"
      class="z-10 -mt-14 mb-6 text-center text-6xl font-bold text-white"
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
    <button
      @click="scrollToSection2"
      data-aos="fade-up"
      data-aos-delay="700"
      class="z-10 text-md btn-shadow px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-indigo-800 hover:from-blue-600 hover:to-indigo-600 text-white font-normal"
    >
      See More
    </button>
  </section>

  <!-- Section 2 -->
  <section
    ref="section2"
    class="px-5 py-10 grid grid-cols-1 md:grid-cols-2 min-h-screen items-center bg-slate-900 text-white gap-14"
  >
    <div class="flex justify-center -mt-24" data-aos="fade-down">
      <img :src="profilSection2" alt="" class="w-[93%] object-contain rounded-full shadow-xl" />
    </div>

    <div class="space-y-5" data-aos="fade-up">
      <h1
        class="text-4xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-50 text-transparent bg-clip-text"
      >
        {{ typeText }}
      </h1>
      <p class="text-lg text-white">
        I am a web developer tasked with building static and dynamic applications, according to
        existing project requirements.
      </p>
      <p class="text-lg text-white">
        <span class="font-semibold text-amber-500">Front-End Developer</span> with expertise....
        <span
          @click="scrollToSection3"
          class="text-blue-500 underline text-sm cursor-pointer hover:text-blue-400"
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
          class="text-blue-500 underline text-sm cursor-pointer hover:text-blue-400"
        >
          read more
        </span>
      </p>
      <button
        data-aos="fade-up"
        data-aos-delay="200"
        class="mt-3 text-md px-8 py-3 btn-shadow cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-indigo-800 hover:from-blue-600 hover:to-indigo-600 text-white font-normal"
      >
        View Portfolio
      </button>
    </div>
  </section>

  <!-- Section 3 -->
  <section id="section3" class="scroll-mt-12 px-5 md:px-10 py-16 text-white bg-slate-900">
    <div class="mb-14 text-center">
      <h2 data-aos="zoom-in" class="mb-7 text-4xl font-semibold">Skills & Tools</h2>
      <p data-aos="fade-up" class="text-lg text-center leading-8 text-white">
        Here are some of the key skills and technologies I use to build web-based applications.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-5">
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

          <ul class="grid grid-cols-2 gap-2 text-md text-gray-300 list-disc list-inside">
            <li>Responsive Design</li>
            <li>JavaScript Native</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>HTML5</li>
            <li>Element UI</li>
            <li>Flowbite</li>
            <li>Vue JS</li>
            <li>Nuxt JS</li>
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
          <ul class="grid grid-cols-2 gap-2 text-md text-gray-300 list-disc list-inside">
            <li>Laravel</li>
            <li>PhpMyAdmin</li>
            <li>REST API</li>
            <li>MYSQL</li>
            <li>Consume API</li>
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
          <ul class="grid grid-cols-2 text-md gap-2 text-gray-300 list-disc list-inside">
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
    </div>
  </section>

  <!-- Section 4 -->
  <section class="px-5 md:px-10 py-16 text-white bg-slate-900">
    <div class="mb-16 text-center">
      <h2 data-aos="fade-up" class="mb-7 text-4xl font-semibold">My Projects</h2>
      <p data-aos="fade-up" data-aos-delay="200" class="text-lg">
        The following are the projects that I have developed
      </p>
    </div>
    <div class="min-h-screen">
      <!-- Nav menu section 4 -->
      <div
        class="p-3 mb-14 shadow-xl mx-auto max-w-2xl bg-slate-700/20 rounded-full flex justify-center items-center"
      >
        <div class="flex space-x-10">
          <button
            v-for="tab in clickTab"
            :key="tab"
            @click="defaultTab = tab"
            :class="[
              'px-10 py-3  text-md cursor-pointer rounded-full shadow-xl',
              defaultTab === tab
                ? 'btn-shadow  bg-gradient-to-r from-blue-500 to-indigo-800 hover:from-blue-600 hover:to-indigo-600 text-white font-normal'
                : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-normal ',
            ]"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- TAB CONTENT -->
      <div>
        <div v-if="defaultTab === 'Projects'">
          <!-- Projects Content -->
          <div class="grid md:grid-cols-3 gap-8">
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
                  <p class="text-sm mb-5">{{ project.description }}</p>
                </div>
                <div class="flex justify-between mt-auto">
                  <!-- <button class="text-sm text-blue-400 hover:underline">Live Demo</button> -->
                  <button class="text-blue-500 text-sm cursor-pointer hover:text-blue-400">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="defaultTab === 'Certificates'" class="text-center">
          <div class="grid md:grid-cols-3 gap-8">
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
                  <p class="text-sm mb-5">{{ certificate.description }}</p>
                </div>
                <div class="flex justify-between mt-auto">
                  <!-- <button class="text-sm text-blue-400 hover:underline">Live Demo</button> -->
                  <button class="text-blue-500 text-sm cursor-pointer hover:text-blue-400">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="defaultTab === 'Tech Stack'" class="text-center">
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(techStack, index) in techStacks"
              :key="techStack.title"
              class="flex flex-col bg-slate-900 border-wrapper overflow-hidden shadow-lg"
              :data-aos="'fade-up'"
              :data-aos-delay="(index + 1) * 200"
            >
              <img :src="techStack.image" :alt="techStack.title" class="h-52 w-full object-cover" />
              <div class="p-5 flex-1 flex flex-col">
                <div>
                  <h3
                    class="mb-3 text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                  >
                    {{ techStack.title }}
                  </h3>
                  <p class="text-sm mb-5">{{ techStack.description }}</p>
                </div>
                <div class="flex justify-between mt-auto">
                  <!-- <button class="text-sm text-blue-400 hover:underline">Live Demo</button> -->
                  <button class="text-blue-500 text-sm cursor-pointer hover:text-blue-400">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5 -->
  <section class="px-5 md:px-10 py-16 text-white bg-slate-900">
    <div class="container mx-auto">
      <div class="mb-14 lg:-mt-28 text-center text-white">
        <h2 data-aos="fade-up" class="mb-7 text-4xl font-semibold">Contact</h2>
        <p data-aos="fade-up" data-aos-delay="200" class="text-lg">
          Here is my contact listed below
        </p>
      </div>

      <!-- Contact Info Section (Left Side) -->
      <div
        data-aos="fade-up"
        class="flex flex-col lg:flex-row mx-auto max-w-7xl justify-between gap-8"
      >
        <!-- Contact Info -->
        <div
          class="lg:w-1/3 p-16 px-10 border-wrapper rounded-xl shadow-xl bg-slate-900 text-white"
        >
          <div class="mb-6">
            <div class="flex mb-4">
              <div
                class="font-medium text-md bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
              >
                <h3 class="">Email</h3>
                <p class="text-sm text-white">kadekpriananda12@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <div
                class="font-medium text-md bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
              >
                <h3 class="">Phone</h3>
                <p class="text-sm text-white">+6285964306002</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <div
                class="font-medium text-md bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
              >
                <h3 class="">Address</h3>
                <p class="text-sm text-white">Jalan by pass ngurah rai. Jalan merta sari No.76</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Section (Right Side) -->
        <div
          class="lg:w-2/3 p-16 px-10 border-wrapper rounded-xl shadow-xl bg-slate-900 text-white"
        >
          <form @submit.prevent="handleSubmit">
            <!-- Full Name -->
            <div class="mb-6">
              <label
                for="name"
                class="font-medium text-md bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                >FullName</label
              >
              <input
                v-model="formData.name"
                type="text"
                id="name"
                class="w-full mt-2 p-3 border border-gray-600 rounded-lg focus:outline-none placeholder:text-sm placeholder:text-white"
                placeholder="Please enter your name"
                :class="{ 'border-red-500': errors.name }"
              />
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </div>

            <!-- Email Address -->
            <div class="mb-6">
              <label
                for="email"
                class="font-medium text-md bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                >Email</label
              >
              <input
                v-model="formData.email"
                type="email"
                id="email"
                class="w-full mt-2 p-3 border border-gray-600 rounded-lg focus:outline-none placeholder:text-sm placeholder:text-white"
                placeholder="Please enter a valid email"
                :class="{ 'border-red-500': errors.email }"
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>

            <!-- Subject -->
            <!-- <div class="mb-6">
              <label
                for="subject"
                class="font-medium text-md bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                >Subject</label
              >
              <input
                v-model="formData.subject"
                type="text"
                id="subject"
                class="w-full mt-2 p-3 border border-gray-600 rounded-lg focus:outline-none placeholder:text-sm"
                placeholder="Please enter your subject"
                :class="{ 'border-red-500': errors.subject }"
              />
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div> -->

            <!-- Message -->
            <div class="mb-6">
              <label
                for="message"
                class="font-medium text-md bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                >Message</label
              >
              <textarea
                v-model="formData.message"
                id="message"
                class="w-full mt-2 p-3 border border-gray-600 rounded-lg focus:outline-none placeholder:text-sm placeholder:text-white"
                placeholder="Please enter your message"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full text-md p-3 mt-3 px-8 py-3 btn-shadow cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-indigo-800 hover:from-blue-600 hover:to-indigo-600 text-white font-normal"
            >
              Send Message
            </button>
          </form>
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
  position: absolute;
  width: 160px;
  height: 160px;
  background: radial-gradient(circle at center, rgba(12, 78, 201, 0.792), transparent);
  border-radius: 50%;
  animation: bubble 10s linear infinite alternate;
}

.bubble-section1:nth-child(2) {
  left: 20%;
  top: 60%;
}
.bubble-section1:nth-child(3) {
  left: 50%;
  top: 20%;
}
.bubble-section1:nth-child(4) {
  left: 60%;
  top: 80%;
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

.btn-shadow {
  box-shadow: 0 0 16px 2px #0b42c0cb;
}
</style>
