<script setup lang="ts">
import type { Result } from '~/types/result';

type Props = { resultsSum: Result };
const { resultsSum } = defineProps<Props>();
</script>

<template>
  <div class="flex" v-if="resultsSum.tournaments.total.entry > 0">
    <div class="w-24 divhead">総合</div>
    <div class="pl-2 divdata">
      <TournamentSum :result="resultsSum.tournaments.total" />
    </div>
  </div>
  <div class="flex" v-if="resultsSum.tournaments.official.entry > 0">
    <div class="w-24 divhead">公式</div>
    <div class="pl-2 divdata">
      <TournamentSum :result="resultsSum.tournaments.official" />
    </div>
  </div>
  <div class="flex" v-if="resultsSum.tournaments.unofficial.entry > 0">
    <div class="w-24 divhead">非公式</div>
    <div class="pl-2 divdata">
      <TournamentSum :result="resultsSum.tournaments.unofficial" />
    </div>
  </div>
  <div
    class="flex"
    v-if="resultsSum.matches.total.win + resultsSum.matches.total.lose > 0"
  >
    <div class="w-24 divhead">総合</div>
    <div class="pl-2 divdata">
      <MatchSum :result="resultsSum.matches.total" />
    </div>
  </div>
  <div
    class="flex"
    v-if="
      resultsSum.matches.official.win + resultsSum.matches.official.lose > 0
    "
  >
    <div class="w-24 divhead">公式</div>
    <div class="pl-2 divdata">
      <MatchSum :result="resultsSum.matches.official" />
    </div>
  </div>
  <div
    class="flex"
    v-if="
      resultsSum.matches.unofficial.win + resultsSum.matches.unofficial.lose > 0
    "
  >
    <div class="w-24 divhead">非公式</div>
    <div class="pl-2 flex-grow">
      <MatchSum :result="resultsSum.matches.unofficial" />
    </div>
  </div>
</template>
