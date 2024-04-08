export const containerClass = (row: number) => {
  return [row % 2 === 1 ? 'tcb' : 'tca', row === 0 ? 'tc1' : undefined];
};

export const subContainerClass = (
  row: number,
  parentRow: number,
  total: number
) => {
  return [
    (row + parentRow) % 2 === 1 ? 'tca' : 'tcb',
    row === 0 && 'stc1',
    row === total - 1 && 'stcL',
  ];
};

export const diffDays = (date1: number, date2: number): number => {
  const d1 = new Date(date1).setHours(0, 0, 0, 0);
  const d2 = new Date(date2).setHours(0, 0, 0, 0);
  return Math.round((d1 - d2) / 1000.0 / 60.0 / 60.0 / 24.0);
};

export const sha1 = (txt: string): string => {
  return createHash().update(txt).digest('hex');
};

export const ratingClass = (player: string) => {
  const r = rating[player] ?? 0;
  if (ratingRange) {
    if (r > ratingRange.t1) return 't1';
    if (r > ratingRange.t2) return 't2';
    if (r > ratingRange.t3) return 't3';
  }
  return 't4';
};
