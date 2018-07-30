<script>
  import Card from './components/card.vue';
  export default {
    components: { Card },
    data() {
      return {
        size: 'sm',
      }
    },
    mounted() {
      setTimeout(() => {
        this.size = 'md';
      }, 2000)
    }
  }
</script>

<template>
  <div>
    <Card code="0S" :size="size" />
  </div>
</template>

<style scoped lang="scss">
</style>