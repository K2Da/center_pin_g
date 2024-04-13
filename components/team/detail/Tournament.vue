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
  <div class="w-[2em] pl-2">
    <ToggleButton
      :id="`tournaments-toggle-${i}`"
      :value="false"
      @toggle="toggleMatches"
    />
  </div>
  <div class="w-[32em] font-bold lg:font-normal">
    <TournamentName
      :name="tournament.tournament_name"
      :tournamentKey="tournament.tournament_key"
    />
  </div>
  <div class="text-left w-[5em] lg:text-right pr-1">
    <ResultRank :rank="tournament.result" />
  </div>
  <div class="text-left w-[8em]">
    <DateTime :date="tournament.tournament_date" :spacing="true" />
  </div>
  <div class="w-[24em]">
    <TeamName :name="tournament.name" :currentName="tournament.name" />
  </div>
  <div class="w-[36em]">
    <PlayersLine :names="tournament.player_list" />
  </div>
  <TeamDetailMatches
    :detail="detail"
    :tournament="tournament"
    :index="i"
    :show="isOpen"
  />
</template>
