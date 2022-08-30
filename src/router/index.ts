import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import autocompleteroutes from '@/modules/autocomplete/routes';

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'home',
    component: import('../App.vue'),
    children : [...autocompleteroutes],
    redirect : 'autocomplete'
  },
  {
    path: '/404-not-found',
    name: '404',
    meta: {
      whiteListed: true,
    },
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404-not-found',
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
