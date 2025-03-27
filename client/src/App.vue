<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="header">
    <div class="tasky-image">
      <img src="./assets/tasky.svg" />
    </div>
    <nav>
      <RouterLink to="/">Todo</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
.header {
  margin-bottom: 10px;
}

.tasky-image {
  height: 50px;
  width: 50px;
}
</style>
