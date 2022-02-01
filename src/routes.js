import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './components/nav/NotFound.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/teams',
      component: TeamsList,
      // alias: '/',
    },
    {
      path: '/users',
      component: UsersList,
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active-link',
});
