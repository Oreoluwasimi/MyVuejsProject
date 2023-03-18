import { createWebHistory, createRouter } from "vue-router";
import GithubRepo from './components/GithubRepo.vue'
import SingleRepo from './components/SingleRepo.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    { path: '/repositories', component: GithubRepo },
    { path: '/', redirect: '/repositories' },
    { path: '/repositories/:name', component: SingleRepo, props: true },
    { path: '/404', name: 'page-not-found', component: NotFound },
    { path: '/:catchAll(.*)', redirect: '/404'},
];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;


