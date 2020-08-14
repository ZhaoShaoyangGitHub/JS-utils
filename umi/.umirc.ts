import { defineConfig } from 'umi';

export default defineConfig({
  // api-》 https://github.com/ant-design/ant-design-pro-layout/blob/master/README.zh-CN.md
  layout: {
    title: '我是布局标题',
    loading: true,
  },
  base: '/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'browser', // 可选 browser、hash 和 memory
  },
  nodeModulesTransform: {
    type: 'none',
  },
  title: '我是UMI', //浏览器标签
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      title: 'home page',
      routes: [
        {
          exact: true,
          path: '/',
          component: '@/pages/Home/index',
        },
        {
          exact: true,
          path: '/about',
          component: '@/pages/About/index',
          title: 'About',
        },
        {
          exact: true,
          path: '/user',
          component: '@/pages/User/index',
          title: 'User',
          wrappers: ['@/wrappers/auth'], //可以做路由守卫
        },
        {
          path: '/list',
          component: '@/layouts/link',
          title: 'home page',
          routes: [
            {
              exact: true,
              path: '/list',
              component: '@/pages/List/index',
              title: 'List',
              routes: [],
            },
          ],
        },

        {
          exact: true,
          path: '/listDetail/:id',
          component: '@/pages/listDetails/[id]',
          title: 'ListDetails',
        },
        {
          exact: true,
          path: '/login',
          component: '@/pages/Login/index',
          title: 'Login',
        },
        { component: '@/pages/404' },
      ],
    },
  ],
  cssModulesTypescriptLoader: { mode: 'emit' },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // 设置 alias
    memo.resolve.alias.set('foo', '/tmp/a/b/foo');
  },
});
