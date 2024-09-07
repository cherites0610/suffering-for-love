import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

import EmotionView from '@/views/EmotionView.vue'
import IPConsultationView from '@/views/IPConsultationView.vue'
import OLConsultationView from '@/views/OLConsultationView.vue'
import QAView from '@/views/QAView.vue'

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
