<script>
  import Chat from '../components/chat.vue';
  import Face from '../components/face.vue';
  import { timedResponses } from '../brady/timed-responses';
  import { brady } from '../brady/brady';
  import { Meeting } from '../core/meeting';
  import { Observable, of } from 'rxjs';
  import { concatMap, delay } from 'rxjs/operators';

  export default {
    components: { Chat, Face },
    mounted() {
      brady.listen.pipe(concatMap(x => {
        return of(x).pipe(delay(x === ' ' ? 0 : 50));
      })).subscribe(this.update);


      brady.talk({ msg: 'hey man.', wait: 2, face: 'happy' });
      brady.talk({ msg: 'how are you?', wait: 4, face: 'happy' });
      brady.talk({ face: 'angry', wait: 2 })
      brady.talk({ msg: `I'm okay I guess`, wait: 2, face: 'smile-fake' });

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
    <div class="brady">
      <Face :face="face" />
      <Chat pointer="left" :msg="msg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .timer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    @include media(phone) {
      margin: 40px auto 0 auto;
      border-radius: 5px;
      max-width: $media-phone - 80px;
    }
  }

  .brady {
    display: flex;
    align-items: center;
    padding: 20px;
    width: 400px;
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