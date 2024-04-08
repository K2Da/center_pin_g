<script setup lang="ts">
type Props = {
  win: boolean;
};
const { win } = defineProps<Props>();
</script>

<template>
  <span v-if="win" style='font-weight: bold; color: red'>W</span>
  <span v-else style='font-weight: bold; color: dodgerblue'>L</span>
</template>