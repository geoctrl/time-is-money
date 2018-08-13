<script>
  import Chat from '../components/chat.vue';
  export default {
    components: {
      Chat,
    },
  }
</script>

<template>
  <div class="home">
    <Chat big>
      <div class="title">Hello, I'm Brady.</div>
      The meeting waste tracker.
    </Chat>

  </div>
</template>

<style scoped lang="scss">
  .home {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>