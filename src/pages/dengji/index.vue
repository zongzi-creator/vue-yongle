<template>
  <div id="body" class="dengji-body">
    <div class="bodybg"></div>
    <Header title="我的登记"/>
    <div class="errors unOrder tc mt100">
      <i class="iconfont icon-dengji"></i>
      <p class="f14 red">您还没有登记过</p>
    </div>
    <div class="btns disabled-dengji">
      <a href="/" class="min-btn red gradual-lightRed nuxt-link-active">去逛逛</a>
    </div>
  </div>
</template>
<script>
export default {
  name:"Dengji",
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
.dengji-body .mt100 {
  margin-top: 1rem;
}
.dengji-body .tc {
  text-align: center;
}
.dengji-body.unOrder i {
  display: inline-block;
  width: 1.45rem;
  height: 1.06rem;
  margin-bottom: 0.2rem;
  background-position: 0 -1.81rem;
  flex-shrink: 0;
}
.dengji-body .red {
  color: #ff3a56;
}
.dengji-body .f14 {
  font-size: 0.14rem;
}
.dengji-body .icon-dengji {
  font-size: 1.3rem;
  color: #ff7e6f;
}
.dengji-body .disabled-dengji {
  margin: 2rem auto;
  font-weight: 400;
  text-align: center;
}

.dengji-body .btns {
  display: flex;
  width: 0.8rem;
}
.dengji-body .btns .min-btn {
  width: 0.8rem;
  display: flex;
  justify-content: center;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  border-radius: 1rem;
  font-size: 0.02rem;
}
.dengji-body .btns a {
  margin: 0.08rem 0.08rem 0.08rem 0;
}

.dengji-body .gradual-lightRed {
  background: linear-gradient(
    135deg,
    rgba(255, 126, 111, 0.2) 0%,
    rgba(255, 41, 89, 0.2) 100%
  );
  border: 1px solid #ff7e6f;
}
</style>