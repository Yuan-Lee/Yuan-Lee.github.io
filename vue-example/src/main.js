// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import router from './router';
import './components/common/index.scss';


Vue.config.productionTip = false;

/* eslint-disable no-new */
/* eslint-disable prefer-template */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
