<script setup lang="ts">
import type { TournamentDetail } from '~/api/TournamentDetail';

type Props = {
  detail: TournamentDetail;
};
const { detail } = defineProps<Props>();
</script>

<template>
  <div class="flex" v-if="detail.tournament.date">
    <div class="w-16 divhead">開催日</div>
    <div class="pl-2 divdata">
      <DateTime :date="detail.tournament.date" />
    </div>
  </div>
  <div class="flex" v-if="detail.data.type">
    <div class="w-16 divhead">形式</div>
    <div class="pl-2 divdata">
      {{ detail.data.type }} / {{ detail.data.official ? '公式' : '非公式' }} /
      {{ detail.tournament.rating ? 'レート計算対象' : 'レート計算非対象' }}
    </div>
  </div>
  <div class="flex" v-if="detail.data.note">
    <div class="w-16 divhead">備考</div>
    <div class="pl-2 divdata">
      {{ detail.data.note }}
    </div>
  </div>
  <div class="flex mb-2" v-if="detail.data.urls?.length > 0">
    <div class="w-16 divhead">関連URL</div>
    <div class="pl-2 divdata">
      <ul>
        <li v-for="(link, i) of detail.data.urls" :key="i">
          <i :class="link.icon"></i> <a :href="link.url">{{ link.title }}</a> (
          {{ host(link.url) }} )
        </li>
      </ul>
    </div>
  </div>
</template>
