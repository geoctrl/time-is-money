<script>
  export default {
    props: {
      big: Boolean,
      pointer: {
        type: String,
        default: 'right',
      },
      title: {
        type: String,
      },
      msg: {
        type: String,
      },
      customClass: {
        type: String,
      }
    },
  }
</script>

<template>
  <div class="chat" :class="`${big ? 'chat--big' : ''} ${!msg ? 'chat--hide' : ''} chat--${!customClass && pointer} ${customClass}`">
    <div class="chat__content">
      <div v-if="title" class="title">{{title}}</div>
      {{msg || '&nbsp;'}}
    </div>
    <div class="chat__pointer" />
    <div class="chat__pointer chat__pointer--shadow" />
  </div>
</template>

<style scoped lang="scss">
  .chat {
    padding: 12px 16px 10px 14px;
    position: relative;
    display: flex;
    align-items: center;
    flex-grow: 1;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 18px;
      background-color: #fff;
      box-shadow: $base-box-shadow;
      z-index: 1;
    }

    &.chat--hide {
      visibility: hidden;
    }

    &.chat--big {
      padding: 22px 26px 20px 24px;
      font-size: 18px;

      .title {
        font-weight: 800;
        font-style: italic;
        font-size: 34px;
      }
    }

    .chat__pointer {
      position: absolute;
      height: 30px;
      width: 30px;
      border-radius: 6px;
      transform: scaleY(.7);
      z-index: 2;

      &::after {
        content: '';
        position: absolute;
        height: 30px;
        width: 30px;
        border-radius: 6px;
        transform: rotate(45deg);
        background-color: #fff;
      }

      &.chat__pointer--shadow {
        z-index: 1;
        &::after {
          box-shadow: 2.5px 2px 3.3px rgba(#000, .25);
        }
      }
    }

    &.chat--right {
      margin-right: 20px;
      .chat__pointer {
        top: 50%;
        right: -7px;
        margin-top: -15px;
      }
    }

    &.chat--left {
      margin-left: 20px;
      .chat__pointer {
        margin-right: 10px;
        top: 50%;
        left: -5px;
        margin-top: -15px;
      }
    }

    &.chat--down {
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
    }
  }

  .chat__content {
    position: relative;
    z-index: 3;
  }

</style>