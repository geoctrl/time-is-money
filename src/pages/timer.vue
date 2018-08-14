<script>
  import Chat from '../components/chat.vue';
  import Face from '../components/face.vue';
  import { timedResponses } from '../brady/timed-responses';

  export default {
    components: { Chat, Face },
    mounted() {
      timedResponses.getObserver().subscribe(this.update);
    },
    data() {
      return {
        msg: '',
        bradyFace: 'happy',
      };
    },
    methods: {
      update(data) {
        this.msg = data.msg;
      },
    },
  }
</script>

<template>
  <div class="timer">
    <div class="header">
      <!--<Face />-->
      <Chat pointer="left" :text="msg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .timer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @include media(phone) {
      margin: 40px auto 0 auto;
      border-radius: 5px;
      max-width: $media-phone - 80px;
    }
  }

  .header {
    display: flex;
    background-color: #059adb;
    padding: 20px;
    @include media(phone) {
      border-radius: 5px;
    }
    .chat {
      flex-grow: 1;
    }
  }

  .time {
    flex-grow: 1;
  }

  .input {
    padding: 20px;
  }
</style>