import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/store';
import App from './app.vue';

Vue.use(Vuex);

new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  components: { App },
  render(h) {
    return h('App');
  },
});