<script setup lang="ts">
type Props = { tournamentKey: string; name: string };
const { tournamentKey, name } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="{ name: 'tournament-detail-key', params: { key: tournamentKey } }"
    no-prefetch
    >{{ name }}</NuxtLink
  >
</template>
