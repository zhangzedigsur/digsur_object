<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
  
  export default {
    name: 'app',
    Token:'',

    components: {
       
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
  }
</style>
