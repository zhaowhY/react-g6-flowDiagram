import React, { Component } from 'react';
import { Routes } from '@/router';
import { controlRoutes } from '@/router/configParts';
import styles from './BasicLayout.module.less';

class BasicLayout extends Component {
  render() {
    return (
      <div className={styles['layout-container']}>
        <Routes routes={controlRoutes} />
      </div>
    );
  }
}

export default BasicLayout;
