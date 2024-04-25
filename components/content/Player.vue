<script setup lang="ts">
const { n } = defineProps<{ n: string }>();
</script>
<template>
  <NuxtLink :to="{ name: 'player-name-detail', params: { name: n } }">{{
    n
  }}</NuxtLink>
</template>
