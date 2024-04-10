import type { RankedPlayer } from '~/api/PlayerIndex';
import type { TeamIndex } from '~/api/TeamIndex';
import type { TournamentIndex } from '~/api/Tournaments';

export const t1Ratio = 0.01;
export const t2Ratio = 0.03;
export const t3Ratio = 0.09;
export const PER_PAGE = 100;

type RatingRange = { t1: number; t2: number; t3: number };
type SiteStats = {
  count: { player: number; tournament: number; team: number };
};

// 変更されないので、リアクティブではない変数で直接使う
export let rating: Record<string, number>;
export let ratingRange: RatingRange;

const createPlayersDic = (list: RankedPlayer[], t2: number) => {
  const playersDic: Record<string, number> = {};
  for (const player of list) {
    if (player.rating >= t2) {
      playersDic[player.name] = player.rating;
    }
  }
  return playersDic;
};

const createPlayersAlias = (list: RankedPlayer[]) => {
  const playersAlias: Record<string, string> = {};
  for (const player of list) {
    playersAlias[player.name] = player.name;
    if (player?.data?.aliases === undefined) continue;

    for (const alias of player.data?.aliases) {
      playersAlias[alias] = player.name;
    }
  }
  return playersAlias;
};

const createTeamAlias = (list: TeamIndex[]) => {
  const teamAlias: Record<string, string> = {};
  for (const team of list) {
    teamAlias[team.name] = team.name;
    for (const alias of team.names) {
      teamAlias[alias] = team.name;
    }
  }
  return teamAlias;
};

const createRateRange = (players: RankedPlayer[]) => {
  const t1 = players[Math.floor(players.length * t1Ratio)].rating;
  const t2 = players[Math.floor(players.length * t2Ratio)].rating;
  const t3 = players[Math.floor(players.length * t3Ratio)].rating;

  return { t1, t2, t3 };
};

export const useStatsStore = defineStore('stats', {
  state: () => ({
    players: [] as RankedPlayer[],
    ratingRange: { t1: 0, t2: 0, t3: 0 } as RatingRange,
    stats: { count: { player: 0, tournament: 0, team: 0 } } as SiteStats,
    rating: {} as Record<string, number>,
    tournaments: {} as TournamentIndex,
    teams: [] as TeamIndex[],
    teamAlias: {} as Record<string, string>,
  }),
  actions: {
    async fetch() {
      if (process.client) {
        // SSG/SSR時にデータをカットしているものは、全体を取得し直す
        fetchPlayerMaster().then((res) => {
          this.players = res;
        });
        fetchTeamMaster().then((res) => {
          this.teams = res;
        });
      } else {
        // SSG/SSR時に取得して、ページに埋め込むもの
        const players = await fetchPlayerMaster();
        this.tournaments = await fetchTournamentMaster();
        this.ratingRange = createRateRange(players);
        this.players = players.slice(0, PER_PAGE);
        this.rating = createPlayersDic(players, this.ratingRange.t3);
        const teams = (await fetchTeamMaster()) as TeamIndex[];
        this.teamAlias = createTeamAlias(teams);
        this.teams = teams.slice(0, PER_PAGE);

        this.stats.count = {
          player: players.length,
          tournament: this.tournaments.tournaments.length,
          team: teams.length,
        };
      }

      // 変更されないものはglobal変数で直接扱う
      ratingRange = this.ratingRange;
      rating = this.rating;
    },
  },
});
