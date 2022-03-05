<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navList = [
  {
    id: 'demo',
    label: 'Demo',
    href: '/demo',
  },
  {
    id: 'sub-demo',
    label: 'Sub Demo',
    href: '/sub-demo',
  },
];

const navClick = (item: NavItem) => {
  router.push(item.href);
};
</script>
<template>
  <div class="app-header">
    <img class="logo" alt="openEuler logo" src="../assets/logo.png" />
    <div class="nav-list">
      <div v-for="item in navList" :key="item.id" class="nav-item" @click="navClick(item)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.app-header {
  display: flex;
  height: 60px;
  padding: 8px 24px;
  align-items: center;
  box-shadow: 0 2px 10px rgba($color: #000000, $alpha: 0.1);
}
.logo {
  height: 80%;
}
.nav-list {
  display: flex;
  width: 100%;
  padding: 0 48px;
  .nav-item {
    margin: 0 24px;
    cursor: pointer;
    &:hover {
      color: #002ea7;
    }
  }
}
</style>
