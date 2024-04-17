<script setup lang="ts">
const { data } = await useAsyncData(() => {
  return queryContent('/topic')
    .where({ updated: { $exists: true } })
    .sort({ updated: -1 })
    .find();
});
</script>

<template>
  <div v-for="topic in data" :key="topic._path">
    <article>
      <h2 class="mb-2">{{ topic.title }}</h2>
      <TopicUpdated :topic="topic" />

      <TopicInfo :topic="topic" />
      <h3>概要</h3>
      <ContentRenderer :value="topic" />
    </article>
  </div>
</template>
