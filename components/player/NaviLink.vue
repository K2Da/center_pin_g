<script setup lang="ts">
type Props = { current: string; p: string; };
const { current, p } = defineProps<Props>();
</script>
<template>
  <NuxtLink :to="{ name: 'player-detail', query: { p } }" no-prefetch v-if="current !== 'detail'">戦績</NuxtLink>
  <template v-else>戦績</template>
  |
  <NuxtLink :to="{ name: 'player-member', query: { p } }" no-prefetch v-if="current !== 'member'">編成</NuxtLink>
  <template v-else>編成</template>
</template>