<template>
  <tar-bar>
      <tar-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="~/assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="~/assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/shopcart" activeColor="red">
        <img slot="item-icon" src="~/assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="~/assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tar-bar-item>
      <tar-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="~/assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="~/assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tar-bar-item>
    </tar-bar>
</template>

<script>
// @在build/webpack.base.conf.js下alias中起的src文件夹的别名，代表着src文件夹路径
// 别名在template里面使用时要在路径前面添加'~'才能生效
import TarBar from "components/common/tabbar/Tabbar.vue"
import TarBarItem from "components/common/tabbar/TabBarItem.vue"
export default {
    components: {
        TarBar,
        TarBarItem
    }
}
</script>

<style>

</style>