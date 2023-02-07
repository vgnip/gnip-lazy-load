<template>
  <div class="rootu">
    <div class="sub-com">{{ x }}-{{ y }}</div>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
      Data loaded:
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>

    <p>姓名：{{ obj.name }}</p>
    <p>年龄：{{ obj.age }}</p>
    <p>{{ computedAge }}</p>
    <button @click="routeGo">路由跳转</button>
  </div>
</template>

<script setup>
import { useMouseMove, useFetch } from "./useMouseMove";
const [obj, x, y, router, route] = useMouseMove();
const { data, error, computedAge } = useFetch("", obj);

const routeGo = () => {
  console.log(route.fullPath);
  router.push("/home");
};
</script>
