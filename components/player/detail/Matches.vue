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
    :class="subContainerClass(i, index, matches.length)"
    style="margin-left: 0.5em; width: calc(100% - 0.5em)"
  >
    <div style="width: 9em">
      {{ match.bracket }}
      <span class="muted">r: </span>{{ match.round }}
    </div>
    <div class="text-center" style="width: 2em">
      <MatchResult :win="match.wl" />
    </div>
    <div class="text-center" style="width: 4em">
      {{ match.score_text }}
    </div>
    <div style="width: 24em" class="pl-1">
      <TeamName
        :name="match.opponent_team_name"
        :currentName="match.opponent_team_current_name"
      />
    </div>
    <div style="width: 4em">
      <ResultRank :rank="match.opponent_team_rank" />
    </div>
    <div style="width: 48em">
      <PlayersLine :names="match.opponents_list" />
    </div>
  </div>
</template>
