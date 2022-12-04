<template>
  <div>
    <div class="header">Header</div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.name" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.header {
  color: @main-color;
}
</style>
