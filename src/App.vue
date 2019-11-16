<template>
  <div id="app">
    <keep-alive exclude="Detail,Vdetail,Slider,Registe">
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="this.$route.meta.tabFlag" />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>


<style>
</style>


