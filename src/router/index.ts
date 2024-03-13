import { createRouter, createWebHistory } from 'vue-router';

import AboutVue from '@/components/About.vue';
import HomeVue from '@/components/Home.vue';

const routes = [
  { path: '/', component: HomeVue },
  { path: '/api1/about', component: AboutVue },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
