<script setup lang="ts">
const route = useRoute();
setPage(
  route.path,
  'カレンダー',
  'Pokémon UNITEの大会、イベント、更新予定を集めたカレンダー',
  'calendar',
);
</script>
<template>
  <h1>カレンダー</h1>
  <CalendarList />
</template>
