import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '../stores/store'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MatchesView from '../views/MatchesView.vue'
import TeamsView from '../views/TeamsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/matches',
      name: 'matches',
      component: MatchesView
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.name !== 'login' && !store.getIsLogged) next({ name: 'login' })
  else next();
})

export default router;
