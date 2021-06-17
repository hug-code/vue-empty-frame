export default [
  {
    path: "/",
    component: () => import('@/views/layout'),
    redirect: "/index",
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: {title: '首页'},
        component: () => import('@/views/index'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {title: '登陆', login: false},
    component: () => import('@/views/login'),
  },
  {
    path: '*',
    name: '404',
    meta: {title: '页面不存在', login: false},
    component: () => import('@/views/exception/abnormal-404'),
  }
]
