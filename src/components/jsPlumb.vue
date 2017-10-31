<template>
    <div id="diagramContainer">
        <div id="item_left" class="item"></div>
        <div id="item_right" class="item" style="margin-left:50px;"></div>
    </div>
</template>
<script>
import j from 'jsplumb';

export default {
  name: 'jsplumb',
  mounted: () => {
    const jsPlumb = j.jsPlumb;
    jsPlumb.setContainer(document.getElementById('diagramContainer'));
    jsPlumb.importDefaults({
      Anchors: ['Left', 'BottomRight'],
    });
    const firstInstance = jsPlumb.getInstance();
    const endpointOptions = {
      isSource: true,
      isTarget: true,
    };
    /* eslint-disable no-unused-vars */
    const leftPoint = firstInstance.addEndpoint('item_left', {
      anchor: 'Bottom',
    }, endpointOptions);
    const rightPoint = firstInstance.addEndpoint('item_right', {
      anchor: 'Bottom',
    }, endpointOptions);

    // const exampleGreyEndpointOptions = {
    //   endpoint: 'Rectangle',
    //   paintStyle: { width: 25, height: 21, fill: '#666' },
    //   isSource: true,
    //   connectorStyle: { stroke: '#666' },
    //   isTarget: true,
    // };
    // firstInstance.connect({
    //   source: leftPoint,
    //   target: rightPoint,
    //   connector: ['Bezier', { curviness: 200 }],
    //   newConnection: true,
    // });

    // firstInstance.connect({
    //   source: 'item_left',
    //   target: 'item_right',
    // });
  },
};
</script>
<style lang="scss" scoped>
#diagramContainer {
  padding: 20px;
  width: 80%;
  height: 200px;
  border: 1px solid gray;
}

.item {
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  float: left;
}
</style>
