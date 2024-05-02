import { serverQueryContent } from '#content/server';
import type { cdate } from 'cdate';
import { dayUrl, eventsFromTopics } from '~/utils/server/util';
import { cdateJST } from '~~/utils/helpers';

export default defineEventHandler(async (event) => {
  let events: { title: string; date: cdate.CDate }[] = eventsFromTopics(
    await serverQueryContent(event, '/topic').find(),
  );

  const current = cdateJST().startOf('day');
  const filtered = events
    .filter((e) => current <= e.date && e.date <= current.endOf('day'))
    .sort((a, b) => a.date.toDate().getTime() - b.date.toDate().getTime());

  let res = '';
  let preDate = '';
  for (const e of filtered) {
    const date = e.date.format('DD日');
    if (preDate !== date) {
      res += `${date}\n`;
      preDate = date;
    }
    if (e.date.get('second') === 1) {
      res += `--:-- ${e.title}\n`;
    } else {
      res += `${e.date.format('HH:mm')} ${e.title}\n`;
    }
  }
  if (res !== '') res += dayUrl(current);

  return { text: res };
});
