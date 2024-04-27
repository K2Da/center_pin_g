<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'プレイヤー一覧', 'Pokémon UNITE大会プレイヤー一覧');
</script>

<template>
  <div>
    <h1>プレイヤー</h1>
    <PlayerList />
  </div>
</template>
