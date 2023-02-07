import { ref, onMounted, onUnmounted, reactive, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
export const useMouseMove = function () {
  const router = useRouter();
  const route = useRoute();
  console.log(router, route);
  const x = ref(0);
  const y = ref(0);
  const obj = reactive({
    name: "小",
    age: 12,
  });
  const update = function (event) {
    x.value = event.pageX;
    y.value = event.pageY;
    obj.age++;
  };
  useEventListener(window, "mousemove", update);

  return [obj, x, y, router, route];
};
function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
export function useFetch(url, reactiveObj) {
  const data = ref(null);
  const error = ref(null);
  setTimeout(() => {
    data.value = "请求成功";
  }, 3000);
  let computedAge = computed(() => "计算属性年龄：" + reactiveObj.age);
  return { data, error, computedAge };
}
