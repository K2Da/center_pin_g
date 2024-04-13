<script setup lang="ts">
import { Tweet } from '@jacksongross/vue-tweet-embed';
const { id } = defineProps<{ id: string }>();
</script>
<template>
  <ClientOnly>
    <div class="py-0 px-3">
      <Tweet :id="id" :options="{ theme: 'dark' }">
        <span>
          <img
            src="/xpost.png"
            alt="loading"
            class="mt-2 border rounded border-stone-200"
          /> </span
      ></Tweet>
    </div>
  </ClientOnly>
</template>
