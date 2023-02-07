import Vue from "vue";
import App from "./App.vue";
import "./assets/js/rem";
import lazyLoad from "./utils/directive";
Vue.use(lazyLoad, {
  error: require("./assets/img/error.jpg"),
  loading: require("./assets/img/loading.jpg"),
  preLoad: 1.1,
  animateDuration: 0.8,
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
