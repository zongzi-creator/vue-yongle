<template>
  <div id="body" class="sub-body">
    <div class="bodybg"></div>
    <div class="head-tit">
      <router-link to="/" class="iconfont icon-fanhui goback"></router-link>
      <span class="word">活动专区</span>
    </div>
    <div class="subMain">
      <div v-for="(itemAll,index) in list" :key="index">
        <div class="list" v-for="(item,index) in itemAll" :key="index">
          <div class="photo">
            <img :src="'//static.228.cn'+item.IMG" />
          </div>
          <div class="text">{{item.REMARK}}</div>
        </div>
      </div>

      <button @click="handleMore()" class="more">查看更多</button>
      <Footer />
    </div>
    <!-- 底部 -->
  </div>
</template>
<script>
import { subjectPage } from "../../api/myadress";
import { morePage } from "../../api/myadress";
export default {
  name: "SubjectPage",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.handlesubPage();
  },
  methods: {
    async handlesubPage() {
      let data = await subjectPage();
      this.list.push(data.data.subjectPage.list);
    },
    async handleMore() {
      let data = await morePage();
      this.list.push(data.data.subjectPage.list);
    }
  }
};
</script>


<style>
.sub-body .subMain {
  font-size: 0.14rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
  margin: 0.15rem;
  overflow-y: auto !important;
}

.sub-body .list {
  flex-shrink: 0;
  margin-bottom: 0.2rem;
  width: 100%;
  border-radius: 0.1rem;
  overflow: hidden;
  background: #fff;
  text-align: center;
}
.sub-body .photo {
  width: 100%;
  height: 1.27rem;
  position: relative;
  flex-shrink: 0;
}
.sub-body .photo img {
  width: 100%;
  height: 100%;
}
.sub-body .text {
  margin: 0.2rem;
  font-size: 0.17rem;
  font-weight: bold;
}
</style>