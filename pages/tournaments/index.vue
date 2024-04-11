<script setup lang="ts">
const route = useRoute();
setPage(route.path, '大会', 'Pokémon UNITE大会一覧');
const statsStore = useStatsStore();

onServerPrefetch(async () => {
  await statsStore.fetchTournamentsOnSSR();
});
const { tournaments } = storeToRefs(statsStore);
</script>
<template>
  <div>
    <h1>大会</h1>
    <TournamentList :group="tournaments" />
  </div>
</template>
