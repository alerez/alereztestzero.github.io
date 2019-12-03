import Vue from 'vue';
import App from './Layout.vue';
import router from './router';
// import './assets/scss/style.css';
import './assets/scss/style.scss';

export const bus = new Vue();


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),

}).$mount('#app');
