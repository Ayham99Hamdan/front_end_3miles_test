import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
      path: 'autocomplete',
      name: 'autocomplete',
      component: import('./pages/autoComplete.vue')
    },
    
  ];

export default routes;