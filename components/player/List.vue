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
onServerPrefetch(async () => {
  await statsStore.fetchPlayerMasterOnSSR();
});
</script>

<template>
  <div>
    <div class="p-2">
      <input
        v-model="filterString"
        placeholder="プレイヤー名 / チーム名 / SNSアカウント"
        class="w-full p-2"
      />
    </div>

    <ClientOnly>
      <ListPager
        :pageNo="pageNoRef"
        :maxPage="maxPage"
        @change="changePageNo"
      />
    </ClientOnly>

    <div v-if="displayPlayers">
      <div v-if="displayPlayers.length > 0">
        <div
          class="tc py-4 lg:pt-2 lg:pb-1"
          v-for="(p, i) of displayPlayers.slice(
            (pageNoRef - 1) * PER_PAGE,
            pageNoRef * PER_PAGE,
          )"
          :key="p.name"
          :class="containerClass(i)"
        >
          <div class="lgnowrap w-[24em] pl-1">
            {{ p.rank.toLocaleString() }}.
            <PlayerName
              :name="p.name"
              :rating="p.rating"
              class="font-bold lg:font-normal"
            />
            <span class="muted" v-if="p.data?.aliases?.length > 0">
              ({{ p.data.aliases.slice(0, 3).join(', ')
              }}<span v-if="p.data?.aliases?.length > 3">
                + 他{{ p.data.aliases.length - 3 }}件</span
              >)
            </span>
          </div>
          <div class="w-[4em]">
            {{ (p.rating ?? 0).toLocaleString() }}
          </div>
          <div class="w-[14em]">
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
          <div class="w-[7em]">
            {{ p.win }} <span class="muted">勝</span> {{ p.lose }}
            <span class="muted">敗</span>
          </div>
          <div class="w-[14em] lgnowrap">
            <TeamName
              :name="p.latest.team"
              :currentName="p.latest.team_current"
            />
          </div>
          <div class="w-[8em]">
            <DateTime :date="p.latest.date" :spacing="false" />
          </div>
          <div class="w-[22em] lgnowrap">
            <TournamentName
              :tournamentKey="p.latest.tournament_key"
              :name="p.latest.tournament_name"
            />
          </div>
          <div v-if="p.data" class="w-[21em] lgnowrap">
            <SocialAccounts
              :twitter="p.data.twitter"
              :youtube="p.data.youtube"
              :twitch="p.data.twitch"
            />
          </div>
        </div>
      </div>
    </div>

    <ClientOnly>
      <ListPager
        :pageNo="pageNoRef"
        :maxPage="maxPage"
        @change="changePageNo"
      />
    </ClientOnly>
  </div>
</template>
