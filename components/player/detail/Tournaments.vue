<script setup lang="ts">
import type { PlayerDetail } from '~/api/PlayerDetail';
type Props = { detail: PlayerDetail; };
const { detail } = defineProps<Props>();

const open = ref(false);

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
    <PlayerDetailTournament :tournament="tournament" :detail="detail" :i="i" :openAll="open" />
  </div>
</template>
