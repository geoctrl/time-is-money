<script>
  import { cardImgUrl } from '../utils/utils';

  export default {
    props: {
      code: String,
      height: {
        type: Number,
        default: 200,
      },
      flip: Boolean,
      lift: Boolean,
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
      rotate: { type: Number, default: 0 },
    },
    computed: {
      cardImgUrl() {
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
  <div class="card-translate" :style="{
    width: `${computedWidth}px`,
    height: `${computedHeight}px`,
    transform: `translateX(${x}px) translateY(${y}px)`,
    zIndex: lift ? 1 : 0,
  }">
    <div class="card-contain" :style="{
      width: `${computedWidth}px`,
      height: `${computedHeight}px`,
      borderRadius: `${borderRadius}px`,
      transform: `scale(${scale}) rotate(${rotate}deg) rotateY(${flip ? 180 : 0}deg)`,
      boxShadow: boxShadow,
    }">
      <div class="card" :style="{
        backgroundImage: `url('${cardImgUrl}')`,
        borderRadius: `${borderRadius}px`,
        width: `${computedWidth}px`,
        height: `${computedHeight}px`,
      }"></div>
      <div class="card-back" :style="{
        borderRadius: `${borderRadius}px`,
        width: `${computedWidth}px`,
        height: `${computedHeight}px`,
      }"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    background-color: #fff;
    width: 0;
    height: 0;
    transform: scale(1);
    transition: width 200ms ease, height 200ms ease;
    perspective: 600px;
    position: absolute;
  }
  .card-back {
    background-color: #fff;
    width: 0;
    height: 0;
    position: absolute;
    transform: rotateY(-180deg);
    transition: width 200ms ease, height 200ms ease;
    backface-visibility: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 8px;
      right: 8px;
      bottom: 8px;
      background-color: #96ff7c;
    }
  }
  .card-translate {
    transform: translateX(0) translateY(0);
    transition: 200ms ease;
    z-index: 0;
    position: absolute;
    perspective: 400px;
  }
  .card-contain {
    box-shadow: 0 0 0 rgba(#000, 0);
    width: 286px;
    height: 400px;
    position: absolute;
    transform-origin: center;
    transform: scale(1);
    transform-style: preserve-3d;
    transition: width 200ms ease, height 200ms ease, transform 1000ms ease, box-shadow 200ms ease;
  }
</style>