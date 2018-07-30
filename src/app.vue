<script>
  import Solitaire from './solitaire/solitaire.vue';

  export default {
    components: {
      Solitaire,
    },
  }
</script>

<template>
  <div class="app">
    <Solitaire />
  </div>
</template>

<style lang="scss">
  .app {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

  }
</style>