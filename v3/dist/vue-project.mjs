const n = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE1MUNGMjIyNjE3NDExRUM5QjI3RjhFQkE2NDRFQ0QyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE1MUNGMjIzNjE3NDExRUM5QjI3RjhFQkE2NDRFQ0QyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTUxQ0YyMjA2MTc0MTFFQzlCMjdGOEVCQTY0NEVDRDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTUxQ0YyMjE2MTc0MTFFQzlCMjdGOEVCQTY0NEVDRDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEB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", s = (l, t) => {
  let A, e, i, o;
  if (l.scroll)
    A = t.clientHeight, e = t.clientWidth, o = l.el.offsetTop - t.scrollTop, i = l.el.offsetLeft - t.scrollLeft;
  else {
    const { top: c, left: r } = l.el.getBoundingClientRect();
    o = c, i = r, A = document.documentElement.clientHeight, e = document.documentElement.clientWidth;
  }
  return o < A && i < e;
}, g = (l) => {
  l.src = n;
}, a = (l, t) => {
  let A = null;
  return function(...e) {
    A && clearTimeout(A), A = setTimeout(() => {
      l.apply(this, ...e);
    }, t);
  };
};
class w {
  constructor({ errorImg: t, src: A, el: e, transitionTime: i }) {
    this.el = e, this.errorImg = t, this.src = A, this.loaded = !1, this.transitionTime = i, this.loadingError = !1;
  }
  loadImg() {
    return new Promise((t, A) => {
      this.el.style.opacity = "0", this.addTransition(), this.el.src = this.src, this.el.onload = () => {
        t();
      }, this.el.onerror = () => {
        this.el.src = this.errorImg, t();
      }, this.loaded = !0;
    });
  }
  addTransition() {
    requestAnimationFrame(() => {
      this.el.style.transition = `opacity ${1.2}s ease-in-out`, this.el.style.opacity = "1";
    });
  }
}
const I = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE1MUNGMjI2NjE3NDExRUM5QjI3RjhFQkE2NDRFQ0QyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE1MUNGMjI3NjE3NDExRUM5QjI3RjhFQkE2NDRFQ0QyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTUxQ0YyMjQ2MTc0MTFFQzlCMjdGOEVCQTY0NEVDRDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTUxQ0YyMjU2MTc0MTFFQzlCMjdGOEVCQTY0NEVDRDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEB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";
class E {
  constructor(t) {
    this.imgPoolList = /* @__PURE__ */ new Map(), this.noScrollParentimgPoolList = [], this.scrollParentimgPoolList = [], this.pooListField = "noScrollParentimgPoolList", this.isBindScrollWindow = !1, this.isBindScrollScrollParent = !1, this.errorImg = t.errorImg || I, this.loadingImg = t.loadingImg || n, this.scrollParent = null, this.isScrollParent = !1, this.transitionTime = t.transitionTime || 0.9, this.debounceTime = t.debounceTime || 200, this.debounceHandleScroll = a(this.handleScroll, this.debounceTime).bind(this);
  }
  mounted(t, A, e) {
    console.log(t), this.isScrollParent = A.modifiers.scroll, this.pooListField = this.isScrollParent ? "scrollParentimgPoolList" : "noScrollParentimgPoolList", this.imgPoolList.set(
      t,
      new w({
        src: A.value,
        errorImg: this.errorImg,
        el: t,
        transitionTime: this.transitionTime,
        scroll: this.isScrollParent
      })
    ), g(t), this.handleScroll(), this.findScrollParent(t) ? (!this.isBindScrollScrollParent && this.scrollParent.addEventListener("scroll", this.debounceHandleScroll), this.isBindScrollScrollParent = !0) : (!this.isBindScrollWindow && window.addEventListener("scroll", this.debounceHandleScroll), this.isBindScrollWindow = !0);
  }
  unmounted() {
    this.scrollParentimgPoolList = [], this.noScrollParentimgPoolList = [];
  }
  update(t, A) {
    this.updateImageInstance(t, A);
  }
  updateImageInstance(t, A) {
    for (let [e, i] of this.imgPoolList)
      t == e && !i.loaded && (i.src = A.value);
    this.handleScroll();
  }
  handleScroll() {
    for (let [t, A] of this.imgPoolList)
      this.scrollParent ? s(A, this.scrollParent) && !A.loaded && this.resolveImgInstance(A) : s(A) && !A.loaded && this.resolveImgInstance(A);
  }
  resolveImgInstance(t) {
    t.loadImg().then(() => {
      for (let [A, e] of this.imgPoolList)
        t.el == A && (e.loaded = !0);
    }).catch(() => {
    });
  }
  findScrollParent(t) {
    if (!this.isScrollParent)
      return !1;
    let A = t.parentNode;
    for (; A; ) {
      if (getComputedStyle(A).getPropertyValue("overflow") == "scroll" || getComputedStyle(A).getPropertyValue("overflow") == "auto" || getComputedStyle(A).getPropertyValue("overflow-x") == "scroll" || getComputedStyle(A).getPropertyValue("overflow-x") == "auto" || getComputedStyle(A).getPropertyValue("overflow-y") == "scroll" || getComputedStyle(A).getPropertyValue("overflow-y") == "auto")
        return this.scrollParent = A, !0;
      A = A.parentNode;
    }
    return !1;
  }
}
const m = {
  install(l, t = {}) {
    const A = new E(t);
    console.log(l), l.directive("lazy", {
      mounted: A.mounted.bind(A)
    });
  }
};
export {
  m as default
};
