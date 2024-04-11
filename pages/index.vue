<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'Center Pin(g)', 'Pokémon UNITE大会結果収集サイト', 'site');
</script>

<template>
  <h1>Center Pin(g)</h1>
  <div class="container">
    <div class="calendar">
      <!-- 閲覧時の日付により表示が変わるのでclient only -->
      <CalendarList :prev="3" :next="7" />
    </div>
    <div style="flex-grow: 1; padding: 4px">
      <TopicLatest />
      <p class="more">
        トピック最新更新5件表示中 [<NuxtLink :to="{ name: 'topics' }"
          >+ more</NuxtLink
        >]
      </p>
    </div>
  </div>
</template>
