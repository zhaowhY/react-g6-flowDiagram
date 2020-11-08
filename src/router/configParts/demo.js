export default [
  {
    path: '/list',
    name: '数据共享',
    img: { src: 'icon_gongzuotai' },
    exact: true,
    component: () => import('@/views/TestPage')
  },
  {
    component: () => import('components/Error')
  }
];
