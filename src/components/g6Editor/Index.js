// eslint-disable-next-line
// 根据https://antv-g6.gitee.io/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F
import React, { Component } from 'react';
import G6 from '@antv/g6';
import { uniqueId } from 'lodash';
import styles from './index.module.less';
import initBehavors from './behavior/index';
import customNode from './custom/customNode';
import eventBus from './eventBus';

class G6Editor extends Component {
  constructor(props) {
    super(props);
    this.graph = null;
    this.graphId = 'graph-container';
    this.selectedNode = null;
    this.hoverNode = null;
    this.addingEdge = false;
    this.state = {};
    this.data = {
    };
  }

  componentDidMount() {
    customNode.init();
    initBehavors();
    this.init();
    this.bindEvent();
  }

  init() {
    this.graph = new G6.Graph({
      container: this.graphId,
      width: 1000,
      height: 500,
      // translate the graph to align the canvas's center, support by v3.5.1
      fitCenter: true,
      defaultNode: {
        type: 'custom-node',
        style: {
        },
      },
      defaultEdge: {
        type: 'cubic-vertical',
        style: {
          stroke: '#5B8FF9',
          endArrow: true,
          lineWidth: 3,
        },
      },
      modes: {
        default: ['drag-canvas', 'drag-node'],
        addEdge: ['add-edge'],
      },
      nodeStateStyles: {
        selected: {
          lineWidth: 4,
          'node-text': {
            fill: 'gray'
          },
          'node-bottomPoint': {
            opacity: 1,
          },
          'node-topPoint': {
            opacity: 1,
          }
        },
        hover: {
          lineWidth: 2,
          'node-bottomPoint': {
            opacity: 1,
          },
          'node-topPoint': {
            opacity: 1,
          }
        }
      },
      edgeStateStyles: {
        // the style configurations for the hover state
        hover: {
          stroke: 'red',
        },
        // the style configurations for the selected state
        selected: {
          lineWidth: 8,
        },
      },
    });
    this.graph.read(this.data);
  }

  bindEvent() {
    // FIXME: 暂时没查到合并事件的方式，因此分开写
    this.graph.on('node:mouseenter', (evt) => {
      const { item } = evt;
      this.hoverNode = item;
      if (!this.addingEdge) {
        this.graph.setItemState(item, 'hover', true);
      }
    });
    // this.graph.on('edge:mouseenter', (evt) => {
    //   const { item } = evt;
    //   this.graph.setItemState(item, 'hover', true);
    // });

    this.graph.on('node:mouseleave', (evt) => {
      const { item } = evt;
      if (!this.addingEdge) {
        this.graph.setItemState(item, 'hover', false);
      }
    });
    // this.graph.on('edge:mouseleave', (evt) => {
    //   const { item } = evt;
    //   this.graph.setItemState(item, 'hover', false);
    // });

    this.graph.on('click', () => {
      if (this.selectedNode) {
        this.graph.setItemState(this.selectedNode, 'selected', false);
        this.selectedNode = null;
      }
    });
    this.graph.on('node:click', (evt) => {
      const { item } = evt;
      this.selectedNode = item;
      this.graph.setItemState(item, 'selected', true);
    });
    // this.graph.on('edge:click', (evt) => {
    //   const { item } = evt;
    //   this.selectedNode = item;
    //   this.graph.setItemState(item, 'selected', true);
    // });

    // 下面节点按下
    eventBus.$on('bottomPointMousedown', () => {
      this.graph.setMode('addEdge');
    });
    // 执行连线操作
    eventBus.$on('addingEdge', (bool) => {
      this.addingEdge = bool;
      if (!bool && this.hoverNode) {
        this.graph.setItemState(this.hoverNode, 'hover', false);
        this.hoverNode = null;
      }
    });
  }

  addNode() {
    const id = uniqueId();
    const node = {
      id: `rect${id}`,
      label: `自定义节点rect${id}`,
      x: 350 + Math.random() * 100,
      y: 50,
      anchorPoints: [
        [0.5, 0],
        [0.5, 1],
      ],
    };
    this.graph.addItem('node', node);
  }

  consoleData() {
    console.log(this.graph.save());
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.addNode()}>添加节点</button>
        <button
          type="button"
          onClick={() => this.consoleData()}
          style={{ marginLeft: 16 }}
        >
          打印数据
        </button>
        <div
          className={styles['graph-container']}
          id={this.graphId}
        >
        </div>
      </div>
    );
  }
}
export default G6Editor;
