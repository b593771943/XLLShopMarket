<template>
  <div class="banner">
    <!-- ref获取真实Dom -->
    <Swiper 
      ref="mySwiper" 
      :options="swiperOptions"
      @click-slide="onSlideClick"
    >
      <SwiperSlide 
        v-for="item in banners"
      >
        <img class="slide" :src="item.image" mode="aspectFill" />
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name:'banner',
    methods: {
      onSlideClick(index, reallyIndex) {
        console.log(this.banners[reallyIndex])
      }
    },
    props: {
      banners: {
        type: Array,
        default: [],
        required: true
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          effect: 'fade',
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    components: {
      Swiper,
      SwiperSlide
    }
  }
</script>

<style lang="less">
  @import "~components-less/banner.less";
</style>