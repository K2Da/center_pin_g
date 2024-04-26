import { serverQueryContent } from '#content/server';
import type { cdate } from 'cdate';
import { cdateJST } from '../../utils/helpers';

export default defineEventHandler(async (event) => {
  const current = cdateJST().startOf('day').add(9, 'hours');

  const topics = await serverQueryContent(event, '/topic').find();
  let events: { title: string; date: cdate.CDate }[] = [];
  for (const topic of topics) {
    for (const date of topic.dates) {
      events.push({
        title: `${topic.title || ''} ${date.title}`,
        date: cdateJST(date.date),
      });
    }
  }

  const filtered = events
    .filter((e) => e.date >= current && e.date < current.add(1, 'day'))
    .sort((a, b) => a.date.toDate().getTime() - b.date.toDate().getTime());

  let res = '';
  let preDate = '';
  for (const e of filtered) {
    const date = e.date.format('DD日');
    if (preDate !== date) {
      res += `${date}\n`;
      preDate = date;
    }
    res += `${e.date.format('HH:mm')} ${e.title}\n`;
  }
  if (res !== '') {
    res += `https://center-ping.pages.dev/calendar/${current.get('year')}/${current.get('month') + 1}/${current.get('date')}`;
  }

  return { text: res };
});
