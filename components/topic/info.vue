<script setup lang="ts">
const { topic } = defineProps<{ topic }>();
</script>
<template>
  <div class="my-2" v-if="topic.dates?.length ?? 0">
    <h3 class="my-2">日程</h3>
    <ul>
      <li v-for="(date, i) in topic.dates" :key="i">
        <CalendarDate :date="date.date" class="mr-2" />
        <template v-if="date.url">
          <a :href="date.url" target="_blank">{{ date.title }}</a>
          <span class="muted ml-1">( {{ host(date.url) }} )</span>
        </template>
        <template v-else>
          {{ date.title }}
        </template>
      </li>
    </ul>
  </div>
  <div class="my-2" v-if="topic.urls?.length ?? 0">
    <h3 class="my-2">関連URL</h3>
    <ul>
      <li v-for="(url, i) in topic.urls" :key="i">
        <a :href="url.url" target="_blank">{{ url.title }}</a>
        <span class="muted ml-1">( {{ host(url.url) }} )</span>
      </li>
    </ul>
  </div>
</template>
