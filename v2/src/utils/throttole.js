export default function (fn, time = 300, immediate = false, callBack) {
  let oldTime = new Date().getTime();
  return function (...arg) {
    let nowTime = new Date().getTime();
    if (nowTime - oldTime >= time) {
      const res = fn.apply(this, arg);
      typeof callBack == "function" && callBack(res);
      oldTime = nowTime;
    }
  };
}
