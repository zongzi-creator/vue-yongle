import Vue from 'vue'
import Vuex from 'vuex'
import city from "./city"
Vue.use(Vuex)

let  state={
    n:"",
    mun:"登录"
}
let actions={
    handle({commit},parmas){
      commit("hooddle",parmas)
    },
    going({commit},parmas){
      commit("goingto",parmas)

    }
}

let mutations={
  hooddle(state,parmas){
    state.n=parmas
  },
  goingto(state,parmas){
    state.mun=parmas
  }
}

const store=new Vuex.Store({
  state,
  actions,
  mutations
})
export default  store
  