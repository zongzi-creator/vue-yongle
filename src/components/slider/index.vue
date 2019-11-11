<template>
  <div>
    <section class="wh_content">
      <div class="wh_swiper wh_swiper_588">
        <div class="wh_slide">
          <a href="#">
            <img src="https://static.228.cn/upload/2019/10/02/1569998757961_c5d0.jpg" alt />
          </a>
        </div>
        <div class="wh_slide">
          <a href="#">
            <img src="https://static.228.cn/upload/2019/11/07/1573115736897_m0o6.jpg" alt />
          </a>
        </div>
        <div class="wh_slide">
          <a href="#">
            <img src="https://static.228.cn/upload/2019/11/07/1573122606412_i5e9.jpg" alt />
          </a>
        </div>
        <div class="wh_slide">
          <a href="#">
            <img src="https://static.228.cn/upload/2019/11/07/1573123121139_y5x5.jpg" alt />
          </a>
        </div>
        <div class="wh_slide">
          <a href="#">
            <img src="https://static.228.cn/upload/2019/11/07/1573123163351_o8k8.jpg" alt />
          </a>
        </div>
      </div>
      <div class="wh_indicator">
        <div class="wh_indicator_item wh_show_bgcolor"></div>
        <div class="wh_indicator_item"></div>
        <div class="wh_indicator_item"></div>
        <div class="wh_indicator_item"></div>
        <div class="wh_indicator_item"></div>
      </div>
    </section>
  </div>
</template>>
    
<script>
export default {
  name: "Slider"
};
</script>
<style>
.wh_content {
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  border-bottom-right-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}
.wh_swiper {
  width: 100%;
  display: flex;
  transition-duration: 0s linear;
  color: #333;
  overflow: hidden;
}
.wh_indicator {
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
  z-index:44;
  display: flex;
  justify-content: center;
}
.wh_indicator_item {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 1px 7px;
  cursor: pointer;
  border-radius: 100%;
  background: #aaa;
  font-size: 0.14rem;
  background: rgba(255, 255, 255, 0.4) !important;
}
.wh_show_bgcolor{
	background: #ff2959  !important;
}
.wh_slide {
  width: 100%;
  flex-shrink: 0;
  z-index: 10;
  min-height: 100px;
}
.wh_slide img {
  display: block;
  font-size: 0.14rem;
  font-weight: 400;
  width: 100%;
  height: 130px;
  background: rgba(121, 137, 10, 0.3);
  overflow: hidden;
}
</style>