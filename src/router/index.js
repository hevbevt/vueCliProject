import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import Count from '@/components/count';
import table from '@/components/table';
import chart from '@/components/echarts';
import jsPlumb from '@/components/jsPlumb';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello,
    // },
    {
      path: '/count',
      name: 'count',
      component: Count,
    },
    {
      path: '/table',
      name: 'table',
      component: table,
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart,
    },
    {
      path: '/jsplumb',
      name: 'jsplumb',
      component: jsPlumb,
    },
  ],
});
