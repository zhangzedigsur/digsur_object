<template>
  <div>

    <div class="list-content" style="box-shadow: 2px 10px 18px #333333;">
    <Menu :theme="theme1" active-name="1" class='ivu-menu'   style="backgroud-color: transparents" >
        <Submenu  name="1">
            <template slot="title">
                <Icon type="ios-analytics" />
                菜单1
            </template>
          <Submenu  name="1-1" class="ivu-menu_ul" >
            <template slot="title">
              菜单1-1
            </template>
            <MenuItem name="1-1-1" @click="pickup1">菜单1-1-1</MenuItem>
            <MenuItem name="1-1-2">菜单1-1-2</MenuItem>
            <MenuItem name="1-1-3">菜单1-1-3</MenuItem>
            <MenuItem name="1-1-4">菜单1-1-4</MenuItem>
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
<script type="text/ecmascript-6">
  export default{
    data() {
        return {
            theme1: 'dark',
        }
    },
    methods: {
        pickup1(){
            this.$router.push({path: 'pickup1-1-1'})
            }
        }
    }
</script>
<style lang="less" scoped>
  .com-name{
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
  color: #657180;
}
.com-list{
  height: 200px;
}
.com-list li{
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  color: #657180;
}

  .company{
    position: absolute;
    bottom:25px;
    left: 40px;
    opacity: .3;
    cursor: pointer;
  }
  .company-name{
    color: #fff;
    font-size:13px;

    font-family: inherit;
  }
  .company img{
    vertical-align: top;

    margin-left: 45px;
  }
  .company:hover{
    opacity: 1;
  }
  @import "./../../css/index1.less";

</style>
