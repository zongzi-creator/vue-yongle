<template>
  <div id="body" class="Classify-body">
    <div class="frist">
      <v-touch @tap="goback()" tag="span" class="iconfont icon-fanhui"></v-touch>
      <span>分类</span>
      <router-link to="/search" tag="span" class="iconfont icon-sousuo"></router-link>
    </div>
    <div class="header">
      <router-link to="/city" tag="span" class="iconfont">
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
    <!-- :to="'/detail/'+item.productid" -->
    <div class="main">
      <router-link
        :to="'/detail/'+item.productid"
        class="mainbox"
        v-for="(item,index) in resu"
        :key="index"
      >
        <div class="left">
          <img :src="'//static.228.cn'+item.pbigimg" />
          <!-- <i class="ticket-state-blue tip tip-grabSeat">预订</i> -->
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
      <button class="more" @click="handleClassify(num)">查看更多</button>
      <!-- 底部 -->
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "../../components/footer";
import { classify } from "../../api/myadress";
export default {
  name: "Classify",
  components: {
    Footer
  },
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
    async handleClassify(num) {
      let data = await classify(this.num++);
      this.render(data.data.pagerMemoryList);
    },
    render(data) {
      for       (let i = 0; i < data.length; i++) {
        this.resu.push(data[i]);
      }
    },
    goback(){
      this.$router.back();
    }
  }
};
</script>


<style>
.Classify-body .frist {
  height: 0.4rem;
  background: white;
  display: flex;
  flex-shrink: 0;
}
.Classify-body .frist span {
  display: flex;
  height: 0.4rem;
  justify-content: space-around;
  align-items: center;
}
.Classify-body .frist .icon-fanhui,
.Classify-body .frist .icon-sousuo {
  width: 0.4rem;
  color: #ff3a56;
  font-size: 0.18rem;
}
.Classify-body .frist span:nth-of-type(2) {
  width: 2.4rem;
  color: black;
  font-size: 0.17rem;
}
.Classify-body .header {
  flex-shrink: 0;
  height: 0.45rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
}
.Classify-body .header span {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.14rem !important;
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
.Classify-body .main img {
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
.span1 {
  margin-top: 0.1rem;
  line-height: 0.14rem;
}
.more {
  width: 1.5rem;
  margin-left: 0.8rem;
  height: 0.3rem;
  border-radius: 1rem;
  font-size: 0.14rem;
  color: #ff3a56;
  background: #fff;
}
</style>