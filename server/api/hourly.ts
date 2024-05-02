import { serverQueryContent } from '#content/server';
import type { cdate } from 'cdate';
import { dayUrl, eventsFromTopics } from '~/utils/server/util';
import { cdateJST } from '~~/utils/helpers';

/**
 * 次の0分から、1時間後までの予定を取得する
 */
export default defineEventHandler(async (event) => {
  let events: { title: string; date: cdate.CDate }[] = eventsFromTopics(
    await serverQueryContent(event, '/topic').find(),
  );

  const from = cdateJST().startOf('hour').add(1, 'hour');
  const to = from.add(1, 'hour');
  // 日付のみのデータはラストが1秒になってるのでフィルタする
  const filtered = events
    .filter((e) => from <= e.date && e.date <= to && e.date.get('second') === 0)
    .sort((a, b) => a.date.toDate().getTime() - b.date.toDate().getTime());

  let res: { minutes: number; events: string[]; url: string }[] = [];
  let preMin = null;
  let minEvents: string[] = [];
  for (const e of filtered) {
    const min = e.date.get('minute');

    if (preMin !== min) {
      if (preMin !== null)
        res.push({ minutes: preMin, events: minEvents, url: dayUrl(from) });
      minEvents = [];
      preMin = min;
    }

    minEvents.push(e.title);
  }
  if (preMin !== null)
    res.push({ minutes: preMin, events: minEvents, url: dayUrl(from) });

  return res;
});
