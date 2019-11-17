import Vue from 'vue'
import App from './App'
import router from "./router"
import VueTouch from "vue-touch"
import { Lazyload } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { AddressEdit } from 'vant';
import { Area } from 'vant';
import '@vant/touch-emulator';
import '@common/components';
<<<<<<< HEAD
import store from "./store"
import observer from "../observer"
Vue.prototype.$observer = observer;


=======
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell).use(CouponList);
>>>>>>> ac070466e4e50254a4f1203606071a0eb5bb31fb
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

