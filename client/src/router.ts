import { createMemoryHistory, createRouter } from 'vue-router';
import Kanban from './components/Kanban.vue';

const routes = [
  { path: '/', component: Kanban },
  { path: '/login', component: 'Login.vue' }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
