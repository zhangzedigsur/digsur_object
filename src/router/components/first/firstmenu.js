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
    path: item.path,
    component: () => import('../../../pages/' + item.name),
    name: item.name,
    meta: {title: item.title, icon: item.icon, noCache: item.noCache}, 
    // children: [{
    //   path: item.path,
    //   component:menu112,
    //   // component: resolve => require(["../../../pages/menu112"], resolve),
    //   name: item.name,
    //   meta: {title: item.title, icon: item.icon, noCache: item.noCache},
    // }]
  }
  children.push(child)
  console.log(child)
})

const baseInfoManagementRouter = {
  path: '/pickUp',
  component: Layout,
  children: children,
  navigation: true,
  name: '菜单1',
}
console.log(baseInfoManagementRouter)

export default baseInfoManagementRouter