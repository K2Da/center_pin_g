<script setup lang="ts">
import type { TeamDetailView } from '~/api/TeamDetail';
type Props = { detail: TeamDetailView };
const open = ref(false);
const { detail } = defineProps<Props>();

const toggleAllMatches = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="pt-0 pb-1 pl-2">
    <button
      :class="[
        open ? 'bg-green-700' : 'bg-sky-800',
        'rounded',
        'p-1',
        'pb-0',
        'm-0',
        'muted',
      ]"
      @click="toggleAllMatches"
    >
      全ての試合表示
    </button>
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
    <TeamDetailTournament
      :tournament="tournament"
      :detail="detail"
      :i="i"
      :openAll="open"
    />
  </div>
</template>
