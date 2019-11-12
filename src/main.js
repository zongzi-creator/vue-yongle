import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import { Lazyload } from 'vant';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

Vue.use(Lazyload);
Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
