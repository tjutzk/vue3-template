<template>
  <el-container class="layout_container">
    <el-aside class="layout_aside">
      <side-bar
        background-color="#2d3a4b"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :menuList="menuRoutes"
        :default-active="activeMenu"
      ></side-bar>
    </el-aside>
    <el-container>
      <el-header class="layout_header">这是一个标题</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import sideBar from './components/sideBar/index.vue';
import { computed } from 'vue';
import { menuRoutes } from '@/router';
import { useRoute } from 'vue-router';

const activeMenu = computed(() => {
  const route = useRoute();
  // 子页面直接返回其父级的路由
  if (route.meta.parentPapePath) {
    return route.meta.parentPapePath;
  }
  // 父级直接返回
  return route.path;
});
</script>

<style scoped lang="scss">
.layout_container {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  .layout_aside {
    width: 240px;
    background-color: #2d3a4b;
  }
  .layout_header {
    height: 40px;
    border-bottom: 1px solid rgb(224, 228, 239);
  }
}
</style>
