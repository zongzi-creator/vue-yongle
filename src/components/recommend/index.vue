<template>
  <div>
    <ul class="recommend_list">
      <router-link
        :to="'/detail/'+item.PRODUCTID"
        v-for="(item,index) in recommends"
        :key="index"
        tag="li"
      >
        <a href="#">
          <img :src="'//static.228.cn'+item.PBIGIMG" class="imgs" />
          <b class="db mt5 name">{{item.NAME}}</b>
          <span class="gray9 db f11">{{item.time}}</span>
          <span class="gray5 db f10">
            <b class="red mr5 f13">{{item.MINPRICE}}</b>起
          </span>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { recommend } from "../../api/myadress";
export default {
  name: "Recommond",
  data() {
    return {
      recommends: []
    };
  },
  created() {
    this.handleRecommend();
    console.log(this);
  },
  methods: {
    async handleRecommend() {
      let data = await recommend();
      console.log(data.data.recommendPage.list);
      this.recommends = data.data.recommendPage.list;
    }
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
.recommend_list .mt5 {
  margin-top: 0.05rem;
}
.recommend_list .imgs {
  width: 100%;
  height: 1.2rem;
  border-radius: 0.1rem;
  display: block;
}
.recommend_list .db {
  display: block;
}
.recommend_list .gray9 {
  color: #999;
  font-weight: 400;
}
.recommend_list .gray5 {
  color: #b5bbc1;
}
.recommend_list .f11 {
  font-size: 0.11rem;
}
.recommend_list .f10 {
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
.recommend_list .red {
  color: #ff3a56;
}
.recommend_list .f13 {
  font-size: 0.13rem;
}
</style>