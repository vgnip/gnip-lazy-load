// v-lazy绑定的元素加载图片项构造函数
export default class ImageItemClass {
  constructor({ errorImg, src, el, transitionTime }) {
    // img标签
    this.el = el;
    // 加载出错显示的默认图
    this.errorImg = errorImg;
    //绑定的图片路径
    this.src = src;
    // 是否加载过了当前图片
    this.loaded = false;
    // 动画过渡时长
    this.transitionTime = transitionTime;
    // 是否存在加载出错
    this.loadingError = false;
  }
  //   每个图片项的加载函数
  loadImg() {
    // 返回promise，外部调用可以做其他扩展处理
    return new Promise((resolve, reject) => {
      // 为了更好的用户体验，这里将图片的透明度进行过渡
      this.el.style.opacity = '0';
      // this.el.style.transition = `opacity ${this.transitionTime}s`;
      this.addTransition();
      this.el.src = this.src;
      //src为有效图片路径能够加载出来
      this.el.onload = () => {
        resolve();
      };
      //src为无效图片路径不能够加载出来
      this.el.onerror = () => {
        // 设置成默认加载错误时候的图片，避免破碎图片的显示
        this.el.src = this.errorImg;
        // this.el.style.opacity = '0';
        // this.loadingError = true;
        // this.addTransition();
        resolve();
      };
      // 标识当前图片已经被加载了，避免滚动重复处理造成的卡顿
      this.loaded = true;
    });
  }
  // 添加过渡
  addTransition() {
    requestAnimationFrame(() => {
      this.el.style.transition = `opacity ${1.2}s ease-in-out`
      // !this.loadingError ? (this.el.style.transition = `opacity ${1.2}s ease-in-out`) : null;
      this.el.style.opacity = '1';
    });
  }
}
