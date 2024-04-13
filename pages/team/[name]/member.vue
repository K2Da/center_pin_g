<script setup lang="ts">
import type { TeamDetailView } from '~/api/TeamDetail';

const route = useRoute();
const name = route.params.name;
const detail = teamToView(await fetchTeam(name));
setPage(
  route.path,
  `Team ${name}: 編成`,
  `「${name}」のポケモンユナイトにおける大会出場時のメンバーをまとめたページ`,
);
</script>

<template>
  <div>
    <h1>{{ detail.team.name }}</h1>
    <TeamNaviLink current="member" :name="route.params.name" />

    <TeamDetailMember :detail="detail" />
  </div>
</template>
