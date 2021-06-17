export default [
  {
    path: "/",
    component: () => import('@/views/layout'),
    redirect: "/index",
    meta: {icon: 'home', title: '系统管理'},
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: {title: '首页', hidden: true},
        component: () => import('@/views/index/index'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {title: '登陆', hidden: true},
    component: () => import('@/views/login'),
  },
  {
    path: '*',
    name: '404',
    meta: {title: '页面不存在', hidden: true},
    component: () => import('@/views/exception/abnormal-404'),
  }
]
