<script setup lang="ts">
import { fetchTournamentGroup } from '~~/utils/fetches';

const route = useRoute();
const group = await fetchTournamentGroup((route.params.key || '').toString());
setPage(
  route.path,
  `大会グループ: ${group.group?.name}`,
  `ポケモンユナイト大会「${group.group?.name}」の詳細結果`,
);
</script>

<template>
  <div v-if="group">
    <h1>{{ group.group?.name }}</h1>
    <TournamentList :group="group" />
  </div>
</template>
