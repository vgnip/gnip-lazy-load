export default function (el) {
    let parent = el.parentNode;
    while (parent) {
      if (parent instanceof HTMLDocument) {
        return window;
      }
      if (/(scroll)|(auto)/.test(getComputedStyle(parent)["overflow"])) {
        return parent;
      }
      parent = parent.parentNode;
    }
    return window;
  }