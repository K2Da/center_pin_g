<script setup lang="ts">
type Props = { result: { win: number; lose: number } };
const { result } = defineProps<Props>();
</script>
<template>
  {{ result.win }}<span class="text-sm">勝</span>&nbsp; {{ result.lose
  }}<span class="text-sm">敗</span>&nbsp;
</template>
