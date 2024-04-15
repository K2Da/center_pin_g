<script setup lang="ts">
type Props = { rank: number };
const { rank } = defineProps<Props>();
</script>

<template>
  <template v-if="rank">{{ rank }}<span class="muted">位</span></template>
  <template v-else>-</template>
</template>
