<template>
    <div id="header">
        <hello></hello>
    </div>
</template>
<script>
import Hello from '@/components/Hello';

export default {
  name: 'vueHeader',
  components: {
    Hello,
  },
};
</script>
<style lang="scss">
    #header {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
<style lang="scss" scoped>
img {
    float: left;
    width: 60px;
    height: 60px;
}
</style>
