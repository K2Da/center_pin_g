<script setup lang="ts">
const route = useRoute();
setPage(
  route.path,
  '大会',
  'Pokémon UNITE大会一覧',
);
const statsStore = useStatsStore();
const { tournaments } = storeToRefs(statsStore);

const displayTournaments = computed(() => {
  return tournaments.value;
});
</script>

<template>
  <div>
    <h1>大会</h1>
    <TournamentList :group="displayTournaments" />
  </div>
</template>
