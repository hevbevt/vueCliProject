<template>
  <div class="charts">
    <div id="myChart"></div>
  </div>
</template>
<script>
import echarts from 'echarts';

export default {
  name: 'chart',
  mounted() {
    const chartDom = document.getElementById('myChart');
    chartDom.style.width = '2200px';
    chartDom.style.height = '1000px';
    const myChart = echarts.init(chartDom);
    myChart.setOption({
      tooltip: {},
      series: [
        {
          top: 40,
          left: 40,
          width: '100%',
          heigth: '100%',
          type: 'graph',
          layout: 'none',
          symbol: 'rect',
          symbolSize: [80, 40],
          symbolOffset: [15, 0],
          label: {
            normal: {
              show: true,
            },
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [10, 15],
          data: [{
            name: '工序1',
            x: 1,
            y: 1,
          }, {
            name: '工序3',
            x: 1,
            y: 1.5,
          }, {
            name: '工序2',
            x: 2,
            y: 1,
          }, {
            name: '工序4',
            x: 2,
            y: 1.5,
          }, {
            name: '工序5',
            x: 3,
            y: 1.25,
          }, {
            name: '工序6',
            x: 4,
            y: 1,
          }, {
            name: '工序7',
            x: 5,
            y: 1,
          }, {
            name: '工序8',
            x: 6,
            y: 1,
          }, {
            name: '工序9',
            x: 6,
            y: 1.5,
          }, {
            name: '工序16',
            x: 6,
            y: 2,
          }, {
            name: '工序17',
            x: 6,
            y: 2.5,
          }, {
            name: '工序18',
            x: 6,
            y: 3,
          }, {
            name: '工序10',
            x: 7,
            y: 1,
          }, {
            name: '工序11',
            x: 8,
            y: 1,
          }, {
            name: '工序12',
            x: 9,
            y: 1,
          }, {
            name: '工序13',
            x: 10,
            y: 1,
          }, {
            name: '工序14',
            x: 11,
            y: 1,
          }, {
            name: '工序15',
            x: 12,
            y: 1,
          }],
          links: [{
            value: 0.5,
            source: '工序1',
            target: '工序2',
          }, {
            source: '工序3',
            target: '工序4',
          }, {
            source: '工序2',
            target: '工序5',
          }, {
            source: '工序4',
            target: '工序5',
          }, {
            source: '工序6',
            target: '工序7',
          }],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        },
      ],
    },
    );
  },
};
</script>
<style lang="scss" scoped>
.charts{
  height: 200px;
  overflow-y: auto;
  #myCharts {
    width: 300px;
    height: 300px;
  }
}
</style>



