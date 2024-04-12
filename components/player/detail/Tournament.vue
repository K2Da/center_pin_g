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
  <div class="w-[2em] pl-2">
    <ToggleButton
      :id="`tournaments-toggle-${i}`"
      :value="false"
      @toggle="toggleMatches"
    />
  </div>
  <div class="w-[32em]">
    <TournamentName
      :name="tournament.tournament_name"
      :tournamentKey="tournament.tournament_key"
      class="font-bold lg:font-normal"
    />
  </div>
  <div class="text-left w-[8em]">
    <DateTime :date="tournament.tournament_date" :spacing="true" />
  </div>
  <div class="text-right w-[4em] pr-1">
    <ResultRank :rank="tournament.team_result" />
  </div>
  <div class="w-[18em] lgnowrap">
    <TeamName
      :name="tournament.team_name"
      :currentName="tournament.team_current_name"
    />
  </div>
  <div class="w-[34em]">
    {{ tournament.member_name }}, <PlayersLine :names="tournament.mate_list" />
  </div>
  <div class="w-[16em]">
    <span class="text-sm">📈</span> {{ formatNum(tournament.rating) }}
    <span class="text-sm"
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
