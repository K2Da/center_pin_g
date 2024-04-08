<script setup lang="ts">
import type { TeamDetailView } from '~/api/TeamDetail';
type Props = { detail: TeamDetailView; };
const open = ref(false);
const { detail } = defineProps<Props>();

const toggleAllMatches = (value: boolean) => { open.value = value; };
</script>

<template>
  <div style="padding: 0 0 0.2em 0.5em">
    <ToggleButton id="tournaments-all-toggle" :value="false" @toggle="toggleAllMatches" /> <span>All</span>
  </div>

  <div class="tc"
     v-for="(tournament, i) of detail.tournaments"
     :key="tournament.tournament_key"
     :class='containerClass(i)'>
    <TeamDetailTournament :tournament="tournament" :detail="detail" :i="i" :openAll="open" />
  </div>
</template>
