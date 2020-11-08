import React from 'react';
import { Button } from 'antd';
import ErrorImg from '@/assets/images/error-404.png';
import styles from './index.module.less';

const Error = React.memo(({ back = true, history }) => (
  <div className={styles['error-wrap']}>
    <img src={ErrorImg} alt="" />
    <div>
      <p className={styles['error-code']}>404</p>
      <p className={styles['error-info']}>抱歉，你访问的页面不存在</p>
      {back && (
        <Button type="primary" onClick={() => { history.goBack(); }}>返回</Button>
      )}
    </div>
  </div>
));
Error.displayName = 'error-404';

export default Error;
