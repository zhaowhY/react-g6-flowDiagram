import axios from 'axios';
import { stringify } from 'qs';
import { PATHS } from '@/router/constant';
import { message } from 'antd';

const responseHandle = (options = {}) => {
  const { quiet, raw } = options;
  return (response = {}) => {
    if (raw) return response.data;
    const {
      data: { code, data, message: msg }
    } = response;
    if (code === 200) {
      return data;
    }

    if (code === 101 || code === 102) {
      message.error(msg);
      window.location.hash = PATHS.LOGIN;
    }
    !quiet && message.error(msg || '服务器错误');
    return Promise.reject(response.data);
  };
};


const getRequestInstance = (baseURL, options = {}) => {
  const { cache = false, withCredentials = true, ...opts } = options;
  const option = {
    baseURL,
    withCredentials,
    paramsSerializer: params => stringify(params, { arrayFormat: 'repeat' }),
    ...opts
  };
  const instance = axios.create(option);
  // 添加请求拦截器
  instance.interceptors.request.use((config) => {
    if (cache) {
      // eslint-disable-next-line
      if (!config.params) config.params = {};
      // eslint-disable-next-line
      config.params._t = Date.now();
      return config;
    }
    return config;
  }, (error) => Promise.reject(error));

  instance.interceptors.response.use(
    responseHandle(),
    error => Promise.reject(error)
  );


  instance.quiet = axios.create(option);
  instance.quiet.interceptors.response.use(responseHandle({ quiet: true }));

  // 原始输出，不需要处理返回值
  instance.raw = axios.create(option);
  instance.raw.interceptors.response.use(responseHandle({ raw: true }));

  return instance;
};

export default getRequestInstance;
