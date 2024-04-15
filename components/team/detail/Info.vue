<script setup lang="ts">
import type { ComputedRef } from 'vue';
import type { TeamDetailView } from '~/api/TeamDetail';
import type { Result } from '~/types/result';
type Props = { detail: TeamDetailView };
const { detail } = defineProps<Props>();

const statsStore = useStatsStore();
const { tournaments } = storeToRefs(statsStore);

const resultsSum: ComputedRef<Result | undefined> = computed(() => {
  if (detail) {
    return countTournamentResult(
      detail.matches.map((m) => ({ key: m.tnmt_key, wl: m.wl === true })),
      detail.tournaments.map((t) => ({
        key: t.tournament_key,
        result: t.result,
      })),
      tournaments.value,
    );
  }
});

const sortedPlayers = (
  players: string[],
  playerStats: Record<string, { tournament: number; count: number }>,
) => {
  return players
    .slice()
    .sort((a, b) => playerStats[b].count - playerStats[a].count);
};
</script>
<template>
  <ul>
    <li v-if="detail.info?.aliases?.length > 0">
      <span class="muted">大会登録チーム名: </span>
      {{ detail.info?.aliases.join(', ') }}
    </li>
    <li>
      <span class="muted">活動期間: </span>
      <DateSpan
        :date1="detail.team.first_tournament_date"
        :date2="detail.team.latest_tournament_date"
      />
    </li>
    <ClientOnly>
      <ResultsSum :resultsSum="resultsSum" />
    </ClientOnly>
    <li>
      <span class="muted">メンバー(出場回数): </span>
      <span
        v-for="(p, i) of sortedPlayers(detail.players, detail.playerStats)"
        :key="p"
      >
        <template v-if="i !== 0">, </template>
        <PlayerName :name="p" /><span class="muted"
          >({{ detail.playerStats[p].count }})</span
        >
      </span>
    </li>
  </ul>
</template>
