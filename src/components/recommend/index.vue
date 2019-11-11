<template>
  <div>
    <ul class="recommend_list">
      <router-link
      :to="'/detail/'+item.id"
        v-for="(item,index) in recommends"
        :key="index"
        tag="li"
      >
        <a href="#">
          <img :src="item.urlPic" class="imgs" />
          <b class="db mt5 name">{{item.name}}</b>
          <span class="gray9 db f11">{{item.time}}</span>
          <span class="gray5 db f10">
            <b class="red mr5 f13">{{item.price}}</b>起
          </span>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
        // +'/'+item.name+'/'+item.price+'/'+item.time"

export default {
  name: "Recommond",
  data() {
    return {
      recommends: [
        {
          urlPic:
            "https://static.228.cn/upload/2019/11/08/AfterTreatment/1573194546388_l5c2-0.jpg",
          name:
            "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
          time: "2019.11.17",
          price: "￥22.8",
          id: "1001"
        },
        {
          urlPic:
            "https://static.228.cn/upload/2019/10/31/AfterTreatment/1572504279871_i2c3-0.jpg",
          name:
            "[吴青峰合肥演唱会门票]吴青峰&quot;太空备忘记&quot;巡回演唱会-合肥站-永乐票务",
          time: "2019.12.14",
          price: "￥380",
          id: "1002"
        },
        {
          urlPic:
            "https://static.228.cn/upload/2019/10/11/AfterTreatment/1570771698088_f0v3-0.jpg",
          name:
            "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
          time: "2019.11.17",
          price: "￥22.8",
          id: "1003"
        },
        {
          urlPic:
            "https://static.228.cn/upload/2019/09/23/AfterTreatment/1569225507050_q5p0-0.jpg",
          name:
            "[吴青峰合肥演唱会门票]吴青峰&quot;太空备忘记&quot;巡回演唱会-合肥站-永乐票务",
          time: "2019.12.14",
          price: "￥380",
          id: "1004"
        },
        {
          urlPic:
            "https://static.228.cn/upload/2019/08/15/AfterTreatment/1565855746142_p0k7-0.jpg",
          name:
            "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
          time: "2019.11.17",
          price: "￥22.8",
          id: "1005"
        },
        {
          urlPic:
            "https://static.228.cn/upload/2019/07/05/AfterTreatment/1562319676003_k8k6-0.jpg",
          name:
            "[吴青峰合肥演唱会门票]吴青峰&quot;太空备忘记&quot;巡回演唱会-合肥站-永乐票务",
          time: "2019.12.14",
          price: "￥380",
          id: "1006"
        },
        {
          urlPic:
            "https://static.228.cn/upload/2019/09/05/AfterTreatment/1567647872834_g8j5-0.jpg",
          name:
            "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
          time: "2019.11.17",
          price: "￥22.8",
          id: "1007"
        },
        {
          urlPic:
            "https://static.228.cn/upload/2019/06/18/AfterTreatment/1560838266418_p7n8-0.jpg",
          name:
            "[吴青峰合肥演唱会门票]吴青峰&quot;太空备忘记&quot;巡回演唱会-合肥站-永乐票务",
          time: "2019.12.14",
          price: "￥380",
          id: "1008"
        },
        {
          urlPic:
            "https://static.228.cn/upload/2019/10/15/AfterTreatment/1571125267793_q2k9-0.jpg",
          name:
            "[吕珍九澳门演唱会门票]【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA-永乐票务",
          time: "2019.11.17",
          price: "￥22.8",
          id: "1009"
        }
      ]
    };
  }
};
</script>

<style>
.recommend_list {
  width: calc(100% - 0.4rem);
  margin: 0 0.2rem;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  min-height: 2rem;
}
.recommend_list li {
  flex-shrink: 0;
  margin-right: 0.08rem;
  display: flex;
  width: 0.9rem;
  flex-direction: column;
  align-items: center;
  font-size: 0.14rem;
  font-weight: 400;
  overflow: hidden;
  margin-bottom: 0.12rem;
}
.mt5 {
  margin-top: 0.05rem;
}
.recommend_list .imgs {
  width: 100%;
  height: 1.2rem;
  border-radius: 0.1rem;
  display: block;
}
.db {
  display: block;
}
.gray9 {
  color: #999;
  font-weight: 400;
}
.gray5 {
  color: #b5bbc1;
}
.f11 {
  font-size: 0.11rem;
}
.f10 {
  font-size: 0.1rem;
}
.recommend_list li .name {
  color: #333;
  font-size: 0.13rem;
  height: 0.34rem;
  line-height: 0.18rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.red {
  color: #ff3a56;
}
.f13 {
  font-size: 0.13rem;
}
</style>