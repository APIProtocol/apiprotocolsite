import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "normalize.css";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./common/css/index.less";
import i18n from "./i18n/index.js";
// ..
AOS.init({
  duration: 2000,
  once: true
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
