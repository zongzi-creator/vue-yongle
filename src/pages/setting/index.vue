<template>
  <div id="body" class="Setting-body">
    <header>
      <router-link to="/mine" tag="i" class="iconfont icon-fanhui"></router-link>
      <span>账号管理</span>
    </header>
    <main>
      <p>
        <b>昵称</b>
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
        <i style="font-size:.15rem" class="iconfont icon-jiantouyou"></i>
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
      <button>安全退出</button>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Setting"
};
</script>
<style >
.Setting-body header {
  height: 0.4rem;
  font-size: 0.17rem;
  display: flex;
  padding: 0 0.4rem;
}
.Setting-body .icon-fanhui {
  font-size: 0.15rem;
}
.Setting-body header i {
  color: #ff2959;
  position: relative;
  top: 0.12rem;
  left: -0.3rem;
}
.Setting-body header span {
  text-align: center;
  line-height: 0.4rem;
  flex: 1;
}

.Setting-body .head {
  display: flex;
  height: 0.34rem;
  justify-content: space-around;
  padding: 0 0.2rem;
  margin-top: 0.04rem;
}
.Setting-body .head input {
  flex: 1;
  border-radius: 1rem;
  padding: 0 0.3rem;
  background: #f3f4f5;
  border: none;
  outline: none;
}
.Setting-body .head a {
  line-height: 0.34rem;
  font-size: 0.15rem;
}
.Setting-body .head i {
  color: #ff2959;
  position: relative;
  top: 0.07rem;
  left: 0.26rem;
  right: 0;
  bottom: 0;
}
.Setting-body main {
  flex: 1;
}
.Setting-body main p {
  height: 0.62rem;
  width: 2.6rem;
  border-bottom: 1px solid rgb(250, 241, 241);
  font-size: 0.15rem;
  margin-left: 0.3rem;
  /* padding:0 0.3rem; */
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
  align-items: center;
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.Setting-body footer button {
  width: 100%;
  height: 0.45rem;
  font-size:.2rem;
  border-radius: 1rem;
  font-size:.15rem;
  outline: none;
  border: none;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  color: white;
  margin: 0 0.15rem;
}
</style>