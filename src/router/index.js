import Vue from "vue";
import Router from "vue-router";
// import baseInfoManagementRouter from "./components/first/firstmenu";
Vue.use(Router);


export const constantRouterMap = [
  {
    path: "/",
    children: [
      {
        path: "/",
        redirect: "/login"
      }
    ]
  }, 
  {
    path: "/login",
    component: resolve => require(["../components/login.vue"], resolve)
  },
  {
    path: "/home",
    component: resolve => require(["../components/home.vue"], resolve),
    children: [
      {
        path: "/homePage",
        component: resolve => require(["../components/homePage.vue"], resolve),
      },
      {
        path: "/pikeupone",
        component: resolve => require(["../components/users.vue"], resolve),
      }
    ]
  },
];

export default new Router({
  // mode: "history", // require service support
  // base: "/", // 项目根路径
  // scrollBehavior: () => ({ y: 0 }),
  // routes: constantRouterMap.concat(baseInfoManagementRouter)
  routes:constantRouterMap
});
