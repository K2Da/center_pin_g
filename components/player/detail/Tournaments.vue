<script setup lang="ts">
import type { PlayerDetail } from '~/api/PlayerDetail';
type Props = { detail: PlayerDetail };
const { detail } = defineProps<Props>();

const open = ref(false);

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
    <span class="ml-2">すべてのラウンド詳細を開く</span>
  </div>

  <div
    v-for="(tournament, i) of detail.tournaments"
    :key="tournament.tournament_key"
    :class="[
      containerClass(i),
      'w-full',
      'flex',
      'flex-wrap',
      'py-3',
      'px-2',
      'lg:py-2',
      'lg:pb-0',
      'border-t-2',
      'lg:border-t',
    ]"
  >
    <PlayerDetailTournament
      :tournament="tournament"
      :detail="detail"
      :i="i"
      :openAll="open"
    />
  </div>
</template>
