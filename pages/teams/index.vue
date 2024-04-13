<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'チーム一覧', 'Pokémon UNITE大会チーム一覧');
</script>

<template>
  <div>
    <h1>チーム</h1>
    <TeamList />
  </div>
</template>
