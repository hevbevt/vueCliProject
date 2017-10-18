<template>
  <div class="charts">
    <div id="myChart"></div>
  </div>
</template>
<script>
import echarts from 'echarts';

class Digraph {
  constructor(V) {
    this.V = V;
    this.E = 0;
    this.adj = [];
    for (let i = 0; i < V; i++) {
      this.adj[i] = [];
    }
  }

  V() {
    return this.V;
  }

  E() {
    return this.E;
  }

  getAdj(v) {
    return this.adj[v];
  }

  addEage(v, w) {
    this.adj[v].push(w);
    this.E += 1;
  }

  reverse() {
    const R = new Digraph(this.V);
    for (let v = 0; v < this.V; v++) {
      this.adj[v].map((w) => {
        R.addEage(w, v);
        return w;
      });
    }
    return R;
  }
}

class BreathFirstProcess {
  constructor(graph) {
    this.marked = {};
    this.depth = 0;
    this.level = {};
    this.chartNodes = [];
    this.bfs(graph);
    graph.adj.map((graphItem, root) => {
      if (!this.marked[root]) {
        this.level[root] = this.depth;
        this.dfs(graph, root);
      }
      return graphItem;
    });
    // this.bfs(graph);
  }

  bfs(graph) {
    const that = this;
    const queue = [];
    const graphAdj = graph.adj;
    graphAdj.map((graphItem, root) => {
      if (!that.marked[root]) {
        that.marked[root] = true;
        that.level[root] = 0;
        queue.push(root);
        while (queue.length > 0) {
          const v = queue.shift();
          graphAdj[v].map((w) => {
            if (!that.marked[w]) {
              that.marked[w] = true;
              that.level[w] = that.level[v] + 1;
              queue.push(w);
            }
            return w;
          });
        }
      }
      return graphItem;
    });
  }

  dfs(graph, root) {
    const that = this;
    that.marked[root] = true;
    that.depth += 1;
    const adj = graph.getAdj(root);
    adj.map((v) => {
      if (!that.marked[v]) {
        that.level[v] = that.depth;
        that.dfs(graph, v);
      }
      return v;
    });
    that.depth -= 1;
  }

  getLevels() {
    return this.level;
  }
}

const getLinkData = function getLinkData(data) {
  const result = [];
  const adjData = data.adj;
  adjData.map((item, index) => {
    if (item && item.length > 0) {
      for (let i = 0; i < item.length; i++) {
        const itemNext = item[i];
        result.push({
          source: index.toString(),
          target: itemNext.toString(),
        });
      }
    }
    return item;
  });
  return result;
};

const getHeight = function getHeight(levels) {
  const positionMap = [];
  Object.keys(levels).map((key) => {
    const value = levels[key];
    if (positionMap[value]) {
      positionMap[value].push(key);
    } else {
      positionMap[value] = [key];
    }
    return key;
  });
  let max = 0;
  positionMap.forEach((map) => {
    if (map.length > max) {
      max = map.length;
    }
  });
  return `${(max * 50) + (max > 1 ? 0 : 50)}px`;
};

const getWidth = function getWidth(levels) {
  const positionMap = [];
  Object.keys(levels).map((key) => {
    const value = levels[key];
    if (positionMap[value]) {
      positionMap[value].push(key);
    } else {
      positionMap[value] = [key];
    }
    return key;
  });
  return `${(positionMap.length * 250)}px`;
};

const getPositionData = function getPositionData(graph, levels) {
  const result = [];
  const positionMap = [];
  Object.keys(levels).map((key) => {
    const value = levels[key];
    if (positionMap[value]) {
      positionMap[value].push(key);
    } else {
      positionMap[value] = [key];
    }
    return key;
  });
  for (let i = 0; i < graph.V; i++) {
    result.push({
      name: i.toString(),
      x: levels[i] * 10,
      y: positionMap[levels[i]].indexOf(i.toString()) * 2.5,
      itemStyle: {
        normal: {
          color: '#fff',
          borderColor: '#929292',
          borderWidth: 1,
        },
      },
      label: {
        normal: {
          color: '#929292',
        },
      },
    });
  }
  return result;
};

export default {
  name: 'chart',
  mounted() {
    const chartDom = document.getElementById('myChart');
    const sourceData = {
      0: [1, 2],
      1: [2],
      2: [],
    };
    const sourceGraph = new Digraph(Object.keys(sourceData).length);
    Object.keys(sourceData).map((key) => {
      const item = sourceData[key];
      for (let i = 0; i < item.length; i++) {
        sourceGraph.addEage(key, item[i]);
      }
      return item;
    });
    const bfp = new BreathFirstProcess(sourceGraph, Object.keys(sourceGraph.adj)[0]);
    const levels = bfp.getLevels();
    // eslint-disable-next-line
    console.log(levels);
    // eslint-disable-next-line
    console.log(sourceGraph);
    const reverseGraph = sourceGraph.reverse();
    // eslint-disable-next-line
    console.log(reverseGraph);
    const linkData = getLinkData(sourceGraph);
    // eslint-disable-next-line
    console.log(linkData);
    const positionData = getPositionData(sourceGraph, levels);
    // eslint-disable-next-line
    console.log(positionData);
    chartDom.style.width = getWidth(levels);
    chartDom.style.height = getHeight(levels);
    const myChart = echarts.init(chartDom);
    myChart.setOption({
      tooltip: {},
      series: [
        {
          top: '20',
          bottom: '30',
          left: '35',
          type: 'graph',
          layout: 'none',
          symbol: 'rect',
          symbolSize: [120, 30],
          symbolOffset: [30, 0],
          label: {
            normal: {
              show: true,
            },
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [10, 15],
          data: positionData,
          links: linkData,
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
.charts {
  height: 200px;
  overflow-y: auto;
  #myCharts {
    width: 300px;
    height: 300px;
  }
}
</style>



