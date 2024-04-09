<script setup lang="ts">
// SSG、SSR時にすべてのデータをロードしておく
// Clientでは一部の大きいデータのみ全体をロードし直す
const statsStore = useStatsStore();
await statsStore.fetch();
</script>

<template>
  <div>
    <NaviLink />
    <NuxtPage />
  </div>
</template>
