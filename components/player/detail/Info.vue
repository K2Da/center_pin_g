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
  <div class="flex" v-if="detail.player.data?.aliases?.length > 0">
    <div class="w-24 divhead">大会出場名</div>
    <div class="pl-2 divdata">
      {{ detail.player.data.aliases.join(', ') }}
    </div>
  </div>
  <ClientOnly>
    <ResultsSum :resultsSum="resultsSum" />
  </ClientOnly>
  <div class="flex" v-if="detail.player.rating">
    <div class="w-24 divhead">ratings</div>
    <div class="pl-2 divdata">
      {{ detail.player.rating.toLocaleString() }}
    </div>
  </div>
  <div class="flex" v-if="detail.player.data">
    <div class="w-24 divhead">url</div>
    <div class="pl-2 divdata">
      <SocialAccounts
        :twitter="detail.player.data?.twitter"
        :youtube="detail.player.data?.youtube"
        :twitch="detail.player.data?.twitch"
      />
    </div>
  </div>
  <div class="flex">
    <div class="w-24 divhead">チーム</div>
    <div class="pl-2 divdata">
      <ul>
        <li v-for="(team, i) of data" :key="team.name">
          <template
            v-if="
              data.length <= 3 || i === 0 || i === data.length - 1 || showTeams
            "
          >
            <span class="muted"
              ><DateTime :date="team.lastMatchAt" :spacing="true" /></span
            >&nbsp;
            <TeamName :name="team.name" :currentName="team.name" />
            ({{ team.count }})
          </template>
          <button
            class="muted bg-slate-900 rounded"
            v-if="!showTeams && data.length > 3 && i === 1"
            @click="showOtherTeams"
          >
            /* 他{{ data.length - 2 }}チーム */
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
