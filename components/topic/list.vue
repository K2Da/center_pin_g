<script setup lang="ts">
const ITEM_COUNT = 5;
const pageNoRef = ref(1);
const changePageNo = (v: number) => {
  pageNoRef.value = v;
  window.scroll({ top: 0, left: 0 });
};

const { data } = await useAsyncData(
  `topic_page_${pageNoRef.value}`,
  () => {
    return queryContent('/topic')
      .where({ updated: { $exists: true } })
      .sort({ updated: -1 })
      .skip((pageNoRef.value - 1) * ITEM_COUNT)
      .limit(ITEM_COUNT)
      .find();
  },
  { watch: [pageNoRef] },
);
const { data: total } = await useAsyncData(() => {
  return queryContent('/topic')
    .where({ updated: { $exists: true } })
    .count();
});
</script>

<template>
  <ListPager
    :pageNo="pageNoRef"
    :maxPage="Math.ceil((total || 0) / ITEM_COUNT)"
    @change="changePageNo"
  />
  <div v-for="topic in data" :key="topic._path">
    <TopicExcerpt :topic />
  </div>
</template>
