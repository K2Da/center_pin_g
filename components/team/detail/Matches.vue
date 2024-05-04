<script setup lang="ts">
import type { TeamDetailView, TeamTournament } from '~/api/TeamDetail';
type Props = {
  detail: TeamDetailView;
  tournament: TeamTournament;
  index: number;
  show: boolean;
};
const { detail, tournament, index, show } = defineProps<Props>();
const matches = detail.matches.filter(
  (m) => m.tnmt_key === tournament.tournament_key,
);
</script>

<template>
  <div
    v-if="show"
    :class="[
      'border',
      'mx-1',
      'mt-1',
      'mb-2',
      'px-2',
      'pt-2',
      'pb-1',
      'rounded',
      'w-full',
    ]"
  >
    <h5>ラウンド</h5>
    <div
      v-for="(match, i) of matches"
      :key="`${match.bracket}_${match.round}`"
      :class="['border-t', 'pt-2', 'px-2', 'w-full', 'flex', 'flex-wrap']"
    >
      <div class="w-[8em]">
        {{ match.bracket }}
        <span class="muted">r: </span>{{ match.round }}
      </div>
      <div class="text-center w-[2em]">
        <MatchResult :win="match.wl" />
      </div>
      <div class="text-center w-[4em]">
        {{ match.score_text }}
      </div>
      <div class="w-[32em]">
        <TeamName
          :name="match.opponent_team_name"
          :currentName="match.opponent_team_current_name"
        />
        (<ResultRank :rank="match.opponent_team_rank" />)
      </div>
      <div class="w-[48em]">
        <PlayersLine :names="match.opponents_list" />
      </div>
    </div>
  </div>
</template>
