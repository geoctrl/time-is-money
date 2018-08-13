import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import store from './store/store';
import './styles/main.scss';
import routes from './pages/router';

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  router: new VueRouter({ mode: 'history', routes }),
  render(h) {
    return h(
      'div',
      { attrs: { id: 'app'} },
      [h('router-view', )]
    );
  },
});