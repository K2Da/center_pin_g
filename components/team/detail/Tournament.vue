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

const toggleMatches = () => {
  open.value = !open.value;
};

const isOpen = computed(() => open.value || props.openAll);
const formatNum = (t: null | number) => (t == null ? '-' : t.toLocaleString());
</script>

<template>
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
  <div class="w-[24em]">{{ tournament.name }}</div>
  <div class="w-[36em]">
    <PlayersLine :names="tournament.player_list" />
  </div>
  <div class="w-[5em]">
    <template v-if="tournament.rating != null">
      <span class="muted"
        ><UIcon
          name="i-material-symbols-show-chart"
          style="vertical-align: -1px"
      /></span>
      {{ formatNum(tournament.rating) }}
    </template>
  </div>

  <div class="w-[6em]">
    <button
      v-if="!props.openAll"
      :class="[
        open ? 'bg-green-700' : 'bg-sky-800',
        'rounded',
        'p-1',
        'pb-0',
        'm-0',
        'muted',
      ]"
      @click="toggleMatches"
    >
      試合
    </button>
  </div>
  <TeamDetailMatches
    :detail="detail"
    :tournament="tournament"
    :index="i"
    :show="isOpen"
  />
</template>
