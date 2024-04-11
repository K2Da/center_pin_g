<script setup lang="ts">
type Props = { current: string; name: string };
const { current, name } = defineProps<Props>();
</script>
<template>
  <NuxtLink
    :to="{ name: 'player-name-detail', params: { name } }"
    no-prefetch
    v-if="current !== 'detail'"
    >戦績</NuxtLink
  >
  <template v-else>戦績</template>
  |
  <NuxtLink
    :to="{ name: 'player-name-member', params: { name } }"
    no-prefetch
    v-if="current !== 'member'"
    >編成</NuxtLink
  >
  <template v-else>編成</template>
</template>
