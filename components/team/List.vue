<script setup lang="ts">
const statsStore = useStatsStore();
const { teams } = storeToRefs(statsStore);
const pageNoRef = ref(1);
const filterString = ref('');
const isMounted = ref(false);
let currentFilter = '';

const displayTeams = computed(() => {
  if (isMounted.value)
    localStorage.setItem('teamFilter', filterString.value.trim());

  return filterString.value.trim().length > 0
    ? teams.value.filter((s) => {
        let target = [s.name, ...s.names, ...s.members];
        return (
          target.filter((f) =>
            f.toLowerCase().includes(filterString.value.toLowerCase())
          ).length > 0
        );
      })
    : teams.value;
});

const maxPage = computed(() => {
  const max = Math.ceil(displayTeams.value.length / PER_PAGE);
  if (max < pageNoRef.value) pageNoRef.value = 1;
  return max;
});

const changePageNo = (v: number) => {
  pageNoRef.value = v;
  window.scroll({ top: 0, left: 0 });
};

const onFilterChange = (e: Event) => {
  currentFilter = e.target?.value;
  debouncedFilter();
};

const debouncedFilter = useDebounceFn(() => {
  filterString.value = currentFilter;
}, 1000);

onMounted(() => {
  isMounted.value = true;
  filterString.value = localStorage.getItem('teamFilter') || '';
});

onServerPrefetch(async () => {
  await statsStore.fetchTeamMasterOnSSR();
});
</script>

<template>
  <div>
    <div class="p-2">
      <input
        :value="filterString"
        @input="onFilterChange"
        placeholder="チーム名 / メンバー名"
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

    <div v-if="displayTeams">
      <div v-if="displayTeams.length > 0">
        <div
          class="tc border-t py-4 lg:pt-1 lg:pb-0"
          v-for="(t, i) of displayTeams.slice(
            (pageNoRef - 1) * PER_PAGE,
            pageNoRef * PER_PAGE
          )"
          :key="t.name"
          :class="containerClass(i)"
        >
          <div class="w-[24em] pl-1">
            {{ ((pageNoRef - 1) * PER_PAGE + i + 1).toLocaleString() }}.&nbsp;
            <TeamName
              :name="t.name"
              :currentName="t.name"
              class="font-bold lg:font-normal"
            />
          </div>
          <div class="w-[5em]">
            <span class="muted" v-if="t.names.length > 0"
              >(別名{{ t.names.length }}件)</span
            >
          </div>
          <div class="w-[4em]">
            {{ (t.rating ?? 0).toLocaleString() }}
          </div>
          <div class="w-[16em]">
            <span class="muted">出場: </span>
            {{ t.tournament_count }}
            <span class="muted">回 </span>
            <template v-if="t.top_1">
              <span class="muted">優勝: </span>
              {{ t.top_1 }}
              <span class="muted">回 </span>
            </template>
            <template v-if="t.top_4">
              <span class="muted">Top4: </span>
              {{ t.top_4 }}
              <span class="muted">回 </span>
            </template>
          </div>
          <div class="w-[7em]">
            {{ t.win }}
            <span class="muted">勝 </span>
            {{ t.lose }}
            <span class="muted">敗 </span>
          </div>
          <div class="w-[19em]">
            <DateSpan
              :date1="t.first_tournament_date"
              :date2="t.latest_tournament_date"
            />
          </div>
          <div class="w-[5em]">
            {{
              diffDays(t.latest_tournament_date, t.first_tournament_date) + 1
            }}
            <span class="muted">日 </span>
          </div>
          <div class="w-[38em] lgnowrap">
            <PlayersLine :names="t.members.slice(0, 5)" />
            <span v-if="t.members.length > 5" class="muted"
              >(他{{ t.members.length - 5 }}人)</span
            >
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
