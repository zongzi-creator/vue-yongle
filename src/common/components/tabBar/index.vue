<template>
  <div id="footer">
    <router-link class="service" v-for="(item,index) in tabbars" :key="index" :to="item.path">
      <i class="iconfont" v-html="item.icon"></i>
      <span>{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      tabbars: [
        {
          text: "首页",
          icon: "&#xe604;",
          path: "/home"
        },
        {
          text: "分类",
          icon: "&#xe632;",
          path: "/classify"
        },
        {
          text: "搜索",
          icon: "&#xe634;",
          path: "/search"
        },
        {
          text: "我的",
          icon: "&#xe630;",
          path: "/mine"
        }
      ]
    };
  }
};
</script>

<style >
#footer {
  display: flex;
  height: 0.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 0px 8px 0px rgba(95, 100, 106, 0.15);
  flex-shrink: 0;
}
#footer .service {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.1rem;
  text-align: center;
  flex-shrink: 0;
  padding-top: 0.07rem;
}
#footer .iconfont {
  display: flex;
  font-size: 0.25rem;
  flex-shrink: 0;
}
#footer .router-link-active {
  color: #ff2959;
}
</style>