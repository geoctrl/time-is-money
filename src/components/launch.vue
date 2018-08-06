<script>
  import logo from '../assets/nemesis-logo.svg';
  export default {
    computed: {
      logo() {
        return logo;
      }
    },
    mounted() {
      console.log('Shh...')
    }
  }
</script>

<template>
  <div class="launch-form">
    <div v-html="logo" />
    <h1>Coming Soon</h1>
  </div>
</template>

<style lang="scss">
  .launch-form {
    padding: 50px;
    width: 400px;

    h1 {
      text-align: center;
      color: $color-grey;
    }
  }
  .input-control {
    height: 36px;
    padding: 0 10px;
    border: none;
    background-color: rgba(#000, .1);
    border-radius: 5px;
    width: 100%;
    display: block;
    font-family: $base-font-family;
    font-size: $base-font-size;
    color: $base-font-color;
  }
</style>