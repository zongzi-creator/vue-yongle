import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home";
import Search from "../pages/search";
import Classify from "../pages/classify";
import Mine from "../pages/mine";
import Recommend from "../components/recommend";
import Site from "../components/site";
import City from "../pages/city";
import Detail from "../pages/detail";
import Vdetail from "../pages/Vdetail";
import Goodslist from "../pages/goodslist";
import Love from "../pages/love"
import Setting from "../pages/setting"
import SetAdress from "../pages/setAdress"
import Login from "../pages/login"
import Registe from "../pages/registe"

Vue.use(VueRouter);

//路由的配置
const router = new VueRouter({
  mode: "hash", //带井号的哈希值，history需要与后端做配置
  routes: [
    {
      path: "/",
      redirect: "/home/recommend"
    },
    {
      path: "/home",
      redirect: "/home/recommend",
      component: Home,
      children: [
        {
          path: "recommend",
          component: Recommend,
          meta: {
            title:"首页",
            tabFlag: true
          }
        },
        {
          path: "site",
          component: Site,
          meta: {
            title:"",
            tabFlag: true
          }
        }
      ]
    },
    {
      path: "/classify",
      component: Classify,
      meta: {
        title:"分类",
        tabFlag: true
      }
    },
    {
      path: "/search",
      component: Search,
      meta: {
        title:"搜索",
        tabFlag: true
      }
    },
    {
      path: "/mine",
      component: Mine,
      meta: {
        title:"我的",
        tabFlag: true
      }
    },
    {
      path: "/city",
      component: City,
      meta: {
        tabFlag: false
      }
    },
    {
      path: "/detail/:id",
      component: Detail,
      meta: {
        tabFlag:false
      }
    },
    {
      path: "/Vdetail/:id",
      component: Vdetail,
      meta: {
        tabFlag:false
      }
    },
    {
      path: "/goodslist",
      component: Goodslist,
      meta: {
        tabFlag: false
      }
    },
    {
      path: "/love",
      component: Love,
      meta: {
        tabFlag: false
      }
    },
    {
      path: "/setting",
      component: Setting,
      meta: {
        title:"设置",
        tabFlag: false
      }
    },
    {
      path: "/setAdress",
      component: SetAdress,
      meta: {
        tabFlag: false
      }
    },
    {
      path:"/login",
      component:Login,
      meta: {
        tabFlag: false
      }
    },
    {
      path:"/registe",
      component:Registe,
  
    }
  ]
});

export default router;
