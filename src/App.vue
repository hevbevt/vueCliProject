<template>
  <div id="app">
    <vue-header></vue-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vueHeader from '@/components/vueHeader';

export default {
  name: 'app',
  components: {
    vueHeader,
  },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
}
</style>

