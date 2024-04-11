<script setup lang="ts">
type Props = { groupKey: string; name: string };
const { groupKey, name } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="{ name: 'tournaments-group-key', params: { key: groupKey } }"
    no-prefetch
    >{{ name }}</NuxtLink
  >
</template>
