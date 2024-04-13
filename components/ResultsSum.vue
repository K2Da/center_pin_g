<script setup lang="ts">
import type { Result } from '~/types/result';

type Props = { resultsSum: Result };
const { resultsSum } = defineProps<Props>();
</script>

<template>
  <li v-if="resultsSum.tournaments.total.entry > 0">
    <TournamentSum :result="resultsSum.tournaments.total" />
    <ul>
      <li v-if="resultsSum.tournaments.official.entry > 0">
        <span class="text-sm">公式</span>
        <TournamentSum :result="resultsSum.tournaments.official" />
      </li>
      <li v-if="resultsSum.tournaments.unofficial.entry > 0">
        <span class="text-sm">非公式</span>
        <TournamentSum :result="resultsSum.tournaments.unofficial" />
      </li>
    </ul>
  </li>
  <li v-if="resultsSum.matches.total.win + resultsSum.matches.total.lose > 0">
    <span class="text-sm">通算: </span>
    <MatchSum :result="resultsSum.matches.total" />
    <ul>
      <li
        v-if="
          resultsSum.matches.official.win + resultsSum.matches.official.lose > 0
        "
      >
        <span class="text-sm">公式大会: </span>
        <MatchSum :result="resultsSum.matches.official" />
      </li>
      <li
        v-if="
          resultsSum.matches.unofficial.win +
            resultsSum.matches.unofficial.lose >
          0
        "
      >
        <span class="text-sm">非公式大会: </span>
        <MatchSum :result="resultsSum.matches.unofficial" />
      </li>
    </ul>
  </li>
</template>
