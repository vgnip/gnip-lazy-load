import LazayLoad from "./LazayLoad";
export default {
  install(Vue, options) {
    const lazayLoad = LazayLoad(Vue);
    const LazayLoadClass = new lazayLoad(options);
    Vue.directive("lazy", {
      inserted: LazayLoadClass.inserted.bind(LazayLoadClass),
    });
  },
};




