<template>
  <ul class="venue cl">
    <router-link :to="'/Vdetail/'+item.VENUESID" v-for="(item,index) in site" :key="index" tag="li">
        <img :src="'//static.228.cn'+item.IMG" class="imgs" />
        <b class="db mt5 name">{{item.VNAME}}</b>
        <span class="gray9 venue-address db f11">{{item.ADDRESS}}</span>
    </router-link>
  </ul>
</template>


<script>
import { site } from "../../api/myadress";
export default {
  name: "Site",
  data() {
    return {
      site: []
    };
  },
  created() {
    this.handleSite(1, 1, 1);
  },
  methods: {
    async handleSite(type, fcity, pageNum) {
      let data = await site(type, fcity, pageNum);
      this.site = data.data.venuePage.list;
    }
  }
};
</script>

<style>
/*场馆列表*/
.venue {
  width: calc(100% - 0.4rem);
  margin: 0 0.2rem;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
}
.venue li {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 48%;
  margin-right: 2%;
  overflow: hidden;
  margin-bottom: 0.12rem;
  height: 1.8rem;
}
.venue .mt5 {
  margin-top: 0.05rem;
}
.venue .db {
  display: block;
}
.venue li .name {
  font-size: 0.13rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.venue .imgs {
  width: 100%;
  height: 1.4rem;
  border-radius: 0.1rem;
}
.venue-address {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.venue .f11 {
  font-size: 0.11rem;
}
.venue .gray9 {
  color: #999;
}
</style>