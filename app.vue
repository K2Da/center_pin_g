<script setup lang="ts">
// SSG、SSR時にすべてのデータをロードしておく
// Clientでは一部の大きいデータのみ全体をロードし直す
const statsStore = useStatsStore();
await statsStore.fetch();
</script>

<template>
  <div class="p-1 dark">
    <NaviLink />
    <NuxtPage />
  </div>
</template>
