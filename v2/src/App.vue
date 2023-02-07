<template>
  <div id="app">
    <ul class="lazy-loading-wrap">
      <li class="item" v-for="item in imgList" :key="item.id">
        <h2>{{ item.title }}</h2>
        <img v-lazy="item.src" :alt="item.title" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      imgList: [],
    };
  },
  mounted() {
    this.getImgs();
  },
  methods: {
    getImgs() {
      axios.get("api/getImg").then((res) => {
        this.imgList = res.data;
      });
    },
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  width: 100%;
  height: 4rem;
}
.item {
  h2 {
    font-size: 0.4rem;
    line-height: 0.8rem;
  }
}
.lazy-loading-wrap {
  // overflow: auto;
  // height: 50vh;
}
</style>
