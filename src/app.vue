<script>
  import Launch from './components/launch.vue';

  export default {
    components: {
      Launch,
    },
  }
</script>

<template>
  <div class="app">
    <Launch />
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