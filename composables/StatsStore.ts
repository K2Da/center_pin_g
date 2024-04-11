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

const createRateRange = (players: RankedPlayer[]) => {
  const t1 = players[Math.floor(players.length * t1Ratio)].rating;
  const t2 = players[Math.floor(players.length * t2Ratio)].rating;
  const t3 = players[Math.floor(players.length * t3Ratio)].rating;

  return { t1, t2, t3 };
};

export const useStatsStore = defineStore('stats', {
  state: () => ({
    players: [] as RankedPlayer[],
    ratingRange: { t1: 0, t2: 0, t3: 0 } as RatingRange, // 小さい
    stats: { count: { player: 0, tournament: 0, team: 0 } } as SiteStats,
    ratingDic: {} as Record<string, number>,
    tournaments: {} as TournamentIndex,
    teams: [] as TeamIndex[],
  }),
  actions: {
    async fetch() {
      if (process.client) {
        // SSG/SSR時にデータをカットしているものは、全体を取得し直す
        fetchPlayerMaster().then((res) => {
          this.players = res;
          this.ratingRange = createRateRange(this.players);
          this.ratingDic = createPlayersDic(this.players, this.ratingRange.t3);
        });
        fetchTeamMaster().then((res) => {
          this.teams = res;
        });
        this.tournaments = await fetchTournamentMaster();
      } else {
        // SSG/SSR時に取得して、ページに埋め込むもの
        // const teams = (await fetchTeamMaster()) as TeamIndex[];
        // this.teams = teams.slice(0, PER_PAGE);
        /*
        this.stats.count = {
          player: players.length,
          tournament: this.tournaments.tournaments.length,
          team: teams.length,
        };
        */
      }
    },
    async fetchTournamentsOnSSR() {
      if (!process.client) this.tournaments = await fetchTournamentMaster();
    },
    async fetchPlayerMasterOnSSR() {
      if (!process.client) {
        const players = await fetchPlayerMaster();
        this.players = players.slice(0, PER_PAGE);
      }
    },
    async fetchTeamMasterOnSSR() {
      if (!process.client) {
        const teams = await fetchTeamMaster();
        this.teams = teams.slice(0, PER_PAGE);
      }
    },
  },
});
