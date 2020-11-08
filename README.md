## introduction
- react前端开发框架

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

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

### 命名规范
- 文件名：见[Airbnb React/JSX 编码规范](https://github.com/JasonBoy/javascript/tree/master/react)
  - *.js 结尾的文件及与其对应的 *.js *.styl 使用大驼峰　——　`HelloWorld.js; HelloWorld.js; HelloWorld.styl`
  - 其他文件使用小驼峰 —— `main.js`
  - 应用css module的less文件, 命名为 *.module.less ,例如'HelloWorld.module.less',否则css module无效
- 变量命名：小驼峰　——　`userName`

### Compiles and minifies
- dev: `npm run build:dev`
- test: `npm run build:test`
- production: `npm run build`
- report: `npm run report` 可以在build环境路径下打开report.html查看依赖包的分析报告

### note
1. 跟环境有关的变量在.env.*中设置，并且必须要以REACT_APP_开头
2. 调试`config-overrides.js`可以添加如下launch.json配置
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "runtimeExecutable": "${workspaceFolder}/node_modules/react-app-rewired/bin/index.js",
      "args": ["start"],
    }
  ]
}
```