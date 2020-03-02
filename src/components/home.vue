<template>
  <div style="width: 100%;height:100%;">
    <v-nav></v-nav>
    <div class="control">
      <navList></navList>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import nav from './nav.vue'
  import navList from './pickUp1.vue'

  export default {
    data () {
      return {}
    },
    components: {
      'v-nav': nav,
      'navList': navList  
    },
    methods:{
      
    }
  }
</script>

<style scoped lang="less">
.control{
  display: flex;
  height: 91%;
}

</style>
