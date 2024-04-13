<script setup lang="ts">
import { fetchTournamentDetail } from '~~/utils/fetches';

const route = useRoute();
const detail = await fetchTournamentDetail((route.params.key || '').toString());
setPage(
  route.path,
  `大会: ${detail.tournament.name}`,
  `ポケモンユナイト大会「${detail.tournament.name}」の詳細結果`,
);
</script>

<template>
  <div v-if="detail">
    <h1>{{ detail.tournament.name }}</h1>
    <TournamentDetailInfo :detail="detail" />
    <TournamentDetailResult :detail="detail" />
  </div>
</template>
