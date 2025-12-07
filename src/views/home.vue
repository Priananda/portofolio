<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import imageProject1 from '@/assets/images/project1.png'
import imageProject2 from '@/assets/images/project2.png'
import imageProject3 from '@/assets/images/project3.png'
import imageProject4 from '@/assets/images/project4.png'
import imageProject5 from '@/assets/images/project5.png'

import imageCertificate1 from '@/assets/images/certificate1.png'
import imageCertificate2 from '@/assets/images/certificate2.png'
import imageCertificate3 from '@/assets/images/certificate3.png'
import imageCertificate4 from '@/assets/images/certificate4.png'
import imageCertificate5 from '@/assets/images/certificate5.png'

import profilSection2 from '@/assets/images/foto.png'
import AllButton from '@/components/button/AllButton.vue'
import ButtonTab from '@/components/button/ButtonTab.vue'

import {
  LayoutTemplate,
  Settings,
  Database,
  Boxes,
  Layers,
  Wrench,
  Code2,
  User2,
  Briefcase,
  ArrowDownCircle,
  FolderGit2,
  Award,
  ExternalLink,
  Eye,
} from 'lucide-vue-next'

// Typing text otomatis
const textFull = 'Hello, I’m Priananda'
const typeText = ref('')
const typingDuration = 90

onMounted(async () => {
  // Typing
  let index = 0
  const type = () => {
    if (index < textFull.length) {
      typeText.value += textFull.charAt(index)
      index++
      setTimeout(type, typingDuration)
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
    offset: 50,
    startEvent: 'load',
    easing: 'ease-out-cubic',
  })
  AOS.refresh()
})

// Fungsi scroll ke section 2
function scrollToSection2() {
  const targetSection2 = document.getElementById('section2')
  targetSection2.scrollIntoView({ behavior: 'smooth' })
}

// Button project
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
    title: 'Ordering Menu & Dashboard Admin on Ikan Bakar Bli Putu',
    linkProject: 'https://gitlab.com/kadekpriananda12/website-ibbp.git',
    image: imageProject1,
  },
  {
    title: 'Company Profile on Ikan Bakar Bli Putu',
    linkProject: 'https://gitlab.com/kadekpriananda12/website-ibbp.git',
    image: imageProject2,
  },
  {
    title: 'Jinom Resellers (Internship Front-end Developer)',
    linkProject: 'https://gitlab.com/kadekpriananda12/jinom_reseller.git',
    image: imageProject3,
  },
  // {
  //   title: 'TaskList',
  //   linkProject: 'https://gitlab.com/kadekpriananda12/task_list.git',
  //   image: imageProject4,
  // },
  {
    title: 'Chatting',
    linkProject: 'https://gitlab.com/kadekpriananda12/chatting.git',
    image: imageProject5,
  },
]
const certificates = [
  {
    title: 'Certificate Internship Front-end Developer on PT Jinom Network Indonesia',
    linkCertificate: '',
    image: imageCertificate1,
  },
  {
    title: 'Certificate Web Developer MBKM BootCamp on PT Amanah Karya Indonesia',
    linkCertificate: '',
    image: imageCertificate2,
  },
  {
    title:
      'Certificate Programmer BNSP (Badan Nasional Sertifikasi Profesi) on Primakara University',
    linkCertificate: '',
    image: imageCertificate3,
  },
  {
    title: 'Certificate CAREER PREPARATION on Primakara University',
    linkCertificate: '',
    image: imageCertificate4,
  },
  {
    title: 'Certificate FCNS (Foresec Certified in Networking Security) on Primakara University',
    linkCertificate: '',
    image: imageCertificate5,
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

const visibleName = ref(true)
let scrollY = 0
const scrollPage = () => {
  if (window.scrollY > scrollY) {
    visibleName.value = false
  } else {
    visibleName.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollPage)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollPage)
})

const skillCategories = [
  {
    title: 'Front-end',
    icon: LayoutTemplate,
    delay: 200,
    list: ['HTML5', 'Vue.js', 'React.js', 'Next.js'],
  },
  {
    title: 'Back-end',
    icon: Settings,
    delay: 300,
    list: ['Laravel', 'Express.js'],
  },
  {
    title: 'Styling Web',
    icon: Code2,
    delay: 350,
    list: ['CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive'],
  },
  {
    title: 'State Management',
    icon: Layers,
    delay: 400,
    list: ['Redux', 'Pinia'],
  },
  {
    title: 'Database',
    icon: Database,
    delay: 450,
    list: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Interface',
    icon: Boxes,
    delay: 500,
    list: ['REST API', 'Consume API', 'Slicing UI'],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    delay: 550,
    list: ['GitHub', 'GitLab', 'VS Code', 'Postman', 'Docker'],
  },
]
</script>

<template>
  <!-- Section 1 -->
  <section
    id="section1"
    class="container mx-auto relative min-h-screen scroll-mt-44 bg-white flex flex-col items-center justify-center"
  >
    <div class="absolute inset-0 z-5">
      <div class="bubble-section1"></div>
      <div class="bubble-section1"></div>
      <div class="bubble-section1"></div>
      <div class="bubble-section1"></div>
    </div>

    <h1
      data-aos="fade-down"
      data-aos-delay="100"
      class="z-10 mt-12 mb-6 text-center text-5xl md:text-7xl lg:text-7xl text-shadow-md font-bold text-blue-800 leading-20"
    >
      Welcome to My Portfolio
    </h1>
    <p
      data-aos="fade-up"
      data-aos-delay="300"
      class="z-10 mb-3 px-2 md:px-0 lg:px-0 text-lg text-center leading-8 text-gray-800"
    >
      Welcome to my portfolio. Discover my work and experience below.
    </p>
    <div class="z-10 mt-4 flex flex-col items-center">
      <AllButton label="See More" @click="scrollToSection2" />

      <!-- Scroll Indicator -->
      <ArrowDownCircle
        class="mt-6 w-10 h-10 text-blue-700 animate-bounce z-10 cursor-pointer"
        @click="scrollToSection2"
      />
    </div>
  </section>

  <!-- Section 2 -->
  <section
    id="section2"
    class="relative container mx-auto scroll-mt-20 bg-white mt-1 md:-mt-44 lg:-mt-5 px-5 md:px-2 lg:px-14 py-14 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-16 overflow-hidden"
  >
    <!-- Profile Image -->
    <div class="relative flex justify-center z-10" data-aos="fade-down">
      <!-- Gradient Background -->
      <div
        class="absolute inset-0 -z-10 w-[80%] h-[80%] mt-18 mx-auto rounded-3xl blur-2xl opacity-80 bg-gradient-to-b from-blue-500 to-indigo-600"
      ></div>

      <img
        :src="profilSection2"
        alt="Profile"
        class="w-full md:max-w-xl lg:max-w-xl object-contain rounded-2xl shadow-[0_10px_35px_rgba(59,130,246,0.25)]"
      />
    </div>

    <!-- Text Content -->
    <div class="space-y-3 z-10" data-aos="fade-up">
      <h2
        class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text [-webkit-background-clip:text] bg-gradient-to-r from-blue-800 to-indigo-900 flex items-center gap-2"
      >
        {{ typeText }}
      </h2>

      <p class="text-justify leading-8 text-gray-800 text-lg break-words hyphens-auto">
        I'm a web developer specializing in building website-based applications. I’ve developed
        various projects such as online ordering systems, admin dashboards, reseller systems,
        personal task tools, and more.
        <br /><br />
        <span class="flex items-center gap-2 font-medium text-blue-700">
          <User2 class="w-5 h-5" />
          Experienced in teamwork & independent development.
        </span>
        <span class="flex items-center gap-2 font-medium text-indigo-700">
          <Code2 class="w-5 h-5" />
          Passionate about continuous learning & innovation.
        </span>
      </p>

      <!-- Skill Badges -->
      <div class="flex flex-wrap gap-3 mt-4">
        <span
          class="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
        >
          <Code2 class="w-4 h-4" />
          Web Apps
        </span>
        <span
          class="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm"
        >
          <Briefcase class="w-4 h-4" />
          Teamwork
        </span>
      </div>

      <!-- Download Button -->
      <AllButton icon="Download" label="Download CV" @click="downloadCV" />
    </div>
  </section>

  <!-- Section 3 -->
  <section
    id="section3"
    class="container mx-auto scroll-mt-28 mt-10 px-5 md:px-2 lg:px-14 bg-white"
  >
    <!-- Heading -->
    <div class="text-center mb-14">
      <h2
        data-aos="zoom-in"
        class="mb-6 text-4xl text-blue-800 font-bold text-shadow-sm flex items-center justify-center gap-3"
      >
        <Code2 class="w-10 h-10 text-blue-800" />
        Skills & Tools
      </h2>
      <p data-aos="fade-up" class="text-lg text-gray-700 leading-8 max-w-2xl mx-auto">
        Here are the core technologies and tools I use to craft modern, responsive, and scalable web
        applications.
      </p>
    </div>

    <!-- Grid Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <!-- Card Component -->
      <div
        v-for="(item, i) in skillCategories"
        :key="i"
        class="relative group bg-white rounded-2xl p-8 shadow-[0_10px_35px_rgba(0,0,0,0.07)] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)] hover:-translate-y-2 hover:scale-[1.02]"
        data-aos="fade-up"
        :data-aos-delay="item.delay"
      >
        <!-- Absolute Gradient Glow -->
        <div
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-600/20 blur-2xl"
        ></div>

        <!-- Icon -->
        <div class="relative z-10 flex justify-center mb-5">
          <component :is="item.icon" class="w-12 h-12 text-blue-800 transition-all" />
        </div>

        <!-- Title -->
        <h3
          class="relative z-10 text-2xl font-bold text-center bg-gradient-to-r from-blue-800 to-indigo-700 text-transparent bg-clip-text mb-6"
        >
          {{ item.title }}
        </h3>

        <!-- Badges -->
        <div class="relative z-10 flex flex-wrap justify-center gap-3">
          <span
            v-for="(tech, j) in item.list"
            :key="j"
            class="px-4 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-100"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4 -->
  <!-- Section 4 -->
  <section
    id="section4"
    class="scroll-mt-28 container mx-auto mt-24 px-5 md:px-2 lg:px-14 bg-white"
  >
    <div>
      <!-- Heading -->
      <div class="text-center">
        <h2
          data-aos="zoom-in"
          class="mb-6 text-4xl text-blue-800 font-bold text-shadow-sm flex items-center justify-center gap-3"
        >
          <FolderGit2 class="w-10 h-10 text-blue-800" />
          My Projects
        </h2>

        <p
          data-aos="fade-up"
          class="z-10 mb-14 px-2 md:px-0 text-lg text-center leading-8 text-gray-800"
        >
          The following are the projects that I have developed
        </p>
      </div>

      <!-- Tabs -->
      <div
        class="md:p-3 lg:p-3 mb-14 md:shadow-xl mx-auto max-w-xl md:bg-blue-300/20 rounded-full flex justify-center items-center"
      >
        <div class="flex flex-wrap justify-center gap-10 w-full md:space-x-10">
          <ButtonTab
            v-for="tab in clickTab"
            :key="tab"
            :isActive="defaultTab === tab"
            @click="defaultTab = tab"
            class="flex justify-center w-auto"
          >
            <div
              class="flex items-center gap-2"
              :class="defaultTab === tab ? 'text-white' : 'text-blue-700'"
            >
              <FolderGit2 v-if="tab === 'Projects'" class="w-5 h-5" />
              <Award v-else-if="tab === 'Certificates'" class="w-5 h-5" />
              {{ tab }}
            </div>
          </ButtonTab>
        </div>
      </div>

      <!-- CONTENT -->
      <div>
        <!-- PROJECTS TAB -->
        <div v-if="defaultTab === 'Projects'">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(project, index) in projects"
              :key="project.title"
              class="group relative flex flex-col overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-md shadow-blue-800/10 hover:shadow-2xl hover:shadow-blue-800/30 hover:-translate-y-2 transition-all duration-300 ease-out"
              :data-aos="'fade-up'"
              :data-aos-delay="(index + 1) * 200"
            >
              <!-- Gradient Top Border -->
              <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-700"
              ></div>

              <!-- Image -->
              <div class="overflow-hidden bg-blue-50">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="h-56 w-full object-contain p-6 transition-all duration-300 group-hover:scale-105"
                />
              </div>

              <!-- Content -->
              <div class="p-6 space-y-5 flex flex-col flex-1">
                <h3 class="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  {{ project.title }}
                </h3>

                <!-- Links -->
                <div class="space-y-1">
                  <p class="text-gray-600 flex items-center gap-2 text-sm">
                    <ExternalLink class="w-4 h-4 text-blue-700" />
                    Project Link:
                  </p>

                  <a
                    :href="project.linkProject"
                    target="_blank"
                    class="flex items-center gap-2 text-blue-700 font-semibold underline hover:text-blue-900 break-all"
                  >
                    {{ project.linkProject }}
                    <ExternalLink class="w-4 h-4" />
                  </a>
                </div>

                <!-- Button -->
                <button
                  @click="openModalOnDetail(project)"
                  class="mt-auto inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-900 hover:underline transition"
                >
                  <Eye class="w-4 h-4" />
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- CERTIFICATES TAB -->
        <div v-else-if="defaultTab === 'Certificates'">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(certificate, index) in certificates"
              :key="certificate.title"
              class="group relative flex flex-col overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-md shadow-blue-800/10 hover:shadow-2xl hover:shadow-blue-800/30 hover:-translate-y-2 transition-all duration-300 ease-out"
              :data-aos="'fade-up'"
              :data-aos-delay="(index + 1) * 200"
            >
              <!-- Gradient Top Border -->
              <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-700"
              ></div>

              <div class="overflow-hidden bg-blue-50">
                <img
                  :src="certificate.image"
                  :alt="certificate.title"
                  class="h-56 w-full object-contain p-6 transition-all duration-300 group-hover:scale-105"
                />
              </div>

              <div class="p-6 space-y-5 flex flex-col flex-1">
                <h3 class="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Award class="w-8 h-8 text-blue-700" />
                  {{ certificate.title }}
                </h3>

                <button
                  @click="openModalOnDetail(certificate)"
                  class="mt-auto inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-900 hover:underline transition"
                >
                  <Eye class="w-4 h-4" />
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5 -->
  <section id="section5" class="container mx-auto scroll-mt-28 mt-24 mb-24 px-5 md:px-2 lg:px-14">
    <div class="text-center mb-16">
      <h2
        data-aos="zoom-in"
        class="mb-6 text-4xl text-blue-800 font-bold text-shadow-sm flex items-center justify-center gap-3"
      >
        <User2 class="w-10 h-10 text-blue-800" />
        My Contact
      </h2>
      <p data-aos="fade-up" class="mt-4 text-lg text-gray-700">
        Feel free to reach out through any platform below.
      </p>
    </div>

    <div data-aos="fade-up" class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      <!-- Left -->
      <div
        class="p-10 rounded-2xl shadow-xl bg-white border border-blue-100 hover:shadow-2xl transition-all duration-300"
      >
        <!-- Email -->
        <div class="flex gap-4 mb-8 items-start">
          <div class="w-6 h-6 text-blue-700 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-gray-900">Email</h3>
            <a
              href="mailto:kadekpriananda12@gmail.com"
              class="text-blue-700 hover:underline break-all"
            >
              kadekpriananda12@gmail.com
            </a>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex gap-4 mb-8 items-start">
          <fiv class="w-6 h-6 text-blue-700 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-gray-900">Phone / WhatsApp</h3>
            <a
              href="https://wa.me/6285964306002?text=Hallo%20saya%20ingin%20%20berdiskusi%20lebih%20lanjut"
              target="_blank"
              class="text-blue-700 hover:underline break-all"
            >
              +62 859-6430-6002
            </a>
          </div>
        </div>

        <!-- Address -->
        <div class="flex gap-4 items-start">
          <div class="w-6 h-6 text-blue-700 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-gray-900">Address</h3>
            <p class="text-gray-700 leading-7 break-all">
              Jalan By Pass Ngurah Rai, Jalan Merta Sari No. 76 Jimbaran, Kuta Selatan, Badung, Bali
              80361
            </p>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div
        class="p-10 rounded-2xl shadow-xl bg-white border border-blue-100 hover:shadow-2xl transition-all duration-300"
      >
        <!-- Github -->
        <div class="flex gap-4 mb-8 items-start">
          <GitHub class="w-6 h-6 text-gray-900 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-gray-900">GitHub</h3>
            <a
              href="https://github.com/Priananda"
              target="_blank"
              class="text-blue-700 hover:underline break-all"
            >
              https://github.com/Priananda
            </a>
          </div>
        </div>

        <!-- Gitlab -->
        <div class="flex gap-4 mb-8 items-start">
          <GitLab class="w-6 h-6 text-orange-600 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-gray-900">GitLab</h3>
            <a
              href="https://gitlab.com/kadekpriananda12"
              target="_blank"
              class="text-blue-700 hover:underline break-all"
            >
              https://gitlab.com/kadekpriananda12
            </a>
          </div>
        </div>

        <!-- Linkedin -->
        <div class="flex gap-4 items-start">
          <LinkedIn class="w-6 h-6 text-blue-700 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-gray-900">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/i-kadek-priananda-37573934b/"
              target="_blank"
              class="text-blue-700 hover:underline break-all"
            >
              https://www.linkedin.com/in/i-kadek-priananda-37573934b/
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal Detail Project -->
  <section class="container mx-auto">
    <transition
      enter-active-class="transition transform duration-300"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition transform duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div
        v-if="selectedCard"
        class="fixed inset-0 px-3 bg-black/20 flex items-center justify-center z-50"
      >
        <div
          class="relative bg-white w-full max-w-xl max-h-[70vh] rounded-xl shadow-md shadow-blue-800/20 overflow-hidden"
        >
          <div
            class="px-7 py-12 md:px-8 md:py-12 lg:px-10 lg:py-12 overflow-y-auto max-h-[70vh] lg:text-justify hide-scrollbar-to-modal"
          >
            <h2 class="text-lg font-bold mb-4">{{ selectedCard.title }}</h2>

            <!-- Konten berbeda per title -->
            <div
              v-if="selectedCard.title === 'Ordering Menu & Dashboard Admin on Ikan Bakar Bli Putu'"
            >
              <div class="text-md text-gray-800 space-y-5 leading-8 break-words hyphens-auto">
                <p>
                  <strong>1.</strong> Pemesanan Menu: Pemesanan menu secara online diperuntukkan
                  oleh pelanggan untuk mempermudah proses pemesanan menu secara online.
                </p>

                <p class="ml-3">
                  Informasi Pemesanan Menu: Dalam sistem pemesanan menu pelanggan mulai untuk
                  melakukan scan qrcode yang tertera di setiap meja yang pelanggan, kemudian setelah
                  scan pelanggan dapat mengisikan nama lengkap lalu menampilkan daftar menu dan
                  keranjang. Pelanggan dapat memesan menu baik makanan lalu minuman, setelah
                  melakukan pemesanan maka pelanggan mendapatkan billing yang berisikan data
                  pelanggan dan data pesanan pelanggan. Pihak restoran otomatis mengetahui data yang
                  dipesan pelanggan dan segera memprosesnya.
                </p>

                <p>
                  <strong>2.</strong> Dashboard Admin: Dashboard Admin dapat mengelola data pesanan
                  pelanggan, pengelolaan inventaris dan supplier.
                </p>
                <p class="ml-3">
                  Informasi Dashboard Admin: Dalam sistem, admin dipersilahkan registrasi dan login
                  terlebih dahulu. Setelah login terdapat dashboard admin yakni, manajemen pesanan
                  pelanggan, inventaris, supplier, dan profil admin.
                </p>

                <p><strong>3.</strong> Fitur-fitur Pemesanan Menu:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>QRCode Scanning.</li>
                  <li>Form Data Pelanggan.</li>
                  <li>Daftar Makanan dan Minuman.</li>
                  <li>Keranjang (Cart).</li>
                  <li>Billing Data Pelanggan.</li>
                </ul>

                <p><strong>4.</strong> Fitur-fitur Dashboard Admin:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>Autentikasi Registrasi danLogin serta logout (Admin) .</li>
                  <li>Manajemen Pesanan Pelanggan.</li>
                  <li>Manajemen Inventaris.</li>
                  <li>Manajemen Supplier.</li>
                  <li>Profil Admin.</li>
                </ul>

                <p><strong>5.</strong> Jobdesk pada fitur Pemesanan Menu:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>
                    Mengimplementasikan sistem pemesanan berbasis QRCode scanning yang memungkinkan
                    pelanggan melakukan scan di setiap meja.
                  </li>
                  <li>Mengimplementasikan form input data pelanggan secara dinamis.</li>
                  <li>
                    Menampilkan daftar makanan dan minuman secara dinamis yang dapat ditambahkan ke
                    dalam keranjang.
                  </li>
                  <li>
                    Mengembangkan fitur keranjang (cart) yang memungkinkan pelanggan mengelola item
                    sebelum checkout.
                  </li>
                  <li>
                    Menghasilkan billing otomatis yang menampilkan detail pelanggan dan pesanan,
                    serta menghubungkannya ke sistem restoran.
                  </li>
                </ul>

                <p><strong>6.</strong> Jobdesk pada fitur Dashboard Admin:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>
                    Mengimplementasikan sistem autentikasi admin, termasuk registrasi, login, dan
                    logout menggunakan Laravel.
                  </li>
                  <li>
                    Mengembangkan halaman dashboard untuk manajemen pesanan pelanggan dan akumulasi
                    total bahan.
                  </li>
                  <li>
                    Membangun manajemen inventaris dan supplier dengan fitur CRUD (Create, Read,
                    Update, Delete).
                  </li>
                  <li>Membuat halaman profil admin untuk informasi pribadi.</li>
                </ul>

                <p>
                  <strong>7.</strong> Tech Stack: Laravel, MySql, CSS3, Javascript, dan Bootstrap.
                </p>
              </div>
            </div>

            <div v-else-if="selectedCard.title === 'Company Profile on Ikan Bakar Bli Putu'">
              <div class="text-md text-gray-800 space-y-5 leading-8 break-words hyphens-auto">
                <p>
                  <strong>1.</strong> Company Profile: Company Profile ini diperuntukkan untuk umum
                  maupun pelanggan agar mengetahui tentang restoran Ikan Bakar BliPutu secara online
                </p>

                <p class="ml-3">
                  Informasi: Dalam sistem company profile ini memuat halaman utama, menu, about,
                  order online, pada restaurant tersebut. Selain itu pelanggan dapat memesan makanan
                  dari jarak jauh menggunakan apps yang di integrasikan langsung di dalam company
                  profile restaurant tersebut.
                </p>

                <p><strong>2.</strong> Fitur-fitur Company Profile:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>Halaman utama.</li>
                  <li>Halaman Menu.</li>
                  <li>Halaman About.</li>
                  <li>Order Online.</li>
                  <li>Pencarian Menu.</li>
                  <li>Integrasi Super Apps.</li>
                </ul>
                <p><strong>3.</strong> Jobdesk pada fitur Company Profile:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>
                    Membangun halaman utama sebagai landing page yang menampilkan informasi umum
                    restoran.
                  </li>
                  <li>
                    Mengembangkan halaman menu yang menampilkan daftar makanan dan minuman secara
                    responsif.
                  </li>
                  <li>Mendesain halaman About untuk menjelaskan profil restoran.</li>
                  <li>Mengintegrasikan fitur Order Online pada layanan Super Apps.</li>
                  <li>
                    Menambahkan fitur redirect ke WhatsApp untuk memudahkan pelanggan menghubungi
                    restoran secara langsung.
                  </li>
                  <li>Menerapkan fitur pencarian menu berbasis kata kunci.</li>
                </ul>

                <p><strong>4.</strong> Tech Stack: HTML, CSS3, dan Javascript.</p>
              </div>
            </div>

            <div
              v-else-if="selectedCard.title === 'Jinom Resellers (Internship Front-end Developer)'"
            >
              <div class="text-md text-gray-800 space-y-5 leading-8 break-words hyphens-auto">
                <p>
                  <strong>1.</strong> Jinom Resellers: Jinom Resellers mendukung UMKM internet lokal
                  yang menyediakan internet ke pelanggan seluruh Indonesia. Jinom reseller ini
                  diperuntukkan kepada calon reseller untuk menjadi reseller Jinom.
                  <span class="text-blue-800 hover:text-blue-800/90 hover:underline"
                    >devresellers.jinom.ai</span
                  >
                </p>

                <p class="ml-3">
                  Informasi Jinom Reseller: Dalam sistem Jinom reseller memiliki informasi lengkap
                  yang diperuntukkan kepada calon reseller seperti halaman utama, layanan reseller,
                  ketentuan dan kerjasama, fasilitas dan keuntungan, dukungan reseller, program, dan
                  kontak. Kemudian untuk dinamisnya terdapat registrasi, login, cek titik koordinat
                  dengan maps api, menampilkan paket jaringan, detail paket jaringan, proses metode
                  pembayaran, upload dokumen yang diperlukan, dan mendapatkan dokumen lewat email.
                </p>

                <p><strong>2.</strong> Fitur-fitur Jinom Reseller:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>Halaman Utama.</li>
                  <li>Layanan Reseller.</li>
                  <li>Ketentuan & Kerjasama.</li>
                  <li>Fasilitas & Keuntungan.</li>
                  <li>Dukungan Reseller.</li>
                  <li>Program.</li>
                  <li>Kontak.</li>
                  <li>Registrasi.</li>
                  <li>OTP.</li>
                  <li>Login.</li>
                  <li>Logout.</li>
                  <li>Cek Tikor (Titik Koordinat).</li>
                  <li>Menampilkan Paket jaringan.</li>
                  <li>Jangkauan Paket jaringan antara reseller dan calon pelanggan.</li>
                  <li>Detail Paket Jaringan.</li>
                  <li>Metode Pembayaran.</li>
                  <li>Registrasi Dokumen Perorangan.</li>
                  <li>Registrasi Dokumen Perseroan.</li>
                  <li>Registrasi Dokumen PT.</li>
                  <li>Registrasi Dokumen CV.</li>
                </ul>
                <p><strong>3.</strong> Jobdesk pada fitur Jinom Reseller:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>
                    Slicing UI halaman utama dan seluruh halaman informasi seperti layanan reseller,
                    ketentuan dan kerjasama, fasilitas dan keuntungan, program, dan kontak dengan
                    tampilan responsif.
                  </li>
                  <li>
                    Slicing UI dan Consume api halaman registrasi dan login reseller termasuk proses
                    verfifikasi OTP.
                  </li>
                  <li>Slicing UI dan Consume api halaman logout.</li>
                  <li>
                    Slicing UI dan Consume api halaman pengecekan titik koordinat lokasi menggunakan
                    Geolocation Maps API untuk mengetahui cakupan area anatra reseller dan
                    pelanggan.
                  </li>
                  <li>
                    Slicing UI dan Consume api halaman paket jaringan dan detail paket jaringan
                    secara dinamis.
                  </li>
                  <li>Slicing UI dan Consume api metode pembayaran secara online.</li>
                  <li>
                    Slicing UI dan Consume api formulir registrasi dokumen untuk berbagai jenis
                    entitas seperti perorangan, perseroan, PT, dan CV.
                  </li>
                </ul>

                <p><strong>4.</strong> Tech Stack: Laravel, MySql, Vue.js, dan Tailwind CSS.</p>
                <p><strong>5.</strong> Interface: REST API dan Consume API.</p>
                <p><strong>6.</strong> Library: Axios dan JWT.</p>
              </div>
            </div>
            <div v-else-if="selectedCard.title === 'Chatting'">
              <div class="text-md text-gray-800 space-y-5 leading-8 break-words hyphens-auto">
                <p>
                  <strong>1.</strong> Chatting: Komunikasi antar lawan berbasis teks yang
                  memungkinkan pengguna untuk saling bertukar pesan secara real-time.
                </p>

                <p class="ml-3">
                  Informasi Chatting: Dalam sistem terdapat aktivitas dinamis seperti: proses
                  registrasi, login, dan chat room untuk melakukan satu ruang percakapan.
                </p>

                <p><strong>2.</strong> Fitur-fitur Chatting:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>Halaman Utama.</li>
                  <li>Registrasi.</li>
                  <li>Login.</li>
                  <li>CRUD.</li>
                  <li>Percakapan 1 lawan 1.</li>
                  <li>Profil Pengguna.</li>
                  <li>Profil lawan pengguna.</li>
                </ul>
                <p><strong>3.</strong> Jobdesk pada fitur TaskList:</p>
                <ul class="list-disc list-inside ml-3">
                  <li>Membangun halaman utama yang menampilkan daftar tugas.</li>
                  <li>
                    Mengimplementasikan halaman registrasi, login, dan logout menggunakan
                    autentikasi berbasis token (JWT).
                  </li>
                  <li>
                    Mengembangkan chatting satu lawan satu secara real-time menggunakan Socket.IO.
                  </li>
                  <li>
                    Mengembangkan CRUD (Create, Read, Update, Delete) untuk pengelolaan data antar
                    pesan.
                  </li>
                  <li>
                    Mengembangkan profil pengguna dan profil lawan bicara dalam ruang percakapan.
                  </li>
                </ul>

                <p><strong>4.</strong> Tech Stack: Express JS, Mongo DB, React JS, Tailwind CSS.</p>
                <p><strong>5.</strong> Interface: REST API dan Consume API.</p>
                <p><strong>6.</strong> Library: Axios, JWT, Socket.IO, dan Redux.</p>
              </div>
            </div>

            <div
              v-else-if="
                selectedCard.title ===
                'Certificate Internship Front-end Developer on PT Jinom Network Indonesia'
              "
            >
              <div class="text-md text-gray-800 space-y-5 leading-relaxed break-words hyphens-auto">
                <p>
                  <strong>1.</strong> Internship: Dapat mengikuti Internship selama 4 bulan, devisi
                  produk bagian front-end developer.
                </p>
              </div>
            </div>

            <div
              v-else-if="
                selectedCard.title ===
                'Certificate Web Developer MBKM BootCamp on PT Amanah Karya Indonesia'
              "
            >
              <div class="text-md text-gray-800 space-y-5 leading-relaxed break-words hyphens-auto">
                <p>
                  <strong>1.</strong> Web Developer: Dapat mengikuti mbkm atau bootcamp selama 6
                  bulan pada bidang web developer.
                </p>
              </div>
            </div>
            <div
              v-else-if="
                selectedCard.title ===
                'Certificate Programmer BNSP (Badan Nasional Sertifikasi Profesi) on Primakara University'
              "
            >
              <div class="text-md text-gray-800 space-y-5 leading-relaxed break-words hyphens-auto">
                <p>
                  <strong>1.</strong> BNSP: Dapat mengikuti sertifikasi bnsp pada bidang programmer.
                </p>
              </div>
            </div>
            <div
              v-else-if="
                selectedCard.title === 'Certificate CAREER PREPARATION on Primakara University'
              "
            >
              <div class="text-md text-gray-800 space-y-5 leading-relaxed break-words hyphens-auto">
                <p><strong>1.</strong> CAREER PREPARATION: Dapat mengikuti persiapan kerja.</p>
              </div>
            </div>
            <div
              v-else-if="
                selectedCard.title ===
                'Certificate FCNS (Foresec Certified in Networking Security) on Primakara University'
              "
            >
              <div class="text-md text-gray-800 space-y-5 leading-relaxed break-words hyphens-auto">
                <p><strong>1.</strong> FCNS: Dapat mengikuti sertifikasi pada bidang networking.</p>
              </div>
            </div>

            <p class="text-md text-gray-800 leading-relaxed" v-else>Tidak ada deskripsi.</p>
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
  <section class="container">
    <transition
      enter-active-class="transition transform duration-300"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition transform duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div
        v-show="visibleName"
        class="fixed top-[80px] left-5 md:left-10 lg:left-14 flex flex-col items-center z-10"
      >
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
    </transition>
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

/* Mobile */
.bubble-section1:nth-child(1) {
  left: 1%;
  top: 5%;
}
.bubble-section1:nth-child(2) {
  left: 15%;
  top: 60%;
}
.bubble-section1:nth-child(3) {
  left: 18%;
  top: 12%;
}
.bubble-section1:nth-child(4) {
  left: 5%;
  top: 70%;
}
/* Tablet */
@media (min-width: 800px) and (max-width: 1023px) {
  .bubble-section1:nth-child(1) {
    left: 10%;
    top: 5%;
  }
  .bubble-section1:nth-child(2) {
    left: 20%;
    top: 60%;
  }
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
  .bubble-section1:nth-child(1) {
    left: 10%;
    top: 5%;
  }
  .bubble-section1:nth-child(2) {
    left: 30%;
    top: 60%;
  }
  .bubble-section1:nth-child(3) {
    left: 45%;
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
