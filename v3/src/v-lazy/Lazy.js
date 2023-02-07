import { checkEnterView, initLoadImg, debounce, throttle } from './utils';
import ImageItemClass from './ImageItemClass';
import errorImg from "./img/error.jpg"
import loadingImg from "./img/loading.jpg"
// 懒加载类
export default class Lazy {
  constructor(options) {
    // 所有v-lazy绑定的图片的集合
    this.imgPoolList = new Map();
    this.noScrollParentimgPoolList = []; //不带滚动父级
    this.scrollParentimgPoolList = []; //带滚动父级
    // 图片集合字段名
    this.pooListField = 'noScrollParentimgPoolList';
    // 是否绑定了滚动处理函数到window
    this.isBindScrollWindow = false;
    //  是否绑定了滚动处理函数到带overflow属性的父级元素
    this.isBindScrollScrollParent = false;
    // 图片加载失败的默认图
    this.errorImg = options.errorImg || errorImg;
    // 图片加载中显示的默认图
    this.loadingImg = options.loadingImg || loadingImg;
    // 是否指定特定的带over-flow的父级作为滚动处理函数绑定的对象，默认绑定滚动处理函数在window上面
    this.scrollParent = null;
    // 根据用户指令配置项，确定是否根据父级来绑定滚动函数
    this.isScrollParent = false;
    // 动画过渡时长
    this.transitionTime = options.transitionTime || 0.9;
    // 防抖的阈值
    this.debounceTime = options.debounceTime || 200;
    // 绑定防抖函数，避免滚动过程频繁触发，提高流畅度
    this.debounceHandleScroll = debounce(this.handleScroll, this.debounceTime).bind(this);
    // 绑定节流函数，避免滚动过程频繁触发，提高流畅度
    // this.throttleHandleScroll = throttle(this.handleScroll, this.debounceTime, true).bind(this);
  }
  // 指令绑定的dom元素插入到页面中触发（类似mounted)
  mounted(el, binding, vnode) {
    console.log(el)
    // 是否需要滚动父级
    this.isScrollParent = binding.modifiers.scroll;
    this.pooListField = this.isScrollParent ? 'scrollParentimgPoolList' : 'noScrollParentimgPoolList';
    // 将当前dom元素加入到set集合中，便于统一处理
    this.imgPoolList.set(
      el,
      new ImageItemClass({
        src: binding.value, //图片路径
        errorImg: this.errorImg, //加载出错默认图
        el, //当前dom节点
        transitionTime: this.transitionTime, //动画过渡时长
        scroll: this.isScrollParent, //是否标记滚动父级
      }),
    );
    // 初始化渲染图片状态
    initLoadImg(el);
    // 初始的时候，执行一次函数
    this.handleScroll();
    // 记住绑定过了就不需要绑定了，不然会出现给dom元素重复多次绑定滚动处理函数
    // 如果存在滚动滚动父级，那么给滚动父级也绑定滚动处理函数
    if (this.findScrollParent(el)) {
      !this.isBindScrollScrollParent && this.scrollParent.addEventListener('scroll', this.debounceHandleScroll);
      this.isBindScrollScrollParent = true;
    } else {
      !this.isBindScrollWindow && window.addEventListener('scroll', this.debounceHandleScroll);
      this.isBindScrollWindow = true;
    }
  }
  // 元素卸载，初始化
  unmounted() {
    this.scrollParentimgPoolList = [];
    this.noScrollParentimgPoolList = [];
  }
  // 指令绑定的值变化
  update(el, binding) {
    this.updateImageInstance(el, binding);
  }
  // 更新保存的图片实例对象
  updateImageInstance(el, binding) {
    // 将更新的图片的路径进行更换，重新加载
    for (let [elment, imgInstance] of this.imgPoolList) {
      if (el == elment && !imgInstance.loaded) {
        imgInstance.src = binding.value;
      }
    }
    this.handleScroll();
  }
  // 滚动的时候，根据dom元素是否进入到可视区动态，再决定是否加载图片
  handleScroll() {
    for (let [el, imgInstance] of this.imgPoolList) {
      if (this.scrollParent) {
        // 当img出现在可视区并且没有被加载的时候，进行加载处理
        if (checkEnterView(imgInstance, this.scrollParent) && !imgInstance.loaded) {
          this.resolveImgInstance(imgInstance);
        }
      } else {
        // 当img出现在可视区并且没有被加载的时候，进行加载处理
        if (checkEnterView(imgInstance) && !imgInstance.loaded) {
          this.resolveImgInstance(imgInstance);
        }
      }
    }
  }
  // 加载图片
  resolveImgInstance(imgInstance) {
    imgInstance
      .loadImg()
      .then(() => {
        // 图片加载成功的回调
        for (let [_elment, _imgInstance] of this.imgPoolList) {
          if (imgInstance.el == _elment) {
            _imgInstance.loaded = true;
          }
        }
      })
      .catch(() => {
        // 图片加载失败的回调,将loaded变为false，便于图片更新后重新加载
        // imgInstance.loaded = false;
      });
  }
  // 寻找滚动父级元素，带overflow的
  findScrollParent(el) {
    if (!this.isScrollParent) return false;
    let parent = el.parentNode;
    while (parent) {
      if (
        getComputedStyle(parent).getPropertyValue('overflow') == 'scroll' ||
        getComputedStyle(parent).getPropertyValue('overflow') == 'auto' ||
        getComputedStyle(parent).getPropertyValue('overflow-x') == 'scroll' ||
        getComputedStyle(parent).getPropertyValue('overflow-x') == 'auto' ||
        getComputedStyle(parent).getPropertyValue('overflow-y') == 'scroll' ||
        getComputedStyle(parent).getPropertyValue('overflow-y') == 'auto'
      ) {
        // 找到了带overflow样式的父级元素
        this.scrollParent = parent;
        return true;
      }
      parent = parent.parentNode;
    }
    return false;
  }

}
