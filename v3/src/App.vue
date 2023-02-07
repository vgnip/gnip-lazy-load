<script setup>
import { reactive } from "@vue/reactivity";
import Image1 from "./assets/images/01.webp";
import Image2 from "./assets/images/02.webp";
import Image3 from "./assets/images/03.webp";
import Image4 from "./assets/images/04.webp";
const list = reactive([
  {
    index: 0,
    src: Image1,
  },
  {
    index: 1,
    src: Image2,
  },
  {
    index: 2,
    src: Image3,
  },
  {
    index: 3,
    src: Image4,
  },
]);
</script>

<template>
  <header>
    <div class="wrapper">
      <ul>
        <li v-for="item in list" :key="item.index">
          <img v-lazy="item.src" :alt="item.index" />
        </li>
        <li v-for="item in list" :key="item.index">
          <img v-lazy="item.src" :alt="item.index" />
        </li>
        <li v-for="item in list" :key="item.index">
          <img v-lazy="item.src" :alt="item.index" />
        </li>
      </ul>
    </div>
  </header>
</template>

<style>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
li {
  height: 400px;
  
}
img{
  width: 400px;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<!-- 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
