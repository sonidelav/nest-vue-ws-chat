import Vue from 'vue';
import Vuex from 'vuex';
import ChatModule from './chat';
import ChatRestModule from './chat.rest';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chat: ChatModule,
    chatRest: ChatRestModule
  }
});
