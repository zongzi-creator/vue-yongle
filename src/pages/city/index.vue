<template>
  <div id="body" class="city-body">
    <div id="city-tit">
      <router-link to="/home" class="goback iconfont icon-fanhui"></router-link>选择演出城市
    </div>
    <div class="main">
      <div class="position-city">
        定位城市
        <em id="locationMsg" class="red ml10 f14">北京</em>
      </div>
      <h4 class="city-tit">热门城市</h4>
      <div class="city-hot hots">
        <span id="hot_all" class="active">全国</span>
        <span id="hot_bj" class>北京</span>
        <span classs id="hot_sh">上海</span>
        <span id="hot_gz" class>广州</span>
        <span id="hot_sz" class>深圳</span>
        <span id="hot_wh" class>武汉</span>
        <span id="hot_hf" class>合肥</span>
        <span id="hot_nj" class>南京</span>
        <span id="hot_xa" class>西安</span>
      </div>
      <h4 class="city-tit">更多城市</h4>
      <div class="city-hot">
        <span data-id="am">澳门</span>
        <span data-id="bt">包头</span>
        <span data-id="cc">长春</span>
        <span data-id="cd">成都</span>
        <span data-id="cq">重庆</span>
        <span data-id="cs">长沙</span>
        <span data-id="dg">东莞</span>
        <span data-id="dl">大连</span>
        <span data-id="fs">佛山</span>
        <span data-id="fz">福州</span>
        <span data-id="guig">贵港</span>
        <span data-id="gy">贵阳</span>
        <span data-id="hk">海口</span>
        <span data-id="hrb">哈尔滨</span>
        <span data-id="huiz">惠州</span>
        <span data-id="hz">杭州</span>
        <span data-id="jm">江门</span>
        <span data-id="jn">济南</span>
        <span data-id="km">昆明</span>
        <span data-id="liangshanyizu">凉山彝族自治州</span>
        <span data-id="liaocheng">聊城</span>
        <span data-id="nc">南昌</span>
        <span data-id="nn">南宁</span>
        <span data-id="zz">治州</span>
        <span data-id="qd">青岛</span>
        <span data-id="qz">泉州</span>
        <span data-id="riben">日本</span>
        <span data-id="sany">三亚</span>
        <span data-id="sjz">石家庄</span>
        <span data-id="sy">沈阳</span>
        <span data-id="szz">苏州</span>
        <span data-id="taiguo">泰国</span>
        <span data-id="tj">天津</span>
        <span data-id="ts">唐山</span>
        <span data-id="wf">潍坊</span>
        <span data-id="xiangg">香港</span>
        <span data-id="xiangyang">襄阳</span>
        <span data-id="xm">厦门</span>
        <span data-id="yanc">盐城</span>
        <span data-id="yichang">宜昌</span>
        <span data-id="yt">烟台</span>
        <span data-id="zh">珠海</span>
        <span data-id="zy">遵义</span>
        <span data-id="zz">郑州</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "City"
};
</script>
<style>
.city-body {
  overflow-y: auto;
}
#city-tit {
  height: 0.48rem;
  line-height: 0.48rem;
  width: 100%;
  flex-shrink: 0;
  font-size: 0.17rem;
  position: fixed;
  z-index: 1;
  background: #fff;
}
.goback {
  font-size: 0.17rem;
  width: 0.18rem;
  height: 0.18rem;
  margin: 0 0.6rem 0 0.1rem;
  display: inline-block;
  color: #ff2959;
}
#City-body .main {
  height: 100%;
  flex-shrink: 0;
  overflow-y: auto;
  padding-bottom: 0.5rem;
  padding-top: 0.48rem;
}
.position-city {
  margin-top: 0.7rem;
  margin-left: 0.2rem;
  font-size: 0.13rem;
  color: #999;
}
.position-city em {
  font-style: normal;
  margin-left: 0.1rem;
  font-size: 0.14rem;
  color: #ff3a56;
}
.city-tit {
  font-weight: normal;
  font-size: 0.13rem;
  color: #999;
  margin: 0.2rem 0.2rem 0;
}
.city-hot {
  margin: 0.1rem 0.2rem;
  overflow: hidden;
  text-align: center;
  font-size: 0.14rem;
}

.city-hot span {
  height: 0.4rem;
  line-height: 0.4rem;
  width: calc(100% / 4);
  display: block;
  float: left;
  color: #7b8187;
  font-size: 0.14rem;
}
.city-hot span.active {
  color: #ff2959;
}
.city-tabs {
  position: initial;
}
</style>