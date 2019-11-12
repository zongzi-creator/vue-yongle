<template>
  <div id="body" class="Search-body">
    <header>
      <router-link to="/home" tag="i" class="iconfont icon-fanhui"></router-link>
      <span>搜索</span>
    </header>
    <div class="head">
      <i class="iconfont icon-sousuo"></i>
      <input type="search" />
      <a style="text-decoration: none;" href>取消</a>
    </div>
    <main></main>
    <!-- 底部 -->
    <Footer />
  </div>
</template>


<script>
import Footer from "../../components/footer";
export default {
  name: "Search",
  components: {
    Footer
  },
  created() {
    document.title = this.$route.meta.title;
  }
};
</script>


<style>
.Search-body header {
  height: 0.4rem;
  font-size: 0.17rem;
  display: flex;
  padding: 0 0.4rem;
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
}
.Search-body .head {
  display: flex;
  height: 0.34rem;
  justify-content: space-around;
  padding: 0 0.2rem;
  margin-top: 0.04rem;
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
  font-size: 0.15rem;
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
</style>