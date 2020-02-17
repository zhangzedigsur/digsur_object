<template>
  <div>
    <div class="list-content" style="box-shadow: 2px 10px 18px #333333;">

    <!-- <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :show-timeout="200" :default-active="$route.path" :collapse="isCollapse" mode="vertical"
        background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
        <sidebar-item v-for="route in currentRoutersChildren" :key="route.name" :item="route" :base-path="route.path" />
      </el-menu>

    </el-scrollbar> -->
    <Menu :theme="theme1"  active-name="$route.path" class='ivu-menu' mode="vertical" style="backgroud-color: transparents">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics" />
          菜单1
        </template>
        <Submenu name="1-1">
          <template slot="title">
            菜单1-1
          </template>
          <MenuItem  v-for="route in currentRoutersChildren" :name='route.name' :key="route.name" :item="route" :base-path="route.path">
          </MenuItem>
        </Submenu>
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
      console.log(this.$route)
      self.currentRoutersChildren = this.$route.matched
    }
  },
  watch: {
    // 监听路由变化
    $route: 'setCurrentSystemRouter'
   
  }
}
</script>
<style rel="stylesheet/scss" lang="less" scoped>
</style>
