/** When your routing table is too long, you can split it into small modules**/

import Layout from '../../../components/pickUp/pickUp1'
import Routerview from '../../../components/pickUp/Routerview'


const router= [{
  name: 'menu1',
  title: '菜单1-1-1',
  icon: 'component',
  path: 'pikeupone',
  noCache: true,
}, {
  name: 'menu112',
  title: '菜单1-1-2',
  icon: 'component',
  path: 'pikeuptwo',
  noCache: true,
}]


let children = []

router.map(item => {
  let child = {
    path: '/pickUp',
    component: Routerview,
    name: 'baseInfoManagement',
    meta: {title: item.title, icon: item.icon, noCache: item.noCache},
    children: [{
      path: item.path,
      component: () => import('@/pages/' + item.name),
      name: item.name,
      meta: {title: item.title, icon: item.icon, noCache: item.noCache},
    }]
  }
  children.push(child)
})

const baseInfoManagementRouter = {
  path: '/pickUp',
  component: Layout,
  redirect: '/pickUp/pickup111',
  children: children,
  navigation: true,
  name: '1级',
  meta: {
    title: '菜单',
    icon: 'component'
  },

}

export default baseInfoManagementRouter