<template>
  <div id="app">
      <router-view></router-view>
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


