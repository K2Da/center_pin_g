import type { TeamDetail } from '~/api/TeamDetail';

export const teamToView = (data: TeamDetail) => {
  for (const m of data.matches) {
    m.wl = m.opponent_team_key === m.loser_key;
    m.score_text = m.wl
      ? `${m.winner_score} - ${m.loser_score}`
      : `${m.loser_score} - ${m.winner_score}`;
  }

  const playerStats: Record<string, { tournament: number; count: number }> = {};
  for (const [i, t] of data.tournaments.entries()) {
    for (const p of t.player_list) {
      if (playerStats[p]) {
        playerStats[p].count++;
      } else {
        playerStats[p] = { tournament: i, count: 1 };
      }
    }
  }
  const players = Object.keys(playerStats);
  players.sort((p1: string, p2: string) =>
    playerStats[p1].tournament === playerStats[p2].tournament
      ? playerStats[p2].count - playerStats[p1].count
      : playerStats[p1].tournament - playerStats[p2].tournament,
  );

  return { ...data, players, playerStats };
};
