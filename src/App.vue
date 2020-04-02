<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar :slotNames="slotNames" activeColor="#FF5777">
        <img :slot="slotNames[0] + 'icon'" src="./assets/imgs/tabbar/home.svg" mode="aspectFill" alt="" />
        <img :slot="slotNames[0] + 'icon' + 'active'" src="./assets/imgs/tabbar/home_active.svg" mode="aspectFill" alt="" />
        <div :slot="slotNames[0] + 'text'">首页</div>

        <img :slot="slotNames[1] + 'icon'" src="./assets/imgs/tabbar/category.svg" mode="aspectFill" alt="" />
        <img :slot="slotNames[1] + 'icon' + 'active'" src="./assets/imgs/tabbar/category_active.svg" mode="aspectFill" alt="" />
        <div :slot="slotNames[1] + 'text'">分类</div>

        <img :slot="slotNames[2] + 'icon'" src="./assets/imgs/tabbar/cart.svg" mode="aspectFill" alt="" />
        <img :slot="slotNames[2] + 'icon' + 'active'" src="./assets/imgs/tabbar/cart_active.svg" mode="aspectFill" alt="" />
        <div :slot="slotNames[2] + 'text'">购物车</div>

        <img :slot="slotNames[3] + 'icon'" src="./assets/imgs/tabbar/profile.svg" mode="aspectFill" alt="" />
        <img :slot="slotNames[3] + 'icon' + 'active'" src="./assets/imgs/tabbar/profile_active.svg" mode="aspectFill" alt="" />
        <div :slot="slotNames[3] + 'text'">我的</div>

    </Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/common/tabbar'

export default {
  name: 'App',
  components: {
    Tabbar
  },
  computed: {
    slotNames() {
      return [
        '/home',
        '/category',
        '/cart',
        '/profile'
      ]
    }
  }
}
</script>

<style lang="less">
  @import "./assets/css/base.less";
</style>
