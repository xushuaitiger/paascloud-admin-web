export default {
  path: '/uac',
  title: '用户中心',
  icon: 'flask',
  children: (pre => [
    {
      title: '单位组织',
      iconSvg: 'd2-admin',
      children: [
        { title: '按钮管理', path: `${pre}/sys/action` },
        { title: '组织管理', path: `${pre}/sys/group` },
        { title: '日志管理', path: `${pre}/sys/log` },
        { title: '菜单管理', path: `${pre}/sys/menu` },
        { title: '角色管理', path: `${pre}/sys/role` },
        { title: '用户管理', path: `${pre}/sys/user` }
      ]
    }
  ])('/uac')
}
