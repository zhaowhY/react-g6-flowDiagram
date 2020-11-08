
import G6 from '@antv/g6';
import addEdge from './add-edge';

const behavors = {
  'add-edge': addEdge,
};

export default () => {
  Object.entries(behavors).forEach(([key, value]) => {
    G6.registerBehavior(key, value);
  });
};
