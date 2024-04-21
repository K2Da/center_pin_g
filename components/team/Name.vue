<script setup lang="ts">
type Props = { name: string; currentName: string; page?: 'detail' | 'member' };
const { name, currentName, page } = defineProps<Props>();
const pageName = page === 'member' ? 'team-name-member' : 'team-name-detail';
</script>

<template>
  <UIcon
    class="mr-1"
    style="vertical-align: -2px"
    name="i-material-symbols-groups"
  />
  <NuxtLink
    :to="{ name: pageName, params: { name: currentName || name } }"
    :class="$attrs.class"
    >{{ name }}</NuxtLink
  >
</template>
