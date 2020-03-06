<template>
  <div class="listCon">
    <Menu :theme="theme1" class='ivu-menu' width='auto' accordion :open-names="[navList[0].key]"
      :active-name="navList[0].child[0].key">
      <Submenu :name="item.key" v-for="(item,index) in navList" :key="index">
        <template slot="title">
          <Icon :type="item.icon" />
          {{item.mainName}}
        </template>
        <MenuItem v-for="(option,index) in item.child" :key="index" :name="option.key" @click.native="goRouter2">
        {{option.name}}
        </MenuItem>
      </Submenu>
    </Menu>
  </div>

</template>


<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      currentRoutersChildren: [],
      theme1: 'dark',
      navList: [
        {
          mainName: '菜单1',
          icon: 'ios-analytics',
          key: 1,
          child: [
            {
              name: '菜单1-1',
              key: '1-1'
            },
            {
              name: '菜单1-2',
              key: '1-2'
            },
            {
              name: '菜单1-3',
              key: '1-3'
            },
            {
              name: '菜单1-4',
              key: '1-4'
            }
          ]
        },
        {
          mainName: '菜单2',
          icon: 'ios-analytics',
          key: 2,
          child: [
            {
              name: '菜单2-1',
              key: '2-1'
            },
            {
              name: '菜单2-2',
              key: '2-2'
            },
            {
              name: '菜单2-3',
              key: '2-3'
            },
            {
              name: '菜单2-4',
              key: '2-4'
            }
          ]
        },
        {
          mainName: '菜单3',
          icon: 'ios-analytics',
          key: 3,
          child: [
            {
              name: '菜单3-1',
              key: '3-1'
            },
            {
              name: '菜单3-2',
              key: '3-2'
            },
            {
              name: '菜单3-3',
              key: '3-3'
            }
          ]
        }
      ]
    }
  },
  computed: {
    router_param: function () {
      return this.$store.state.router_param
    }
  },
  mounted () {
    //  this.goRouter1()
  },

  created () {
    this.setCurrentSystemRouter()
  },
  methods: {
    goRouter1 () {
      this.$store.commit('router_param', '1-1')
    },
    goRouter2 () {
      this.$store.commit('router_param', '1-2')
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
.listCon {
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
