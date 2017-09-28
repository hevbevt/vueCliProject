<template>
  <div class="charts">
      <div id="myChart" style="width: 800px;height: 800px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import fujianJson from '@/assets/geojson/fujian.json';
import jiangsuJson from '@/assets/geojson/jiangsu.json';
import anhuiJson from '@/assets/geojson/anhui.json';
import shanghaiJson from '@/assets/geojson/shanghai.json';
import zhejiangJson from '@/assets/geojson/zhejiang.json';

export default {
  name: 'chart',
  mounted() {
    echarts.registerMap('fujian', fujianJson);
    echarts.registerMap('jiangsu', jiangsuJson);
    echarts.registerMap('anhui', anhuiJson);
    echarts.registerMap('zhejiang', zhejiangJson);
    echarts.registerMap('shanghai', shanghaiJson);
    const myChart = echarts.init(document.getElementById('myChart'));
    myChart.setOption({
      visualMap: {
        min: 0,
        max: 50,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],           // 文本，默认为数值文本
        calculable: true,
      },
      series: [{
        name: '福建',
        type: 'map',
        mapType: 'fujian',
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        data: [
          { name: '福州市', value: 40 },
        ],
    //  }, {
    //     name: '安徽',
    //     type: 'map',
    //     mapType: 'anhui',
    //     label: {
    //       normal: {
    //         show: true,
    //       },
    //       emphasis: {
    //         show: true,
    //       },
    //     },
    //     data: [
    //       { name: '福州市', value: 40 },
    //     ],
    //     zoom: 0.5,
    //     top: -20,
    //     left: -20,
    //   }, {
    //     name: '江苏',
    //     type: 'map',
    //     mapType: 'jiangsu',
    //     label: {
    //       normal: {
    //         show: true,
    //       },
    //       emphasis: {
    //         show: true,
    //       },
    //     },
    //     data: [
    //       { name: '福州市', value: 40 },
    //     ],
    //     zoom: 0.5,
    //     top: -100,
    //     left: 0,
    //   }, {
    //     name: '浙江',
    //     type: 'map',
    //     mapType: 'zhejiang',
    //     label: {
    //       normal: {
    //         show: true,
    //       },
    //       emphasis: {
    //         show: true,
    //       },
    //     },
    //     data: [
    //       { name: '福州市', value: 40 },
    //     ],
    //     zoom: 0.5,
    //     top: 100,
    //     left: 300,
    //   }, {
    //     name: '上海',
    //     type: 'map',
    //     mapType: 'shanghai',
    //     label: {
    //       normal: {
    //         show: true,
    //       },
    //       emphasis: {
    //         show: true,
    //       },
    //     },
    //     data: [
    //       { name: '福州市', value: 40 },
    //     ],
    //     zoom: 0.2,
    //     left: 400,
    //     top: 100,
      }],
    },
    );
  },
};
</script>
<style lang="scss" scoped>
    #myCharts{
        width: 300px;
        height: 300px;
    }
</style>



