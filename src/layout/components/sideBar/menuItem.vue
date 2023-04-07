<template>
  <template
  v-if="menuInfo.children">
    <el-sub-menu :index="resolvePath(menuInfo.path)">
      <template #title>
        <span>{{menuInfo.meta.title}}</span>
      </template>
      <menu-item 
      v-for="item in menuInfo.children"
      :key="item.path"
      :menuInfo="item"
      :rootRoute="resolvePath(menuInfo.path)">
      </menu-item>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :key="menuInfo.path" :index="resolvePath(menuInfo.path)">
      <template #title>
        <span>{{menuInfo.meta.title}}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router';
import { defineProps, computed } from 'vue';

const props = defineProps({
  rootRoute:{
    type:String,
    default:''
  },
  menuInfo:{
    type:Object,
    default:()=>{
      return {} as RouteRecordRaw
    }
  }
})
const resolvePath = computed(()=>{
  return (routePath:string)=>{
    return `${props.rootRoute ? `${props.rootRoute}/` : ''}`+routePath;
  }
})
</script>

<style scoped>

</style>