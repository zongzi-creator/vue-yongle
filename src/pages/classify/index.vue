<template>
  <div id="body" class="Classify-body">
    <div class="frist">
      <router-link to="/" tag="span" class="iconfont icon-fanhui"></router-link>
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
    <div class="main">
      <router-link
        to="/detail"
        class="mainbox"
        tag="div"
        v-for="(item,index) in resu" :key="index"
      >
        <img src="" />
        <div class="right">
          <b class="name">{{item.name}}</b>
          <span class="span1">{{}}</span>
          <span class=".span2"></span>
          <span class="span1">
            <b class="red f14 mr5">{{}}</b>
          </span>
        </div>
      </router-link>
      <!-- 底部 -->
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "../../components/footer";
import {classify} from "../../api/myadress"
export default {
  name: "Classify",
  created(){
      document.title=this.$route.meta.title
  },
  components: {
    Footer
  },
  async created(){
    let data=await classify(10,20);
    console.log(data.data.pagerMemory)
    this.render(data.data.pagerMemory);
  },
  data(){
    return{
        resu:[]
    }
  },
  methods:{
    render(data){
      for(let i=0;i<data.previousPage.length;i++){
          this.resu.push(data.previousPage[i])
      } 




    }
  }
  // data() {
  //   return {
  //     icfont: "iconfont",
  //     html: "&#xe642;",
  //     content: [
  //       {
  //         urlPic:
  //           "https://static.228.cn/upload/2019/11/08/AfterTreatment/1573194546388_l5c2-0.jpg",
  //         name:
  //           "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
  //         time: "2019.11.17",
  //         price: "￥22.8",
  //         id: "1001"
  //       },
  //       {
  //         urlPic:
  //           "https://static.228.cn/upload/2019/10/31/AfterTreatment/1572504279871_i2c3-0.jpg",
  //         name:
  //           "[吴青峰合肥演唱会门票]吴青峰&quot;太空备忘记&quot;巡回演唱会-合肥站-永乐票务",
  //         time: "2019.12.14",
  //         price: "￥380",
  //         id: "1002"
  //       },
  //       {
  //         urlPic:
  //           "https://static.228.cn/upload/2019/10/11/AfterTreatment/1570771698088_f0v3-0.jpg",
  //         name:
  //           "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
  //         time: "2019.11.17",
  //         price: "￥22.8",
  //         id: "1003"
  //       },
  //       {
  //         urlPic:
  //           "https://static.228.cn/upload/2019/09/23/AfterTreatment/1569225507050_q5p0-0.jpg",
  //         name:
  //           "[吴青峰合肥演唱会门票]吴青峰&quot;太空备忘记&quot;巡回演唱会-合肥站-永乐票务",
  //         time: "2019.12.14",
  //         price: "￥380",
  //         id: "1004"
  //       },
  //       {
  //         urlPic:
  //           "https://static.228.cn/upload/2019/08/15/AfterTreatment/1565855746142_p0k7-0.jpg",
  //         name:
  //           "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
  //         time: "2019.11.17",
  //         price: "￥22.8",
  //         id: "1005"
  //       },
  //       {
  //         urlPic:
  //           "https://static.228.cn/upload/2019/07/05/AfterTreatment/1562319676003_k8k6-0.jpg",
  //         name:
  //           "[吴青峰合肥演唱会门票]吴青峰&quot;太空备忘记&quot;巡回演唱会-合肥站-永乐票务",
  //         time: "2019.12.14",
  //         price: "￥380",
  //         id: "1006"
  //       },
  //       {
  //         urlPic:
  //           "https://static.228.cn/upload/2019/09/05/AfterTreatment/1567647872834_g8j5-0.jpg",
  //         name:
  //           "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
  //         time: "2019.11.17",
  //         price: "￥22.8",
  //         id: "1007"
  //       },
  //       {
  //         urlPic:
  //           "https://static.228.cn/upload/2019/06/18/AfterTreatment/1560838266418_p7n8-0.jpg",
  //         name:
  //           "[吴青峰合肥演唱会门票]吴青峰&quot;太空备忘记&quot;巡回演唱会-合肥站-永乐票务",
  //         time: "2019.12.14",
  //         price: "￥380",
  //         id: "1008"
  //       },
  //       {
  //         urlPic:
  //           "https://static.228.cn/upload/2019/10/15/AfterTreatment/1571125267793_q2k9-0.jpg",
  //         name:
  //           "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
  //         time: "2019.11.17",
  //         price: "￥22.8",
  //         id: "1009"
  //       }
  //     ]
  //   };
  // }
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
  justify-content: space-around;
  align-items: center;
}
.Classify-body .frist span:nth-of-type(1),
.Classify-body .frist span:nth-of-type(3) {
  width: 0.4rem;
  color: #ff3a56;
  font-size: 0.18rem;
}
.Classify-body .frist span:nth-of-type(2) {
  width:2.4rem;
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
}
</style>