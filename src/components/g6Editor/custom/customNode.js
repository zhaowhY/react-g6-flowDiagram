/* eslint-disable */
// {@links: https://antv-g6.gitee.io/zh/docs/manual/middle/elements/nodes/custom-node}
import G6 from '@antv/g6';
import eventBus from '../eventBus'

export default {
  init: (width = 150, height = 50) => {
    G6.registerNode('custom-node', {
    
      draw: (cfg, group) => {
        const keyShape = group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width,
            height,
            stroke: 'blue',
            fill: '#fff', // 此处必须有fill 不然不能触发事件
            radius: 4,
            cursor: 'move'
          },
          name: 'node-rect-keyShape'
        });

        group.addShape('text', {
          attrs: {
            text: cfg.label,
            x: 19,
            y: 19,
            fontSize: 14,
            fontWeight: 700,
            textAlign: 'left',
            textBaseline: 'middle',
            fill: 'blue',
            cursor: 'move',
          },
          draggable: true,
          name: 'node-text',
        });

        // 上节点
        group.addShape('circle', {
          attrs: {
            x: width / 2 ,
            y: 0,
            r: 5,
            fill: '#fff',
            stroke: 'blue',
            opacity: 0,
          },
          name: 'node-topPoint',
        });

        // 下节点
        group.addShape('circle', {
          attrs: {
            x: width / 2 ,
            y: height,
            r: 5,
            fill: '#fff',
            stroke: 'blue',
            opacity: 0,
            cursor: 'crosshair'
          },
          name: 'node-bottomPoint',
        });
        return keyShape;
      },
      afterDraw: (cfg, group) => {
        // 下面点
        const bottomPoint = group.find((element) => element.get('name') === 'node-bottomPoint');
        if (bottomPoint) {
          bottomPoint.on('mouseenter', () => {
            bottomPoint.attr('fill', 'blue');
          });
          bottomPoint.on('mouseleave', () => {
            bottomPoint.attr({
              fill: '#fff',
            });
          });

          bottomPoint.on('mousedown', (e) => {
            eventBus.$emit('bottomPointMousedown')
          });
        }
      },
    }, 'rect'); // 需要制定第三个属性'rect'， setStateStyles才会生效，并且可以使用原生的一些属性
  }
}