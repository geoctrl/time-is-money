import './styles/main.scss';
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/store';
import * as components from './components/_index';

// import { Canvas } from './canvas/canvas';
//
// Canvas.mount();

Vue.use(Vuex);

new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  components,
  template: `<app />`,
});