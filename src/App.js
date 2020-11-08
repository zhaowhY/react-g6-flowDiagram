import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { HashRouter } from 'react-router-dom';
import { Routes } from '@/router';
import { layoutRoutes } from '@/router/configParts';
import '@/styles/index.less';


const App = () => (
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <Routes routes={layoutRoutes} />
    </ConfigProvider>
  </HashRouter>
);

export default App;
