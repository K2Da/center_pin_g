<script setup lang="ts">
import type { TournamentDetail } from '~/api/TournamentDetail';
import type { TournamentTeam } from '~/api/Tournaments';

type Props = {
  detail: TournamentDetail;
};
const { detail } = defineProps<Props>();

const sortByRank = (teams: TournamentTeam[]) =>
  teams.sort((a: TournamentTeam, b: TournamentTeam) => {
    let a_rank = a.team_rank;
    let b_rank = b.team_rank;
    if (a_rank === 0) a_rank = 99999;
    if (b_rank === 0) b_rank = 99999;

    let r = a_rank - b_rank;
    if (r !== 0) return r;

    let l = (a?.lose || 0) - (b?.lose || 0);
    if (l !== 0) return l;

    return (a?.win || 0) - (b?.win || 0);
  });
</script>

<template>
  <div
    class="tc py-4 lg:py-1"
    v-for="(result, i) of sortByRank(detail.teams)"
    :key="result.team_key"
    :class="containerClass(i)"
  >
    <div class="text-left lg:text-right w-[4em]">
      <ResultRank :rank="result.team_rank" />.
    </div>
    <div class="w-[24em]">
      <TeamName
        :name="result.team_name"
        :currentName="result.team_current_name"
      />
    </div>
    <div class="w-[6em]">
      <template v-if="result.win !== 0 || result.lose !== 0">
        {{ result.win }}
        <span class="text-sm">勝</span>
        {{ result.lose }}
        <span class="text-sm">敗</span>
      </template>
      <template v-else>-</template>
    </div>
    <div class="w-[48em]">
      <PlayersLine :names="result.members" />
    </div>
  </div>
</template>
