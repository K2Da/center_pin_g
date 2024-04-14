<script setup lang="ts">
const route = useRoute();
const topic = '/topic/' + route.params.key.replaceAll('-', '/');
const { data } = await useAsyncData(() => {
  return queryContent(topic).findOne();
});
setPage(
  route.path,
  `トピック: ${data.value.title}`,
  `${data.value.title}についてまとめた記事`,
);
</script>
<template>
  <TopicArticle :topic="data" />
</template>
