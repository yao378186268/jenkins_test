<template>
  <div class="home">
    <el-button @click="testFn">按钮</el-button>
    <el-button @click="testFn2">按钮2</el-button>
  </div>
</template>

<script setup lang="ts">
import { testApi, test2Api } from '@/api';

const testFn = async () => {
  let res = await testApi();
  console.log(res);
};

const testFn2 = async () => {
  let res = await test2Api();
  console.log(res);
};
</script>

<style scoped lang="scss"></style>
