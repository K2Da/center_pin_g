<script setup lang="ts">
import type { Ref } from 'vue';
import type { TournamentDetail } from '~/api/TournamentDetail';
import { fetchTournamentDetail } from '~~/utils/fetches';

const route = useRoute();
const detail: Ref<TournamentDetail|null> = ref(null);

const load = () => {
  fetchTournamentDetail((route.query.t || '').toString())
    .then((data: TournamentDetail) => { detail.value = data; });
};

setPage(route.path);

watch(
  () => route.query,
  async () => {
    detail.value = null;
    await load();
  },
);


if (process.client) load();
</script>

<template>
  <div>
    <ClientOnly v-if="detail">
      <PageHead :title="detail.tournament.name" />

      <h1>{{ detail.tournament.name }}</h1>
      <TournamentDetailInfo :detail="detail" />
      <TournamentDetailResult :detail="detail" />
    </ClientOnly>
  </div>
</template>
