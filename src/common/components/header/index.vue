<template>
  <div class="head-tit">
    <p @click="goback()" tag="p" class="iconfont icon-fanhui goback"></p>
    <span class="word">{{title}}</span>
    <router-link to="/search" tag="span" v-if="sousuo" class="iconfont icon-sousuo"></router-link>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "header"
    },
    sousuo:{
      type:Boolean
    }
  },
  methods: {
    goback() {
      this.$router.push("/home/recommend");
    }
  }
};
</script>
<style>
.head-tit {
  display: flex;
  align-items: center;
  height: 0.4rem;
  width: 100%;
  font-size: 0.17rem;
  font-weight: bold;
  flex-shrink: 0;
  background: #fff;
}
.head-tit .goback {
  margin-left: 0.15rem;
  width: 0.18rem;
  height: 0.18rem;
  font-size: 0.18rem;
  display: block;
  top: 0.11rem;
  color: #ff2959;
}
.head-tit .word{
  display: flex;
  margin-left:.5rem;
  width: 1.5rem;
  justify-content: center;
  align-items: center;
}
.head-tit .icon-sousuo {
  width: 0.4rem;
  position: absolute;
  right:0;
  color: #ff3a56;
  font-size: 0.18rem;
}
</style>