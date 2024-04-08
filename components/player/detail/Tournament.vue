<script setup lang="ts">
import type { PlayerDetail, PlayerTournament } from '~/api/PlayerDetail';

type Props = {
  detail: PlayerDetail;
  tournament: PlayerTournament;
  i: number;
  openAll: boolean;
};
const props = defineProps<Props>();
const { detail, tournament, i } = props;

const open = ref(false);

const toggleMatches = (value: boolean) => {
  open.value = value;
};

const isOpen = computed(() => open.value || props.openAll);

const formatNum = (t: null | number) => (t == null ? '-' : t.toLocaleString());
</script>

<template>
  <div style="width: 2em; padding-left: 0.5em">
    <ToggleButton
      :id="`tournaments-toggle-${i}`"
      :value="false"
      @toggle="toggleMatches"
    />
  </div>
  <div class="tal" style="width: 7em">
    <DateTime :date="tournament.tournament_date" :spacing="true" />
  </div>
  <div class="tar" style="width: 3em; padding-right: 4px">
    <ResultRank :rank="tournament.team_result" />
  </div>
  <div style="width: 32em">
    <TournamentName
      :name="tournament.tournament_name"
      :tournamentKey="tournament.tournament_key"
    />
  </div>
  <div style="width: 18em">
    <TeamName
      :name="tournament.team_name"
      :currentName="tournament.team_current_name"
    />
  </div>
  <div style="width: 34em">
    {{ tournament.member_name }}, <PlayersLine :names="tournament.mate_list" />
  </div>
  <div style="width: 14em">
    <span class="muted">📈</span> {{ formatNum(tournament.rating) }}
    <span class="muted"
      >({{ formatNum(tournament.rank) }}位 /
      {{ formatNum(tournament.total) }}人)</span
    >
  </div>
  <PlayerDetailMatches
    :detail="detail"
    :tournament="tournament"
    :index="i"
    :show="isOpen"
  />
</template>
