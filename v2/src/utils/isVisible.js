export default function (el, scrollParent, preLoad) {
  return (
    el.getBoundingClientRect().top * preLoad <
    (scrollParent instanceof HTMLDocument
      ? document.documentElement.clientHeight
      : scrollParent.clientHeight)
  );
}
