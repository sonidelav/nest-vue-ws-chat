import Vue from 'vue';
import Router from 'vue-router';
import SignUp from './views/SignUp.vue';
import LiveChat from './views/LiveChat.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
    },
    {
      path: '/live-chat',
      name: 'live-chat',
      component: LiveChat
    }
  ],
});
