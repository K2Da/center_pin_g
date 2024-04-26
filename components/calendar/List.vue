<script setup lang="ts">
type Props = {
  prev?: number;
  next?: number;
  year?: number;
  month?: number;
  day?: number;
};
const { prev, next, year, month, day } = withDefaults(defineProps<Props>(), {
  prev: 0,
  next: 0,
  year: 0,
  month: 0,
  day: 0,
});

const current = cdateJST().startOf('day');
let from = null;
let to = null;

if (prev !== 0) {
  from = current.add(-prev, 'day');
  to = current.add(next, 'day');
} else if (year !== 0) {
  if (month !== 0) {
    if (day !== 0) {
      const d = cdateJST(`${year}-${month}-${day}`);
      from = d.startOf('day');
      to = d.endOf('day');
    } else {
      const d = cdateJST(`${year}-${month}-01`);
      from = d.startOf('month');
      to = d.endOf('month');
    }
  } else {
    const d = cdateJST(`${year}-01-01`);
    from = d.startOf('year');
    to = d.endOf('year');
  }
}

const { data } = await useAsyncData(async () => {
  const data = await queryContent('/topic').find();
  let events: { topic: string; path: string; date: Date; title: string }[] = [];
  for (const topic of data) {
    for (const date of topic.dates) {
      events.push({
        topic: topic.title || '',
        path: topic._path || '',
        title: date.title,
        date: date.date,
      });
    }
  }
  return events;
});

const events = computed(() => {
  let dates =
    data.value?.map((e) => {
      return { ...e, date: cdateJST(e.date) };
    }) || [];

  dates.push({ topic: '', path: '', date: current, title: '' });
  dates = dates.filter(
    (e) =>
      from === null ||
      to === null ||
      (from <= e.date.startOf('day') && e.date.startOf('day') <= to),
  );
  dates.sort((a, b) => {
    if (a.date.toDate().getTime() !== b.date.toDate().getTime())
      return a.date.toDate().getTime() < b.date.toDate().getTime() ? 1 : -1;
    if (a.title !== b.title) return a.title > b.title ? 1 : -1;
    return a.topic > b.topic ? 1 : -1;
  });
  return dates;
});

const dayText = (d: CDate) => {
  const diff = diffDays(
    d.startOf('day').toDate().getTime(),
    cdateJST().startOf('day').toDate().getTime(),
  );
  if (-2 <= diff && diff <= 2) {
    return ['一昨日', '昨日', '今日', '明日', '明後日'][diff + 2];
  } else {
    return '';
  }
};
</script>
<template>
  <div class="calendar" v-if="events && events.length > 0"></div>
  <template v-for="(e, i) in events" class="calendar">
    <h3
      class="mt-2"
      v-if="
        month === 0 &&
        (i === 0 || e.date.get('month') !== events[i - 1].date.get('month'))
      "
    >
      {{ e.date.format('YYYY年 MM月') }}
    </h3>
    <h4
      class="my-1"
      v-if="
        day === 0 &&
        (i === 0 ||
          e.date.format('YYYYMMDD') !== events[i - 1].date.format('YYYYMMDD'))
      "
      :id="e.date.format('YYYYMMDD')"
    >
      {{ e.date.get('date') }}日 ({{ e.date.locale('ja').format('ddd') }})

      <span class="text-yellow-500">{{ dayText(e.date) }}</span>
    </h4>
    <div class="event" v-if="e.title != ''">
      <span class="font-mono ml-1" v-if="e.date.get('second') !== 1">
        {{ e.date.get('hour').toString().padStart(2, '0') }}:{{
          e.date.get('minute').toString().padStart(2, '0')
        }}
      </span>
      <span v-else class="font-mono ml-1">--:--</span>
      &nbsp;
      <NuxtLink
        :to="{
          name: 'topic-key',
          params: { key: e.path.substring(7).replaceAll('/', '-') },
        }"
        >{{ e.topic }}</NuxtLink
      >&nbsp;- {{ e.title }}
    </div>
  </template>
  <p class="more" v-if="prev !== 0">
    {{ prev }}日前〜{{ next }}日後表示中 [<NuxtLink :to="{ name: 'calendar' }"
      >+ more</NuxtLink
    >]
  </p>
</template>
