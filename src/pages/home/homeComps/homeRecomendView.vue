<template>
  <div class="recomend-container">
    <div class="item-wrapper" v-for="item in recomends">
      <a :href="item.link">
        <img class="icon" :src="item.image" mode="aspectFill" />
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'homeRecomendView',
    props: {
      recomends: {
        style: Array,
        default: [],
        required: true
      }
    },
    components: {
    }
  }
</script>

<style lang="less">
  .recomend-container {
    display: flex;
    align-items: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eeeeee;
    .item-wrapper {
      width: 25%;
      margin-left: 15px;
      &.item-wrapper:last-of-type {
        margin-right: 15px;
      }
      .icon {
        width: 100%;
      }
      .title {
        margin-top: 5px;
        text-align: center;
        font-size: 15px;
      }
    }
  }
</style>