import Vue from 'vue';

const template =
`<div class="app">
  <div class="app__view">
    <navigation />
    <game-view />
  </div>
  <tool />
</div>`;

export default Vue.component('app', {
  template,
});