<script setup lang="ts">
type Props = { name: string; page?: 'detail' | 'member' };
const { name, page } = defineProps<Props>();
const pageName =
  page === 'member' ? 'player-name-member' : 'player-name-detail';
</script>

<template>
  <NuxtLink
    :to="{ name: pageName, params: { name } }"
    :class="ratingClass(name)"
    no-prefetch
    >{{ name }}</NuxtLink
  >
</template>
