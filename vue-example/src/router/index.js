import Vue from 'vue';
import Router from 'vue-router';
import topbar from '@/components/topbar/topbar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'topbar',
      component: topbar,
    },
  ],
});
