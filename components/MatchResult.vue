<script setup lang="ts">
type Props = {
  win: boolean;
};
const { win } = defineProps<Props>();
</script>

<template>
  <span v-if="win" class="font-bold text-red-500">W</span>
  <span v-else class="font-bold text-gray-400">L</span>
</template>
