<template>
  <div id="body" class="love-body">
    <div class="bodybg"></div>
    <Header title="我的收藏"/>
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
.love-body .mt100 {
  margin-top: 1rem;
}
.love-body .tc {
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
.love-body .red {
  color: #ff3a56;
}
.love-body  .f14 {
  font-size: 0.14rem;
}
.love-body .icon-cainixihuan {
  font-size: 1.3rem;
  color: #ff7e6f;
}
.love-body  .disabled-loveBtn {
  margin: 2rem auto;
  font-weight: 400;
  text-align: center;
}

.love-body  .btns {
  display: flex;
  width: 0.8rem;
}
.love-body .btns .min-btn {
  width: 0.8rem;
  display: flex;
  justify-content: center;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  border-radius: 1rem;
  font-size: 0.02rem;
}
.love-body .btns a {
  margin: 0.08rem 0.08rem 0.08rem 0;
}

.love-body .gradual-lightRed {
  background: linear-gradient(
    135deg,
    rgba(255, 126, 111, 0.2) 0%,
    rgba(255, 41, 89, 0.2) 100%
  );
  border: 1px solid #ff7e6f;
}
</style>