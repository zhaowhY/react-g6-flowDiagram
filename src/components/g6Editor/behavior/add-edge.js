import eventBus from '../eventBus';

let edge = null;
let addingEdge = false;
let startId = null;
let endId = null;
let topPointArr = []; // 存储顶部的点，减少查询次数
export default {
  getEvents() {
    return {
      mousedown: 'onMousedown',
      mouseup: 'onMouseup',
      mousemove: 'onMousemove',
      'node:mouseenter': 'nodeMouseEnter'
      // 'edge:click': 'onEdgeClick',
    };
  },
  onMousedown(ev) {
    ev.stopPropagation();
    const node = ev.item;
    const model = node.getModel();
    startId = model.id;
    if (!addingEdge) {
      eventBus.$emit('addingEdge', true);
      this.graph.getNodes().forEach(item => {
        const group = item.getContainer();
        const topPoint = group.find((element) =>
          element.get('name') === 'node-topPoint');
        topPointArr.push(topPoint);
        topPoint.attr('opacity', 1);
      });
      edge = this.graph.addItem('edge', {
        source: startId,
        target: startId,
        sourceAnchor: 1,
      });
      addingEdge = true;
    }
  },
  onMouseup(ev) {
    ev.stopPropagation();
    const node = ev.item;
    if (node.getType() === 'node' && addingEdge && edge) {
      const model = node.getModel();
      endId = model.id;
      const { edges: curEdges } = this.graph.save();
      const idx = curEdges.findIndex((item) =>
        item.source === startId && item.target === endId);
      if (idx !== -1) {
        this.graph.removeItem(edge);
      } else {
        this.graph.updateItem(edge, {
          target: endId,
          targetAnchor: 0,
        });
      }
    }
    if (node.getType() !== 'node') this.graph.removeItem(edge);
    topPointArr.forEach(topPoint => {
      topPoint.attr('opacity', 0);
    });
    eventBus.$emit('addingEdge', false);
    topPointArr = [];
    addingEdge = false;
    edge = null;
    if (this.graph.getCurrentMode() !== 'default') {
      this.graph.setMode('default');
    }
  },
  onMousemove(ev) {
    if (addingEdge && edge) {
      const point = { x: ev.x, y: ev.y };
      this.graph.updateItem(edge, {
        target: point,
      });
    }
  },
  nodeMouseEnter() {
    // const { item } = ev;
    // endPoint = item;
    // this.graph.setItemState(item, 'selected', true);
  }
};
