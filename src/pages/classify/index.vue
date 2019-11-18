<template>
  <div id="body" class="Classify-body">
    <Header title="分类" sousuo />
    <div class="header">
      <router-link to="/cities" tag="span" class="iconfont1">
        全国
        <i class="iconfont icon-xiasanjiaoxing"></i>
      </router-link>

      <router-link to="/classify" tag="span" class="iconfont">
        全部分类
        <i class="iconfont icon-xiasanjiaoxing"></i>
      </router-link>

      <router-link to="#" tag="span" class="iconfont">
        全部时间
        <i class="iconfont icon-xiasanjiaoxing"></i>
      </router-link>
    </div>

    <div class="main">
      <router-link
        :to="'/detail/'+item.productid"
        class="mainbox"
        v-for="(item,index) in resu"
        :key="index"
      >
        <div class="left">
          <img :src="'//static.228.cn'+item.pbigimg" />
          <i
            :class="(item.status=='1')?'ticket-state-blue tip tip-grabSeat':'gradual-red tip tip-grabSeat'"
          >{{(item.status=='1')?"预定":"售票中"}}</i>
        </div>
        <div class="right">
          <b class="name">{{item.name}}</b>
          <span class="span1">{{item.begindate}} ～ {{item.enddate}}</span>
          <span class=".span2">{{item.vname}}</span>
          <span class="span1">
            <b class="red f14 mr5">￥{{item.minprice}}-{{item.maxprice}}</b>
          </span>
        </div>
      </router-link>
      <button class="more" @click="handleClassify()">查看更多</button>
      <!-- 底部 -->
      <Footer />
    </div>
  </div>
</template>
<script>
import { classify } from "../../api/myadress";
export default {
  name: "Classify",
  data() {
    return {
      resu: [],
      num: 1
    };
  },
  created() {
    this.handleClassify();
    document.title = this.$route.meta.title;
  },
  methods: {
    async handleClassify() {
      let data = await classify(this.num++);
      this.render(data.data.pagerMemoryList);
    },
    render(data) {
      for (let i = 0; i < data.length; i++) {
        this.resu.push(data[i]);
      }
    }
  }
};
</script>

<style>
.Classify-body .header {
  flex-shrink: 0;
  height: 0.45rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.Classify-body .header span {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.14rem !important;
  height: 0.2rem;
  color: #999ea3;
}
.Classify-body .header span i {
  font-size: 0.1rem;
  color: #ff3a56;
  margin-left: 0.05rem;
  font-style: normal;
}
.Classify-body .main {
  height: 100%;
  overflow-y: auto;
  flex-shrink: 0;
  padding-bottom: 0.6rem;
}
.Classify-body .mainbox {
  margin: 0.2rem;
  display: flex;
  flex-shrink: 0;
}
.Classify-body .main .left {
  position: relative;
}

.Classify-body .main .left img {
  flex-shrink: 0;
  width: 0.85rem;
  height: 1.13rem;
}
.Classify-body .right {
  margin-left: 0.2rem;
  width: 1.6rem;
  display: flex;
  flex-direction: column;
  font-size: 0.14rem;
}
.Classify-body .right .name {
  font-size: 0.14rem;
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 0.4rem;
  line-height: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.Classify-body .right span {
  display: block;
  color: #999ea3;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.12rem;
}
.Classify-body .span1 {
  margin-top: 0.1rem;
  line-height: 0.14rem;
}
.Classify-body .span1 b {
  margin-top: 0.1rem;
  color: #ff3a56;
}
.Classify-body .more {
  width: 1.5rem;
  margin-left: 0.8rem;
  height: 0.3rem;
  border-radius: 1rem;
  font-size: 0.14rem;
  color: #ff3a56;
  background: #fff;
}
.red{
  color:red}
.ticket-state-blue {
  background: linear-gradient(to right, #3dd9c1, #00a0c2);
}
.tip {
  display: block;
  height: 0.2rem;
  line-height: 0.2rem;
  color: #fff;
  font-style: normal;
  position: absolute;
  top: 0;
  font-size: 0.11rem;
  font-weight: bold;
  border-radius: 0.1rem 0;
  padding: 0 0.05rem;
  left: 0;
  text-align: center;
}
.tip-grabSeat {
  background-position: 0 -24.19rem;
}
.gradual-red {
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
</style>