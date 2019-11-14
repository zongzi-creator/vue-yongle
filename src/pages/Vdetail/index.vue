<template>
  <div id="body" class="Vdetail-body">
    <header>
      <router-link to="/home" tag="i" class="iconfont icon-fanhui"></router-link>
      <span>场馆信息</span>
    </header>
    <div class="head"></div>
    <main>
      <img class="imgs" 
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3578341852,4154240613&fm=26&gp=0.jpg"
        alt=""
      />
      <!-- <img :src="'//static.228.cn'+Venue.seatimg" class="imgs" /> -->
      <h3 class="vname">{{Venue.vname}}</h3>
      <div class="showDetails" v-html="Venue.info"></div>
      <div class="adress">地址：{{Venue.address}}</div>
      <Footer />
    </main>
  </div>
</template>


<script>
import Footer from "../../components/footer";
import { venue } from "../../api/myadress";
export default {
  name: "Vdetail",
  components: {
    Footer
  },
  data() {
    return {
      Venue: [],
      Vdetail: []
    };
  },
  created() {
    var detailid = this.$route.params.id;
    this.handleVdetail(detailid);
  },
  methods: {
    async handleVdetail(detailid) {
      let data = await venue(detailid);
      this.Venue = data.data.venue;
      this.Vdetail = data.data.products;
      console.log(data, this.Venue, this.Vdetail);
    }
  }
};
</script>


<style>
.Vdetail-body {
  overflow-y: auto !important;
}
.Vdetail-body header {
  height: 0.4rem;
  font-size: 0.17rem;
  display: flex;
  padding: 0 0.4rem;
}
.Vdetail-body header i {
  position: relative;
  top: 0.12rem;
  left: -0.3rem;
  color: #ff2959;
}

.Vdetail-body header span {
  text-align: center;
  line-height: 0.4rem;
  width: 2.22rem;
}
.Vdetail-body main {
  height: 100%;
}
.Vdetail-body .head {
  display: flex;
  height: 0.34rem;
  justify-content: space-around;
  padding: 0 0.2rem;
  margin-top: 0.04rem;
}
.Vdetail-body img,
.Vdetail-body .imgs {
  width: 100%;
  height: auto;
}
.Vdetail-body .vname {
  font-size: 0.2rem;
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  margin: 0.2rem auto;
  text-align: center;
}
.Vdetail-body .showDetails,
.Vdetail-body .adress {
  border-radius: 0.05rem;
  background: #fff;
  font-weight: bold;
  margin: 0 0.2rem 0.2rem;
  line-height: 0.22rem;
  letter-spacing: 0.02rem;
  font-size: 0.14rem;
  color: #7b8187;
}
</style>
