import Lazy from "./Lazy";
export default {
  // 插件都要具有install方法，这样外部就可以通过vue.use注册插件了
  install(Vue, options = {}) {
    // 注册v-lazy指令
    const lazyInstance = new Lazy(options);
    Vue.directive("lazy", {
      inserted: lazyInstance.inserted.bind(lazyInstance),
    });
  },
};
