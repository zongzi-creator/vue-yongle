<template>
  <div id="app">
<<<<<<< HEAD
    <keep-alive exclude="Detail">
=======
    <keep-alive exclude="Detail,Vdetail,Slider">
>>>>>>> origin
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="this.$route.meta.tabFlag" />
  </div>
</template>
<script>
import TabBar from "./common/components/tabBar";
export default {
  name: "App",
  components: {
    TabBar
  }
};
</script>


<style>
#app {
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
}
</style>


