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
  <div class="m-1">
    <span class="muted">
      <UIcon
        name="i-material-symbols-check-circle"
        style="vertical-align: -1px"
        class="ml-2"
      />
      公式
      <UIcon
        name="i-material-symbols-trophy-outline"
        style="vertical-align: -1px"
        class="ml-2"
      />
      実績設定
      <UIcon
        name="i-material-symbols-show-chart"
        style="vertical-align: -1px"
        class="ml-2"
      />
      ratings計算対象
      <UIcon
        name="i-material-symbols-auto-awesome-motion-outline"
        style="vertical-align: -1px"
        class="ml-2"
      />
      複数大会グループ
    </span>
  </div>
  <div v-if="list && list.length > 0">
    <div
      class="tc py-3 border-t lg:pt-1 lg:pb-0"
      v-for="(t, i) of list"
      :key="t.key"
      :class="containerClass(i)"
    >
      <template v-if="t.group_key">
        <div class="pl-0 lg:pl-1 w-[29em] font-bold lg:font-normal">
          <GroupName :groupKey="t.group_key" :name="t.name" />
        </div>
        <div class="text-right w-[7em]">
          {{ t.tournament_count }}
          <span class="muted">グループ</span>
        </div>
        <div class="w-[8em]">
          <DateTime :date="t.date" :spacing="true" />
        </div>
        <div class="text-center w-[3em]">
          <span class="muted">
            <span class="muted"
              ><UIcon
                name="i-material-symbols-auto-awesome-motion-outline"
                style="vertical-align: -1px"
            /></span>
          </span>
        </div>
      </template>
      <template v-else>
        <div class="w-[36em] pl-1 font-bold lg:font-normal">
          <TournamentName :tournamentKey="t.key" :name="t.name" />
        </div>
        <div class="w-[8em]">
          <DateTime :date="t.date" :spacing="true" />
        </div>
        <div class="text-center w-[1em]">
          <span v-if="t.info.official" class="muted">
            <UIcon
              name="i-material-symbols-check-circle"
              style="vertical-align: -1px"
            />
          </span>
        </div>
        <div class="text-center w-[1em] pl-0">
          <span v-if="t.info.achievement" class="muted">
            <span class="muted"
              ><UIcon
                name="i-material-symbols-trophy-outline"
                style="vertical-align: -1px"
            /></span>
          </span>
        </div>
        <div class="text-center w-[1em] pl-0">
          <span v-if="t.rating" class="muted">
            <span class="muted"
              ><UIcon
                name="i-material-symbols-show-chart"
                style="vertical-align: -1px"
            /></span>
          </span>
        </div>
      </template>
      <div class="text-right w-[6em]">
        {{ t.team_count }}
        <span class="muted">チーム</span>
      </div>
      <div class="text-right w-[5em]">
        {{ t.player_count }}
        <span class="muted">人</span>
      </div>
      <div class="text-right w-[5em]">
        {{ t.match_count }}
        <span class="muted">試合</span>
      </div>
      <div class="w-[48em]">
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
