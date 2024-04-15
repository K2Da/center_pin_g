<script setup lang="ts">
const { topic } = defineProps<{ topic }>();
</script>
<template>
  <p class="attr text-right py-1 pr-2" v-if="topic.updated">
    <CalendarDate :date="topic.updated" :year="true" />
    <span class="muted">更新</span>
    <NuxtLink
      :to="{
        name: 'topic-key',
        params: { key: topic._path.substring(7).replaceAll('/', '-') },
      }"
      no-prefetch
    >
      <UIcon
        name="i-material-symbols-article-shortcut-outline-sharp"
        style="vertical-align: -4px"
        class="text-sky-500 w-5 h-5 mx-2"
      />
    </NuxtLink>
  </p>
</template>
