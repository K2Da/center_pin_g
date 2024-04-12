<script setup lang="ts">
type Props = { result: { entry: number; top1: number; top4: number } };
const { result } = defineProps<Props>();
</script>
<template>
  <span class="text-sm">出場:</span>
  {{ result.entry }}<span class="text-sm">大会</span>&nbsp;
  <span class="text-sm">優勝:</span>
  {{ result.top1 }}<span class="text-sm">回</span>&nbsp;
  <span class="text-sm">Top 4:</span>
  {{ result.top4 }}<span class="text-sm">回</span>&nbsp;
</template>
