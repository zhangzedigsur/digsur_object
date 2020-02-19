<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>

<script>
   import nav from './components/nav.vue'
  export default {
    name: 'app',
    Token:'',

    components: {
       'v-nav': nav,
    },
    watch:{
      '$route': function () {
          this.Token=localStorage.getItem('token')
      }
    },
    mounted() {
      // 屏幕适应
     /* let $window = $(window).width();
      $window *= 100 / 1918;
      $('html').css('fontSize', $window);
     console.log($window)*/
    }
  }
</script>

<style>
  @import './css/index.css';
  #app{
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
.content {
   display: flex;
   height: 100%;
}

</style>
