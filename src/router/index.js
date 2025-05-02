import { createRouter, createWebHistory } from 'vue-router'
import { Collapse } from 'bootstrap'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'auto' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/approach',
      name: 'approach',
      component: () => import('../views/Approach.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
    // {
    //   path: '/book',
    //   name: 'book',
    //   component: () => import('../views/Book.vue'),
    // },
  ],
})

router.afterEach(() => {
  // Close Bootstrap mobile nav
  const navbar = document.getElementById('navbarNavAltMarkup')
  if (navbar && navbar.classList.contains('show')) {
    const bsCollapse = Collapse.getInstance(navbar) || new Collapse(navbar)
    bsCollapse.hide()
  }
})

export default router
