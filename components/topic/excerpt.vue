<script setup lang="ts">
const { topic } = defineProps<{ topic }>();
const open = ref(false);
const toggleOpen = () => {
  open.value = !open.value;
};
console.log();
</script>
<template>
  <article>
    <h2 class="flex justify-between">
      {{ topic.title }}
      <button
        class="bg-sky-800 rounded pt-1 pb-0 px-1 text-sm mb-1 mr-1 lg:mr-8"
        @click="toggleOpen"
        v-if="open"
      >
        <UIcon name="i-material-symbols-cancel-presentation-sharp" />
      </button>
    </h2>
    <TopicUpdated :topic="topic" />

    <!-- v-showにしたいが、するとhydration mismatchになる -->
    <div v-if="open">
      <TopicInfo :topic="topic" />
      <hr />
      <ContentRenderer :value="topic" :excerpt="false" />
    </div>

    <div v-if="!open">
      <ContentRenderer :value="topic" :excerpt="true" />
    </div>
    <div class="w-full my-2 py-0 px-8">
      <button class="w-full bg-sky-800 rounded" @click="toggleOpen">
        <UIcon
          class="mr-1"
          style="vertical-align: -4px"
          :name="
            open
              ? 'i-material-symbols-upload-2'
              : 'i-material-symbols-download-2'
          "
        />
      </button>
    </div>
  </article>
</template>
