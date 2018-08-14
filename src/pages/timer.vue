<script>
  import Chat from '../components/chat.vue';
  import Face from '../components/face.vue';
  import { timedResponses } from '../brady/timed-responses';
  import { Meeting } from '../core/meeting';

  export default {
    components: { Chat, Face },
    mounted() {
      Meeting.start();
      timedResponses.getObserver().subscribe(this.update);
    },
    data() {
      return {
        msg: '',
        face: 'happy',
      };
    },
    methods: {
      update(data) {
        this.msg = data.msg;
        this.face = data.face;
      },
    },
  }
</script>

<template>
  <div class="timer">
    <div class="header">
      <Face :face="face" />
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
    box-shadow: 0 1px .5px rgba(#000, .4);
    @include media(phone) {
      border-radius: 5px;
      border: none;
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