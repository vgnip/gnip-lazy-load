import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.config.globalProperties.msg = "hello";

// import gnipLazyLoad from "./v-lazy/index"; 
import gnipLazyLoad from "gnip-vue3-lazy-load"; 
app.use(createPinia());
app.use(router);
app.use(gnipLazyLoad)
app.mount("#app");
