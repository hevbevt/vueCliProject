<template>
  <div class="hello">
    <button @click="getData()">获取数据</button>
    <span>{{msg}}</span>
  </div>
</template>

<script>
import store from '../vuex/store';

export default {
  name: 'hello',
  data() {
    return {
      msg: '',
      data: [],
    };
  },
  methods: {
    getData() {
      this.$store.dispatch('getTableData').then((resp) => {
        this.msg = resp.data.content;
      });
    },
  },
  store,
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  text-align: left;
  margin-left: 60px;
  h1, h2 {
    margin: 10px;
    display:inline-block;
    font-weight: normal;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
