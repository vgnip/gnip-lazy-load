import loadingSrc from './img/loading.jpg';
/**
 * @Description 判断dom元素是否到达可视区
 * @Author Galaxy
 * @Date 2022/10/18 18:47:46
 * @param { Boolean }
 * @return { Boolean }
 **/
export const checkEnterView = (imgInstance, scrollParent) => {
  let parentHeight, parentWidth, x, y;
  if (imgInstance.scroll) {
    // 存在滚动父级，需要元素到滚动父级可视区顶部的估计：计算公式为offsetTop-scrollParent.scrollTop
    parentHeight = scrollParent.clientHeight;
    parentWidth = scrollParent.clientWidth;
    y = imgInstance.el.offsetTop - scrollParent.scrollTop;
    x = imgInstance.el.offsetLeft - scrollParent.scrollLeft;
  } else {
    // 不存在滚动父级的情况
    const { top, left } = imgInstance.el.getBoundingClientRect();
    y = top;
    x = left;
    parentHeight = document.documentElement.clientHeight;
    parentWidth = document.documentElement.clientWidth;
  }
  if (y < parentHeight && x < parentWidth) {
    return true;
  }
  // // 只考虑y轴
  // if (y < parentHeight) {
  //   return true;
  // }
  return false;
};

// 初始状态将图片的路径设置成加载中的图片
export const initLoadImg = el => {
  el.src = loadingSrc;
};

/**
 * @Description 防抖函数
 * @Author Galaxy
 * @param { Function } fn 需要防抖的函数
 * @param { Number } time 时间间隔
 * @return { Fuction } 返回防抖后的新函数
 **/
export const debounce = (fn, time) => {
  let timer = null;
  return function(...arg) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, ...arg);
    }, time);
  };
};
/**
 * @Description 节流函数
 * @Author Galaxy
 * @param { Function } fn 需要节流的函数
 * @param { Number } time 时间间隔
 * @param { Number } immediate 是否初始的时候立即执行一次
 * @return { Fuction } 返回节流后的新函数
 **/
export const throttle = (fn, time, immediate = true) => {
  let oldTime = new Date();
  return function(...arg) {
    if (immediate) {
      fn.apply(this, ...arg);
      immediate = false;
      return;
    }
    let currentTime = new Date();
    if (currentTime - oldTime >= time) {
      fn.apply(this, ...arg);
      oldTime = currentTime;
    }
  };
};
