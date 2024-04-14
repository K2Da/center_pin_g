<script setup lang="ts">
type Props = {
  twitter?: string;
  youtube?: [string, string];
  twitch?: string;
};
const { twitter, youtube, twitch } = defineProps<Props>();
</script>

<template>
  <span v-if="twitter">
    <UIcon
      name="i-fa6-brands-x-twitter"
      style="vertical-align: -3px"
      class="mr-1"
    />
    <a :href="`https://twitter.com/${twitter}`" target="_blank">{{
      twitter
    }}</a>
    &nbsp;
  </span>
  <span v-if="youtube">
    <UIcon
      name="i-fa6-brands-youtube"
      style="vertical-align: -2px"
      class="mr-1"
    />
    <a :href="`https://www.youtube.com/channel/${youtube[0]}`">{{
      youtube[1]
    }}</a>
    &nbsp;
  </span>
  <span v-if="twitch">
    <UIcon
      name="i-fa6-brands-twitch"
      style="vertical-align: -4px"
      class="mr-1"
    />
    <a :href="`https://www.twitch.tv/${twitch}`">{{ twitch }}</a>
    &nbsp;
  </span>
</template>
