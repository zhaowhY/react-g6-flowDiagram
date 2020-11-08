/**
 * 通过本工具函数：可在React hook 中便捷使用 mobx
 * usage in function component:
 * const { user, ... } = useStores();
 */
import React from 'react';
import store from '../store';

const useStores = () => {
  const storeContext = React.createContext(store);
  return React.useContext(storeContext);
};

export default useStores;
