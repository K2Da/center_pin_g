<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'Topic', 'Pokémon UNITE大会結果、話題収集サイト', true);
</script>

<template>
  <h1 class="mb-2">トピック</h1>
  <TopicList />
</template>
