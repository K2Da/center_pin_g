<script setup lang="ts">
type Props = { name: string; page?: 'detail' | 'member' };
const statsStore = useStatsStore();
const { ratingRange, ratingDic } = storeToRefs(statsStore);

const { name, page } = defineProps<Props>();
const pageName =
  page === 'member' ? 'player-name-member' : 'player-name-detail';

const isMounted = ref(false);
onMounted(() => {
  // SSR/SSGでは名前の色つけをしない
  isMounted.value = true;
});
</script>

<template>
  <NuxtLink
    :to="{ name: pageName, params: { name } }"
    :class="isMounted ? ratingClass(ratingRange, ratingDic, name) : 't4'"
    no-prefetch
    >{{ name }}</NuxtLink
  >
</template>
