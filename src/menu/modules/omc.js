export default {
  path: '/omc',
  title: '订单中心',
  icon: 'flask',
  children: (pre => [
    {
      title: '订单履约',
      iconSvg: 'd2-admin',
      children: [
        { title: '购物车管理', path: `${pre}/order/cart` },
        { title: '分类管理', path: `${pre}/order/category` },
        { title: '订单管理', path: `${pre}/order/order` },
        { title: '商品管理', path: `${pre}/order/product` },
        { title: '收货管理', path: `${pre}/order/shipping` }
      ]
    }
  ])('/omc')
}
