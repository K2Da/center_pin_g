<script setup lang="ts">
import type { ComputedRef, Ref } from 'vue';
import type { PlayerDetail } from '~/api/PlayerDetail';
import type { Result } from '~/types/result';

const statsStore = useStatsStore();
const { tournaments } = storeToRefs(statsStore);
const route = useRoute();
const detail: Ref<PlayerDetail | null> = ref(null);

const load = async () => {
  detail.value = null;
  detail.value = await fetchPlayerDetail((route.query.p || '').toString());
};

const resultsSum: ComputedRef<Result | undefined> = computed(() => {
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
await load();
loadOnQueryChanged(load);
</script>

<template>
  <div v-if="detail">
    <PageHead :title="`${detail.player.collated_name}: 戦績`" />
    <h1 :class="ratingClass(detail.player.collated_name)">
      {{ detail.player.collated_name }}
    </h1>
    <PlayerNaviLink current="detail" :p="route.query.p" />
    <PlayerDetailInfo :detail="detail" :resultsSum="resultsSum" />

    <div v-if="detail.tournaments.length > 0">
      <h2>大会結果</h2>
      <PlayerDetailTournaments :detail="detail" />
    </div>
  </div>
</template>
