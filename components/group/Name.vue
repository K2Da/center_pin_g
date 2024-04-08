<script setup lang="ts">
type Props = { groupKey: string; name: string; };
const { groupKey, name } = defineProps<Props>();
</script>

<template>
  <NuxtLink :to="{ name: 'tournament-group', query: { g: groupKey } }" no-prefetch>{{ name }}</NuxtLink>
</template>
