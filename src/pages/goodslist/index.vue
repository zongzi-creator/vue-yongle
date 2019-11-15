<template>
  <div id="body" class="goodslist-body">
    <div class="bodybg"></div>
    <Header title="我的订单"/>
    <div class="errors unOrder tc mt100">
      <i class="iconfont icon-dengji-"></i>
      <p class="f14 red">您目前还未下过单</p>
    </div>
  </div>
</template>
<script>
export default {
  name:"goodslist",
  
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
.goodslist-body .mt100 {
  margin-top: 1rem;
}
.goodslist-body .tc {
  text-align: center;
}
.goodslist-body .unOrder i {
  display: inline-block;
  width: 1.45rem;
  height: 1.06rem;
  margin-bottom: 0.2rem;
  background-position: 0 -1.81rem;
  flex-shrink: 0;
}
.goodslist-body .red {
  color: #ff3a56;
}
.goodslist-body .f14 {
  font-size: 0.14rem;
}
.goodslist-body .icon-dengji- {
  font-size: 1.3rem;
  color: #ff7e6f;
}
</style>