import vue from "vue";
import Footer from "./footer";
import Header from "./header";
import TabBar from "./tabBar"
let componentMap = [Header, Footer,TabBar];

componentMap.forEach(item => {
  vue.component(item.name, item);
});
