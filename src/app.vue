<script>
  import Chat from './components/chat.vue';
  export default {
    components: {
      Chat,
    },
  }
</script>

<template>
  <div class="app">
    <Chat>
      Helloy!
    </Chat>
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
    background: linear-gradient(135deg, #53bdf9 0%,#00a0f7 100%);
  }
</style>