<template>
  <div class="game-view" ref="gameView"></div>
</template>

<script>
  import { Canvas } from '../canvas/canvas';

  export default {
    mounted() {
      Canvas.mount(this.$refs.gameView);
    }
  }
</script>