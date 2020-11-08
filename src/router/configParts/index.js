import demo from './demo';

// 第一层路由： 控制布局的
export const layoutRoutes = [
  // {
  //   path: '/user', // 需要验证登录 才可以查看的 控制台 页面
  //   component: () => import('@/components/layout/UserLayout')
  // },
  {
    path: '/', // 需要验证登录 才可以查看的 控制台 页面
    component: () => import('@/components/layout/BasicLayout')
  }
];

// 第二层路由： 布局中的路由
// 1.BasicLayout中的路由(后台/控制台路由)
export const controlRoutes = [
  ...demo,
  {
    path: '/',
    redirect: '/list' // 自动跳转到测试页面
  }
];
