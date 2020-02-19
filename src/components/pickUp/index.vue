<template>
  <div  class="app-wrapper">
    <pick-up1 class="sidebar-container" />
    <div class="main-container">
      <!-- 跳转的页面部分 -->
      <appmain/>
    </div>
  </div>
</template>

<script>
import appmain from './components/appmain'
import pickUp1 from './components/pickUp1'

export default {
  name: 'Layout',
  components: {
    pickUp1,
    appmain
  },
}
</script>

<style rel="stylesheet/scss" lang="less" scoped>

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.hamburger-container {
  line-height: 43px;
  height: 34px;
  width: 180px !important;
  top: 60px;
  position: fixed;
  background-color: #304156;
  text-align: center;
  border-bottom: 1px solid #888;
  z-index: 1003;
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
</style>
