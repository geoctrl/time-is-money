<script>
  import CardPlaceholder from './card-placeholder.vue';
  import Card from './card.vue';
  export default {
    components: { CardPlaceholder, Card },
    props: {
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
      data: { type: Object, default: {} },
    },
    mounted() {
      console.log(this.data);
    },
    data() {
      return {
        dragOffsetX: null,
        dragOffsetY: null,
        dragging: false,
      }
    },
    methods: {
      mouseDown(e) {
        this.dragOffsetX = e.x;
        this.dragOffsetY = e.y;
        this.startDrag();
      },
      mouseUp() {
        this.endDrag();
      },
      startDrag() {
        document.addEventListener('mousemove', this.drag);
      },
      endDrag() {
        document.removeEventListener('mousemove', this.drag);
      },
      drag(e) {
        this.dragging = { x: e.x, y: e.y };
      }
    },
  }
</script>

<template>
  <div
    class="stack"
    :style="{ transform: `translateX(${x}px) translateY(${y}px)` }"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  >
    <CardPlaceholder />
    <Card
      v-for="(card, i) in data.stack"
      :code="card" :y="(i * 40) + (dragging.y - dragOffsetY)" :x="dragging.x - dragOffsetX"
      :key="card"
    />
    <!--<div>{{dragging.x - dragOffsetX}} {{dragging.y - dragOffsetY}}</div>-->
  </div>
</template>

<style lang="scss">
  .stack {

  }
</style>