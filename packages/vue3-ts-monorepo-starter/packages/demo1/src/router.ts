import { createRouter, createWebHistory } from 'vue-router';
import TheDemo from '@/views/demo/TheDemo.vue';
export const routes = [
  {
    path: '/',
    redirect: '/demo',
  },
  {
    path: '/demo',
    name: 'demo',
    component: TheDemo,
  },
  {
    path: '/sub-demo',
    name: 'sub-demo',
    component: () => import('@/views/demo/sub-demo/SubDemo.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory('/demo1/'),
  routes,
});

// 路由守卫，可在此处进行页面权限处理
// router.beforeEach((to) => {
// if (!isLogined()) {
//   return { name: "home" };
// }
// });
