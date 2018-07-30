<script>
  import Card from './components/card.vue';
  export default {
    components: { Card },
    data() {
      return {
        size: 200,
      }
    },
  }
</script>

<template>
  <div>
    <Card code="0S" :height="size" :x="120" :y="110" :rotate="-5" />
    <Card code="4D" :height="size" :x="160" :y="106" :rotate="5"  />
    <Card code="KS" :height="size" :x="190" :y="114" :rotate="-4" />
    <Card code="AC" :height="size" :x="250" :y="104" :rotate="2
" />
  </div>
</template>

<style scoped lang="scss">
</style>