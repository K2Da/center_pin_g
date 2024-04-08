<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'Topic', 'Pokémon UNITE大会結果収集サイト', 'site');
</script>

<template>
  <h1>トピック</h1>
  <div style="margin: 8px">
    <TopicList />
  </div>
</template>
