<script>
  export default {
    props: {
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
    }
  }
</script>

<template>
  <div class="card-placeholder" :style="{
    transform: `translateX(${x}px) translateY(${y}px)`,
  }">
    <slot />
  </div>
</template>

<style lang="scss">
  .card-placeholder {
    height: 200px;
    width: 143px;
    background-color: rgba(#000, .05);
    box-shadow: inset 0 1px 5px rgba(#000, .07);
    border-radius: 5px;
    float: left;
    margin-right: 20px;
    position: absolute;
  }
</style>