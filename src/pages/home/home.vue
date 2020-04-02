<template>
  <div class="home-container">
    <Navbar class="homeNav">
      <div slot="nav-middle">购物街</div>
    </Navbar>
    <h1>我是首页</h1>
  </div>
</template>

<script>

  import Navbar from 'components/common/navbar'
  export default {
    name:'home',
    components: {
      Navbar
    },
    created() {
      console.log('created')
    },
    destroyed() {
      console.log('destroyed')
    },
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    }
  }
</script>

<style lang="less">
  .homeNav {
    background-color: @color_tint;
    color: #ffffff;
  }
</style>