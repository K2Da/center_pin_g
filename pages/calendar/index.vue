<script setup lang="ts">
const route = useRoute();
setPage(
  route.path,
  'カレンダー',
  'Pokémon UNITEの大会、イベント、更新予定を集めたカレンダー',
);
</script>
<template>
  <h1>カレンダー</h1>
  <CalendarList :prev="0" :next="0" />
</template>
