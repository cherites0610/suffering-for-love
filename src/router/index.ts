import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

import EmotionView from '@/views/EmotionView.vue'
import IPConsultationView from '@/views/IPConsultationView.vue'
import OLConsultationView from '@/views/OLConsultationView.vue'
import QAView from '@/views/QAView.vue'
import AboutView from '@/views/AboutView.vue'
import IPFormView from '@/views/IPFormView.vue'
import OLFormView from '@/views/OLFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '為情所苦' //添加這部分
      }
    },
    {
      path: '/emotion',
      name: 'emotion',
      component: EmotionView,
      meta: {
        title: '心情版' //添加這部分
      }
    },
    {
      path: '/IPConsultation',
      name: 'IPConsultation',
      component: IPConsultationView,
      meta: {
        title: '實體預約' //添加這部分
      }
    },
    {
      path: '/OLConsultation',
      name: 'OLConsultation',
      component: OLConsultationView,
      meta: {
        title: '視訊預約' //添加這部分
      }
    },
    {
      path: '/QA',
      name: 'QA',
      component: QAView,
      meta: {
        title: 'Q&A' //添加這部分
      }
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView,
      meta: {
        title: '諮商介紹' //添加這部分
      }
    },
    {
      path: '/IPF/:id',
      name: 'IPF',
      component: IPFormView,
      meta: {
        title: '實體預約' //添加這部分
      },
      props: true
    },
    {
      path: '/OLF/:id',
      name: 'OLF',
      component: OLFormView,
      meta: {
        title: '線上預約' //添加這部分
      },
      props: true
    }

  ]
})

router.beforeEach((to, from, next) => {
  if (typeof to.meta.title === 'string') {
    window.document.title = to.meta.title
  }
  next()
})

export default router
