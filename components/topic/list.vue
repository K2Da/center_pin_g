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
    <TopicExcerpt :topic />
  </div>
</template>
