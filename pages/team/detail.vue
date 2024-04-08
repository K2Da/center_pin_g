<script setup lang="ts">
import type { Ref } from 'vue';
import type { TeamDetailView } from '~/api/TeamDetail';

const route = useRoute();
const detail: Ref<TeamDetailView | null> = ref(null);

const load = async () => {
  detail.value = null;
  detail.value = teamToView(await fetchTeamDetail(route.query.m));
};
setPage(route.path);
await load();
loadOnQueryChanged(load);
</script>

<template>
  <div v-if="detail">
    <PageHead :title="`${detail.team.name}: 戦績`" />
    <h1>{{ detail.team.name }}</h1>
    <TeamNaviLink current="detail" :m="route.query.m" />

    <TeamDetailInfo :detail="detail" />

    <div v-if="detail.tournaments.length > 0">
      <h2>大会結果</h2>
      <TeamDetailTournaments :detail="detail" />
    </div>
  </div>
</template>
