<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent('/topic').find());
const { prev, next } = defineProps<{ prev: number; next: number }>();

const filtered = () => {
  const current = cdateJST();
  const from = current.add(-prev, 'day');
  const to = current.add(next, 'day');

  let events: { topic: string; path: string; date: CDate; title: string }[] = [
    { topic: '', path: '', date: current, title: '' },
  ];
  for (const topic of data.value) {
    for (const date of topic.dates) {
      if (
        prev !== 0 &&
        (cdateJST(date.date) < from || cdateJST(date.date) > to)
      ) {
        continue;
      }
      events.push({
        topic: topic.title || '',
        path: topic._path || '',
        title: date.title,
        date: cdateJST(date.date),
      });
    }
  }
  events.sort((a, b) => {
    if (a.date.toDate().getTime() !== b.date.toDate().getTime())
      return a.date.toDate().getTime() < b.date.toDate().getTime() ? 1 : -1;
    if (a.title !== b.title) return a.title > b.title ? 1 : -1;
    return a.topic > b.topic ? 1 : -1;
  });
  return events;
};

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
const events = computed(() => filtered());
</script>
<template>
  <div class="calendar" v-if="events.length > 0">
    <template v-for="(e, i) in events" class="calendar">
      <h3
        class="mt-2"
        v-if="
          i === 0 || e.date.get('month') !== events[i - 1].date.get('month')
        "
      >
        {{ e.date.format('YYYY年 MM月') }}
      </h3>
      <h4
        class="my-1"
        v-if="
          i === 0 ||
          e.date.format('YYYYMMDD') !== events[i - 1].date.format('YYYYMMDD')
        "
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
  </div>
</template>
