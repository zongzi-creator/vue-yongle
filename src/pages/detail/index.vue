<template>
  <div id="body" class="detail-body">
    <div class="bodybg"></div>
    <div class="detailHeader head">
      <div class="head-bg">
        <div class="bgImg">
          <div
            class="bgImgBg"
            :style="'background: url(//static.228.cn'+resu.PBIGIMG+')center center / 50% 3.9rem no-repeat;'"
          ></div>
          <div class="bgImg-black"></div>
        </div>
      </div>

      <div class="head-icon">
        <v-touch @tap="goback()" tag="a" class="iconfont icon-fanhui gobacks"></v-touch>
        <router-link to="/love" class="iconfont icon-xihuan love"></router-link>
        <a href="#" class="iconfont icon-fenxiang share"></a>
      </div>

      <div class="head-con">
        <div class="left">
          <img :src="'//static.228.cn'+resu.PBIGIMG" style="background: rgba(141, 49, 1, 0.3);" />
          <!-- <i id="statusDiv" class="tip gradual-red white">售票中</i> -->
        </div>
        <div class="right">
          <h3 class="white">{{resu.NAME}}</h3>
          <div class="cl product-icon mt8">
            <span class="fl mr08 real-name-icon">
              <i></i>实名观演
            </span>
          </div>
          <b class="price f14 mt30 db">
            <em class="f16">
              <em class="f14">¥</em>
              {{resu.MINPRICE}}-
              <em class="f14">¥</em>
              {{resu.MAXPRICE}}
            </em>
          </b>
        </div>
      </div>
    </div>

    <div class="detailMain">
      <div class="tips" v-html="resu.SPECIAL + resu.ROBTICKETTIPS"></div>
      <h3 class="con-tit mb15">
        <b>注意事项</b>
      </h3>
      <div class="need-attention" v-html="resu.PRECAUTIONS"></div>
      <div class="tips" v-html="resu.BUY_AFFICHE"></div>
      <h3 class="con-tit mb15">
        <b>演出详情</b>
      </h3>
      <div class="showDetails" v-html="resu.INTRODUCTION"></div>
      <Footer />
    </div>
    <footer>
      <router-link tag="a" to="#" class="iconfont icon-kefu"></router-link>
      <router-link tag="button" to="/goodslist" class="butt">立即预定</router-link>
    </footer>
  </div>
</template>

<script>
import { detail } from "../../api/myadress";
export default {
  name: "Detail",
  data() {
    return {
      resu: []
    };
  },
  created() {
    var productid = this.$route.params.id;
    this.handleDetail(productid);
  },
  methods: {
    async handleDetail(productid) {
      let data = await detail(productid);
      this.resu = data.data.product;
    },
    goback() {
      this.$router.back();
    }
  }
};
</script>


<style>
.detail-body .detailHeader {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2.8rem;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}
.detail-body .head-bg {
  top: 0;
  position: absolute;
  height: 1.9rem;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}
.detail-body .head-bg .bgImg {
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
.detail-body .head-bg .bgImg .bgImgBg {
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
}
.detail-body .head-bg .bgImg-black {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.detail-body .head-con {
  margin: 0.3rem 0.2rem 0;
  overflow: hidden;
  z-index: 9;
  position: relative;
}

.detail-body .head-con .left {
  position: relative;
  float: left;
  width: 1.2rem;
  height: 1.6rem;
  box-shadow: 0px 2px 8px 0px rgba(95, 100, 106, 0.1),
    0px 2px 8px 0px rgba(58, 64, 69, 0.1);
  border-radius: 0.1rem;
  overflow: hidden;
}
.detail-body .head-con .left img {
  width: 100%;
  height: 100%;
  background: rgba(141, 49, 1, 0.3);
}

.detail-body .head-icon {
  flex-shrink: 0;
  margin-top: 0.29rem;
  width: calc(100% - 0.3rem);
  margin-left: 0.15rem;
  overflow: hidden;
  position: relative;
  z-index: 9;
  display: flex;
}
.detail-body .head-icon a {
  height: 0.31rem;
  font-size: 0.2rem;
  display: block;
  color: white;
}
.detail-body .head-icon .gobacks {
  width: 20%;
}
.detail-body .head-icon .love {
  width: 66%;
  text-align: right;
}
.detail-body .head-icon .share {
  width: 10%;
  text-align: right;
}
.detail-body .tip {
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
.detail-body .gradual-red {
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.detail-body .head-con .right {
  float: left;
  margin-left: 0.15rem;
  width: calc(100% - 1.35rem);
}
.detail-body .head-con .right h3 {
  height: 0.63rem;
  line-height: 0.21rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 0.15rem;
}
.detail-body .white {
  color: white;
}
.detail-body .product-icon {
  height: 0.18rem;
}
.detail-body .mt8 {
  margin-top: 0.08rem;
}
.detail-body .cl {
  zoom: 1;
}
.detail-body .product-icon span {
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.12rem;
}
.detail-body .mr08 {
  margin-right: 0.08rem;
}
.detail-body .fl {
  float: left;
}
.detail-body .f14 {
  font-size: 0.14rem;
}
.detail-body .mt30 {
  margin-top: 0.3rem;
}
.detail-body .db {
  display: block;
}
.detail-body b {
  font-weight: bold;
}
.detail-body .f16 {
  font-size: 0.16rem;
}
.detail-body em {
  font-style: normal;
}
.detail-body .detailMain {
  height: 100%;
  padding-bottom:.5rem;
  overflow-y: auto !important;
}
.detail-body .con-tit {
  font-size: 0.22rem;
  color: #000;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  font-weight: bold;
}
.detail-body .mb15 {
  margin-bottom: 0.15rem;
}
.detail-body .need-attention,
.detail-body .tips,
.detail-body .showDetails {
  border-radius: 0.05rem;
  background: #fff;
  font-weight: bold;
  margin: 0 0.2rem 0.2rem;
  line-height: 0.22rem;
  letter-spacing: 0.02rem;
  font-size: 0.14rem;
  color: #7b8187;
}
.detail-body .showDetails img,
.detail-body .showDetails p img {
  width: 100% !important;
  height: auto;
}
 .detail-body footer {
  position: fixed;
  width: 100%;
  background: #fff;
  left: 0;
  bottom: 0;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.detail-body footer .icon-kefu {
  display: block;
  margin-left: 0.15rem;
  height: 0.45rem;
  border-radius: 50%;
  border: 1px solid #ece8e9;
  text-align: center;
  line-height: 0.45rem;
  width: 0.45rem;
  font-size: 0.3rem;
  color: #ff7e6f;
}
.detail-body footer .butt{
  width: 2.3rem;
  font-size: 0.2rem;
  height: 0.45rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  color: white;
  margin: 0 0.15rem;
  font-size: 0.15rem;
}
</style>