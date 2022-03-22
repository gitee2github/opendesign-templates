<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <router-view />
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
