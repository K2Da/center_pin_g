<script setup lang="ts">
type Props = {
  date: number;
  spacing?: boolean;
  time?: boolean;
};
const { date, spacing, time } = defineProps<Props>();

const d = computed(() => {
  const dd = cdateJST(date);
  const y = dd.get('year') % 100;
  const m = dd.get('month') + 1;
  const d = dd.get('date');
  const hh = dd.get('hour');
  const mm = dd.get('minute');
  const ss = dd.get('second');
  const t = time
    ? ` ${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}:${ss < 10 ? '0' : ''}${ss}`
    : '';
  return { y, m, d, t };
});
</script>

<template>
  <span class="font-mono" v-if="spacing">
    '{{ d.y }}<span class="text-sm">年</span>{{ d.m < 10 ? '&nbsp;' : ''
    }}{{ d.m }}<span class="text-sm">月</span>{{ d.d < 10 ? '&nbsp;' : ''
    }}{{ d.d }}<span class="text-sm">日</span>{{ d.t }}
  </span>
  <span class="font-mono" v-else>
    '{{ d.y }}<span class="text-sm">年</span>{{ d.m
    }}<span class="text-sm">月</span>{{ d.d }}<span class="text-sm">日</span
    >{{ d.t }}
  </span>
</template>
