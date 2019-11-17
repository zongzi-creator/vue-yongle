import Vue from 'vue'
import Vuex from 'vuex'

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
    console.log(state.mun)
  }
}

const store=new Vuex.Store({
  state,
  actions,
  mutations
})
export default store