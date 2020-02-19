<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive > -->
        <router-view :key="key"/>
      <!-- </keep-alive> -->
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
     
      key () {
        return this.$route.fullPath
      }
    }
  }
</script>

<style scoped>
  .app-main {
    /*94 = navbar + tags-view = 60 +34 */
    min-height: calc(100vh - 94px);
    width: 100%;
    top: 60px;
    position: relative;
    overflow: hidden;
  }
</style>
