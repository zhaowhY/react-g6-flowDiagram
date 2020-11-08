## introduction
- 基于react和g6的流程图组件

##　开发环境：　
- node: 10.14.1
- npm: 6.4.1
- react: 16.13.1

### 目录结构
  ```bash
  - static  # 静态文件
    - js
    - css
    - images
  - public
    - favicon.ico
    - index.html  # 入口html
  - src   # 业务代码
    - assets  # 图片，字体等资源
    - api # 接口交互模块
    - components  # 公共组件
    - config  # 业务组件配置, 公共静态变量
    - router   # react router
    - store   # mobx
    - styles   # 主题模块,重置样式，全局样式
    - utils  # 常用工具函数
    - views   # 视图组件

    - App.js
    - index.js   # 入口js
  - .env.[mode] # 环境变量
  - .gitlab-ci.yml # cicd 配置文件
  - README.MD
  ```