/** When your routing table is too long, you can split it into small modules**/

import Layout from '../../../components/pickUp/index'
import Routerview from '../../../components/pickUp/Routerview'
import menu112 from '../../../pages/menu112'


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
  console.log(item.name)
  let child = {
    path: '/pickUp',
    component: Routerview,
    name: '菜单1',
    meta: {title: item.title, icon: item.icon, noCache: item.noCache}, 
    children: [{
      path: item.path,
      component:menu112,
      // component: resolve => require(["../../../pages/menu112"], resolve),
      name: item.name,
      meta: {title: item.title, icon: item.icon, noCache: item.noCache},
    }]
  }
  children.push(child)
  console.log(child.children[0].path,child.children[0].component,child)
})

const baseInfoManagementRouter = {
  path: '/pickUp',
  component: Layout,
  // redirect: '/pickUp/pickupone',
  children: children,
  navigation: true,
  name: '菜单1',
}
console.log(baseInfoManagementRouter)

export default baseInfoManagementRouter