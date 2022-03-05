<script setup lang="ts">
import { queryCourse } from '@/api/demo';
import { useCounter } from '@/stores/counter';
import SvgIcon from '@/components/SvgIcon.vue';

const counter = useCounter();

queryCourse();
</script>
<template>
  <div class="page-demo">
    <section>
      <h1>Vue 3 + TypeScript + Vite + Scss + Vue Router + Pinia + Axios</h1>
    </section>
    <section>
      <h3>IDE</h3>
      <div>
        <p>
          Recommended:
          <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        </p>
      </div>
    </section>
    <section>
      <h3>Docs</h3>
      <div>
        <p>
          <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
          |
          <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
          |
          <a href="https://router.vuejs.org/zh/guide/" target="_blank">Vue Router Docs</a>
          |
          <a href="https://pinia.vuejs.org/introduction.html" target="_blank">Pinia Docs</a>
        </p>
      </div>
    </section>
    <section>
      <h3>状态管理</h3>
      <div>
        <div>count value: {{ counter.count }} <button @click="counter.increment">increment</button></div>
      </div>
    </section>
    <section>
      <h3>图标</h3>
      <div>
        <SvgIcon class="icon" name="alert-circle"></SvgIcon>
        <SvgIcon class="icon" name="plus"></SvgIcon>
        <SvgIcon class="icon" name="x"></SvgIcon>
        <SvgIcon class="icon" name="arrow-right"></SvgIcon>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.page-demo {
  padding: 60px;

  section {
    margin-bottom: 32px;
    h3 {
      margin-bottom: 12px;
    }
  }

  h1 {
    font-size: 24px;
  }
  h3 {
    font-size: 18px;
  }
  p {
    margin: 8px 0;
  }
  a {
    color: #002ea7;
    &:hover {
      color: #2e63e7;
    }
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
  button {
    cursor: pointer;
    margin-left: 24px;
    padding: 4px 8px;
    background-color: transparent;
    outline: none;
    border: 1px solid #999;
  }
  .icon {
    font-size: 24px;
    margin: 8px;
    color: #666;
    cursor: pointer;
    &:hover {
      color: #002ea7;
    }
  }
}
</style>
