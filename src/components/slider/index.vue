<template>
  <div class="wh_box">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="'//static.228.cn/'+image.IMG" />
      </van-swipe-item>
    </van-swipe>
    <!-- <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>-->
  </div>
</template>>
    
<script>
import { recommend } from "../../api/myadress";
export default {
  name: "Slider",
  data() {
    return {
      images: []
    };
  },
  created() {
    this.handleSlider();
  },
  methods: {
    async handleSlider() {
      let data = await recommend();
      this.images=data.data.slideList;
    }
  }
};
</script>
<style>
.van-swipe-item {
  height: 3rem;
}
.van-swipe-item img {
  width: 100%;
  height: 1.5rem;
}

.wh_content {
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 3rem !important;
  border-bottom-right-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}
.wh_box {
  height: 3rem;
  width: 100%;
}
.van-swipe__indicator {
  background-color: rgb(187, 127, 127);
}
.van-swipe__indicator--active {
  background-color: #ff2959;
}
</style>