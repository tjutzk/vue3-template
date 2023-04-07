<template>
  <el-menu
  :attrs="attrs">
    <menu-item
    v-for="item in menuList"
    :key="item.path"
    :menuInfo="item"
    rootRoute="">
    </menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router';
import menuItem from './menuItem.vue'
import { defineProps, useAttrs } from 'vue';

const attrs = useAttrs()
defineProps({
  menuList:{
    type:Array<RouteRecordRaw>,
    default:()=>[]
  }
})

</script>

<style scoped>

</style>