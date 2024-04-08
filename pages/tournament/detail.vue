<script setup lang="ts">
import type { Ref } from 'vue';
import type { TournamentDetail } from '~/api/TournamentDetail';
import { fetchTournamentDetail } from '~~/utils/fetches';

const route = useRoute();
const detail: Ref<TournamentDetail | null> = ref(null);

const load = async () => {
  detail.value = null;
  detail.value = await fetchTournamentDetail((route.query.t || '').toString());
};

setPage(route.path);

watch(
  () => route.query,
  async () => {
    detail.value = null;
    await load();
  },
);
await load();
</script>

<template>
  <div v-if="detail">
    <PageHead :title="detail.tournament.name" />

    <h1>{{ detail.tournament.name }}</h1>
    <TournamentDetailInfo :detail="detail" />
    <TournamentDetailResult :detail="detail" />
  </div>
</template>
