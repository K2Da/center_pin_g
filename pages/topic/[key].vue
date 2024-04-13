<script setup lang="ts">
const route = useRoute();
const topic = '/topic/' + route.params.key.replaceAll('-', '/');
const { data } = await useAsyncData(() => {
  return queryContent(topic).findOne();
});
setPage(
  route.path,
  `トピック: ${data.value.title}`,
  `${data.value.title}についてまとめた記事`,
);
</script>
<template>
  <h2 class="mb-2">{{ data.title }}</h2>
  <p class="attr" v-if="data.updated">
    <template v-if="data.updated">
      <CalendarDate :date="data.updated" :year="true" />
      <span class="text-sm">更新</span>
    </template>
  </p>
  <div v-if="data.dates?.length ?? 0">
    <h3 class="mb-2">日程</h3>
    <ul>
      <li v-for="(date, i) in data.dates" :key="i">
        <CalendarDate :date="date.date" /> {{ date.title }}
      </li>
    </ul>
  </div>
  <div v-if="data.urls?.length ?? 0">
    <h3>関連URL</h3>
    <ul>
      <li v-for="(url, i) in data.urls" :key="i">
        <a :href="url.url" target="_blank">{{ url.title }}</a>
      </li>
    </ul>
  </div>

  <hr />
  <ContentRenderer :value="data" />
</template>
