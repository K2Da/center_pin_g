<script setup lang="ts">
const { tournament, rank, member } = defineProps<{
  tournament: string;
  rank: number;
  member: boolean;
}>();
const { data } = await useFetch(
  `${flare_host()}/tournament/${tournament}/summary/${rank}`,
);
</script>
<template>
  <div
    :class="[
      containerClass(2),
      'max-w-[600px]',
      'px-2',
      'pt-4',
      'pb-3',
      'border-y-2',
    ]"
  >
    <div class="font-bold">
      <TournamentName
        :tournamentKey="tournament"
        :name="data.tournament.name"
      />
    </div>
    <div>
      <DateTime :date="data.tournament.date" /><span class="muted">開催</span>
      {{ data.tournament.team_count }}<span class="muted">チーム</span>
      {{ data.tournament.player_count }}<span class="muted">人</span>
      {{ data.tournament.match_count }}<span class="muted">試合</span>
    </div>
  </div>
  <div
    v-for="(team, i) of data.teams"
    :key="i"
    :class="[containerClass(i + 1), 'max-w-[600px]', 'vtable', 'pt-2', 'pb-2']"
  >
    <div>
      <div class="font-bold pl-1">
        {{ team.team_rank }}<span class="muted">位</span>
      </div>
      <div>
        <TeamName
          :name="team.team_name"
          :currentName="team.team_current_name"
          class="font-bold"
        />
        ( {{ team.win }}<span class="muted">勝</span> {{ team.lose
        }}<span class="muted">敗</span> )
      </div>
    </div>
    <div>
      <div class="muted text-right">敗戦</div>
      <div class="pl-2">
        <ul class="vanila" v-if="team.lost_team.length > 0">
          <li v-for="lost of team.lost_team" class="vanila">
            <TeamName :name="lost.name" currentName="lost.current_name" />
            ( {{ lost.rank }}位 )
          </li>
        </ul>
        <template v-else>-</template>
      </div>
    </div>
    <div v-if="member">
      <div class="muted text-right">編成</div>
      <div class="flex">
        <ul class="vanila">
          <li v-for="member of team.members" class="vanila">
            <PlayerName :name="member" />
            <template v-if="data.previousTeams[member]">
              (
              <TeamName
                :name="data.previousTeams[member]"
                :currentName="data.previousTeams[member]"
              />
              )
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
