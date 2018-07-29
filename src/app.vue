<script>
  import Navigation from './components/navigation.vue';
  import GameView from './components/game-view.vue';
  import Tools from './components/tools.vue';

  export default {
    components: {
      Navigation,
      GameView,
      Tools,
    },
  }
</script>

<template>
  <div class="app">
    <div class="app__view">
      <Navigation />
      <GameView />
    </div>
    <Tools />
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

  .app__view {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .game-view {
    flex-grow: 1;
  }
</style>