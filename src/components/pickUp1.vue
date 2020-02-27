<template>
<div class="listCon">
      <Menu :theme="theme1" active-name="$route.path" class='ivu-menu' width='auto'>
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics" />
          菜单1
        </template>
        <!-- <Submenu name="1-1" class="ivu-menu_ul">
          <template slot="title">
            菜单1-1
          </template>
          <MenuItem v-for="route in currentRoutersChildren" :name='route.name' :key="route.path" :item="route.name"
            @click.native="clickLink(route.path,$event)">
          {{route.name}}</MenuItem>
        </Submenu> -->
        <MenuItem name="1-1" @click.native="goRouter1">菜单1-1</MenuItem>
        <MenuItem name="1-2" @click.native="goRouter2">菜单1-2</MenuItem>
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
        <!-- <Submenu name="3">
          <template slot="title">菜单2-3</template>
          <MenuItem name="3-1">菜单2-3-1</MenuItem>
          <MenuItem name="3-2">菜单2-3-2</MenuItem>
        </Submenu> -->
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

</template>


<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      currentRoutersChildren: [],
      theme1: 'dark',
    }
  },
  computed:{
    router_param:function(){
      return this.$store.state.router_param
    }
  },
  mounted(){

  },

  created () {
    this.setCurrentSystemRouter()
  },
  methods: {
    goRouter1 () {
      this.$store.commit('router_param','1-1')
    },
    goRouter2 () {
      this.$store.commit('router_param','1-2')
    },
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
        }
      }


    },
    clickLink (routePath, e) {
      console.log(routePath, 11234)

      this.$router.push(routePath)
    },
  },
  watch: {
    // 监听路由变化
    $route: 'setCurrentSystemRouter'

  }
}
</script>
<style scoped lang="less">
.listCon{
  width: 15%;
  height: 100%;
  background: #1c2438;
  box-sizing: border-box;
}

/*屏幕分辨率 <768， xs*/
@media screen and (max-width: 768px) {
}

/*屏幕分辨率 ≥768px， sm*/
@media screen and (min-width: 768px) and (max-width: 992px) {
}

/*屏幕分辨率 ≥992px， md*/
@media screen and (min-width: 992px) and (max-width: 1200px) {
}

/*屏幕分辨率 ≥1200px， lg*/
@media screen and (min-width: 1200px) and (max-width: 1920px) {
}

/*屏幕分辨率 ≥1920px， xl*/
@media screen and (min-width: 1920px) {
}
@import "../css/index1.less";
</style>
