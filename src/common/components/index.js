import vue from "vue";
import Footer from "./footer";
import Header from "./header";
let componentMap = [Header, Footer];

componentMap.forEach(item => {
  vue.component(item.name, item);
});
