<script setup lang="ts">
const route = useRoute();
setPage(
  route.path,
  'カレンダー',
  'Pokémon UNITEの大会、イベント、更新予定を集めたカレンダー',
);
const year = Number(route.params.year);
const month = Number(route.params.month);

const today = cdateJST(`${year}-${month}-10`);
const prev = today.add(-1, 'month');
const next = today.add(+1, 'month');
const toMonthParam = (d: CDate) => ({
  name: 'calendar-year-month',
  params: {
    year: d.get('year'),
    month: d.get('month') + 1,
  },
});
</script>
<template>
  <h1>カレンダー</h1>
  <h2 class="my-2">{{ year }}年 {{ month }}月</h2>
  <div>
    <NuxtLink :to="toMonthParam(prev)">{{ prev.get('month') + 1 }}月</NuxtLink>
    | <NuxtLink :to="{ name: 'calendar' }">全て</NuxtLink> |
    <NuxtLink :to="toMonthParam(next)">{{ next.get('month') + 1 }}月</NuxtLink>
  </div>

  <CalendarList :year="year" :month="month" />

  <div>
    <NuxtLink :to="toMonthParam(prev)">{{ prev.get('month') + 1 }}月</NuxtLink>
    | <NuxtLink :to="{ name: 'calendar' }">全て</NuxtLink> |
    <NuxtLink :to="toMonthParam(next)">{{ next.get('month') + 1 }}月</NuxtLink>
  </div>
</template>
