<script setup lang="ts">
const statsStore = useStatsStore();
const { tournaments } = storeToRefs(statsStore);
const route = useRoute();

const detail = await fetchPlayer(route.params.name);
const resultsSum = computed(() => {
  if (detail.value) {
    return countTournamentResult(
      detail.value.matches.map((m) => ({ key: m.tnmt_key, wl: m.wl === true })),
      detail.value.tournaments.map((t) => ({
        key: t.tournament_key,
        result: t.team_result,
      })),
      tournaments.value,
    );
  }
});

setPage(route.path);
</script>

<template>
  <div v-if="detail && resultsSum">
    <PageHead :title="`${detail.player.collated_name}: 戦績`" />
    <h1 :class="ratingClass(detail.player.collated_name)">
      {{ detail.player.collated_name }}
    </h1>
    <PlayerNaviLink current="detail" :name="route.params.name" />
    <PlayerDetailInfo :detail="detail" :resultsSum="resultsSum" />

    <div v-if="detail.tournaments.length > 0">
      <h2>大会結果</h2>
      <PlayerDetailTournaments :detail="detail" />
    </div>
  </div>
</template>
