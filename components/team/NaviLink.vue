<script setup lang="ts">
type Props = { current: string; m: string; };
const { current, m } = defineProps<Props>();
</script>
<template>
  <NuxtLink :to="{ name: 'team-detail', query: { m } }" no-prefetch v-if="current !== 'detail'">戦績</NuxtLink>
  <template v-else>戦績</template>
  |
  <NuxtLink :to="{ name: 'team-member', query: { m } }" no-prefetch v-if="current !== 'member'">編成</NuxtLink>
  <template v-else>編成</template>
</template>