<script setup lang="ts">
const { date } = defineProps<{ date: string; year?: boolean }>();

const d = computed(() => {
  const dd = new Date(date);
  const y = dd.getFullYear();
  const m = dd.getMonth() + 1;
  const d = dd.getDate();
  const hh = dd.getHours();
  const mm = dd.getMinutes();
  const ss = dd.getSeconds();
  const t = ` ${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}`;
  return { y, m, d, t, ss };
});
</script>

<template>
  <span class="m">
    <template v-if="year">{{ d.y }}<span class="muted">年</span></template
    >{{ d.m < 10 ? '&nbsp;' : '' }}{{ d.m }}<span class="muted">月</span
    >{{ d.d < 10 ? '&nbsp;' : '' }}{{ d.d }}<span class="muted">日</span>
    <template v-if="d.ss != 1">{{ d.t }}</template>
  </span>
</template>
