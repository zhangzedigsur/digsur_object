<template>
  <div class="listCon">
    <pick-up1 class="sidebar-container" />
    <!-- <div class="main-container"> -->
      <!-- 跳转的页面部分 -->
      <!-- <appmain/>
    </div> -->
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
</style>
