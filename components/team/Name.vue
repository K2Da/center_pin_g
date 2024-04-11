<script setup lang="ts">
type Props = { name: string; currentName: string; page?: 'detail' | 'member' };
const { name, currentName, page } = defineProps<Props>();
const pageName = page === 'member' ? 'team-member-name' : 'team-name-detail';
</script>

<template>
  <NuxtLink
    :to="{ name: pageName, params: { name: currentName || name } }"
    no-prefetch
    >{{ name }}</NuxtLink
  >
</template>
