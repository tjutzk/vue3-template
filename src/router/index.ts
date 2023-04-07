import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const menuRoutes:RouteRecordRaw[] = []
const modules = import.meta.glob('./modules/*.ts', {eager: true})

for (const key in modules) {
  let module:any = await modules[key]
  menuRoutes.push(...module.default)
}

const routes:RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes:[
    ...routes,
    ...menuRoutes
  ]
});


export {
  menuRoutes
}

export default router;

