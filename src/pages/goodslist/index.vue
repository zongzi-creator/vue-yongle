<template>
  <div id="body" class="goodslist-body">
    <div class="bodybg"></div>
    <h3 class="head-tit">
      <router-link to="/mine" class="iconfont icon-fanhui goback"></router-link>我的订单
    </h3>
    <div class="errors unOrder tc mt100">
      <i class="iconfont icon-dengji-"></i>
      <p class="f14 red">您目前还未下过单</p>
    </div>
  </div>
</template>
<script>
export default {
  
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
.head-tit {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.4rem;
  width: 100%;
  font-size: 0.17rem;
  font-weight: bold;
  flex-shrink: 0;
}
.head-tit .goback {
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
.unOrder i {
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
.goodslist-body .icon-dengji- {
  font-size: 1.3rem;
  color: #ff7e6f;
}
</style>