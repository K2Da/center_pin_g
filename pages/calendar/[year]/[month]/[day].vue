<script setup lang="ts">
const route = useRoute();
const year = Number(route.params.year);
const month = Number(route.params.month);
const day = Number(route.params.day);

const today = cdateJST(`${year}-${month}-${day}`);
const prev = today.add(-1, 'day');
const next = today.add(+1, 'day');
setPage(
  route.path,
  today.format('カレンダー MM/DD'),
  `${today.format('MM月DD日')}: Pokémon UNITEの大会、イベントを集めたカレンダー`,
  'calendar',
);
const toDayParam = (d: CDate) => ({
  name: 'calendar-year-month-day',
  params: {
    year: d.get('year'),
    month: d.get('month') + 1,
    day: d.get('date'),
  },
});
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
  <h2 class="my-2">{{ year }}年 {{ month }}月 {{ day }}日</h2>
  <div class="ml-2 mt-2 mb-1">
    <NuxtLink :to="toDayParam(prev)">前の日</NuxtLink> |
    <NuxtLink :to="toMonthParam(today)">{{ month }}月</NuxtLink> |
    <NuxtLink :to="toDayParam(next)">次の日</NuxtLink>
  </div>
  <hr class="mt-1 mb-2" />

  <CalendarList :year="year" :month="month" :day="day" />

  <hr class="my-2" />
  <div class="m-2">
    <NuxtLink :to="toDayParam(prev)">前の日</NuxtLink> |
    <NuxtLink :to="toMonthParam(today)">{{ month }}月</NuxtLink> |
    <NuxtLink :to="toDayParam(next)">次の日</NuxtLink>
  </div>
</template>
