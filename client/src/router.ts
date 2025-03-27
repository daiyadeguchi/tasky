import { createMemoryHistory, createRouter } from 'vue-router';
import Kanban from './components/Kanban.vue';
import Login from './components/Login.vue'
import * as VueRouter from 'vue-router';

const routes: VueRouter.RouteRecordRaw[] = [
  { path: '/', component: Kanban },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
