<script setup lang="ts">
const { topic } = defineProps<{ topic }>();
</script>
<template>
  <article>
    <h2 class="mb-2">{{ topic.title }}</h2>
    <TopicInfo :topic="topic" />
    <hr />
    <ContentRenderer :value="topic" />
  </article>
</template>
