<script setup lang="ts">
type Props = { name: string; currentName: string; page?: 'detail'|'member' };
const { name, currentName, page } = defineProps<Props>();
const pageName = page === 'member' ? 'team-member' : 'team-detail';
</script>

<template>
  <NuxtLink :to="{ name: pageName, query: { m: sha1(currentName || name) } }" no-prefetch>{{ name }}</NuxtLink>
</template>