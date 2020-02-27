<template>
  <div class="control" style="width: 100%">
    <navList></navList>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import navList from './pickUp1.vue'
export default {
  data () {
    return {}
  },
  components: {
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
