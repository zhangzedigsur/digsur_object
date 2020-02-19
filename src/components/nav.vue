<template>
  <div class="navWrapper">
    <div class="left">
      <div class="logo">
        <img src="https://file.iviewui.com/pro-app-dist/img/logo-dark.cc417ece.png" alt="">
      </div>

      <ul class="nav">
        <li class="item" :style="`border-color:${target == index? '#f6ca9d':''}`" v-for="(item,index) in navList" :key="index" @click="Office(item,index)">
          <Icon :type="item.icon" size='26' color='#f6ca9d' />
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>

    <div class="control">
      <div class="option">

        <div class="icon" @click="refersh">
          <Icon type="md-refresh" size='26' color='#f6ca9d' />
        </div>

        <div class="icon">
          <Icon type="ios-notifications-outline" size='26' color='#f6ca9d' />
        </div>

        <Dropdown>
          <div class="user">
            <a href="javascript:void(0)">
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            </a>
            <span>
              admin
            </span>
          </div>

          <DropdownMenu slot="list">
            <DropdownItem v-for="(item,index) in adminOption" :key="index">
              <Icon :type="item.icon" size='26' />
              <span>{{item.name}}</span>
            </DropdownItem>
            <DropdownItem divided @click.native="logOut">
              <Icon type="ios-log-out" size='26' />
              <span>退出登录</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
      fullbool: false,
      adminOption: [
        { name: '个人中心', icon: 'ios-contact-outline' },
        { name: '设置', icon: 'ios-settings-outline' },
      ],
      navList: [
        { name: '办公业务1', icon: 'ios-contact-outline' },
        { name: '办公业务2', icon: 'ios-settings-outline' },
        { name: '办公业务3', icon: 'ios-contact-outline' },
        { name: '办公业务4', icon: 'ios-settings-outline' },
      ],
      target:null
    }
  },
  methods: {
    //刷新
    refersh () {
      location.reload()
    },

    //退出
    logOut () {
      this.$router.push({ path: '/login' })
    },

    Office (item,index) {
      this.target = index
      switch (name) {
        case '办公业务1':
          this.$router.push({ path: '' })
          break;
        case '办公业务2':
          this.$router.push({ path: '' })
          break;
        case '办公业务3':
          this.$router.push({ path: '' })
          break;
        case '办公业务4':
          this.$router.push({ path: '' })
          break;
      }
    }

  },

  components: {},

  computed: {

  }
}
</script>

<style scoped lang="less">
.navWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9%;
  width: 100%;
  background: #1c2438;
  .left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 50%;
    .logo {
      width: 25%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav {
      display: flex;
      margin-left: 6.5%;
      width: 75%;
      height: 100%;
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 25%;
        height: 100%;
        border-bottom: 5px solid #1c2438;
        span {
          color: #f6ca9d;
          font-size: 20px;
          margin-left: 5px;
          font-weight: bold;
        }
      }
      .item:hover {
        border-color: #f6ca9d;
      }
    }
  }

  .control {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 100%;
    .option {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      margin-right: 10px;

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 100%;
        padding: 0 20px;
        cursor: pointer;
        border-bottom: 5px solid #1c2438;
      }
      .icon:hover {
        border-color: #f6ca9d;
      }
      .user {
        display: flex;
        align-items: center;
        padding: 0 20px;
        height: 100%;
        span {
          font-size: 20px;
          margin-left: 10px;
          color: #f6ca9d;
        }
      }
    }
  }
}
.ivu-dropdown {
  display: flex;
  height: 100%;
  .ivu-dropdown-rel {
    height: 100%;
  }
  .ivu-dropdown-menu {
    .ivu-dropdown-item .ivu-dropdown-item-divided {
      display: flex;
      align-items: center;
      padding: 15px 10px;
      span {
        font-size: 20px;
        margin-left: 5px;
      }
    }
  }
}

</style>
