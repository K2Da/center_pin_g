<script setup lang="ts">
import type { ComputedRef } from 'vue';
import type { TeamDetailView } from '~/api/TeamDetail';

type Props = { detail: TeamDetailView };
const { detail } = defineProps<Props>();
const statsStore = useStatsStore();
const { players } = storeToRefs(statsStore);

const reversedTournaments = computed(() =>
  detail.tournaments.slice().reverse(),
);
const latestTeams: ComputedRef<Record<string, string>> = computed(() => {
  const ret: Record<string, string> = {};
  if (players.value) {
    for (const p of detail.players) {
      ret[p] =
        players.value.filter((obj) => obj.name === p)[0]?.latest.team_current ||
        '';
      if (ret[p] === detail.team.name) ret[p] = '';
    }
  }
  return ret;
});
const entries = computed(() => {
  const onOff: Record<string, number[]> = {};
  for (const p of detail.players) {
    onOff[p] = [];
    for (const [i, t] of reversedTournaments.value.entries()) {
      if (t.player_list.indexOf(p) !== -1) onOff[p].push(i);
    }
  }
  const ret: Record<string, string[]> = {};
  for (const p of detail.players) {
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
        if (min < i && i < max) img = 'off';
      }
      ret[p].push(img);
    }
  }
  return ret;
});
</script>
<template>
  <h2 class="mb-2">出場メンバー</h2>
  <div class="m-2 overflow-y-scroll">
    <table
      :style="{
        width: `${12 + 12 + 3 * reversedTournaments.length + 12}em`,
      }"
    >
      <thead>
        <tr>
          <th class="w-[12em]"></th>
          <th class="text-left w-[12em]">前チーム</th>
          <th
            class="text-center w-[3em] px-0 mx-0"
            v-for="(t, i) of reversedTournaments"
            :key="i"
          >
            {{ i + 1 }}
          </th>
          <th class="text-left nw w-[12em]">最新チーム</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p of detail.players" :key="p">
          <td class="text-left"><PlayerName :name="p" page="member" /></td>
          <td class="text-left">
            <template v-if="detail.previous_teams[p]">
              <TeamName
                :name="detail.previous_teams[p]"
                :currentName="detail.previous_teams[p]"
                page="member"
              />
            </template>
          </td>
          <td v-for="(entry, i) of entries[p]" :key="i" class="p-0 m-0">
            <template v-if="entry !== ''">
              <img :src="`/parts/${entry}.svg`" class="w-[3em] h-[2em]" />
            </template>
          </td>
          <td class="text-left">
            <span v-if="latestTeams[p]">
              <TeamName
                :name="latestTeams[p]"
                :currentName="latestTeams[p]"
                v-if="latestTeams[p]"
                page="member"
              />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ul class="my-2">
    <li v-for="(t, i) of reversedTournaments" :key="i">
      {{ i + 1 }}.
      <DateTime :date="t.tournament_date" :spacing="true" />
      &nbsp;
      <TournamentName
        :name="t.tournament_name"
        :tournamentKey="t.tournament_key"
      />
      &nbsp; (<ResultRank :rank="t.result" />)
    </li>
  </ul>
</template>
