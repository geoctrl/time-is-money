<script>
  export default {

  }
</script>

<template>
  <div class="chat">
    <div class="chat__content">
      <slot />
    </div>
    <div class="chat__pointer" />
    <div class="chat__pointer chat__pointer--shadow"></div>
  </div>
</template>

<style scoped lang="scss">
  .chat {
    padding: 12px 16px 10px 16px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: $base-box-shadow;
      z-index: 1;
    }
  }

  .chat__content {
    position: relative;
    z-index: 3;
  }

  .chat__pointer {
    position: absolute;
    top: 8px;
    right: -7px;
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
      transform: rotate(45deg);
      border-radius: 6px;
      background-color: #fff;
    }

    &.chat__pointer--shadow {
      z-index: 1;
      &::after {
        box-shadow: 2.5px 2px 3.3px rgba(#000, .25);
      }
    }
  }
</style>