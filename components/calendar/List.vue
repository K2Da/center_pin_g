<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent('/topic').find());
const { prev, next } = defineProps<{ prev: number; next: number }>();

const filtered = () => {
  if (prev != 0 && !render.value) {
    // 範囲が指定されていて、SSG中の場合、現在日がわからないので表示しない。clietsideでのみ、表示する
    return [];
  }
  const current = new Date();
  const day = 24 * 60 * 60 * 1000;
  const from = new Date(current.getTime() - prev * day);
  const to = new Date(current.getTime() + next * day);

  let events: { topic: string; path: string; date: Date; title: string }[] = [
    { topic: '', path: '', date: current, title: '' },
  ];
  for (const topic of data.value) {
    for (const date of topic.dates) {
      if (
        prev !== 0 &&
        (new Date(date.date) < from || new Date(date.date) > to)
      ) {
        continue;
      }
      events.push({
        topic: topic.title || '',
        path: topic._path || '',
        title: date.title,
        date: new Date(date.date),
      });
    }
  }
  events = events.sort((a, b) => (a.date < b.date ? 1 : -1));
  return events;
};

const dayText = (d: Date) => {
  if (!render) {
    // SSG中は今日が何日かわからないので、表示しない
    return '';
  }
  const diff = diffDays(d.getTime(), new Date().getTime());
  if (-2 <= diff && diff <= 2) {
    return ['一昨日', '昨日', '今日', '明日', '明後日'][diff + 2];
  } else {
    return '';
  }
};
const render = ref(false);
const events = computed(() => filtered());

onMounted(() => {
  render.value = true;
});
</script>
<template>
  <div class="calendar">
    <template v-for="(e, i) in events" class="calendar">
      <h3 v-if="i === 0 || e.date.getMonth() !== events[i - 1].date.getMonth()">
        {{ e.date.getFullYear() }}年 {{ e.date.getMonth() + 1 }}月
      </h3>
      <h4
        v-if="
          i === 0 ||
          diffDays(e.date.getTime(), events[i - 1].date.getTime()) !== 0
        "
      >
        {{ e.date.getDate() }}日 ({{
          e.date.toLocaleDateString('ja-JP', { weekday: 'short' })
        }}) <span style="color: yellowgreen">{{ dayText(e.date) }}</span>
      </h4>
      <div class="event" v-if="e.title != ''">
        <span class="m" v-if="e.date.getSeconds() !== 1">
          {{ e.date.getHours().toString().padStart(2, '0') }}:{{
            e.date.getMinutes().toString().padStart(2, '0')
          }}
        </span>
        <span v-else class="m">--:--</span>
        &nbsp;
        <NuxtLink
          :to="{ name: 'topic-detail', query: { t: e.path.substring(7) } }"
          no-prefetch
          >{{ e.topic }}</NuxtLink
        >&nbsp;- {{ e.title }}
      </div>
    </template>
  </div>
  <p class="more" v-if="prev !== 0">
    {{ prev }}日前〜{{ next }}日後表示中 [<NuxtLink :to="{ name: 'calendar' }"
      >+ more</NuxtLink
    >]
  </p>
</template>
