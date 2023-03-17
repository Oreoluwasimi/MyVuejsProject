import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import GithubRepo from './components/GithubRepo.vue'
import SingleRepo from './components/SingleRepo.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    {
      path: '/',
      redirect: '/repositories'
    },
    {
      path: '/repositories',
      component: GithubRepo,
      children: [
        {
          path: ':id',
          component: SingleRepo,
          props: true
        },
        {
            path: '*',
            component: NotFound,
          }
      ]
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;


