import type { TeamDetail } from '~/api/TeamDetail';
import type { PlayersResult, RankedPlayer } from '~/api/PlayerIndex';
import type { TeamIndex } from '~/api/TeamIndex';
import type { TournamentIndex } from '~/api/Tournaments';
import type { TournamentDetail } from '~/api/TournamentDetail';
// piniaから使うものはpayloadを残す必要がないので$fetchを使う
// そうでないものは、useFetchを使う
const FLARE_PREFIX = 'https://flare.center-ping.workers.dev';
// const FLARE_PREFIX = 'http://localhost:8787';
const FLARE_DATA = `${FLARE_PREFIX}/blue`;

export const flare_host = () => FLARE_DATA;

export const fetchPlayerMaster = async () => {
  const players = (await $fetch(
    `${flare_host()}/players/list`,
  )) as PlayersResult[];
  const rankedPlayers: RankedPlayer[] = [];
  let prev = { rank: 0, rating: 0 };
  for (const [current, p] of players.entries()) {
    const rank = p.rating === prev.rating ? prev.rank : current + 1;
    rankedPlayers.push({ ...p, rank });
    prev = { rank, rating: p.rating };
  }
  return rankedPlayers;
};

export const fetchTeamMaster = async () => {
  return (await $fetch(`${flare_host()}/teams/list`)) as TeamIndex[];
};

export const fetchTournamentMaster = async () => {
  return (await $fetch(`${flare_host()}/tournaments/list`)) as TournamentIndex;
};

export const fetchPlayerDetail = async (playerHash: string) => {
  const { data } = await useFetch(`${FLARE_DATA}/player/${playerHash}`);
  for (const m of data.value.matches) {
    m.wl = m.opponent_team_key === m.loser_key;
    m.score_text = m.wl
      ? `${m.winner_score} - ${m.loser_score}`
      : `${m.loser_score} - ${m.winner_score}`;
  }
  return data.value;
};

export const fetchTeamDetail = async (teamHash: string) => {
  const { data } = await useFetch(`${FLARE_DATA}/team/${teamHash}`);
  return data.value;
};

export const fetchTournamentDetail = async (tournamentKey: string) => {
  const { data } = await useFetch(`${FLARE_DATA}/tournament/${tournamentKey}`);
  return data.value;
};

export const fetchTournamentGroup = async (groupKey: string) => {
  return (await $fetch(
    `${FLARE_DATA}/tournaments/group/${groupKey}`,
  )) as TournamentIndex;
};

export const postContactForm = async (text: string) => {
  return await useFetch(`${FLARE_PREFIX}/contact/send`, {
    method: 'POST',
    body: { text },
  });
};
