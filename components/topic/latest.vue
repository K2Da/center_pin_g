<script setup lang="ts">
const { data } = await useAsyncData(() => {
  return queryContent('/topic')
    .where({ updated: { $exists: true } })
    .sort({ updated: -1 })
    .limit(5)
    .find();
});
</script>

<template>
  <div v-for="article in data" :key="article._path">
    <ContentDoc v-slot="{ doc }" :path="article._path" :head="false">
      <article>
        <h2>
          {{ article.title
          }}<template v-if="article.excerpt">
            [<NuxtLink
              :to="{
                name: 'topic-key',
                params: {
                  key: article._path.substring(7).replaceAll('/', '-'),
                },
              }"
              no-prefetch
              >+</NuxtLink
            >]</template
          >
        </h2>
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
        <ContentRenderer :value="article" :excerpt="!!article.excerpt" />
        <p class="more" v-if="article.excerpt">
          要約表示中 [<NuxtLink
            :to="{
              name: 'topic-key',
              params: { key: article._path.substring(7).replaceAll('/', '-') },
            }"
            no-prefetch
            >全文</NuxtLink
          >]
        </p>
      </article>
    </ContentDoc>
  </div>
</template>
