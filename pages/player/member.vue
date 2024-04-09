<script setup lang="ts">
import type { Ref } from 'vue';
import type { PlayerDetail } from '~/api/PlayerDetail';

const route = useRoute();
const detail: Ref<PlayerDetail | null> = ref(null);

const load = async () => {
  const { data } = await useFetch(`${flare_host()}/player/${route.query.p}`);
  detail.value = data.value;
};

watch(
  () => route.query,
  async () => {
    detail.value = null;
    await load();
  },
);

setPage(route.path);
await load();
</script>

<template>
  <div>
    <PageHead :title="`${detail.player.collated_name}: 編成`" />
    <h1 :class="ratingClass(detail.player.collated_name)">
      {{ detail.player.collated_name }}
    </h1>
    <PlayerNaviLink current="member" :p="route.query.p" />

    <PlayerDetailMember :detail="detail" />
  </div>
</template>
