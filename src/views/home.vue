<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import imageProject1 from '@/assets/images/project1.png'
import imageProject2 from '@/assets/images/project2.png'
import imageProject3 from '@/assets/images/project3.png'
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
  User,
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

import gsap from 'gsap'

const text = 'Full-Stack Web Dev'
const titleRef = ref(null)

onMounted(() => {
  const chars = titleRef.value.querySelectorAll('.char')

  gsap.fromTo(
    chars,
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.04,
      duration: 1.2,
      ease: 'power3.out',
      repeat: -1,
      yoyo: true,
      repeatDelay: 1.5,
    },
  )
})

import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const descRef = ref(null)

onMounted(() => {
  const lines = descRef.value.querySelectorAll('.desc-line')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: descRef.value,
      start: 'top 85%',
      end: 'bottom 55%',
      scrub: true,
    },
  })

  // 🔹 Baris naik + fade satu per satu
  tl.fromTo(
    lines,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: 'none',
      stagger: 0.25, // 🔥 INI YANG BUAT PER BARIS
    },
    0,
  )

  // 🔹 Warna berjalan PER BARIS
  tl.to(
    lines,
    {
      backgroundPosition: '0% 0%',
      ease: 'none',
      stagger: 0.25,
    },
    0,
  )
})

// const cards = ref([])
// const cardWrapper = ref(null)

// onMounted(async () => {
//   await nextTick()

//   gsap.fromTo(
//     cards.value,
//     {
//       y: -120,
//       x: (i) => (i % 2 === 0 ? -60 : 60),
//       rotate: (i) => (i % 2 === 0 ? -6 : 6),
//       opacity: 0,
//       scale: 0.95,
//     },
//     {
//       y: 0,
//       x: 0,
//       rotate: 0,
//       scale: 1,
//       opacity: 1,
//       ease: 'none',
//       stagger: {
//         each: 0.4,
//       },
//       scrollTrigger: {
//         trigger: cardWrapper.value,
//         start: 'top 85%',
//         end: '+=700',
//         scrub: 2,
//       },
//     },
//   )
// })

const section2Ref = ref(null)
const imageRef = ref(null)
const textRef = ref(null)

onMounted(() => {
  // Timeline utama
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section2Ref.value,
      start: 'top 75%',
      end: 'bottom 60%',
      scrub: 1,
    },
  })

  // Image parallax + scale
  tl.fromTo(
    imageRef.value,
    {
      y: 80,
      scale: 0.92,
      opacity: 0,
    },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      ease: 'power3.out',
      duration: 1.2,
    },
    0,
  )

  // Text stagger
  tl.fromTo(
    textRef.value.children,
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      ease: 'power3.out',
      duration: 1,
    },
    0.2,
  )

  // Subtle background movement (ambient feel)
  gsap.to(section2Ref.value, {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
      trigger: section2Ref.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})

onMounted(() => {
  const items = gsap.utils.toArray('.desc-item')

  items.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      y: 30,
      filter: 'blur(6px)',
    })

    gsap.to(item, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        end: 'top 65%',
        toggleActions: 'play reverse play reverse',
        onEnter: () => glow(item),
        onEnterBack: () => glow(item),
      },
    })
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill())
})

function glow(el) {
  el.classList.add('text-glow')
  setTimeout(() => el.classList.remove('text-glow'), 700)
}

onMounted(() => {
  const badges = gsap.utils.toArray('.skill-badge')

  badges.forEach((badge, i) => {
    gsap.set(badge, {
      opacity: 0,
      y: 16,
      scale: 0.9,
      filter: 'blur(4px)',
    })

    gsap.to(badge, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.6,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: badge,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      delay: i * 0.1, // subtle cascade
    })
  })
})

onMounted(() => {
  const badges = gsap.utils.toArray('.skill-badge')

  badges.forEach((badge, i) => {
    gsap.set(badge, {
      opacity: 0,
      y: 18,
      scale: 0.92,
      filter: 'blur(4px)',
    })

    gsap.to(badge, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.6,
      ease: 'back.out(1.6)',
      scrollTrigger: {
        trigger: badge,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      delay: i * 0.12, // cascade halus
    })
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill())
})

// section 3
const sectionRef = ref(null)
const skillsLine = ref(null)
const cards = ref([])
onMounted(async () => {
  await nextTick()
  await nextTick() // 🔥 ekstra tick biar v-for pasti render

  console.log('cards:', cards.value.length) // HARUS > 0

  if (!sectionRef.value || !skillsLine.value || cards.value.length === 0) {
    console.warn('Section 3 refs belum siap')
    return
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
  })

  // ✅ LINE FIX (WIDTH + SCALE)
  tl.fromTo(
    skillsLine.value,
    {
      width: 0,
      scaleX: 0,
      opacity: 0,
      transformOrigin: 'center',
    },
    {
      width: 180,
      scaleX: 1,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    },
  )

  // ✅ CARDS FIX
  tl.fromTo(
    cards.value,
    {
      y: 60,
      opacity: 0,
      scale: 0.96,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.15,
    },
    '-=0.4',
  )
})

const journeys = [
  {
    year: '2020',
    title: 'Project A',
    desc: 'Started my journey by joining Project A as a junior developer.',
  },
  {
    year: '2021',
    title: 'Project B',
    desc: 'Worked on real-world applications and team collaboration.',
  },
  {
    year: '2022',
    title: 'Internship',
    desc: 'Internship as Front-end Developer handling production apps.',
  },
  {
    year: '2023',
    title: 'Full Stack Growth',
    desc: 'Building scalable full-stack applications with modern stacks.',
  },
]
const journeySection = ref(null)
const timelineLine = ref(null)
const timelineItems = ref([])
const journeyLine = ref(null)

onMounted(async () => {
  await nextTick()
  await nextTick()

  if (!journeySection.value || !timelineLine.value || !journeyLine.value) {
    console.warn('Journey refs not ready')
    return
  }

  /* ================================
     HORIZONTAL LINE (CENTER → OUT)
  ================================= */
  gsap.fromTo(
    journeyLine.value,
    {
      scaleX: 0,
      opacity: 0,
      transformOrigin: 'center center',
    },
    {
      scaleX: 1,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: journeyLine.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )
  /* ================================
     VERTICAL LINE
  ================================= */
  gsap.fromTo(
    timelineLine.value,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: journeySection.value,
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: true,
      },
    },
  )

  /* ================================
     TIMELINE ITEMS
  ================================= */
  gsap.fromTo(
    timelineItems.value,
    {
      opacity: 0,
      y: 60,
      filter: 'blur(6px)',
    },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      stagger: 0.25,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: journeySection.value,
        start: 'top 75%',
        end: 'bottom 50%',
        scrub: true,
      },
    },
  )
})
</script>

<template>
  <!-- Section 1 -->
  <!-- SECTION 1 -->
  <section
    id="section1"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- BACKGROUND GRADIENT -->
    <div
      class="absolute inset-0 bg-slate-900 bg-gradient-to-br from-indigo-900 via-black to-indigo-900"
    ></div>

    <!-- BOTTOM PURPLE GLOW -->
    <div
      class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[20%] bg-[radial-gradient(ellipse_at_bottom,_#5b21b6_0%,_transparent_70%)] opacity-80"
    ></div>

    <!-- BUBBLE BACKGROUND -->
    <div class="absolute inset-0 z-0">
      <div class="bubble-section1"></div>
      <div class="bubble-section1"></div>
      <div class="bubble-section1"></div>
      <div class="bubble-section1"></div>
    </div>

    <!-- CONTENT -->
    <div
      class="relative z-10 flex flex-col items-center text-center max-w-3xl px-4 md:px-6 lg:px-8 pt-56 pb-32"
    >
      <!-- MAIN TITLE -->
      <h1
        ref="titleRef"
        class="mb-5 text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white"
      >
        <span class="char" v-for="(c, i) in text" :key="i">
          {{ c }}
        </span>
      </h1>

      <!-- NAME -->
      <h2
        class="mb-5 text-lg md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
      >
        Priananda
      </h2>

      <!-- DESCRIPTION -->
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        class="mb-5 text-base md:text-lg leading-relaxed text-slate-300"
      >
        Designing and building full-stack web solutions.
      </p>

      <!-- ACTION -->
      <div class="flex flex-col items-center gap-6">
        <AllButton label="See More" @click="scrollToSection2" />

        <!-- SCROLL INDICATOR -->
        <ArrowDownCircle
          class="w-10 h-10 text-white animate-bounce cursor-pointer drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.9)] transition-shadow duration-300"
          @click="scrollToSection2"
        />
      </div>
    </div>
  </section>

  <!-- Section 2 -->
  <section
    id="section2"
    ref="section2Ref"
    class="relative mx-auto px-5 md:px-6 lg:px-14 py-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-20 overflow-hidden bg-black bg-gradient-to-br from-black via-black to-indigo-950"
  >
    <!-- Ambient light left -->
    <div
      class="pointer-events-none absolute -left-40 top-1/3 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
    ></div>

    <!-- Ambient light right -->
    <div
      class="pointer-events-none absolute -right-40 bottom-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"
    ></div>

    <!-- Profile Image -->
    <div class="relative flex justify-center z-10" data-aos="fade-down">
      <!-- Glow background -->
      <div
        class="absolute -z-10 w-[85%] h-[85%] rounded-3xl blur-3xl opacity-90 bg-gradient-to-b from-blue-600 to-indigo-700"
      ></div>

      <!-- Soft halo -->
      <div
        class="absolute -z-20 w-[110%] h-[110%] rounded-full blur-[120px] bg-indigo-600/20"
      ></div>

      <img
        ref="imageRef"
        :src="profilSection2"
        alt="Profile"
        class="w-full max-w-xl object-contain rounded-2xl shadow-[0_25px_60px_rgba(59,130,246,0.45)]"
      />
    </div>

    <!-- Text Content -->
    <div ref="textRef" class="relative z-10 space-y-5 text-slate-200" data-aos="fade-up">
      <!-- Title -->
      <h2
        class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tight"
      >
        {{ typeText }}
      </h2>

      <!-- Description -->
      <p ref="descRef" class="leading-8 text-lg text-slate-300 space-y-3">
        <span class="desc-item block">
          I'm a full-stack web developer specializing in building scalable, maintainable, and
          high-performance web applications.
        </span>

        <span class="desc-item block">
          I’ve developed online ordering systems, admin dashboards, reseller platforms, task
          management tools, and custom business solutions.
        </span>

        <span class="desc-item flex items-center gap-2 font-medium text-blue-400">
          <User2 class="w-5 h-5" />
          Experienced in teamwork & independent development
        </span>

        <span class="desc-item flex items-center gap-2 font-medium text-indigo-400">
          <Code2 class="w-5 h-5" />
          Passionate about continuous learning & innovation
        </span>
      </p>

      <!-- Skill Badges -->
      <div class="flex flex-wrap gap-3 pt-3">
        <span
          class="skill-badge flex items-center gap-1 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-sm backdrop-blur-md border border-blue-500/20"
        >
          <Code2 class="w-4 h-4" />
          Web Apps
        </span>

        <span
          class="skill-badge flex items-center gap-1 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-sm backdrop-blur-md border border-purple-500/20"
        >
          <Briefcase class="w-4 h-4" />
          Teamwork
        </span>

        <span
          class="skill-badge flex items-center gap-1 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm backdrop-blur-md border border-indigo-500/20"
        >
          <User class="w-4 h-4" />
          Independent Work
        </span>
      </div>

      <!-- Download Button -->
      <div>
        <AllButton icon="Download" label="Download CV" @click="downloadCV" />
      </div>
    </div>
  </section>

  <!-- Section 3 -->
  <section
    id="section3"
    ref="sectionRef"
    class="relative mx-auto px-5 md:px-6 lg:px-14 py-28 bg-black bg-gradient-to-br from-black via-black to-indigo-950 overflow-hidden"
  >
    <!-- TOP LEFT GLOW -->
    <div
      class="pointer-events-none absolute -top-48 -left-48 w-[700px] h-[700px] bg-blue-600/30 rounded-full blur-[160px]"
    ></div>

    <!-- TOP RIGHT GLOW -->
    <div
      class="pointer-events-none absolute -top-48 -right-48 w-[700px] h-[700px] bg-indigo-600/30 rounded-full blur-[160px]"
    ></div>

    <!-- OPTIONAL: SOFT CENTER BOOST -->
    <div
      class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[140px]"
    ></div>

    <!-- Heading -->
    <div class="relative z-10 text-center mb-20">
      <h2
        class="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text flex items-center justify-center gap-3"
      >
        <Code2 class="w-10 h-10 text-blue-400" />
        Skills & Tools
      </h2>

      <!-- Animated Line -->
      <div class="relative flex justify-center mt-4 mb-6">
        <span
          ref="skillsLine"
          class="block h-[3px] w-[180px] rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 shadow-[0_0_20px_rgba(99,102,241,0.6)]"
        ></span>
      </div>

      <p class="text-lg text-gray-300 leading-8 max-w-2xl mx-auto">
        Core technologies and tools I use to build modern, scalable, and high-performance web
        applications.
      </p>
    </div>

    <!-- Cards -->
    <div
      ref="cardWrapper"
      class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      <div
        v-for="(item, i) in skillCategories"
        :key="i"
        ref="cards"
        class="group relative rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-3 hover:shadow-indigo-500/20"
      >
        <!-- Glow Hover -->
        <div
          class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-600/20 blur-2xl transition-opacity duration-500"
        ></div>

        <!-- Icon -->
        <div class="relative z-10 flex justify-center mb-6">
          <div
            class="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-white/10"
          >
            <component
              :is="item.icon"
              class="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform"
            />
          </div>
        </div>

        <!-- Title -->
        <h3
          class="relative z-10 text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text"
        >
          {{ item.title }}
        </h3>

        <!-- Badges -->
        <div class="relative z-10 flex flex-wrap justify-center gap-3">
          <span
            v-for="(tech, j) in item.list"
            :key="j"
            class="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-gray-200 border border-white/10 backdrop-blur-md hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Journey -->
  <section
    ref="journeySection"
    class="relative mx-auto px-6 lg:px-10 py-28 bg-black bg-gradient-to-br from-black via-black to-indigo-950 overflow-hidden"
  >
    <!-- TOP LEFT GLOW -->
    <div
      class="pointer-events-none absolute -top-48 -left-48 w-[700px] h-[700px] bg-blue-600/30 rounded-full blur-[160px]"
    ></div>

    <!-- TOP RIGHT GLOW -->
    <div
      class="pointer-events-none absolute -top-48 -right-48 w-[700px] h-[700px] bg-indigo-600/30 rounded-full blur-[160px]"
    ></div>

    <!-- OPTIONAL: SOFT CENTER BOOST -->
    <div
      class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[140px]"
    ></div>

    <!-- Heading -->
    <!-- Heading -->
    <h2
      class="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text flex items-center justify-center gap-3"
    >
      <Code2 class="w-10 h-10 text-blue-400" />
      Journey & Experience
    </h2>

    <!-- Horizontal Line -->
    <div class="relative flex justify-center mb-6">
      <span
        ref="journeyLine"
        class="block h-[4px] w-[180px] rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 shadow-[0_0_20px_rgba(99,102,241,0.6)] scale-x-0"
      />
    </div>

    <p class="text-center text-gray-300 max-w-2xl mx-auto leading-8 mb-20">
      A timeline of my professional journey, highlighting key projects, learning milestones, and
      hands-on experiences that shaped my growth as a developer.
    </p>

    <!-- Timeline Wrapper -->
    <div class="relative max-w-4xl mx-auto">
      <!-- Vertical Line -->
      <span
        ref="timelineLine"
        class="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400 -translate-x-1/2 scale-y-0 origin-top"
      ></span>

      <!-- Items -->
      <div
        v-for="(item, i) in journeys"
        :key="i"
        ref="timelineItems"
        class="relative flex items-center mb-24"
        :class="i % 2 === 0 ? 'flex-row-reverse' : ''"
      >
        <!-- Content -->
        <div class="w-1/2 px-6">
          <div
            class="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
          >
            <span class="text-blue-400 font-semibold">{{ item.year }}</span>
            <h3 class="text-xl font-bold text-white mt-2">{{ item.title }}</h3>
            <p class="text-gray-300 mt-2 leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>

        <!-- Dot -->
        <!-- Dot -->
        <div class="relative z-10 flex items-center justify-center">
          <!-- outer glow -->
          <span class="absolute w-10 h-10 rounded-full bg-indigo-700 blur-md"></span>

          <!-- main dot -->
          <span
            class="w-5 h-5 rounded-full bg-gradient-to-br from-white via-indigo-700 to-indigo-700 ring-1 ring-indigo-800 shadow-[0_0_15px_rgba(99,102,241,0.9)]"
          ></span>
        </div>

        <div class="w-1/2"></div>
      </div>
    </div>
  </section>

  <!-- Section 4 -->
  <section
    id="section4"
    class="relative mx-auto px-5 md:px-2 lg:px-14 py-28 bg-black bg-gradient-to-br from-black via-black to-indigo-950 overflow-hidden"
  >
    <!-- TOP LEFT GLOW -->
    <div
      class="pointer-events-none absolute -top-48 -left-48 w-[700px] h-[700px] bg-blue-600/30 rounded-full blur-[160px]"
    ></div>

    <!-- TOP RIGHT GLOW -->
    <div
      class="pointer-events-none absolute -top-48 -right-48 w-[700px] h-[700px] bg-indigo-600/30 rounded-full blur-[160px]"
    ></div>

    <!-- CENTER SOFT BOOST -->
    <div
      class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[140px]"
    ></div>

    <div>
      <!-- Heading -->
      <div class="text-center">
        <h2
          class="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text flex items-center justify-center gap-3"
        >
          <FolderGit2 class="w-10 h-10 text-blue-400" />
          My Projects
        </h2>

        <p class="text-center text-gray-300 max-w-2xl mx-auto leading-8 mb-20">
          The following are the projects that I have developed
        </p>
      </div>

      <!-- Tabs -->
      <div
        class="md:p-3 lg:p-3 mb-14 shadow-xl mx-auto max-w-xl md:bg-blue-300/20 rounded-full flex justify-center items-center"
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
              :class="
                defaultTab === tab
                  ? 'text-white'
                  : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text'
              "
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
              v-for="project in projects"
              :key="project.title"
              class="group relative flex flex-col overflow-hidden rounded-2xl border border-blue-800/30 bg-gray-900 shadow-lg shadow-indigo-900/50 transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105"
            >
              <!-- Gradient Top Border -->
              <div
                class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 z-10"
              ></div>

              <!-- IMAGE WRAPPER -->
              <div class="relative h-56 bg-black overflow-hidden">
                <div
                  class="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out transform-gpu group-hover:scale-105"
                >
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="max-h-full max-w-full object-contain p-6 select-none"
                    draggable="false"
                  />
                </div>
              </div>

              <!-- CONTENT -->
              <div class="p-6 space-y-5 flex flex-col flex-1">
                <h3 class="text-lg font-semibold text-white flex items-center gap-2">
                  {{ project.title }}
                </h3>

                <div class="space-y-1">
                  <p class="text-gray-300 flex items-center gap-2 text-sm">
                    <ExternalLink class="w-4 h-4 text-blue-400" />
                    Project Link:
                  </p>
                  <a
                    :href="project.linkProject"
                    target="_blank"
                    class="flex items-center gap-2 text-blue-400 font-semibold underline hover:text-blue-300 break-all"
                  >
                    {{ project.linkProject }}
                    <ExternalLink class="w-4 h-4" />
                  </a>
                </div>

                <button
                  @click="openModalOnDetail(project)"
                  class="mt-auto inline-flex items-center gap-2 text-blue-400 font-medium transition-colors duration-200 hover:text-blue-300 hover:underline"
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
              v-for="certificate in certificates"
              :key="certificate.title"
              class="group relative flex flex-col overflow-hidden rounded-2xl border border-blue-800/30 bg-gray-900 shadow-lg shadow-indigo-900/50 transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105"
            >
              <!-- Gradient Top Border -->
              <div
                class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 z-10"
              ></div>

              <!-- IMAGE WRAPPER -->
              <div class="relative h-56 bg-black overflow-hidden">
                <div
                  class="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out transform-gpu group-hover:scale-105"
                >
                  <img
                    :src="certificate.image"
                    :alt="certificate.title"
                    class="max-h-full max-w-full object-contain p-6 select-none"
                    draggable="false"
                  />
                </div>
              </div>

              <!-- CONTENT -->
              <div class="p-6 space-y-5 flex flex-col flex-1">
                <h3 class="text-lg font-semibold text-white flex items-center gap-2">
                  <Award class="w-8 h-8 text-blue-400" />
                  {{ certificate.title }}
                </h3>

                <button
                  @click="openModalOnDetail(certificate)"
                  class="mt-auto inline-flex items-center gap-2 text-blue-400 font-medium transition-colors duration-200 hover:text-blue-300 hover:underline"
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
  <section
    id="section5"
    class="relative mx-auto px-5 md:px-2 lg:px-14 py-28 bg-black bg-gradient-to-br from-black via-black to-indigo-950 overflow-hidden"
  >
    <!-- TOP LEFT GLOW -->
    <div
      class="pointer-events-none absolute -top-48 -left-48 w-[700px] h-[700px] bg-blue-600/30 rounded-full blur-[160px]"
    ></div>

    <!-- TOP RIGHT GLOW -->
    <div
      class="pointer-events-none absolute -top-48 -right-48 w-[700px] h-[700px] bg-indigo-600/30 rounded-full blur-[160px]"
    ></div>

    <!-- CENTER SOFT BOOST -->
    <div
      class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[140px]"
    ></div>

    <!-- Heading -->
    <div class="text-center mb-16 relative z-10">
      <h2
        class="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text flex items-center justify-center gap-3"
      >
        <User2 class="w-10 h-10 text-blue-400" />
        My Contact
      </h2>
      <p class="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Feel free to reach out through any platform below.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
      <!-- Left Card -->
      <div
        class="p-10 rounded-2xl shadow-lg bg-gray-900 border border-blue-800/30 transition-all duration-300 hover:shadow-2xl hover:scale-105"
      >
        <!-- Email -->
        <div class="flex gap-4 mb-8 items-start">
          <div class="w-6 h-6 text-blue-400 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-white">Email</h3>
            <a
              href="mailto:kadekpriananda12@gmail.com"
              class="text-blue-400 hover:underline break-all"
            >
              kadekpriananda12@gmail.com
            </a>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex gap-4 mb-8 items-start">
          <div class="w-6 h-6 text-blue-400 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-white">Phone / WhatsApp</h3>
            <a
              href="https://wa.me/6285964306002?text=Hallo%20saya%20ingin%20%20berdiskusi%20lebih%20lanjut"
              target="_blank"
              class="text-blue-400 hover:underline break-all"
            >
              +62 859-6430-6002
            </a>
          </div>
        </div>

        <!-- Address -->
        <div class="flex gap-4 items-start">
          <div class="w-6 h-6 text-blue-400 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-white">Address</h3>
            <p class="text-gray-300 leading-7 break-all">
              Jalan By Pass Ngurah Rai, Jalan Merta Sari No. 76 Jimbaran, Kuta Selatan, Badung, Bali
              80361
            </p>
          </div>
        </div>
      </div>

      <!-- Right Card -->
      <div
        class="p-10 rounded-2xl shadow-lg bg-gray-900 border border-blue-800/30 transition-all duration-300 hover:shadow-2xl hover:scale-105"
      >
        <!-- Github -->
        <div class="flex gap-4 mb-8 items-start">
          <GitHub class="w-6 h-6 text-gray-200 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-white">GitHub</h3>
            <a
              href="https://github.com/Priananda"
              target="_blank"
              class="text-blue-400 hover:underline break-all"
            >
              https://github.com/Priananda
            </a>
          </div>
        </div>

        <!-- GitLab -->
        <div class="flex gap-4 mb-8 items-start">
          <GitLab class="w-6 h-6 text-orange-400 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-white">GitLab</h3>
            <a
              href="https://gitlab.com/kadekpriananda12"
              target="_blank"
              class="text-blue-400 hover:underline break-all"
            >
              https://gitlab.com/kadekpriananda12
            </a>
          </div>
        </div>

        <!-- LinkedIn -->
        <div class="flex gap-4 items-start">
          <LinkedIn class="w-6 h-6 text-blue-400 mt-1" />
          <div>
            <h3 class="font-semibold text-md text-white">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/i-kadek-priananda-37573934b/"
              target="_blank"
              class="text-blue-400 hover:underline break-all"
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
  <!-- <section class="container">
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
          class="mt-0 px-3 py-3 font-semibold text-center bg-white/90 text-blue-800 border-2 border-blue-800 rounded-lg shadow-md shadow-blue-800/20"
        >
          <h2 class="text-sm">Priananda</h2>
          <span class="text-xs font-medium text-blue-500">Full-Stack Web Developer</span>
        </div>
      </div>
    </transition>
  </section> -->
</template>

<style scoped>
.border-wrapper {
  border-radius: 8px;
  box-shadow:
    0 8px 30px rgba(30, 58, 138, 0.35),
    0 0 20px rgba(79, 70, 229, 0.25);
}

.bubble-section1 {
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;

  background: radial-gradient(
    circle at 30% 30%,
    rgb(230, 230, 234),
    rgb(67, 98, 211) 40%,
    rgba(12, 58, 210, 0.15) 60%,
    transparent 70%
  );

  opacity: 0.8;
  animation: bubbleLuxury 14s ease-in-out infinite;
}
@keyframes bubbleLuxury {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.75;
  }
  40% {
    transform: translate(40px, -60px) scale(1.15);
    opacity: 0.9;
  }
  70% {
    transform: translate(-30px, -90px) scale(1.25);
    opacity: 0.65;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.8;
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

.cursor {
  display: inline-block;
  margin-left: 4px;
  animation: blink 1.2s infinite;
  color: #1d4ed8;
}

@keyframes blink {
  0%,
  45%,
  100% {
    opacity: 1;
  }
  50%,
  90% {
    opacity: 0;
  }
}

.wipe-text {
  background: linear-gradient(90deg, #1e3a8a 0%, #194ad3 50%, #9ca3af 50%, #9ca3af 100%);
  background-size: 200% 100%;
  background-position: 100% 0;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  will-change: background-position;
}

.text-glow {
  animation: glowFade 1s ease-out forwards;
}

@keyframes glowFade {
  0% {
    text-shadow:
      0 0 0 rgba(59, 130, 246, 0),
      0 0 0 rgba(99, 102, 241, 0);
  }
  50% {
    text-shadow:
      0 0 16px rgba(59, 130, 246, 0.7),
      0 0 32px rgba(99, 102, 241, 0.6);
  }
  100% {
    text-shadow:
      0 0 6px rgba(59, 130, 246, 0.4),
      0 0 12px rgba(99, 102, 241, 0.3);
  }
}
</style>
