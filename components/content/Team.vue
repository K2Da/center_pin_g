<script setup lang="ts">
const { n } = defineProps<{ n: string }>();
const statsStore = useStatsStore();
</script>
<template>
  <NuxtLink
    v-if="n"
    :to="{ name: 'team-name-detail', params: { name: n } }"
    no-prefetch
    >{{ n }}</NuxtLink
  >
  <template v-else>
    {{ n }}
  </template>
</template>
