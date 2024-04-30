<script setup lang="ts">
import type { TournamentDetail } from '~/api/TournamentDetail';
import type { Achievement } from '~/api/Tournaments';

type Props = {
  detail: TournamentDetail;
};
const { detail } = defineProps<Props>();

const achievementText = (achievement: Achievement) => {
  switch (achievement.type) {
    case 'rank':
      if (achievement.rank === 0) return '出場';
      return `${achievement.rank}位以上`;
    case 'entry':
      return achievement.title;
    case 'represent':
      if (achievement.rank === true) return '代表出場';
      if (achievement.rank === false) return '代表出場・順位全て';
      return `代表出場 ${achievement.rank}位以上`;
  }
};
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
    <div class="pl-2 divdata">{{ detail.data.type }}</div>
  </div>
  <div class="flex" v-if="detail.data.type">
    <div class="w-16 divhead"></div>
    <div class="pl-2 divdata">
      <teamplate v-if="detail.data.official">
        <UIcon
          name="i-material-symbols-check-circle"
          style="vertical-align: -1px"
        />
        公式
      </teamplate>
      <template v-else>非公式</template>
    </div>
  </div>
  <div class="flex" v-if="detail.data.type">
    <div class="w-16 divhead">実績設定</div>
    <div class="pl-2 divdata">
      <template v-if="detail.data.achievement">
        <UIcon
          name="i-material-symbols-trophy-outline"
          style="vertical-align: -1px"
        />
        {{ achievementText(detail.data.achievement) }}
      </template>
      <template v-else>なし</template>
    </div>
  </div>
  <div class="flex" v-if="detail.data.type">
    <div class="w-16 divhead">レート</div>
    <div class="pl-2 divdata">
      <template v-if="detail.tournament.rating">
        <UIcon
          name="i-material-symbols-show-chart"
          style="vertical-align: -1px"
        />
        計算対象</template
      >
      <template v-else>計算非対象</template>
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
          <a :href="link.url">{{ link.title }}</a> ( {{ host(link.url) }} )
        </li>
      </ul>
    </div>
  </div>
</template>
