<script>
  import Chat from '../components/chat.vue';
  import Face from '../components/face.vue';
  import { getRandomFaceTypesGenerator } from '../core/utils';

  const getRandomFace = getRandomFaceTypesGenerator();

  export default {
    components: {
      Chat,
      Face,
    },
    data() {
      return {
        face: 'chill',
      }
    },
    mounted() {
      this.changeFace();
    },
    beforeDestroy() {
      clearTimeout(this.timeout);
    },
    methods: {
      randomNumber() {
        switch (Math.floor(Math.random() * 4) + 1) {
          case 1: return 8000;
          case 2: return 10000;
          case 3: return 13000;
          case 4:
          default: return 16000;
        }
      },
      changeFace() {
        this.timeout = setTimeout(() => {
          if (this.timeout) {
            this.face = getRandomFace();
            this.changeFace();
          }
        }, this.randomNumber())
      }
    }
  }
</script>

<template>
  <div class="home">
    <div class="talking">
      <Chat
        pointer="right"
        big
        title="Hello, I'm Brady."
        custom-class="chatting"
        msg="Your personal meeting assistant."
      />
      <Face big :face="face" />
    </div>
    <div class="text-center">
      <button class="btn btn--secondary">Wut?</button>
      <router-link
        tag="button"
        to="/timer"
        class="btn btn--primary"
        :click="changeFace()"
      >
        Track a Meeting
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
  .home {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      margin-right: 10px;
    }
  }
  .talking {
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;

    @include media(phone) {
      flex-direction: row;
    }
  }

  .chat.chatting {
    margin-bottom: 20px;
    .chat__pointer {
      margin-bottom: 10px;
      left: 50%;
      bottom: -18px;
      margin-left: -15px;
      transform: scaleY(1) scaleX(.8);

      &::after {
        transform: rotate(135deg);
      }
    }

    @include media(phone) {
      margin-bottom: auto;
      margin-right: 20px;
      .chat__pointer {
        margin-bottom: auto;
        left: auto;
        bottom: auto;
        margin-left: auto;
        transform: scaleY(.7);
        &::after {
          transform: rotate(45deg);
        }

        top: 50%;
        right: -7px;
        margin-top: -15px;
      }
    }
  }

</style>