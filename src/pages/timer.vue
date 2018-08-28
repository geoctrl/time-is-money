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
      <Chat pointer="left" :msg="msg" />
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
    align-items: center;
    padding: 20px;
    @include media(phone) {
      border-radius: 5px;
      border: none;
    }
  }

  .time {
    flex-grow: 1;
  }

  .input {
    padding: 20px;
  }
</style>