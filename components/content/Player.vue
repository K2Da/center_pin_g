<script setup lang="ts">
const { n } = defineProps<{ n: string }>();
const statsStore = useStatsStore();
const currentName = statsStore.playerAlias[n];
</script>
<template>
  <NuxtLink
    v-if="currentName"
    :to="{ name: 'player-detail', query: { p: sha1(currentName) } }"
    :class="ratingClass(currentName)"
    no-prefetch
    >{{ n }}</NuxtLink
  >
  <template v-else>
    {{ n }}
  </template>
</template>
