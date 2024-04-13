<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'ログ', '');
</script>

<template>
  <ClientOnly>
    <h1>管理</h1>
    <ul>
      <li>API: {{ flare_host() }}</li>
    </ul>
  </ClientOnly>
</template>
