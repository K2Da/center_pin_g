<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'Topic', 'Pokémon UNITE大会結果、話題収集サイト', true);
</script>

<template>
  <h1>トピック</h1>
  <div class="m-2">
    <TopicList />
  </div>
</template>
