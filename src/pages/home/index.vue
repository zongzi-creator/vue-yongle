<template>
  <div id="body" class="home-body">
    <div id="home-head">
      <router-link to="/city" class="city">
        <span>全国</span>
        <i class="iconfont icon-xiasanjiaoxing"></i>
      </router-link>
      <div class="search">
        <router-link to="/search" type="text" tag="input" placeholder="搜索"></router-link>
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <div id="home-main">
      <Slider />
      <div class="title-nav">
        <p>
          <router-link to="/classify">
            <i class="iconfont icon-huatong"></i>
            演唱会
          </router-link>
          <router-link to="/classify">
            <i class="iconfont icon-xihuan"></i>
            话剧舞台剧
          </router-link>
          <router-link to="/classify">
            <i class="iconfont icon-activity_icon"></i>
            体育赛事
          </router-link>
          <router-link to="/classify">
            <i class="iconfont icon-xiaoxiong"></i>
            儿童亲子
          </router-link>
        </p>
        <p class="mt25">
          <router-link to="/classify">
            <i class="iconfont icon-fenlei"></i>
            全部分类
          </router-link>
          <router-link to="/classify">
            <i class="iconfont icon-huodong"></i>
            活动
          </router-link>
          <router-link to="/classify">
            <i class="iconfont icon-xihuan1"></i>
            永乐说
          </router-link>
          <router-link to="/mine">
            <i class="iconfont icon-wode"></i>
            我的
          </router-link>
        </p>
      </div>
      <div class="first-pay-first">
        <a href=" https://m.228.cn/zhuanti/meiyunticket/index.html">
          <img :src="'//static.228.cn/'+firstpay.IMG" alt =""/>
        </a>
      </div>
      <h3 id="change">
        <router-link to="/home/recommend" class="active" tag="b">推荐</router-link>
        <router-link to="/home/site" class tag="b">场馆</router-link>
      </h3>
      <!-- 渲染内容 -->
      <router-view></router-view>
      <!-- 底部 -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Slider from "../../components/slider";
import Recommend from "../../components/recommend";
import Site from "../../components/site";
import Footer from "../../components/footer";
import { recommend } from "../../api/myadress";
export default {
  name: "Home",
  components: {
    Slider,
    Recommend,
    Site,
    Footer
  },
  data(){
    return{
      firstpay:[]
    }
  },
  created() {
    document.title = this.$route.meta.title;
    this.handlefirstpay();
  },
  methods: {
    async handlefirstpay() {
      let data = await recommend();
      this.firstpay = data.data.blockRec[0];
    }
  }
};
</script>

<style>
/* 头部组件 */

.home-body #home-head {
  padding: 0.04rem 0.15rem 0.04rem 0.1rem;
  display: flex;
  height: 0.48rem;
  justify-content: space-around;
  flex-shrink: 0;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.home-body #home-head .city {
  display: flex;
  justify-content: space-around;
  width: 0.5rem;
  height: 0.4rem;
  font-size: 0.1rem;
  font-weight: bold;
  line-height: 0.4rem;
  text-align: center;
  padding-right: 0.15rem;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.home-body #home-head .city i {
  position: absolute;
  right: 0.1rem;
  display: block;
  width: 0.07rem;
  height: 0.05rem;
  background-size: cover;
}
.home-body .icon-xiasanjiaoxing {
  color: #fff;
  font-size: 0.07rem;
}
.home-body #home-head .search {
  height: 2.45rem;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 0.34rem;
  line-height: 0.34rem;
  border-radius: 1rem;
  margin-top: 0.03rem;
  background-color: #fff;
  overflow: hidden;
  position: relative;
}
.home-body #home-head .search input {
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.13rem;
  width: calc(100% - 0.75rem);
  padding: 0 0.2rem 0 0.55rem;
  text-align: center;
  background: none;
  border: none;
  outline: none;
  caret-color: #ff3a56;
  color: slategrey;
}
.home-body #home-head .search i {
  width: 0.14rem;
  height: 0.14rem;
  line-height: 0.14rem;
  display: block;
  position: absolute;
  top: 0.1rem;
  background-size: 1.5rem;
  background-position: 0 -28.76rem;
  z-index: 1;
  left: calc(100% / 2 - 15px);
}
.home-body .icon-sousuo {
  color: #ff2959;
  font-size: 0.07rem;
}
/* 主题部分 */
.home-body #home-main {
  display: flex;
  height: 100%;
  flex-shrink: 0;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 0.5rem;
}
.home-body #home-main #change {
  width: 100%;
  flex-shrink: 0;
  font-size: 0.22rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.15rem;
  padding-top: 0.1rem;
  overflow: hidden;
}
.home-body #home-main #change b {
  color: #b5bbc1;
  margin-right: 0.1rem;
}
.home-body #home-main #change .router-link-exact-active {
  color: #000 !important;
}
/* 侧导航栏 */
.home-body .title-nav {
  margin: 0.25rem 0.2rem;
}

.home-body .title-nav p {
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  flex-shrink: 0;
}

.home-body .title-nav p a {
  width: 25%;
  font-size: 0.12rem;
  text-align: center;
  color: rgb(123, 129, 135);
  padding-bottom: 0.1rem;
}

.home-body .title-nav p a i {
  display: block;
  height: 0.36rem;
  width: 0.36rem;
  font-size: 0.3rem;
  margin: auto;
  color: #ff3a56;
}
/* 先抢先付*/
.home-body .first-pay-first {
  display: flex;
  flex-shrink: 0;
  width: 2.8rem;
  height: 1.3rem;
  border-radius: 0.1rem;
  margin: 0.2rem;
  overflow: hidden;
  background: #ff2959;
}
.home-body .first-pay-first img {
  width: 100%;
  height: 100%;
  background: rgba(210, 194, 1, 0.3);
}
</style>