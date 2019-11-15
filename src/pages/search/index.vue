<template>
  <div id="body" class="Search-body">
    <header>
      <v-touch  tag="i" class="iconfont icon-fanhui"></v-touch>
      <span>搜索</span>
    </header>
    <div class="head">
      <i class="iconfont icon-sousuo"></i>
      <input type="search" v-model="value" />
      <a style="text-decoration: none;" href>取消</a>
    </div>
    <main>
      <p class="err" v-if="flag">{{err}}</p>
      <router-link tag="div" :to="'/detail/'+item.productid" class="main_box" v-for="(item,index) in search" :key="index">
         <img :src="'//static.228.cn'+item.pbigimg" />
          <div class="maxin_right">
              <p v-html="item.name"></p>
              <p>{{item.begindate+"～"+item.enddate}}</p>
              <p>{{item.cityname+''+item.vname}}</p>
              <p>{{Number(item.minprice).toFixed(0)+'～'+item.maxprice}}</p>
          </div>
      </router-link>
    </main>
    <!-- 底部 -->
  </div>
</template>
<script>
import Footer from "../../components/footer";
import { search } from "../../api/myadress";
export default {
  name: "Search",
  components: {
    Footer
  },
  data() {
    return {
      value: "",
      search: [],
      err:"",
      flag:true
    };
  },
  created() {
    document.title = this.$route.meta.title;
  },
  watch: {
    async value() {
      let data = await search(this.value);
      console.log(data.data.pagerMemory.list);
      this.render(data.data.pagerMemory.list);
      if(data.data.pagerMemory.list.length==0){
          this.err="搜不到数据了"
          this.flag=true
      }else{
           this.err=""
           this.flag=false
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
#body{
   overflow-y:auto;
   padding-bottom:.59rem
}
.Search-body header {
  height: 0.4rem;
  font-size: 0.17rem;
  display: flex;
  padding: 0 0.4rem;
   z-index:155;
   background:white

}
.Search-body header i {
  position: relative;
  top: 0.12rem;
  left: -0.3rem;
  color: #ff2959;
}

.Search-body header span {
  text-align: center;
  line-height: 0.4rem;
  width: 2.22rem;
}
.Search-body main {
  height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 1rem;
    overflow-y: auto;
    padding-bottom:.55rem;
   z-index:10
}
.Search-body .err{
  font-size:.2rem;
  position:absolute;
  top:30%;
  left:32%;
  animation:jump 3s  infinite;
}
@keyframes jump {
  0% {transform: translateY(0);}
 50%{transform: translateY(150px);}
  0% {transform: translateY(0);}
}
.Search-body .head {
  display: flex;
  height: 0.34rem;
  position:fixed;
  width:100%;
  justify-content: space-around;
  padding: .5rem 0.2rem;
  
   z-index:15;
   background:white

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
 .Search-body .main_box img{
    flex-shrink: 0;
  width: 0.85rem;
  height: 1.13rem;
 }
 .Search-body .main_box{
   display: flex;
   width:100%;
   justify-content: space-between;
   padding:.1rem .2rem;
 }
 .Search-body .maxin_right{
   text-align:left;
   margin-left:.12rem;
   width:2.21rem;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   font-size:.12rem
 }

 .Search-body .maxin_right p:nth-of-type(1){
   font-weight: bold
 }
 .Search-body .maxin_right p:nth-of-type(2),.Search-body .maxin_right p:nth-of-type(3){
   color:#999ea3;
   margin-top:.05rem
 }
  .Search-body .maxin_right p:nth-of-type(4){
   color:#ff2959;

   font-weight: bold
 } 

</style>