<script setup lang="ts">
const statsStore = useStatsStore();
const { players } = storeToRefs(statsStore);

const pageNoRef = ref(1);
const displayPlayers = computed(() => {
  if (isMounted.value)
    localStorage.setItem('playerFilter', filterString.value.trim());

  if (filterString.value.trim().length > 0) {
    const filter = filterString.value.toLowerCase();
    const ret = players.value.filter((s) => {
      if (s.name.toLowerCase().includes(filter)) return true;
      if (s.latest.team.toLowerCase().includes(filter)) return true;
      if (s.data?.aliases) {
        if (s.data.aliases.some((a) => a.toLowerCase().includes(filter)))
          return true;
      }
      if (s.data?.twitter) {
        if (s.data.twitter.toLowerCase().includes(filter)) return true;
      }
      if (s.data?.twitch) {
        if (s.data.twitch.toLowerCase().includes(filter)) return true;
      }
    });
    return ret;
  } else {
    return players.value;
  }
});
const maxPage = computed(() => {
  const max = Math.ceil(displayPlayers.value.length / PER_PAGE);
  if (max < pageNoRef.value) pageNoRef.value = 1;
  return max;
});
const filterString = ref('');
const changePageNo = (v: number) => {
  pageNoRef.value = v;
  window.scroll({ top: 0, left: 0 });
};

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
  filterString.value = localStorage.getItem('playerFilter') || '';
});
</script>

<template>
  <div>
    <input
      v-model="filterString"
      placeholder="プレイヤー名 / チーム名 / SNSアカウント"
      style="box-sizing: border-box; width: 100%"
    />

    <ListPager :pageNo="pageNoRef" :maxPage="maxPage" @change="changePageNo" />

    <div v-if="displayPlayers">
      <div v-if="displayPlayers.length > 0">
        <div
          class="tc"
          v-for="(p, i) of displayPlayers.slice(
            (pageNoRef - 1) * PER_PAGE,
            pageNoRef * PER_PAGE,
          )"
          :key="p.name"
          :class="containerClass(i)"
        >
          <div style="width: 24em; padding-left: 4px">
            {{ p.rank.toLocaleString() }}.
            <PlayerName :name="p.name" :rating="p.rating" />
            <span class="muted" v-if="p.data?.aliases?.length > 0">
              ({{ p.data.aliases.slice(0, 3).join(', ')
              }}<span v-if="p.data?.aliases?.length > 3">
                + 他{{ p.data.aliases.length - 3 }}件</span
              >)
            </span>
          </div>
          <div style="width: 3em">
            {{ (p.rating ?? 0).toLocaleString() }}
          </div>
          <div style="width: 13em">
            {{ p.entries }} <span class="muted">大会</span>
            <span v-if="p.top_1 > 0"
              ><span class="muted"> 優勝</span> {{ p.top_1 }}
              <span class="muted">回</span></span
            >
            <span v-if="p.top_4 > 0"
              ><span class="muted"> Top4</span> {{ p.top_4 }}
              <span class="muted">回</span></span
            >
          </div>
          <div style="width: 6em">
            {{ p.win }} <span class="muted">勝</span> {{ p.lose }}
            <span class="muted">敗</span>
          </div>
          <div style="width: 14em">
            <TeamName
              :name="p.latest.team"
              :currentName="p.latest.team_current"
            />
          </div>
          <div style="width: 7em">
            <DateTime :date="p.latest.date" :spacing="false" />
          </div>
          <div style="width: 22em">
            <TournamentName
              :tournamentKey="p.latest.tournament_key"
              :name="p.latest.tournament_name"
            />
          </div>
          <div style="width: 21em" v-if="p.data">
            <SocialAccounts
              :twitter="p.data.twitter"
              :youtube="p.data.youtube"
              :twitch="p.data.twitch"
            />
          </div>
        </div>
      </div>
    </div>

    <ListPager :pageNo="pageNoRef" :maxPage="maxPage" @change="changePageNo" />
  </div>
</template>