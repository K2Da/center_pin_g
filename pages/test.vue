<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: 'CP(g)',
    to: '/getting-started/installation',
  },
  {
    label: 'Player',
    to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`,
  },
  {
    label: 'Team',
    to: '/components/command-palette',
  },
];
</script>

<template>
  <UCard>
    <template #header>
      <Placeholder class="h-8" />
    </template>

    <Placeholder class="h-32" />

    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>
