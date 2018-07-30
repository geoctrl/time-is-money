<script>
  import { cardImgUrl } from '../utils/utils';

  export default {
    props: {
      code: String,
      height: Number,
      lift: Boolean,
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
      rotate: { type: Number, default: 0 },
    },
    computed: {
      cardImgUrl() {
        console.log(this.x);
        return cardImgUrl(this.code);
      },
      computedWidth() {
        const ratio = 0.715;
        return this.height * ratio;
      },
      computedHeight() {
        return this.height;
      },
      borderRadius() {
        const ratio = 40;
        return this.height / ratio;
      },
      boxShadow() {
        return this.lift
          ? `0 5px 30px rgba(0,0,0, .2)`
          : `0 2px 10px rgba(0,0,0, .2)`;
      },
      scale() {
        return this.lift ? 1.2 : 1;
      },
    }
  }
</script>

<template>
  <div class="card-contain" :style="{
    width: `${computedWidth}px`,
    height: `${computedHeight}px`,
    borderRadius: `${borderRadius}px`,
    transform: `scale(${scale}) rotate(${rotate}deg) translateX(${x}px) translateY(${y}px)`,
    zIndex: lift ? 1 : 0,
    boxShadow: boxShadow,
  }">
    <div class="card" :style="{
      backgroundImage: `url('${cardImgUrl}')`,
      width: `${computedWidth}px`,
      height: `${computedHeight}px`,
    }"></div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    background-color: #fff;
    width: 0;
    height: 0;
    transition: width 200ms ease, height 200ms ease;
  }
  .card-contain {
    box-shadow: 0 0 0 rgba(#000, 0);
    width: 286px;
    height: 400px;
    overflow: hidden;
    position: fixed;
    z-index: 0;
    transform-origin: center;
    transform: scale(1);
    transition: width 200ms ease, height 200ms ease, transform 200ms ease, box-shadow 200ms ease;
  }
</style>