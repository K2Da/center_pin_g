import type { TournamentIndex, Tournaments } from '~/api/Tournaments';

const isOfficial = (key: string, tournaments: TournamentIndex): boolean => {
  const info = tournaments.tournaments.find((t: Tournaments) => {
    return t.info?.key === key;
  })?.info;
  // groupになってる場合はinfoがない。現状、challenge dayしかないので、その場合はofficialとする
  return !info || info.official === true;
};

export const countTournamentResult = (
  matches: { key: string; wl: boolean }[],
  tournaments: { key: string; result: number }[],
  tournamentIndex: TournamentIndex,
) => {
  const wl = () => ({ win: 0, lose: 0 });
  const ett = () => ({ entry: 0, top1: 0, top4: 0 });
  const ret = {
    matches: { official: wl(), unofficial: wl(), total: wl() },
    tournaments: { official: ett(), unofficial: ett(), total: ett() },
  };
  for (const match of matches) {
    const obj = isOfficial(match.key, tournamentIndex)
      ? ret.matches.official
      : ret.matches.unofficial;
    if (match.wl) {
      ret.matches.total.win += 1;
      obj.win += 1;
    } else {
      ret.matches.total.lose += 1;
      obj.lose += 1;
    }
  }
  for (const tournament of tournaments) {
    const obj = isOfficial(tournament.key, tournamentIndex)
      ? ret.tournaments.official
      : ret.tournaments.unofficial;
    ret.tournaments.total.entry += 1;
    obj.entry += 1;
    if (tournament.result === 1) {
      ret.tournaments.total.top1 += 1;
      obj.top1 += 1;
    }
    if (tournament.result <= 4) {
      ret.tournaments.total.top4 += 1;
      obj.top4 += 1;
    }
  }
  return ret;
};
