<script setup lang="ts">
const route = useRoute();
const topic = '/topic/' + route.params.key.replaceAll('-', '/');
setPage(route.path);
</script>
<template>
  <ContentDoc :path="topic" :head="true" v-if="route.params.key">
    <template #not-found> </template>
    <template #empty> </template>
    <template #default="{ doc }">
      <article>
        <PageHead :title="doc.title" />
        <h2 class="mb-2">{{ doc.title }}</h2>
        <p class="attr" v-if="doc.updated">
          <template v-if="doc.updated">
            <CalendarDate :date="doc.updated" :year="true" />
            <span class="text-sm">更新</span>
          </template>
        </p>
        <div v-if="doc.dates?.length ?? 0">
          <h3 class="mb-2">日程</h3>
          <ul>
            <li v-for="(date, i) in doc.dates" :key="i">
              <CalendarDate :date="date.date" /> {{ date.title }}
            </li>
          </ul>
        </div>
        <div v-if="doc.urls?.length ?? 0">
          <h3>関連URL</h3>
          <ul>
            <li v-for="(url, i) in doc.urls" :key="i">
              <a :href="url.url" target="_blank">{{ url.title }}</a>
            </li>
          </ul>
        </div>

        <hr />
        <ContentRenderer :value="doc" />
      </article>
    </template>
  </ContentDoc>
</template>
