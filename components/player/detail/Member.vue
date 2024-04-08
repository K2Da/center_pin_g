<script setup lang="ts">
import type { ComputedRef } from 'vue';
import type { PlayerDetail } from '~/api/PlayerDetail';
type Props = { detail: PlayerDetail; };
const { detail } = defineProps<Props>();

const statsStore = useStatsStore();
const { players } = storeToRefs(statsStore);

const reversedTournaments = computed(() => detail.tournaments.slice().reverse());
const latestTeams: ComputedRef<Record<string, string>> = computed(() => {
  const ret: Record<string, string> = {};
  if (players.value) {
    for (const p of members.value) {
      ret[p] = players.value.filter(obj => obj.name === p)[0]?.latest.team_current || '';
    }
  }
  return ret;
});
const entries = computed(() => {
  const onOff: Record<string, number[]> = {};
  for (const p of members.value) {
    onOff[p] = [];
    for (const [i, t] of reversedTournaments.value.entries()) {
      if (t.mate_list.indexOf(p) !== -1) onOff[p].push(i);
    }
  }
  const ret: Record<string, string[]> = {};
  for (const p of members.value) {
    ret[p] = [];
    for (let i = 0; i < reversedTournaments.value.length; i++) {
      const all = onOff[p];
      let img = '';
      const min = Math.min(...all);
      const max = Math.max(...all);
      const current = i === reversedTournaments.value.length - 1;
      if (all.includes(i)) {
        if (all.length === 1) img = current ? 'one' : 'spot';
        else if (min === i) img = 'start';
        else if (max === i) img = current ? 'current' : 'end';
        else img = 'on';
      } else {
        if (min < i && i <max) img = 'off';
      }
      ret[p].push(img);
    }
  }
  return ret;
});
const members = computed(() => {
  const dic: Record<string, [number, number]> = {};
  for (const [i, t] of detail.tournaments.entries()) {
    for (const m of t.mate_list) {
      if (dic[m]) {
        dic[m] = [Math.min(dic[m][0], i), dic[m][1] + 1];
      } else {
        dic[m] = [i, 1];
      }
    }
  }
  return Object.keys(dic).sort((p1, p2) => {
    if (dic[p1][0] === dic[p2][0]) {
      return dic[p2][1] - dic[p1][1];
    } else {
      return dic[p1][0] - dic[p2][0];
    }
  });
});
</script>
<template>
  <h2>出場メンバー</h2>
  <div style="overflow-y: scroll">
    <table :style="{ width: `${ 14 + 3 * reversedTournaments.length + 12 }em` }">
      <thead>
        <tr>
          <th></th>
          <th class="tac" style="width: 3em; padding-left: 0; padding-right:0; margin-left: 0; margin-right: 0" v-for="(t, i) of reversedTournaments" :key="i">
            {{ i + 1 }}
          </th>
          <th class="tal nw" style="width: 12em">最新チーム</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p of members" :key="p">
          <td class="tal"><PlayerName :name="p" page="member" /></td>
          <td v-for="(entry, i) of entries[p]" :key="i" class="tight">
            <template v-if="entry !== ''">
              <img :src="`/parts/${entry}.svg`" style="width: 3em; height: 2em;" />
            </template>
          </td>
          <td class="tal">
            <span v-if="latestTeams[p]">
              <TeamName :name="latestTeams[p]" :currentName="latestTeams[p]" v-if="latestTeams[p]" page="member" />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li v-for="(t, i) of reversedTournaments" :key="i">
        {{ i + 1 }}.
        <DateTime :date="t.tournament_date" :spacing="true" />
        &nbsp;
        <TournamentName :name="t.tournament_name" :tournamentKey="t.tournament_key" />
        /
        <TeamName :name="t.team_name" :currentName="t.team_current_name" />
        &nbsp;
        (<ResultRank :rank="t.team_result" />)
      </li>
    </ul>
  </div>
</template>