<script setup lang="ts">
import type { PlayerDetail, PlayerTournament } from '~/api/PlayerDetail';
type Props = {
  detail: PlayerDetail;
  tournament: PlayerTournament;
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
    class="stc"
    v-for="(match, i) of matches"
    v-show="show"
    :key="`${match.bracket}_${match.round}`"
    :class="[subContainerClass(i, index, matches.length), 'ml-[0.5em]']"
    style="width: calc(100% - 0.5em)"
  >
    <div class="w-[9em]">
      {{ match.bracket }}
      <span class="muted">r: </span>{{ match.round }}
    </div>
    <div class="text-center w-[2em]">
      <MatchResult :win="match.wl" />
    </div>
    <div class="text-center w-[4em]">
      {{ match.score_text }}
    </div>
    <div class="pl-1 w-[24em]">
      <TeamName
        :name="match.opponent_team_name"
        :currentName="match.opponent_team_current_name"
      />
    </div>
    <div class="w-[4em]">
      <ResultRank :rank="match.opponent_team_rank" />
    </div>
    <div class="w-[48em]">
      <PlayersLine :names="match.opponents_list" />
    </div>
  </div>
</template>
