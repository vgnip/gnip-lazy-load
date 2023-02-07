import Lazy from "./Lazy";
export default {
  // 插件都要具有install方法，这样外部就可以通过vue.use注册插件了
  install(app, options = {}) {
    // 注册v-lazy指令
    const lazyInstance = new Lazy(options);
    console.log(app)
    app.directive("lazy", {
      mounted: lazyInstance.mounted.bind(lazyInstance),
    });
  },
};
