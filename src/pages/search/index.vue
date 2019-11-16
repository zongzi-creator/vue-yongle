<template>
  <div id="body" class="Search-body">
    <Header title="搜索"/>
    <div class="head">
      <i class="iconfont icon-sousuo"></i>
      <input type="search" v-model="value" />
      <a style="text-decoration: none;" href>取消</a>
    </div>
    <div class="Search-main">
      <p class="err" v-if="flag">{{err}}</p>
      <div class="container">
        <router-link
          tag="div"
          :to="'/detail/'+item.productid"
          class="main_box"
          v-for="(item,index) in search"
          :key="index"
        >
          <img :src="'//static.228.cn'+item.pbigimg" />
          <div class="maxin_right">
            <p v-html="item.name"></p>
            <p>{{item.begindate+"～"+item.enddate}}</p>
            <p>{{item.cityname+''+item.vname}}</p>
            <p>{{Number(item.minprice).toFixed(0)+'～'+item.maxprice}}</p>
          </div>
        </router-link>
      </div>

      <Footer />
    </div>
    <!-- 底部 -->
  </div>
</template>
<script>
import { search } from "../../api/myadress";
export default {
  name: "Search",
  data() {
    return {
      value: "",
      search: [],
      err: "",
      flag: true
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  watch: {
    async value() {
      let data = await search(this.value);
      this.render(data.data.pagerMemory.list);
      if (data.data.pagerMemory.list.length == 0) {
        this.err = "搜不到数据了";
        this.flag = true;
      } else {
        this.err = "";
        this.flag = false;
      }
    }
  },
  methods: {
    render(data) {
        this.search=data;

        
          if(this.value==""){
            this.search=[]
        }
    }
  }
};
</script>


<style>
.container{
  min-height:2.4rem;
}
.Search-body .err {
  font-size: 0.2rem;
  position: absolute;
  top: 30%;
  left: 32%;
  animation: jump 3s infinite;
}
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(150px);
  }
  0% {
    transform: translateY(0);
  }
}
.Search-body .head {
  display: flex;
  height: 0.34rem;
  width: 100%;
  justify-content: space-around;
  padding: 0.2rem 0.2rem;
  background: white;
  margin-bottom: .2rem;
}
.Search-main{
  overflow-y: auto !important;
}
.Search-body .head input {
  width: 2.32rem;
  height: 0.34rem;
  font-size: 0.1rem;
  border-radius: 1rem;
  padding: 0 0.3rem;
  background: #f3f4f5;
  border: none;
  outline: none;
  color: #ff2959;
}
.Search-body .head a {
  line-height: 0.34rem;
  font-size: 0.13rem;
}
.Search-body .head i {
  color: #ff2959;
  position: relative;
  top: 0.07rem;
  left: 0.26rem;
  right: 0;
  bottom: 0;
}
.Search-body .iconfont {
  font-size: 0.18rem;
}
.Search-body .main_box img {
  flex-shrink: 0;
  width: 0.85rem;
  height: 1.13rem;
}
.Search-body .main_box {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.1rem 0.2rem;
}
.Search-body .maxin_right {
  text-align: left;
  margin-left: 0.12rem;
  width: 2.21rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.12rem;
}

.Search-body .maxin_right p:nth-of-type(1) {
  font-weight: bold;
}
.Search-body .maxin_right p:nth-of-type(2),
.Search-body .maxin_right p:nth-of-type(3) {
  color: #999ea3;
  margin-top: 0.05rem;
}
.Search-body .maxin_right p:nth-of-type(4) {
  color: #ff2959;

  font-weight: bold;
}
</style>