import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/omc',
  name: 'omc',
  meta,
  redirect: { name: 'omc-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'order/cart',
      name: `${pre}cart`,
      component: _import('omc/cart/list'),
      meta: {
        ...meta,
        title: '购物车管理'
      }
    },
    {
      path: 'order/category',
      name: `${pre}category`,
      component: _import('omc/category/list'),
      meta: {
        ...meta,
        title: '分类管理'
      }
    },
    {
      path: 'order/order',
      name: `${pre}order`,
      component: _import('omc/order/list'),
      meta: {
        ...meta,
        title: '订单管理'
      }
    },
    {
      path: 'order/product',
      name: `${pre}product`,
      component: _import('omc/product/list'),
      meta: {
        ...meta,
        title: '商品管理'
      }
    },
    {
      path: 'order/shipping',
      name: `${pre}shipping`,
      component: _import('omc/shipping/list'),
      meta: {
        ...meta,
        title: '收货管理'
      }
    }
  ])('omc-')
}
