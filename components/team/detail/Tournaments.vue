<script setup lang="ts">
import type { TeamDetailView } from '~/api/TeamDetail';
type Props = { detail: TeamDetailView };
const open = ref(false);
const { detail } = defineProps<Props>();

const toggleAllMatches = (value: boolean) => {
  open.value = value;
};
</script>

<template>
  <div class="pt-0 pb-1 pl-2">
    <ToggleButton
      id="tournaments-all-toggle"
      :value="false"
      @toggle="toggleAllMatches"
    />
    <span class="ml-2">All</span>
  </div>

  <div
    class="py-3 lg:py-1 tc"
    v-for="(tournament, i) of detail.tournaments"
    :key="tournament.tournament_key"
    :class="containerClass(i)"
  >
    <TeamDetailTournament
      :tournament="tournament"
      :detail="detail"
      :i="i"
      :openAll="open"
    />
  </div>
</template>
