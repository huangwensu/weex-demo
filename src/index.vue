<template>
  <div class="app-wrapper">
    <router-view class="r-box"/>
    <tab-bar @tabTo="onTabTo"></tab-bar>
  </div>
</template>

<script>
import util from './util'
import tabBar from './components/tabBar.vue'
export default {
  name: 'App',
  components:{
    'tab-bar' : tabBar
  },
  data () {
    return {

    }
  },
  created(){
    util.initIconFont();
  },
  methods:{
    onTabTo(_result){
      let _key = _result.data.key || '';
      this.$router && this.$router.push('/'+_key)
    }
  }
}
</script>
<style>
   body{
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color:#333;
    }
</style>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .r-box{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
    }
  .footer{
    display: flex;
    height: 60px;
    border-top: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 14px;
  }
  .footer-item{
    flex:1;
  }
</style>
