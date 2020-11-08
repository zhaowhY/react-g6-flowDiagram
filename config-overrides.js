/**
 * 更多插件参考：https://juejin.im/post/5dedd6c8f265da33d15884bf
 * npm customize-cra: https://www.npmjs.com/package/customize-cra
 */
const path = require('path');
const chalk = require('chalk');
const {
  override, overrideDevServer, fixBabelImports, addLessLoader, addWebpackAlias,
  addDecoratorsLegacy, addBabelPlugin
} = require('customize-cra');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require('copy-webpack-plugin');
const env = process.env.REACT_APP_BUILD_ENV;


const myPlugins = [
  new ProgressBarPlugin({
    format: `  progress [:bar]  ${chalk.green.bold(':percent')} (:elapsed seconds)`,
    clear: false,
    width: 60
  }),
  // eslint-disable-next-line
  new LodashModuleReplacementPlugin, // lodash按需打包
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, `./static/config.${env}.js`),
        to: `./${process.env.REACT_APP_CONFIG_PATH}`
      },
    ],
  }),
  process.env.REACT_APP_ENV === 'report'
  && new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  }),
].filter(Boolean);

const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
  };

  config.plugins = [...config.plugins, ...myPlugins];

  // 1.修改、添加loader 配置 :
  // 所有的loaders规则是在config.module.rules(数组)的第二项
  // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
  // 修改 less-loader 配置 ，规则 loader 在第7项
  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
  // *.less 也会有css Module
  // loaders[7].use[1].options.modules = true;

  // style-resources-loader 使用less变量的less文件不用每次输入 @import ‘～variable.less’了
  loaders[7].use.push({
    loader: 'style-resources-loader',
    options: {
      patterns: [
        path.resolve(__dirname, 'src/styles/theme/variable.less')
      ]
    }
  });
  return config;
}

// 修改打包后的文件目录
const recoverBuildPath = () => (config) => {
  const paths = require("react-scripts/config/paths");
  paths.appBuild = path.join(path.dirname(paths.appBuild), "docs");
  config.output.path = path.join(path.dirname(config.output.path), "docs");
  config.output.publicPath = './docs'; // 修改相对路径
  return config
}

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),

    // fixBabelImports('lodash', {
    //   libraryDirectory: '',
    //   camel2DashComponentName: false
    // }),

    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        hack: `true;@import "${path.resolve(__dirname, 'src/styles/theme/variable.less')}";`
      },
      localIdentName: process.env.NODE_ENV === 'production'
        ? '[local]__[hash:base64:10]'
        : '[path][name]__[local]__[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }
    ),

    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components')
    }),

    addCustomize(),

    recoverBuildPath()
  ),
  devServer: overrideDevServer((configFunction) => {
    configFunction.proxy = {
      '/test': {
        target: 'http://www.test.cn',
        changeOrigin: true
      },
    };

    return configFunction;
  }),
};
