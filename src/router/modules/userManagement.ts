
import type { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue'
const routes:RouteRecordRaw[] = [
  {
    path: '/userManagement',
    name: 'userManagement',
    component:Layout,
    meta: {
      title: '用户管理',
    },
    children: [
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/userManagement/role/index.vue'),
        meta: {
          title: '角色管理',
        }
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/userManagement/account/index.vue'),
        meta: {
          title: '账号管理',
        }
      },
      {
        path: 'company',
        name: 'company',
        component: () => import('@/views/userManagement/company/index.vue'),
        meta: {
          title: '企业管理',
        }
      }
    ]
  }
];
export default routes;