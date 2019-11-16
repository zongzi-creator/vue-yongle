<template>
  <div class="body-login body-lR">
    <div class="head">
      <i class="iconfont icon-fanhui" @click="back()"></i>
    </div>
    <main>
      <h3>会员登录</h3>
      <div id="input">
        <input type="search" placeholder="手机号/邮箱"  v-model="username"/>
        <input type="password" placeholder="密码" v-model="password"/>
      </div>
      <p>
        <span>
          <input type="checkbox" />两周内免登录
        </span>
        <span>忘记密码</span>
      </p>
      <v-touch @tap="registe()" tag="button" >登录</v-touch>
      <router-link to="/registe" tag="a">没有账号？立即注册</router-link>
    </main>
  </div>
</template>
<script>
import {searchusername,getaxios} from "../../api/myadress"
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      Allarr: "",
      use: []
    };
  },
  methods: {
      back(){
          this.$router.push("/mine")
      },
     async registe(){
        let data=await searchusername(this.username,this.password);
        if(data.length>0 && this.username!="" && this.password!=""){
          alert("登录成功")
          this.$router.push("/")
        }else if(this.username=="" && this.password==""){
          alert("用户名密码错误")
      }
    }
  }
};
</script>
<style>
.body-login header {
  height: 0.4rem;
  font-size: 0.17rem;
  display: flex;
  padding: 0 0.4rem;
}
.body-login header i {
  color: #ff2959;
  position: relative;
  top: 0.12rem;
  left: -0.3rem;
}
.body-login header span {
  text-align: center;
  line-height: 0.4rem;
  flex: 1;
}

.body-login .head {
  display: flex;
  height: 0.34rem;
  justify-content: space-around;
  padding: 0 0.2rem;
  margin-top: 0.04rem;
}
.body-login .head input {
  border-radius: 1rem;
  padding: 0 0.3rem;
  background: #f3f4f5;
  border: none;
  outline: none;
}
.body-login .head a {
  line-height: 0.34rem;
  font-size: 0.15rem;
}
.body-login .head i {
  color: white;
  position: absolute;
  left: 0.2rem;
  top: 0.15rem;
}
.body-login main {
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0.5rem;
}
.body-login main h3 {
  font-size: 0.3rem;
  color: white;
  margin-bottom: 0.3rem;
}
.body-login #input {
  display: flex;
  flex-direction: column;
}
.body-login #input input {
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

.body-login .iconfont {
  font-size: 0.2rem;
}
.body-login #input i:nth-of-type(1) {
  position: relative;
  top: 61.5px;
  left: 10px;
  color: #ccc;
}
.body-login #input i:nth-of-type(2) {
  position: relative;
  top: 113px;
  left: 10px;
  color: #ccc;
}
.body-login main p {
  display: inline;
  font-size: 0.14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.05rem;
}
.body-login main p span {
  display: flex;
  align-items: center;
  color: #ccc;
}
.body-login main p span input {
  margin-right: 0.05rem;
}
.body-login main button {
  width: 100%;
  height: 0.45rem;
  border-radius: 1rem;
  margin-top: 0.25rem;
  color: #ccc;
  background: rgba(255, 255, 255, 0.5);
  outline: none;
  font-size: 0.18rem;

  border: none;
}
.body-login main a {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.15rem;
  color: #ff3a56;
}
</style>