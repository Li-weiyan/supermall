<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature></feature>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import {getHomeMultidata} from 'network/home'
import HomeSwiper from './childCpns/HomeSwiper.vue' 
import RecommendView from './childCpns/RecommendView.vue'
import Feature from './childCpns/Feature.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'

export default {
  name:"Home",
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
  },
  created(){
    // 1.请求多个数据
    getHomeMultidata().then(res=>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
#home{
  padding-top: 44px;
  height: 2000px;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>