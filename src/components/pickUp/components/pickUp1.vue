<template>
  <div>
    <div class="list-content" style="box-shadow: 2px 10px 18px #333333;">

      <!-- <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :show-timeout="200" :default-active="$route.path" :collapse="isCollapse" mode="vertical"
        background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
        <sidebar-item v-for="route in currentRoutersChildren" :key="route.name" :item="route" :base-path="route.path" />
      </el-menu>

    </el-scrollbar> -->
      <Menu :theme="theme1" active-name="$route.path" class='ivu-menu' style="backgroud-color: transparents">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-analytics" />
            菜单1
          </template>
          <Submenu name="1-1" class="ivu-menu_ul">
            <template slot="title">
              菜单1-1
            </template>
            <MenuItem v-for="route in currentRoutersChildren" :name='route.name' :key="route.path" :item="route.name"
              @click.native="clickLink(route.path,$event)">
            <!-- :base-path="route.children[0].path"> -->
            {{route.name}}</MenuItem>
          </Submenu>
          <MenuItem name="1-2">菜单1-2</MenuItem>
          <MenuItem name="1-3">菜单1-3</MenuItem>
          <MenuItem name="1-4">菜单1-4</MenuItem>

        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-filing" />
            菜单2
          </template>
          <MenuItem name="2-1">菜单2-1</MenuItem>
          <MenuItem name="2-2">菜单2-2</MenuItem>
          <Submenu name="3">
            <template slot="title">菜单2-3</template>
            <MenuItem name="3-1">菜单2-3-1</MenuItem>
            <MenuItem name="3-2">菜单2-3-2</MenuItem>
          </Submenu>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-cog" />
            菜单3
          </template>
          <MenuItem name="4-1">菜单3-1</MenuItem>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      currentRoutersChildren: [],
      theme1: 'dark',
    }
  },


  created () {
    this.setCurrentSystemRouter()
  },
  methods: {
    setCurrentSystemRouter () {
      let self = this
      console.log(this.$route, this.$router.options.routes)
      var router = this.$router.options.routes
      var route = this.$route.path
      for (var i = 0; i < router.length; i++) {
        var path = router[i].path
        console.log(path, 123, route)
        if (path == route) {
          self.currentRoutersChildren = router[i].children
          console.log(self.currentRoutersChildren)
          // for (var j = 0; j < self.currentRoutersChildren.length; j++) {
          //   var a = self.currentRoutersChildren[j].children[0].name
          //   console.log(a)
          // }
        }
      }
      // self.currentRoutersChildren = this.$route.matched


    },
    clickLink (routePath, e) {
      console.log(routePath, 11234)
      // if (!this.isExternalLink(routePath)) {
      // e.preventDefault()
      // var path = this.resolvePath(routePath)

      this.$router.push(routePath)
      // }
    },
  },
  watch: {
    // 监听路由变化
    $route: 'setCurrentSystemRouter'

  }
}
</script>
<style rel="stylesheet/scss" lang="less" scoped>
@import "./../../../css/index1.less";
</style>
