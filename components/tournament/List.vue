<script setup lang="ts">
import type { TournamentIndex } from '~~/api/Tournaments';

type Props = { group: TournamentIndex };
const { group } = defineProps<Props>();
let list: (
  | TournamentIndex['tournaments'][number]
  | TournamentIndex['groups'][number]
)[] = [];
list = list.concat(group.tournaments);
if (group.groups) list = list.concat(group.groups);
list = list.sort((a, b) => b.date - a.date);
</script>

<template>
  <div style="margin: 4px">
    <span class="muted">✔ 公式 📈 ratings計算対象 👾 複数グループあり</span>
  </div>
  <div v-if="list && list.length > 0">
    <div
      class="tc"
      v-for="(t, i) of list"
      :key="t.key"
      :class="containerClass(i)"
    >
      <template v-if="t.group_key">
        <div style="width: 6em; padding-left: 4px">
          <DateTime :date="t.date" :spacing="true" />
        </div>
        <div class="tac" style="width: 2em">
          <span class="muted">👾</span>
        </div>
        <div style="width: 29em">
          <GroupName :groupKey="t.group_key" :name="t.name" />
        </div>
        <div class="tar" style="width: 6em">
          {{ t.tournament_count }}
          <span class="muted">グループ</span>
        </div>
      </template>
      <template v-else>
        <div style="width: 6em; padding-left: 4px">
          <DateTime :date="t.date" :spacing="true" />
        </div>
        <div class="tac" style="width: 1em">
          <span v-if="t.info.official" class="muted">✔</span>
        </div>
        <div class="tac" style="width: 1em; padding-left: 0">
          <span v-if="t.rating" class="muted">📈</span>
        </div>
        <div style="width: 36em">
          <TournamentName :tournamentKey="t.key" :name="t.name" />
        </div>
      </template>
      <div class="tar" style="width: 5em">
        {{ t.team_count }}
        <span class="muted">チーム</span>
      </div>
      <div class="tar" style="width: 4em">
        {{ t.player_count }}
        <span class="muted">人</span>
      </div>
      <div class="tar" style="width: 4em">
        {{ t.match_count }}
        <span class="muted">試合</span>
      </div>
      <div style="width: 48em">
        <template
          v-for="team of group.tournament_winners[t.key]"
          :key="team.name"
        >
          <span class="muted">{{ team.rank }}. </span>
          <TeamName :name="team.name" :currentName="team.current_name" />
          &nbsp;
        </template>
      </div>
    </div>
  </div>
</template>