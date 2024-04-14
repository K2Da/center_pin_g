<script setup lang="ts">
const { topic } = defineProps<{ topic }>();
</script>
<template>
  <p class="attr text-right py-1 pr-2" v-if="topic.updated">
    <CalendarDate :date="topic.updated" :year="true" />
    <span class="text-sm">更新</span>
    [
    <NuxtLink
      :to="{
        name: 'topic-key',
        params: { key: topic._path.substring(7).replaceAll('/', '-') },
      }"
      no-prefetch
      >permalink</NuxtLink
    >
    ]
  </p>
</template>
