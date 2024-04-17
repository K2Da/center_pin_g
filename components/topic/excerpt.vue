<script setup lang="ts">
const { topic } = defineProps<{ topic }>();
const { gtag } = useGtag();

const open = ref(false);
const toggleOpen = () => {
  open.value = !open.value;
  if (open.value) {
    gtag('event', 'open_topic', {
      event_category: 'user_interaction',
      event_label: 'Button clicked',
      value: topic.title,
    });
  }
};
</script>
<template>
  <article>
    <h2 class="flex justify-between">
      {{ topic.title }}
      <button
        class="bg-green-700 rounded pt-1 pb-0 px-1 muted mb-1 mr-1 lg:mr-8"
        @click="toggleOpen"
        v-show="open"
      >
        <UIcon name="i-material-symbols-close-fullscreen" />
      </button>
    </h2>
    <TopicUpdated :topic="topic" />

    <div v-show="open">
      <TopicInfo :topic="topic" />
      <h3>概要</h3>
      <ContentRenderer :value="topic" :excerpt="false" />
    </div>

    <div v-show="!open">
      <ContentRenderer :value="topic" :excerpt="true" />
    </div>
    <div class="w-full my-2 py-0 px-8">
      <button
        :class="['w-full', open ? 'bg-green-700' : 'bg-sky-800', 'rounded']"
        @click="toggleOpen"
      >
        <UIcon
          class="mr-1"
          style="vertical-align: -4px"
          :name="
            open
              ? 'i-material-symbols-close-fullscreen'
              : 'i-material-symbols-open-in-full'
          "
        />
      </button>
    </div>
  </article>
</template>
