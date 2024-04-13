<script setup lang="ts">
import type { TeamDetailView } from '~/api/TeamDetail';

const route = useRoute();
const detail: Ref<TeamDetailView | null> = teamToView(
  await fetchTeam(route.params.name),
);
setPage(
  route.path,
  `Team ${route.params.name}: 戦績`,
  `「${route.params.name}」のポケモンユナイトにおける戦績等をまとめたページ`,
);
</script>

<template>
  <div v-if="detail">
    <h1>{{ detail.team.name }}</h1>
    <TeamNaviLink current="detail" :name="route.params.name" />

    <TeamDetailInfo :detail="detail" />

    <div v-if="detail.tournaments.length > 0">
      <h2 class="mb-2">大会結果</h2>
      <TeamDetailTournaments :detail="detail" />
    </div>
  </div>
</template>
