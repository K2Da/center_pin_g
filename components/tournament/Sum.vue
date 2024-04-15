<script setup lang="ts">
type Props = { result: { entry: number; top1: number; top4: number } };
const { result } = defineProps<Props>();
</script>
<template>
  <span class="muted">出場:</span>
  {{ result.entry }}<span class="muted">大会</span>&nbsp;
  <span class="muted">優勝:</span>
  {{ result.top1 }}<span class="muted">回</span>&nbsp;
  <span class="muted">Top 4:</span>
  {{ result.top4 }}<span class="muted">回</span>&nbsp;
</template>
