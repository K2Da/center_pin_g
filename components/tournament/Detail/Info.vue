<script setup lang="ts">
import type { TournamentDetail } from '~/api/TournamentDetail';

type Props = {
  detail: TournamentDetail;
};
const { detail } = defineProps<Props>();
</script>

<template>
  <ul>
    <li v-if="detail.tournament.date">
      <span class="muted">開催日: </span>
      <DateTime :date="detail.tournament.date" />
    </li>
    <li v-if="detail.data.type">
      <span class="muted">形式: </span>
      {{ detail.data.type }} / {{ detail.data.official ? '公式' : '非公式' }} /
      {{ detail.tournament.rating ? 'レート計算対象' : 'レート計算非対象' }}
    </li>
    <li v-if="detail.data.note">
      <span class="muted">備考: </span>
      {{ detail.data.note }}
    </li>
    <li v-if="detail.data.urls?.length > 0">
      <ul>
        <li v-for="(link, i) of detail.data.urls" :key="i">
          <i :class="link.icon"></i> <a :href="link.url">{{ link.title }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
