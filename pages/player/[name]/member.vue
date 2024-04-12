<script setup lang="ts">
const route = useRoute();
const detail = await fetchPlayer(route.params.name);
setPage(route.path);
</script>

<template>
  <div v-if="detail">
    <PageHead :title="`${detail.player.collated_name}: 編成`" />
    <h1>
      {{ detail.player.collated_name }}
    </h1>
    <PlayerNaviLink current="member" :name="route.params.name" />

    <PlayerDetailMember :detail="detail" />
  </div>
</template>
