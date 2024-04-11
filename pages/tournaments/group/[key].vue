<script setup lang="ts">
import type { Ref } from 'vue';
import type { TournamentIndex } from '~~/api/Tournaments';
import { fetchTournamentGroup } from '~~/utils/fetches';

const route = useRoute();
const group: Ref<TournamentIndex | null> = ref(null);

const load = async () => {
  await fetchTournamentGroup((route.params.key || '').toString()).then(
    (data: TournamentIndex) => {
      group.value = data;
    },
  );
};

setPage(route.path);
await load();
</script>

<template>
  <div v-if="group">
    <h1>{{ group.group?.name }}</h1>
    <TournamentList :group="group" />
  </div>
</template>
