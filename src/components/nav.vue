<template>
  <div class="navWrapper">
    <div class="logo">
      <span>
        管理系统
      </span>
    </div>

    <div class="control">
      <div class="router">
        <div class="refresh">
          <Icon type="md-refresh" size='24'/>
        </div>
        <div>
          <span>1</span>/<span>2</span>/<span>3</span>
        </div>
      </div>

      <div class="option">
        <input type="text" placeholder="搜索...">
        <div class="icon">
          <Icon type="md-radio-button-on" size='24'/>
        </div>
        <div class="icon">
          <Icon type="ios-qr-scanner" size='24'/>
        </div>
        <div class="icon">
          <Icon type="ios-notifications-outline" size='24'/>
        </div>

        <Dropdown>
          <div class="user">
            <a href="javascript:void(0)">
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            </a>
            <span>
              admin
              <!-- {{`${user.name}`}} -->
            </span>
          </div>

          <DropdownMenu slot="list">
            <DropdownItem v-for="(item,index) in adminOption" :key="index">
              <Icon :type="item.icon" size='24'/>
              <span>{{item.name}}</span>
            </DropdownItem>
            <DropdownItem divided>
              <Icon type="ios-log-out" size='24'/>
              <span>退出登录</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div class="icon">
          <Icon type="md-globe" size='24'/>
        </div>
      </div>
    </div>

    <Modal v-model="showOut" title="提示" >
      <p>确定退出?</p>
    </Modal>
  </div>
</template>
<script type="text/ecmascript-6">

export default {
  data () {
    return {
      showOut: false,
      visible: false,
      adminOption: [
        { name: '个人中心', icon: 'ios-contact-outline' },
        { name: '设置', icon: 'ios-settings-outline' },
      ]
    }
  },
  methods: {
    routeTo (e) {
      //console.log(e);
      this.$router.push(e);
    },
    handleOpen () {
      this.visible = true;
    },
    handleClose () {
      this.visible = false;
    },
    ok () {
      this.$router.push({ path: '/login' })
    }
  },
  components: {},
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '');
    },
    setActive () {
      return this.$route.path.replace('/', '');
    }
  }
}
</script>

<style scoped lang="less">
.navWrapper {
  display: flex;
  height: 80px;
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 10px 0 rgba(70, 76, 91, 0.52),
    0 0 6px 0 rgba(70, 76, 91, 0.04);
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 100%;
    background: #1c2438;

    span {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }
  }
  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 100%;
    padding: 0 1%;
    .router {
      display: flex;
      align-items: center;
      height: 100%;
      .refresh {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 100%;
        margin-right: 8px;
        padding: 0 15px;
        cursor: pointer;
      }
      .refresh:hover {
        background: rgba(0, 0, 0, 0.1);
      }
      div {
        font-size: 20px;
        color: #ccc;
        span {
          margin: 0 10px;
        }
      }
    }
    .option {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      input {
        width: 80%;
        height: 100%;
        font-size: 22px;
        padding-left: 5px;
        outline: none;
        border: none;
      }
      input::-webkit-input-placeholder {
        color: #aab2bd;
        font-size: 22px;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 100%;
        padding: 0 15px;
        cursor: pointer;
      }
      .icon:hover {
        background: rgba(0, 0, 0, 0.1);
      }
      .user {
        display: flex;
        align-items: center;
        padding: 0 15px;
        height: 100%;
        span {
          font-size: 18px;
          margin-left: 8px;
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
  .ivu-dropdown-menu{
    .ivu-dropdown-item .ivu-dropdown-item-divided{
      display: flex;
      align-items: center;
      padding: 15px 10px;
      span{
        font-size: 16px;
        margin-left: 5px;
      }
      
    }
  }
}

// .ivu-menu {
//   display: flex;
//   box-shadow: 0 2px 4px 0 rgba(70, 76, 91, 0.52),
//     0 0 6px 0 rgba(70, 76, 91, 0.04);
// }
// .ivu-menu-item {
//   flex: 1;
//   text-align: center;
// }
// .ivu-menu-item:hover {
//   font-size: 20px;
// }
// .ivu-menu-item a {
//   color: #fff;
// }
// .ivu-menu-item-selected a {
//   font-size: 20px;
// }
// a:hover {
//   color: #fff !important;
// }

// .ivu-menu-light {
//   background: #00d1b2;
// }
</style>
