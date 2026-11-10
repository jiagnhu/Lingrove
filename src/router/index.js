import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/HomePage.vue'), meta: { title: 'Localization infrastructure for global software teams' } },
  { path: '/product', component: () => import('@/pages/ProductPage.vue'), meta: { title: 'Product' } },
  { path: '/customers', component: () => import('@/pages/CustomersPage.vue'), meta: { title: 'Customers' } },
  { path: '/pricing', component: () => import('@/pages/PricingPage.vue'), meta: { title: 'Pricing' } },
  { path: '/about', component: () => import('@/pages/AboutPage.vue'), meta: { title: 'About' } },
  { path: '/:pathMatch(.*)*', component: () => import('@/pages/NotFoundPage.vue'), meta: { title: 'Page not found' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 96, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title} — Lingrove`
})

export default router
