<script setup lang="ts">
const { n } = defineProps<{ n: string }>();
const statsStore = useStatsStore();
const currentName = statsStore.teamAlias[n];
</script>
<template>
  <NuxtLink
    v-if="currentName"
    :to="{ name: 'team-detail', query: { m: sha1(currentName) } }"
    no-prefetch
    >{{ n }}</NuxtLink
  >
  <template v-else>
    {{ n }}
  </template>
</template>
