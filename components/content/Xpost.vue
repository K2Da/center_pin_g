<script setup lang="ts">
import { Tweet } from '@jacksongross/vue-tweet-embed';
const { id } = defineProps<{ id: string }>();
</script>
<template>
  <ClientOnly>
    <div style="padding: 0 12px">
      <Tweet :id="id" :options="{ theme: 'dark' }">
        <span>
          <img
            src="/xpost.png"
            alt="loading"
            style="border: 1px solid #425364; border-radius: 12px"
          /> </span
      ></Tweet>
    </div>
  </ClientOnly>
</template>
