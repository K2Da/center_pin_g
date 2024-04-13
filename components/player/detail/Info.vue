<script setup lang="ts">
import type { PlayerDetail } from '~/api/PlayerDetail';
import type { Result } from '~/types/result';
type Props = {
  detail: PlayerDetail;
  resultsSum?: Result;
};
const { detail, resultsSum } = defineProps<Props>();

const teamsData = (detail: PlayerDetail) => {
  const teams: Record<
    string,
    { name: string; count: number; lastMatchAt: number }
  > = {};
  for (const tournament of detail.tournaments) {
    const name = tournament.team_current_name;
    if (teams[name]) {
      teams[name].count += 1;
      teams[name].lastMatchAt = Math.max(
        tournament.tournament_date,
        teams[name].lastMatchAt,
      );
    } else {
      teams[name] = { name, count: 1, lastMatchAt: tournament.tournament_date };
    }
  }
  return Object.values(teams).sort((a, b) => a.lastMatchAt - b.lastMatchAt);
};

const showOtherTeams = () => {
  showTeams.value = true;
};
const showTeams = ref(false);
const data = computed(() => teamsData(detail));
</script>
<template>
  <ul>
    <li v-if="detail.player.data?.aliases?.length > 0">
      <span class="text-sm">大会出場名: </span>
      {{ detail.player.data.aliases.join(', ') }}
    </li>
    <ClientOnly>
      <ResultsSum :resultsSum="resultsSum" />
    </ClientOnly>
    <li v-if="detail.player.rating">
      <span class="text-sm">ratings: </span>
      {{ detail.player.rating.toLocaleString() }}
    </li>
    <li v-if="detail.player.data">
      <span class="text-sm">url: </span>
      <SocialAccounts
        :twitter="detail.player.data?.twitter"
        :youtube="detail.player.data?.youtube"
        :twitch="detail.player.data?.twitch"
      />
    </li>
    <li>
      <span class="text-sm">チーム</span>
      <ul>
        <li v-for="(team, i) of data" :key="team.name">
          <template
            v-if="
              data.length <= 3 || i === 0 || i === data.length - 1 || showTeams
            "
          >
            <span class="text-sm"
              ><DateTime :date="team.lastMatchAt" :spacing="true" /></span
            >&nbsp;
            <TeamName :name="team.name" :currentName="team.name" />
            ({{ team.count }})
          </template>
          <button
            class="text-sm bg-slate-900 rounded"
            v-if="!showTeams && data.length > 3 && i === 1"
            @click="showOtherTeams"
          >
            /* 他{{ data.length - 2 }}チーム */
          </button>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style>
button {
  padding: 1px 20px;
  margin: 6px;
}
</style>
