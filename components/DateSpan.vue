<script setup lang="ts">
type Props = { date1: number; date2: number };
const { date1, date2 } = defineProps<Props>();

const ymd = computed(() => {
  const dd1 = cdateJST(date1);
  const dd2 = cdateJST(date2);
  const y1 = dd1.get('year') % 100;
  const m1 = dd1.get('month') + 1;
  const d1 = dd1.get('date');
  const y2 = dd2.get('year') % 100;
  const m2 = dd2.get('month') + 1;
  const d2 = dd2.get('date');
  return { y1, m1, d1, y2, m2, d2 };
});
</script>

<template>
  '{{ ymd.y1 }}
  <span class="muted">年</span>
  {{ ymd.m1 }}
  <span class="muted">月</span>
  {{ ymd.d1 }}
  <span class="muted">日</span>
  <template v-if="ymd.y1 !== ymd.y2 || ymd.m1 !== ymd.m2 || ymd.d1 !== ymd.d2">
    〜
    <template v-if="ymd.y1 !== ymd.y2">
      '{{ ymd.y2 }}
      <span class="muted">年</span>
    </template>
    {{ ymd.m2 }}
    <span class="muted">月</span>
    {{ ymd.d2 }}
    <span class="muted">日</span>
  </template>
</template>
