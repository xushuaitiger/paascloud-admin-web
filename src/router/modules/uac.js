import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/uac',
  name: 'uac',
  meta,
  redirect: { name: 'uac-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'sys/action',
      name: `${pre}action`,
      component: _import('uac/action/list'),
      meta: {
        ...meta,
        title: '按钮管理'
      }
    },
    {
      path: 'sys/group',
      name: `${pre}group`,
      component: _import('uac/group/list'),
      meta: {
        ...meta,
        title: '组织管理'
      }
    },
    {
      path: 'sys/log',
      name: `${pre}log`,
      component: _import('uac/log/list'),
      meta: {
        ...meta,
        title: '日志管理'
      }
    },
    {
      path: 'sys/menu',
      name: `${pre}menu`,
      component: _import('uac/menu/list'),
      meta: {
        ...meta,
        title: '菜单管理'
      }
    },
    {
      path: 'sys/role',
      name: `${pre}role`,
      component: _import('uac/role/list'),
      meta: {
        ...meta,
        title: '角色管理'
      }
    },
    {
      path: 'sys/user',
      name: `${pre}user`,
      component: _import('uac/user/list'),
      meta: {
        ...meta,
        title: '用户管理'
      }
    }
  ])('uac-')
}
