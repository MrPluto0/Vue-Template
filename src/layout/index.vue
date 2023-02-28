<template>
  <Header />
  <div class="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.name" />
      </keep-alive>
    </router-view>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import Header from "./header.vue";
import Footer from "./footer.vue";
</script>
