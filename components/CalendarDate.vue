<script setup lang="ts">
const { date } = defineProps<{ date: string; year?: boolean }>();

const d = computed(() => {
  const dd = cdateJST(date);
  const y = dd.get('year');
  const m = dd.get('month') + 1;
  const d = dd.get('date');
  const hh = dd.get('hour');
  const mm = dd.get('minute');
  const ss = dd.get('second');
  const t = ` ${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}`;
  return { y, m, d, t, ss };
});
</script>

<template>
  <span class="font-mono">
    <template v-if="year">{{ d.y }}<span class="text-sm">年</span></template
    >{{ d.m < 10 ? '&nbsp;' : '' }}{{ d.m }}<span class="text-sm">月</span
    >{{ d.d < 10 ? '&nbsp;' : '' }}{{ d.d }}<span class="text-sm">日</span>
    <template v-if="d.ss != 1">{{ d.t }}</template>
  </span>
</template>
