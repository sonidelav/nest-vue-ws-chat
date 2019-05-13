import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: "SOCKET_",
  }
}));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
