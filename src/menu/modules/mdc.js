export default {
  path: '/mdc',
  title: '资源中心',
  icon: 'flask',
  children: (pre => [
    {
      title: '基础数据',
      iconSvg: 'd2-admin',
      children: [
        { title: '消费者管理', path: `${pre}/data/consumer` },
        { title: '字典管理', path: `${pre}/data/dict` },
        { title: '消息管理', path: `${pre}/data/message` },
        { title: '生产者管理', path: `${pre}/data/producer` },
        { title: '发布管理', path: `${pre}/data/publish` },
        { title: '订阅管理', path: `${pre}/data/subscribe` },
        { title: 'tag管理', path: `${pre}/data/tag` },
        { title: 'topic管理', path: `${pre}/data/topic` }
      ]
    }
  ])('/mdc')
}
