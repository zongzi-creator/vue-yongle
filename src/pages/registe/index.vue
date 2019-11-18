<template>
  <div id="body" class="body-registe body-lR">
    <div class="head">
      <v-touch @tap="goback()" tag="i" class="iconfont icon-fanhui"></v-touch>
    </div>
    <div class="main">
      <h3>会员注册</h3>
      <div id="input">
        <input type="search" placeholder="手机号/邮箱" v-model="username" />
        <input type="password" placeholder="密码" v-model="password" />
      </div>
      <p>
        <span>
          <input type="checkbox" />两周内免登录
        </span>
        <span>忘记密码</span>
      </p>
      <v-touch tag="button" @tap="render()">注册</v-touch>
      <router-link tag="a" to="/login">立即登录</router-link>
    </div>
  </div>
</template>
<script>
import { searchusername,getaxios } from "../../api/myadress";
export default {
  name: "Registe",
  data() {
    return {
      username: "",
      password: "",
      Allarr: "",
      use: []
    };
  },
  created() {},
  methods: {
    goback() {
      this.$router.back();
    },
    async render() {
      let data = await searchusername(this.username);
      if(data.length>0){
        if(this.username=="" && this.password==""){
          
        alert("请输入用户名密码")
        return
        }
        alert("该账户存在")
      }else if(this.username!="" && this.password!=""){
        let data = await getaxios(this.username,this.password);
        alert("注册成功")
        this.$router.push("/login")
      }
    }
  }
};
</script>
<style>
.body-registe header {
  height: 0.4rem;
  font-size: 0.17rem;
  display: flex;
  padding: 0 0.4rem;
}
.body-registe header i {
  color: #ff2959;
  position: relative;
  top: 0.12rem;
  left: -0.3rem;
}
.body-registe header span {
  text-align: center;
  line-height: 0.4rem;
  flex: 1;
}

.body-registe .head {
  display: flex;
  height: 0.34rem;
  justify-content: space-around;
  padding: 0 0.2rem;
  margin-top: 0.04rem;
}
.body-registe .head input {
  border-radius: 1rem;
  padding: 0 0.3rem;
  background: #f3f4f5;
  border: none;
  outline: none;
}
.body-registe .head a {
  line-height: 0.34rem;
  font-size: 0.15rem;
}
.body-registe .head i {
  color: white;
  position: absolute;
  left: 0.2rem;
  top: 0.15rem;
}
.body-registe .main {
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0.5rem;
}
.body-registe .main h3 {
  font-size: 0.3rem;
  color: white;
  margin-bottom: 0.3rem;
}
.body-registe #input {
  display: flex;
  flex-direction: column;
}
.body-registe #input input {
  width: 2.22rem;
  height: 0.46rem;
  background: rgba(0, 0, 0, 0);
  border-radius: 1rem;
  outline: none;
  border: 0.01rem solid rgba(255, 255, 255, 0.6);
  margin: 0.05rem 0 0.2rem 0;
  text-align: center;
  color: white;
  font-size: 0.15rem;
}

.body-registe .iconfont {
  font-size: 0.2rem;
}
.body-registe #input i:nth-of-type(1) {
  position: relative;
  top: 61.5px;
  left: 10px;
  color: #ccc;
}
.body-registe #input i:nth-of-type(2) {
  position: relative;
  top: 113px;
  left: 10px;
  color: #ccc;
}
.body-registe .main p {
  display: inline;
  font-size: 0.14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.05rem;
}
.body-registe .main p span {
  display: flex;
  align-items: center;
  color: #ccc;
}
.body-registe .main p span input {
  margin-right: 0.05rem;
}
.body-registe .main button {
  width: 100%;
  height: 0.45rem;
  border-radius: 1rem;
  margin-top: 0.25rem;
  color: #ccc;
  background: #ff3a56;
  outline: none;
  font-size: 0.18rem;
  border: none;
}
.body-registe .main a {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.15rem;
  color: #ff3a56;
}
</style>