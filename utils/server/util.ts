import type { ParsedContent } from '@nuxt/content/types';
import type { cdate } from 'cdate';
import { cdateJST } from '~~/utils/helpers';

export function eventsFromTopics(topics: ParsedContent[]) {
  let events: { title: string; date: cdate.CDate }[] = [];
  for (const topic of topics) {
    for (const date of topic.dates) {
      events.push({
        title: `${topic.title || ''} ${date.title}`,
        date: cdateJST(date.date),
      });
    }
  }
  return events;
}

export function dayUrl(date: cdate.CDate) {
  return `https://center-ping.pages.dev/calendar/${date.get('year')}/${date.get('month') + 1}/${date.get('date')}`;
}
