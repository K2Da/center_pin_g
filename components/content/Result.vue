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
    class="vtable"
    v-for="(team, i) of data.teams"
    :key="i"
    :class="containerClass(i)"
    style="margin-left: 12px; max-width: 600px"
  >
    <div>
      <div style="width: 4em">
        {{ team.team_rank }}<span class="muted">位</span>
      </div>
      <div style="width: 24em">
        <TeamName
          :name="team.team_name"
          :currentName="team.team_current_name"
        />
        ( {{ team.win }}<span class="muted">勝</span> {{ team.lose
        }}<span class="muted">敗</span> )
      </div>
    </div>
    <div>
      <div style="width: 4em">敗</div>
      <div style="width: 24em">
        <ul class="vanila" v-if="team.lost_team.length > 0">
          <li v-for="lost of team.lost_team" class="vanila">
            <TeamName :name="lost.name" />
            ( {{ lost.rank }}位 )
          </li>
        </ul>
        <template v-else>-</template>
      </div>
    </div>
    <div v-if="member">
      <div style="width: 4em">編成</div>
      <div style="width: 24em; display: flex">
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
