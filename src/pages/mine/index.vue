<template>
  <div id="body" class="Mine-body">
    <div class="head">
      <v-touch @tap="goback()" tag="i" class="iconfont icon-fanhui"></v-touch>
      <div class="headtou"></div>
      <b class="iconfont icon-kefu"></b>
      <router-link to="/setting" tag="em" class="iconfont icon-shezhi"></router-link>
    </div>
    <p class="p">S****5</p>
    <main>
      <div class="bottom">
        <router-link to="#" tag="span">
          <p>0张</p>
          <p>现金券</p>
        </router-link>
        <router-link to="#" tag="span">
          <p>未启用</p>
          <p>电子钱包</p>
        </router-link>
        <router-link to="#" tag="span">
          <p>0</p>
          <p>积分</p>
        </router-link>
      </div>
      <div class="dingdan">
        <router-link to="/goodslist" tag="span">
          <i class="iconfont icon-huatong"></i>我的订单
        </router-link>
        <router-link to="#" tag="span">
          <i class="iconfont icon-youhuiquan"></i>现金券
        </router-link>
      </div>
      <div class="registerone">
        <router-link to="/setAdress" tag="span">
          <i class="iconfont icon-dizhiguanli"></i>收货地址
        </router-link>
        <router-link to="/love" tag="span">
          <i class="iconfont icon-xihuan"></i>我的收藏
        </router-link>
        <router-link to="#" tag="span">
          <i class="iconfont icon-dengji"></i>我的登记
        </router-link>
      </div>
      <div class="registertwo">
        <router-link to="#" tag="span">
          <i class="iconfont icon-dengji-"></i>我的提问
        </router-link>
        <router-link to="#" tag="span">
          <i class="iconfont icon-pingzheng-normal"></i>观演凭证
        </router-link>
      </div>
      <div class="registerthree"></div>
    </main>
  </div>
</template>
<script>
export default {
  name: "Mine",
  created() {
    document.title = this.$route.meta.title;
  },
   methods:{
    goback(){
      this.$router.back();
    }
  }
};
</script>
<style>
.Mine-body .head i {
  position: relative;
  top: 0.12rem;
  left: -0.3rem;
  flex-shrink: 0;
}
.Mine-body .icon-fanhui {
  color: #ff2959;
  font-size: 0.18rem;
}
.Mine-body .head {
  width: 100%;
  height: 2.23rem;
  background: url("https://m2static.228.cn/images/head-poho-bg.jpg") no-repeat
    center;
  position: relative;
  flex-shrink: 0;
}
.Mine-body .head i {
  position: absolute;
  left: 0.15rem;
  top: 0.3rem;
  flex-shrink: 0;
}
.Mine-body .head b {
  position: absolute;
  bottom: 0.45rem;
  right: 0.6rem;
  font-size: 0.18rem;
  color: rgb(180, 92, 92);
}
.Mine-body .head em {
  position: absolute;
  font-size: 0.18rem;
  color: rgb(180, 92, 92);
  bottom: 0.45rem;
  right: 0.25rem;
}
.Mine-body .headtou {
  width: 0.64rem;
  height: 0.64rem;
  border: 1px solid white;
  position: absolute;
  background: url(https://m2static.228.cn/images/head-photo.png) no-repeat
    center center;
  border-radius: 1rem;
  bottom: 0.1rem;
  left: 50%;
  margin-left: -0.32rem;
}
.Mine-body .p {
  font-size: 0.15rem;
  text-align: center;
}
.Mine-body main {
  height: 100%;
  overflow-y: auto;
  flex-shrink: 0;
  padding-bottom: 2rem;
}
.Mine-body .bottom {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid rgb(226, 220, 220);
  display: flex;
  flex-shrink: 0;
}
.Mine-body .bottom span {
  display: flex;
  width: 30%;
  font-size: 0.12rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Mine-body .dingdan {
  display: flex;
  height: 0.98rem;
  justify-content: space-around;
  border-bottom: 1px solid rgb(226, 220, 220);
  flex-shrink: 0;
  align-items: center;
}
.Mine-body .dingdan span {
  display: flex;
  flex-direction: column;
  font-size: 0.14rem;
  align-items: center;
  flex-shrink: 0;
}
.Mine-body .dingdan span i {
  color: rgb(248, 23, 23);
  font-size: 0.25rem;
}
.Mine-body .registerone,
.Mine-body .registertwo {
  display: flex;
  height: 0.98rem;
  border-bottom: 1px solid rgb(226, 220, 220);
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.Mine-body .registerthree {
  height: 1.5rem;
}
.Mine-body .registerone span,
.Mine-body .registertwo span,
.Mine-body .registerthree span {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.15rem;
}
.Mine-body .registerone span i,
.Mine-body .registertwo span i,
.Mine-body .registerthree span i {
  color: rgb(43, 216, 216);
  font-size: 0.25rem;
}
</style>