<script setup lang="ts">
import type { TeamDetailView, TeamTournament } from '~/api/TeamDetail';

type Props = {
  detail: TeamDetailView;
  tournament: TeamTournament;
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
    <ResultRank :rank="tournament.result" />
  </div>
  <div style="width: 32em">
    <TournamentName
      :name="tournament.tournament_name"
      :tournamentKey="tournament.tournament_key"
    />
  </div>
  <div style="width: 24em">
    {{ tournament.name }}
  </div>
  <div style="width: 36em">
    <PlayersLine :names="tournament.player_list" />
  </div>
  <TeamDetailMatches
    :detail="detail"
    :tournament="tournament"
    :index="i"
    :show="isOpen"
  />
</template>
