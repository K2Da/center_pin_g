<script setup lang="ts">
type Props = { tournamentKey: string; name: string };
const { tournamentKey, name } = defineProps<Props>();
</script>

<template>
  <NuxtLink :to="{ name: 'tournament-key', params: { key: tournamentKey } }">{{
    name
  }}</NuxtLink>
</template>
