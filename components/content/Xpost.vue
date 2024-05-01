<script setup lang="ts">
import { Tweet } from '@jacksongross/vue-tweet-embed';
const { id } = defineProps<{ id: string; user?: string; text?: string }>();
</script>
<template>
  <ClientOnly>
    <div class="py-0 px-3" style="color-scheme: auto">
      <Tweet v-if="user && text" :id="id" :options="{ theme: 'dark' }">
        <div class="mt-2 p-4 border rounded border-stone-200 max-w-[548px]">
          {{ user }}
          <hr class="my-2" />
          <p v-html="text.replaceAll('\n', '<br />')" />
        </div>
      </Tweet>
      <Tweet v-else :id="id" :options="{ theme: 'dark' }">
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
