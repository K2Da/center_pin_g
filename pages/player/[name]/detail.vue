<script setup lang="ts">
const statsStore = useStatsStore();
const { tournaments } = storeToRefs(statsStore);
const route = useRoute();
setPage(
  route.path,
  `Player ${route.params.name}: 戦績`,
  `${route.params.name}選手のポケモンユナイトにおける戦績等をまとめたページ`,
);
const detail = await fetchPlayer(route.params.name as string);
const resultsSum = computed(() => {
  if (detail.value && process.client) {
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
</script>

<template>
  <div v-if="detail">
    <h1>
      {{ detail.player.collated_name }}
    </h1>
    <PlayerNaviLink current="detail" :name="route.params.name" />
    <PlayerDetailInfo :detail="detail" :resultsSum="resultsSum" />

    <div v-if="detail.tournaments.length > 0">
      <h2 class="mb-2">大会結果</h2>
      <PlayerDetailTournaments :detail="detail" />
    </div>
  </div>
</template>
