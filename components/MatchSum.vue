<script setup lang="ts">
type Props = { result: { win: number; lose: number } };
const { result } = defineProps<Props>();
</script>
<template>
  {{ result.win }}<span class="muted">勝</span>&nbsp; {{ result.lose
  }}<span class="muted">敗</span>&nbsp;
</template>
