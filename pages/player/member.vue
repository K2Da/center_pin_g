<script setup lang="ts">
import type { Ref } from 'vue';
import type { PlayerDetail } from '~/api/PlayerDetail';

const route = useRoute();
const detail: Ref<PlayerDetail|null> = ref(null);

const load = () => {
  $fetch(`${flare_host()}/player/${route.query.p}`)
    .then((data: PlayerDetail) => { detail.value = data; });
};

watch(
  () => route.query,
  async () => {
    detail.value = null;
    await load();
  },
);

setPage(route.path);

if (process.client) load();
</script>

<template>
  <div>
    <ClientOnly v-if="detail">
      <PageHead :title="`${detail.player.collated_name}: 編成`" />
      <h1 :class="ratingClass(detail.player.collated_name)">{{ detail.player.collated_name }}</h1>
      <PlayerNaviLink current="member" :p="route.query.p" />

      <PlayerDetailMember :detail="detail" />

      <template #fallback>
      </template>
    </ClientOnly>
  </div>
</template>
