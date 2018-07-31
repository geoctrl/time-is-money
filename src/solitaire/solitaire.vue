<script>
  import Card from './components/card.vue';
  import CardPlaceholder from './components/card-placeholder.vue';
  import Stack from './components/stack.vue';

  export default {
    components: { Card, CardPlaceholder, Stack },
    data() {
      return {
        stack1: {
          pile: ['AS'],
          stack: ['0C', '9H', '8S']
        },
      }
    },
  }
</script>

<template>
  <div :style="{ width: '1121px', padding: '50px' }">
    <!--deck-->
    <CardPlaceholder :x="0" />
    <Card code="AD" flip  />

    <!--play-->
    <CardPlaceholder :x="163" />
    <Card code="3C" :x="163"  />

    <!--spades-->
    <CardPlaceholder :x="489" />

    <!--clubs-->
    <CardPlaceholder :x="652" />

    <!--hearts-->
    <CardPlaceholder :x="815" />

    <!--diamonds-->
    <CardPlaceholder :x="978" />

    <!--1-->
    <Stack :x="0" :y="250" :data="stack1" />

    <!--2-->
    <CardPlaceholder :x="163" :y="250" />

    <!--3-->
    <CardPlaceholder :x="326" :y="250" />

    <!--4-->
    <CardPlaceholder :x="489" :y="250" />

    <!--5-->
    <CardPlaceholder :x="652" :y="250" />

    <!--6-->
    <CardPlaceholder :x="815" :y="250" />

    <!--7-->
    <CardPlaceholder :x="978" :y="250" />
  </div>
</template>

<style scoped lang="scss">
</style>