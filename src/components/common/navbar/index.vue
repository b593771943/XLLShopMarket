<template>
  <div class="navbar">
    <div class="left">
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-middle">
      <slot name="nav-middle"></slot>
    </div>
    <div class="right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'navbar',
    components: {
    }
  }
</script>

<style lang="less">
  @import "~components-less/navbar/navbar.less";
</style>