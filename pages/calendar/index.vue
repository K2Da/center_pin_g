<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'カレンダー', 'Pokémon UNITE大会結果収集サイト', 'site');
</script>
<template>
  <h1>カレンダー</h1>
  <CalendarList :prev="0" :next="0" />
</template>
