<script setup lang="ts">
const { topic } = defineProps<{ topic }>();
</script>
<template>
  <article>
    <h2 class="mb-2">{{ topic.title }}</h2>
    <p class="attr text-right pr-8" v-if="topic.updated">
      <CalendarDate :date="topic.updated" :year="true" />
      <span class="muted">更新</span>
    </p>

    <TopicInfo :topic="topic" />
    <hr />
    <ContentRenderer :value="topic" />
  </article>
</template>
