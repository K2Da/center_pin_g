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
    <i class="fab fa-twitter"></i> <a :href="`https://twitter.com/${twitter}`" target="_blank">{{ twitter }}</a>
    &nbsp;
  </span>
  <span v-if="youtube">
    <i class="fab fa-youtube"></i> <a :href="`https://www.youtube.com/channel/${youtube[0]}`">{{ youtube[1] }}</a>
    &nbsp;
  </span>
  <span v-if="twitch">
    <i class="fab fa-twitch"></i> <a :href="`https://www.twitch.tv/${twitch}`">{{ twitch }}</a>
    &nbsp;
  </span>
</template>