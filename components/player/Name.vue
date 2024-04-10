<script setup lang="ts">
type Props = { name: string; page?: 'detail' | 'member' };
const { name, page } = defineProps<Props>();
const pageName = page === 'member' ? 'player-member' : 'player-detail';
</script>

<template>
  <NuxtLink
    :to="{ name: pageName, query: { p: sha1(name) } }"
    :class="ratingClass(name)"
    no-prefetch
    >{{ name }}</NuxtLink
  >
</template>
