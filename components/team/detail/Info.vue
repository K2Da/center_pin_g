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
  <div class="flex" v-if="detail.info?.aliases?.length > 0">
    <div class="w-24 divhead">大会登録チーム名</div>
    <div class="pl-2 divdata">
      {{ detail.info?.aliases.join(', ') }}
    </div>
  </div>
  <div class="flex">
    <div class="w-24 divhead">活動期間</div>
    <div class="pl-2 divdata">
      <DateSpan
        :date1="detail.team.first_tournament_date"
        :date2="detail.team.latest_tournament_date"
      />
    </div>
  </div>
  <ResultsSum :resultsSum="resultsSum" />
  <div class="flex">
    <div class="w-24 divhead">メンバー<br />(出場回数)</div>
    <div class="pl-2 divdata">
      <span
        v-for="(p, i) of sortedPlayers(detail.players, detail.playerStats)"
        :key="p"
      >
        <template v-if="i !== 0">, </template>
        <PlayerName :name="p" /><span class="muted"
          >({{ detail.playerStats[p].count }})</span
        >
      </span>
    </div>
  </div>
</template>
