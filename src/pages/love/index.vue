<template>
  <div id="body" class="love-body">
    <div class="bodybg"></div>
    <h3 class="head-tit">
      <V-touch @tap="goback()" tag="a" class="iconfont icon-fanhui goback"></v-touch>我的收藏
    </h3>
    <div class="errors unOrder tc mt100">
      <i class="iconfont icon-cainixihuan"></i>
      <p class="f14 red">您还没有收藏的商品</p>
    </div>
    <div class="btns disabled-loveBtn">
      <a href="/" class="min-btn red gradual-lightRed nuxt-link-active">去逛逛</a>
    </div>
  </div>
</template>
<script>
export default {
  name:"Love",
  methods:{
    goback(){
      this.$router.back();
    }
  }
};
</script>
<style>
.bodybg {
  background: #f5f6f7;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.love-body .head-tit {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.4rem;
  width: 100%;
  font-size: 0.17rem;
  font-weight: bold;
  flex-shrink: 0;
}
.love-body .head-tit .goback {
  left: 0.15rem;
  width: 0.18rem;
  height: 0.18rem;
  font-size: 0.18rem;
  position: absolute;
  display: block;
  top: 0.11rem;
}
.mt100 {
  margin-top: 1rem;
}
.tc {
  text-align: center;
}
.love-body .unOrder i {
  display: inline-block;
  width: 1.45rem;
  height: 1.06rem;
  margin-bottom: 0.2rem;
  background-position: 0 -1.81rem;
  flex-shrink: 0;
}
.red {
  color: #ff3a56;
}
.f14 {
  font-size: 0.14rem;
}
.love-body .icon-cainixihuan {
  font-size: 1.3rem;
  color: #ff7e6f;
}
.disabled-loveBtn {
  margin: 2rem auto;
  font-weight: 400;
  text-align: center;
}

.btns {
  display: flex;
  width: 0.8rem;
}
.btns .min-btn {
  width: 0.8rem;
  display: flex;
  justify-content: center;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  border-radius: 1rem;
  font-size: 0.02rem;
}
.btns a {
  margin: 0.08rem 0.08rem 0.08rem 0;
}

.gradual-lightRed {
  background: linear-gradient(
    135deg,
    rgba(255, 126, 111, 0.2) 0%,
    rgba(255, 41, 89, 0.2) 100%
  );
  border: 1px solid #ff7e6f;
}
</style>