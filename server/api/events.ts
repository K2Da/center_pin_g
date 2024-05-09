import { serverQueryContent } from '#content/server';
import type { cdate } from 'cdate';
import { dayUrl, eventsFromTopics } from '~/utils/server/util';
import { cdateJST } from '~~/utils/helpers';

export default defineEventHandler(async (event) => {
  let events: { title: string; date: cdate.CDate }[] = eventsFromTopics(
    await serverQueryContent(event, '/topic').find()
  );

  // const current = cdateJST().startOf('day');
  const current = cdateJST().add(3, 'day').startOf('day');
  const filtered = events
    .filter((e) => current <= e.date && e.date <= current.endOf('day'))
    .sort((a, b) => a.date.toDate().getTime() - b.date.toDate().getTime());

  let posts = [];
  let res = '';
  const date = current.locale('ja').format(`M月D日(ddd)\n`);
  const url = dayUrl(current);
  const maxLength = 280 - plen(date) - plen(url);

  for (const e of filtered) {
    const text =
      e.date.get('second') === 1
        ? `--:-- ${e.title}\n`
        : `${e.date.format('HH:mm')} ${e.title}\n`;
    if (plen(res) + plen(text) > maxLength) {
      posts.push(date + res + url);
      res = '';
    } else {
      res += text;
    }
  }
  if (res !== '') {
    posts.push(date + res + url);
  }

  return { posts };
});

function plen(str: string) {
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (
      (c >= 0x0 && c < 0x81) ||
      c === 0xf8f0 ||
      (c >= 0xff61 && c < 0xffa0) ||
      (c >= 0xf8f1 && c < 0xf8f4)
    ) {
      length += 1;
    } else {
      length += 2;
    }
  }
  return length;
}
