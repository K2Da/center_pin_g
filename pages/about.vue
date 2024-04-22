<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'About', 'Center Pin(g)について');
</script>

<template>
  <article>
    <ContentDoc path="/about" />
  </article>
</template>
