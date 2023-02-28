<template>
  <div>
    <div class="content">This is Home Page</div>
    <HelloWorld />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<style scoped lang="less">
.content {
  color: @main-color;
}
</style>
