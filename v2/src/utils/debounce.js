export default function(fn, time = 100, immediate = false, callBack) {
  let timer = null;
  return function (...arg) {
    clearInterval(timer);
    timer = setTimeout(() => {
      const res = fn.apply(this, arg);
      typeof callBack == "function" && callBack(res);
    }, time);
  };
}
