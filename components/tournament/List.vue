<script setup lang="ts">
import type { TournamentIndex } from '~~/api/Tournaments';

type Props = { group: TournamentIndex };
const { group } = defineProps<Props>();
let list: (
  | TournamentIndex['tournaments'][number]
  | TournamentIndex['groups'][number]
)[] = [];
if (group.tournaments) list = list.concat(group.tournaments);
if (group.groups) list = list.concat(group.groups);
list = list.sort((a, b) => b.date - a.date);
</script>

<template>
  <div style="margin: 4px">
    <span class="muted">✔ 公式 📈 ratings計算対象 👾 複数グループあり</span>
  </div>
  <div v-if="list && list.length > 0">
    <div
      class="tc py-3 lg:py-1"
      v-for="(t, i) of list"
      :key="t.key"
      :class="containerClass(i)"
    >
      <template v-if="t.group_key">
        <div class="pl-0 lg:pl-1 w-[29em] font-bold lg:font-normal">
          <GroupName :groupKey="t.group_key" :name="t.name" />
        </div>
        <div class="text-right" style="width: 7em">
          {{ t.tournament_count }}
          <span class="muted">グループ</span>
        </div>
        <div style="width: 7em">
          <DateTime :date="t.date" :spacing="true" />
        </div>
        <div class="text-center" style="width: 2em">
          <span class="muted">👾</span>
        </div>
      </template>
      <template v-else>
        <div style="width: 36em" class="pl-1 font-bold lg:font-normal">
          <TournamentName :tournamentKey="t.key" :name="t.name" />
        </div>
        <div style="width: 7em">
          <DateTime :date="t.date" :spacing="true" />
        </div>
        <div class="text-center" style="width: 1em">
          <span v-if="t.info.official" class="muted">✔</span>
        </div>
        <div class="text-center" style="width: 1em; padding-left: 0">
          <span v-if="t.rating" class="muted">📈</span>
        </div>
      </template>
      <div class="text-right" style="width: 6em">
        {{ t.team_count }}
        <span class="muted">チーム</span>
      </div>
      <div class="text-right" style="width: 5em">
        {{ t.player_count }}
        <span class="muted">人</span>
      </div>
      <div class="text-right" style="width: 5em">
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
