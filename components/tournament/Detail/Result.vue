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
    class="tc"
    v-for="(result, i) of sortByRank(detail.teams)"
    :key="result.team_key"
    :class="containerClass(i)"
  >
    <div class="tar" style="width: 4em">
      <ResultRank :rank="result.team_rank" />.
    </div>
    <div style="width: 24em">
      <TeamName
        :name="result.team_name"
        :currentName="result.team_current_name"
      />
    </div>
    <div style="width: 5em">
      <template v-if="result.win !== 0 || result.lose !== 0">
        {{ result.win }}
        <span class="muted">勝</span>
        {{ result.lose }}
        <span class="muted">敗</span>
      </template>
      <template v-else>-</template>
    </div>
    <div style="width: 48em">
      <PlayersLine :names="result.members" />
    </div>
  </div>
</template>
