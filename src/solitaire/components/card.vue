<script>
  import { cardImgUrl } from '../utils/utils';

  export default {
    props: ['code', 'size'],
    computed: {
      cardImgUrl() {
        return cardImgUrl(this.code);
      },
      cardSize() {
        const ratio = 0.715;
        const originalHeight = 400;
        switch(this.size) {
          case 'md':
            return {
              height: originalHeight,
              width: originalHeight * ratio,
            };
          case 'sm':
          default:
            return {
              height: originalHeight / 2,
              width: (originalHeight / 2) * ratio,
            };
        }
      }
    }
  }
</script>

<template>
  <div class="card-contain">
    <div class="card" :style="{
      backgroundImage: `url('${cardImgUrl}')`,
      width: `${cardSize.width}px`,
      height: `${cardSize.height}px`,
    }"></div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    border-radius: 10px;
    background-color: #fff;
    width: 0;
    height: 0;
    transition: width 200ms ease, height 200ms ease;
  }
  .card-contain {
    box-shadow: 0 2px 10px rgba(#000, .2);
    width: 286px;
    height: 400px;
  }
</style>