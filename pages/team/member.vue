<script setup lang="ts">
const route = useRoute();
import type { Ref } from 'vue';
import type { TeamDetail, TeamDetailView } from '~/api/TeamDetail';

const detail: Ref<TeamDetailView | null> = ref(null);

const load = async () => {
  const { data } = await useFetch(`${flare_host()}/team/${route.query.m}`);
  detail.value = teamToView(data.value);
};

watch(
  () => route.query,
  async () => {
    detail.value = null;
    await load();
  },
);

setPage(route.path);
await load();
</script>

<template>
  <div>
    <PageHead :title="`${detail.team.name}: 編成`" />
    <h1>{{ detail.team.name }}</h1>
    <TeamNaviLink current="member" :m="route.query.m" />

    <TeamDetailMember :detail="detail" />
  </div>
</template>
