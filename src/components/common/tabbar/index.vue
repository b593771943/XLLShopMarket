<template>
  <div id="tabbar">
    <div 
      class="barItem" 
      v-for="slotName in slotNames" 
      @click="onTabClick($event, slotName)"
      :style="getCurrentStyle(slotName)"
    >
      <div v-if="isCurrentPage(slotName)">
        <slot :name="slotName + 'icon' + 'active'"></slot>
      </div>
      <div v-else>
        <slot :name="slotName + 'icon'"></slot>
      </div>
      <slot :name="slotName + 'text'"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'tabbar',
    props: {
      slotNames: {
        type: Array,
        default: [],
        required: true
      },
      activeColor: {
        type: String,
        default: '#dddddd',
        required: false
      }
    },
    methods: {
      onTabClick(e, param) {
        if (this.isCurrentPage(param)) {
          return
        }
        this.$router.replace(param)
      },
      getCurrentStyle(slotName) {
        const textColor = this.isCurrentPage(slotName) ? this.activeColor : 'black'
        return {color: textColor}
      },
      isCurrentPage(slotName) {
        return this.$route.path.indexOf(slotName) !== -1
      }
    },
    components: {
    }
  }
</script>

<style lang="less">
  @import "~components-less/tabbar/tabbar.less";
</style>