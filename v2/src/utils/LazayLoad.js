import getParentNodeOverFlow from "./getParentNodeOverFlow";
import debounce from "./debounce";
import Lazying from "./Lazying";
export default function (Vue) {
  return class Lazy {
    constructor(options) {
      this.options = options;
      this.imgInstancePool = [];
      this.isScroll = true;
    }
    inserted(el, binding) {
      const scrollParent = getParentNodeOverFlow(el);
      const throttleScrollFn = debounce(this.handleScroll);
      this.imgInstancePool.push(
        this.instanceImgItem(el, this.options, binding.value, scrollParent)
      );
      scrollParent &&
        this.isScroll &&
        scrollParent.addEventListener(
          "scroll",
          throttleScrollFn.bind(this),
          false
        );
      this.handleScroll();
    }
    instanceImgItem(el, options, src, scrollParent) {
      return new Lazying({
        ...options,
        src,
        el,
        // 这一步是判断是window的话就会有eval属性
        scrollParent: scrollParent.eval ? document : scrollParent,
      });
    }
    handleScroll() {
      this.imgInstancePool.forEach((imgInstance) => {
        imgInstance.el.style.transition = `all ${
          this.options.animateDuration ? this.options.animateDuration : 1.2
        }s`;
        !imgInstance.loaded &&
          imgInstance
            .imgLoad()
            .then((res) => {
              imgInstance.el.style.opacity = 1;
            })
            .catch((err) => {
              imgInstance.renderImg("error");
              imgInstance.el.style.opacity = 1;
            });
      });
    }
  };
}
