import Vue from 'vue'
import VueRouter from 'vue-router';
import GithubRepo from './components/GithubRepo.vue'
import SingleRepo from './components/SingleRepo.vue'



export default new VueRouter({
  mode: 'history',
  routes: [
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
        }
      ]
    }
  ]
})
