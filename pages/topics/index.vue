<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'Topic', 'Pokémon UNITE大会結果収集サイト', 'site');
</script>

<template>
  <h1>トピック</h1>
  <div class="m-2">
    <TopicList />
  </div>
</template>
