<script setup lang="ts">
type Props = {
  date: number;
  spacing?: boolean;
  time?: boolean;
};
const { date, spacing, time } = defineProps<Props>();

const d = computed(() => {
  const dd = new Date(date);
  const y = dd.getFullYear() % 100;
  const m = dd.getMonth() + 1;
  const d = dd.getDate();
  const hh = dd.getHours();
  const mm = dd.getMinutes();
  const ss = dd.getSeconds();
  const t = time ? ` ${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}:${ss < 10 ? '0': ''}${ss}` : '';
  return { y, m, d, t };
});

</script>

<template>
  <span class="m" v-if="spacing">
    '{{ d.y }}<span class="muted">年</span>{{ d.m < 10 ? '&nbsp;' : '' }}{{ d.m }}<span class="muted">月</span>{{ d.d < 10 ? '&nbsp;' : '' }}{{ d.d }}<span class="muted">日</span>{{ d.t }}
  </span>
  <span class="m" v-else>
    '{{ d.y }}<span class="muted">年</span>{{ d.m }}<span class="muted">月</span>{{ d.d }}<span class="muted">日</span>{{ d.t }}
  </span>
</template>
