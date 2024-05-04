<script setup lang="ts">
const { n } = defineProps<{ n: string }>();
const statsStore = useStatsStore();
const { teams } = storeToRefs(statsStore);
</script>
<template>
  <span v-if="teams.every((t) => t.name !== n)">{{ n }}</span>
  <NuxtLink v-else :to="{ name: 'team-name-detail', params: { name: n } }">{{
    n
  }}</NuxtLink>
</template>
