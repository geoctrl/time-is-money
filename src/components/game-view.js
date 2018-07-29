import Vue from 'vue';
import { Canvas } from '../canvas/canvas';

const template =
`<div ref="gameView"></div>`;

export default Vue.component('game-view', {
  template,
  mounted() {
    Canvas.mount(this.$refs.gameView);
  }
});