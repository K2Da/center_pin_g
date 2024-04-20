<script setup lang="ts">
const route = useRoute();
setPage(
  route.path,
  'Center Pin(g)',
  'Pokémon UNITE大会結果、予定、トピック、戦績などを集めるサイト',
  true,
);
</script>
<template>
  <h1 class="mb-2 lg:mb-4">Center Pin(g)</h1>

  <div class="flex flex-col lg:flex-row-reverse pt-1">
    <div class="lg:w-[600px] lg:pt-2 lg:shrink-0">
      <CalendarList :prev="3" :next="7" />
    </div>
    <div class="lg:flex-grow">
      <TopicLatest />
      <p class="more">
        トピック最新更新5件表示中 [<NuxtLink :to="{ name: 'topics' }"
          >+ more</NuxtLink
        >]
      </p>
    </div>
  </div>
</template>
