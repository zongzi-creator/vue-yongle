<template>
  <div id="body" class="Setting-body">
    <Header title="设置"/>
    <main>
      <p>
        <b>昵称</b>{{name}}
      </p>
      <p>
        <b>注册手机</b>
      </p>
      <p>
        <b>注册邮箱</b>
      </p>
      <p>
        <b>实名认证</b>
        <span>
          未认证
          <i class="iconfont icon-jiantouyou"></i>
        </span>
      </p>
      <p>
        <b>收货地址</b>
        <router-link
          to="/setAdress"
          tag="i"
          style="font-size:.15rem"
          class="iconfont icon-jiantouyou"
        ></router-link>
      </p>
      <p>
        <b>常用购票人</b>
        <i style="font-size:.15rem" class="iconfont icon-jiantouyou"></i>
      </p>
      <p>
        <b>修改密码</b>
        <i style="font-size:.15rem" class="iconfont icon-jiantouyou"></i>
      </p>
    </main>
    <footer>
      <v-touch tag="button" @tap="delet">安全退出</v-touch>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Setting",

  data(){
    return{
      name:""
    }
  },
    created() {
    document.title = this.$route.meta.title;
    this.name=window.localStorage.getItem("name")
  },
  methods:{
    delet(){
      window.localStorage.clear()
      alert("退出成功")
      setTimeout(this.$router.push("/login"),1000)
      // this.$router.push("/login")
    }
  }
};
</script>
<style >
.Setting-body main {
  flex: 1;
}
.Setting-body main p {
  height: 0.62rem;
  width: 2.6rem;
  border-bottom: 1px solid rgb(250, 241, 241);
  font-size: 0.15rem;
  margin-left: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
.Setting-body main p:nth-of-type(1) {
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
}
.Setting-body main p:nth-of-type(4) {
  display: flex;
  flex-shrink: 0;
}
.Setting-body main p:nth-of-type(4) b {
  flex: 1;
  flex-shrink: 0;
}
.Setting-body main p:nth-of-type(4) i {
  flex: 1;
  flex-shrink: 0;

  font-size: 0.15rem;
}
.Setting-body main p:nth-of-type(4) span {
  color: #ff2959;
  display: flex;
}
.Setting-body main p i {
  color: #ff2959;
}
.Setting-body footer {
  height: 0.5rem;
  display: flex;
  position:fixed;
  bottom:0;
  width:100%;
  align-items: center;
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.Setting-body footer button {
  width: 100%;
  height: 0.45rem;
  font-size: 0.2rem;
  border-radius: 1rem;
  font-size: 0.15rem;
  outline: none;
  border: none;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  color: white;
  margin: 0 0.15rem;
}
</style>