import Vue from 'vue'
import App from './App'
import router from "./router"
import VueTouch from "vue-touch"
import { Lazyload } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { AddressEdit } from 'vant';
import { Area } from 'vant';
import { Sku } from 'vant';
import { Card } from 'vant';
import '@vant/touch-emulator';
import '@common/components';
import store from "./store"
import observer from "../observer"
Vue.prototype.$observer = observer;


import { CouponCell, CouponList } from 'vant';
Vue.use(Card);
Vue.use(Sku);
Vue.use(CouponCell).use(CouponList);
Vue.use(Area);
Vue.use(AddressEdit);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

