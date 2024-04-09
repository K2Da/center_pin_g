<script setup lang="ts">
// TODO: ページングする
const { data } = await useAsyncData(() => {
  return queryContent('/topic')
    .where({ updated: { $exists: true } })
    .sort({ updated: -1 })
    .find();
});
</script>

<template>
  <div v-for="article in data" :key="article._path">
    <ContentDoc v-slot="{ doc }" :path="article._path" :head="false">
      <article>
        <h2>{{ article.title }}</h2>
        <p class="attr">
          <CalendarDate :date="article.updated" />
          <span class="muted">更新</span>
          <strong v-if="article.dates?.length ?? 0"> | </strong>
          <span v-for="(date, i) in article.dates" :key="i">
            <strong v-if="i > 0"> | </strong>
            {{ date.title }}:<CalendarDate :date="date.date" />
          </span>
        </p>
        <ul>
          <li
            v-for="url in article.urls"
            :key="url.url"
            style="margin: 0 0 0 16px"
          >
            <a :href="url.url" target="_blank">{{ url.title }}</a>
          </li>
        </ul>
        <ContentRenderer :value="article" />
      </article>
    </ContentDoc>
  </div>
</template>
