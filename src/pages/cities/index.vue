<template>
  <div id="body" class="city-body">
    <div class="head-tit">
    <router-link to="/" tag="a" class="iconfont icon-fanhui goback"></router-link>
    <span class="word"> 选择演出城市</span>
  </div>
    <div class="main">
      <div class="position-city">
        定位城市
        <em id="locationMsg" class="red ml10 f14">北京</em>
      </div>
      <h4 class="city-tit">热门城市</h4>
      <div class="city-hot hots">
        <span id="hot_all" class="active">{{Qg}}</span>
        <span v-for="(item,index) in Hcities" :key="index" :id="item.CITYJX">{{item.JXNAME}}</span>
      </div>
      <h4 class="city-tit">更多城市</h4>
      <div class="city-hot">
        <span v-for="(item,index) in Mcities" :key="index" :id="item.CITYJX">{{item.JXNAME}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { CT } from "../../api/myadress";
export default {
  name: "Cities",
  data() {
    return {
      Mcities: [],
      Hcities: [],
      Qg: []
    };
  },
  created() {
    this.handleCT();
  },
  methods:{
    async handleCT() {
      let data = await CT();
      this.Hcities = data.data.hotCitys;
      this.Mcities = data.data.fcitys;
      this.Qg = data.data.cityName;
    }
  }
};
</script>
<style>
.city-body .main {
  overflow-y: auto;
}
.city-body .main .position-city {
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  font-size: 0.13rem;
  color: #999;
}
.city-body .main .position-city em {
  font-style: normal;
  margin-left: 0.1rem;
  font-size: 0.14rem;
  color: #ff3a56;
}
.city-body .main .city-tit {
  font-weight: normal;
  font-size: 0.13rem;
  color: #999;
  margin: 0.2rem 0.2rem 0;
}
.city-body .main .city-hot {
  margin: 0.1rem 0.2rem;
  overflow: hidden;
  text-align: center;
  font-size: 0.14rem;
}

.city-body .main .city-hot span {
  height: 0.4rem;
  line-height: 0.4rem;
  width: calc(100% / 4);
  display: block;
  float: left;
  color: #7b8187;
  font-size: 0.14rem;
}
.city-body .main .city-hot span.active {
  color: #ff2959;
}
.city-body .main .city-tabs {
  position: initial;
}
</style>