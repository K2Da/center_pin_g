<script setup lang="ts">
const route = useRoute();
import type { Ref } from 'vue';
import type { TeamDetail, TeamDetailView } from '~/api/TeamDetail';

const detail: Ref<TeamDetailView|null> = ref(null);

const load = () => {
  $fetch(`${flare_host()}/team/${route.query.m}`)
    .then((data) => { detail.value = teamToView(data as TeamDetail); });
};

watch(
  () => route.query,
  async () => {
    detail.value = null;
    await load();
  },
);

setPage(route.path);

if (process.client) load();
</script>

<template>
  <div>
    <ClientOnly v-if="detail">
      <PageHead :title="`${detail.team.name}: 編成`" />
      <h1>{{ detail.team.name }}</h1>
      <TeamNaviLink current="member" :m="route.query.m" />

      <TeamDetailMember :detail="detail" />
    </ClientOnly>
  </div>
</template>
