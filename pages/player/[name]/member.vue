<script setup lang="ts">
const route = useRoute();
const name = route.params.name as string;
const detail = await fetchPlayer(name);
setPage(
  route.path,
  `${name}: 編成`,
  `${name}選手のポケモンユナイトにおける大会出場時のメンバーをまとめたページ`,
);
</script>

<template>
  <div v-if="detail">
    <h1>
      {{ detail.player.collated_name }}
    </h1>
    <PlayerNaviLink current="member" :name="route.params.name" />
    <PlayerDetailMember :detail="detail" />
  </div>
</template>
