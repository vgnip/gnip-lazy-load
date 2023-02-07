import isVisible from "./isVisible";

export default class {
  constructor({ error, loading, src, el, scrollParent, preLoad = 1.3}) {
    this.error = error;
    this.loading = loading;
    this.loaded = false;
    this.src = src;
    this.el = el;
    this.scrollParent = scrollParent;
    this.preLoad = preLoad;
  }
  imgIisVisible() {
    return isVisible(this.el, this.scrollParent, this.preLoad);
  }
  renderImg(type) {
    switch (type) {
      case "loading":
        this.el.setAttribute("src", this.loading);
        break;
      case "error":
        this.el.setAttribute("src", this.error);
        break;
      case "complate":
        this.el.setAttribute("src", this.src);
        break;
      default:
        this.el.setAttribute("src", this.loading);
        break;
    }
  }
  imgLoad() {
    this.renderImg("loading");
    this.el.style.opacity = 0;
    return new Promise((resolve, reject) => {
      if (this.imgIisVisible()) {
        this.renderImg("complate");
        this.el.onload = resolve;
        this.el.onerror = reject;
        this.loaded = true;
      }
    });
  }
}
