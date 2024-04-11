<script setup lang="ts">
import type { TeamDetailView } from '~/api/TeamDetail';

const route = useRoute();
const detail = teamToView(await fetchTeam(route.params.name));
setPage(route.path);
</script>

<template>
  <div>
    <PageHead :title="`${detail.team.name}: 編成`" />
    <h1>{{ detail.team.name }}</h1>
    <TeamNaviLink current="member" :name="route.params.name" />

    <TeamDetailMember :detail="detail" />
  </div>
</template>
