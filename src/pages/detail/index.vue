<template>
  <div id="body" class="detail-body">
    <div class="bodybg"></div>
    <div class="detailHeader head" :id="id">
      <div class="head-bg">
        <div class="bgImg">
          <div class="bgImgBg"></div>
          <div class="bgImg-black"></div>
        </div>
      </div>

      <div class="head-icon">
        <router-link to="/" class="iconfont icon-fanhui gobacks"></router-link>
        <router-link to="/love" class="iconfont icon-xihuan love"></router-link>
        <a href="#" class="iconfont icon-fenxiang share"></a>
      </div>

      <!---->
      <div class="head-con">
        <div class="left">
          <img
            src="//static.228.cn/upload/2019/11/08/AfterTreatment/1573194546388_l5c2-0.jpg"
            onerror="this.src=&quot;//static.228.cn/resources/images/lazy_default.gif&quot;"
            style="background: rgba(141, 49, 1, 0.3);"
          />
          <i id="statusDiv" class="tip gradual-red white">售票中</i>
        </div>
        <div class="right">
          <h3 class="white">【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA</h3>
          <div class="cl product-icon mt8">
            <span class="fl mr08 real-name-icon">
              <i></i>实名观演
            </span>
            <!---->
          </div>
          <b class="price f14 mt30 db">
            <em class="f16">
              <em class="f14">¥</em>22.8
            </em>
          </b>
        </div>
      </div>
    </div>

    <div class="detailMain">
      <h3 class="con-tit mb15">
        <b>注意事项</b>
      </h3>
      <div class="need-attention">
        a)演出详情仅供参考，具体信息以现场为准；
        <br />b)1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场；
        <br />c)演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务，购票时请务必仔细核对并审慎下单。
        <br />d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。
      </div>
      <Footer />
    </div>
    <footer>
      <router-link tag="a" to="#" class="iconfont icon-kefu"></router-link>
      <router-link tag="button" to="/goodslist" >立即预定</router-link>
    </footer>
  </div>
</template>


<script>
import Footer from "../../components/footer";
export default {
  name: "Detail",
  created() {
    let { id } = this.$route.params;
    this.id = id;
  },
  data() {
    return {
      id: ""
    };
  },
  components: {
    Footer
  }
};
</script>


<style>
.detail-body {
  overflow-y: auto !important;
}
.bodybg {
  background: #f5f6f7;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.detailHeader {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3.19rem;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  margin-bottom: 0.2rem;
}
.head-bg {
  top: 0;
  position: absolute;
  height: 1.9rem;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}
.head-bg .bgImg {
  position: absolute;
  content: "";
  z-index: 1;
  height: 2.5rem;
  top: -0.6rem;
  left: -75%;
  width: 250%;
  border-radius: 50%;
  overflow: hidden;
}
.head-bg .bgImg .bgImgBg {
  position: absolute;
  content: "";
  -webkit-filter: blur(10px);
  filter: blur(10px);
  z-index: 1;
  height: 3.9rem;
  top: -1rem;
  left: 0;
  width: 100%;
  background-size: 200%;
  background: url(//static.228.cn/upload/2019/11/08/AfterTreatment/1573194546388_l5c2-0.jpg)
    center center / 50% 3.9rem no-repeat;
}
.head-bg .bgImg-black {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.head-con {
  margin: 0.3rem 0.2rem 0;
  overflow: hidden;
  z-index: 9;
  position: relative;
}

.head-con .left {
  position: relative;
  float: left;
  width: 1.2rem;
  height: 1.6rem;
  box-shadow: 0px 2px 8px 0px rgba(95, 100, 106, 0.1),
    0px 2px 8px 0px rgba(58, 64, 69, 0.1);
  border-radius: 0.1rem;
  overflow: hidden;
}
.head-con .left img {
  width: 100%;
  height: 100%;
  background: rgba(141, 49, 1, 0.3);
}

.head-icon {
  flex-shrink: 0;
  margin-top: 0.29rem;
  width: calc(100% - 0.3rem);
  margin-left: 0.15rem;
  overflow: hidden;
  position: relative;
  z-index: 9;
  display: flex;
}
.head-icon a {
  height: 0.31rem;
  font-size: 0.2rem;
  display: block;
  color: white;
}
.head-icon .gobacks {
  width: 20%;
}
.head-icon .love {
  width: 66%;
  text-align: right;
}
.head-icon .share {
  width: 10%;
  text-align: right;
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
.gradual-red {
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.head-con .right {
  float: left;
  margin-left: 0.15rem;
  width: calc(100% - 1.35rem);
}
.head-con .right h3 {
  height: 0.63rem;
  line-height: 0.21rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 0.15rem;
}
.white {
  color: white;
}
.product-icon {
  height: 0.18rem;
}
.mt8 {
  margin-top: 0.08rem;
}
.cl {
  zoom: 1;
}
.product-icon span {
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.12rem;
}
.mr08 {
  margin-right: 0.08rem;
}
.fl {
  float: left;
}
.f14 {
  font-size: 0.14rem;
}
.mt30 {
  margin-top: 0.3rem;
}
.db {
  display: block;
}
b {
  font-weight: bold;
}
.f16 {
  font-size: 0.16rem;
}
em {
  font-style: normal;
}
.detailMain {
  flex: 1;
  flex-shrink: 0;
}
.con-tit {
  font-size: 0.22rem;
  color: #000;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  font-weight: bold;
}
.mb15 {
  margin-bottom: 0.15rem;
}
.need-attention {
  border-radius: 0.05rem;
  background: #fff;
  font-weight: bold;
  margin: 0 0.2rem;
  line-height: 0.22rem;
  letter-spacing: 0.02rem;
  font-size: 0.14rem;
  color: #7b8187;
}
.detail-body footer {
  position: fixed;
  width: 100%;
  background: #fff;
  left:0;
  bottom: 0;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.detail-body footer .icon-kefu{
  display: block;
  margin-left:.15rem;
  height: 0.45rem;
  border-radius:50%;
  border:1px solid #ece8e9;
  text-align: center;
  line-height: 0.45rem;
  width:.45rem;
  font-size:.3rem;
  color: #ff7e6f;
}
.detail-body footer button {
  width:2.3rem;
  font-size: .2rem;
  height: 0.45rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  color: white;
  margin: 0 0.15rem;
  font-size:.15rem
}
</style>