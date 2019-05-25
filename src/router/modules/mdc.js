import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/mdc',
  name: 'mdc',
  meta,
  redirect: { name: 'mdc-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'data/consumer',
      name: `${pre}consumer`,
      component: _import('mdc/consumer/list'),
      meta: {
        ...meta,
        title: '消费者管理'
      }
    },
    {
      path: 'data/dict',
      name: `${pre}dict`,
      component: _import('mdc/dict/list'),
      meta: {
        ...meta,
        title: '字典管理'
      }
    },
    {
      path: 'data/message',
      name: `${pre}message`,
      component: _import('mdc/message/index.vue'),
      meta: {
        ...meta,
        title: '消息管理'
      }
    },
    {
      path: 'data/producer',
      name: `${pre}producer`,
      component: _import('mdc/producer/list'),
      meta: {
        ...meta,
        title: 'producer管理'
      }
    },
    {
      path: 'data/publish',
      name: `${pre}publish`,
      component: _import('mdc/publish/list'),
      meta: {
        ...meta,
        title: '发布管理'
      }
    },
    {
      path: 'data/subscribe',
      name: `${pre}subscribe`,
      component: _import('mdc/subscribe/list'),
      meta: {
        ...meta,
        title: '订阅管理'
      }
    },
    {
      path: 'data/tag',
      name: `${pre}tag`,
      component: _import('mdc/tag/list'),
      meta: {
        ...meta,
        title: 'tag管理'
      }
    },
    {
      path: 'data/topic',
      name: `${pre}topic`,
      component: _import('mdc/topic/list'),
      meta: {
        ...meta,
        title: 'topic管理'
      }
    }
  ])('mdc-')
}
