import { sub, add } from "date-fns";
import { LOCALE } from "./constants";
import type { Event } from "@prisma/client";

export function getFirstDayOfWeek(): number {
  // @ts-ignore
  return (new Intl.Locale(LOCALE))?.weekInfo?.firstDay ?? 1;
}

const numDays = (y: number, m: number) => new Date(y, m, 0).getDate();

export function getStartOfWeekFromDate(date: Date, firstDayOfWeek: number) {
  const day = date.getDay();
  const delta =
    day >= firstDayOfWeek ? day - firstDayOfWeek : 7 + (day - firstDayOfWeek);
  return sub(date, { days: delta });
}

export function getEndOfWeekFromDate(date: Date, firstDayOfWeek: number) {
  const day = date.getDay();
  const lastDay = (((firstDayOfWeek - 1) % 7) + 7) % 7;
  const delta = day <= lastDay ? lastDay - day : 7 + (lastDay - day);
  return add(date, { days: delta });
}

export function allDatesInRange(start: Date, end: Date) {
  let cur = start;
  let res: Date[] = [];

  while (!(cur.getFullYear() === end.getFullYear() && cur.getMonth() === end.getMonth() && cur.getDate() === end.getDate())) {
    res.push(cur);
    cur = add(cur, { days: 1 });
  }

  res.push(end);
  return res;
}

export function getMultiDayEvents(events: Event[]): Event[] {
  return events.filter((event) =>
    event.start.getDate() !== event.end.getDate() ||
    event.start.getMonth() !== event.end.getMonth() ||
    event.start.getFullYear() !== event.end.getFullYear());
}

export const getDayOfWeek = (date: Date, locale = 'en-GB', length = 'short') =>
  // @ts-ignore
  new Intl.DateTimeFormat(locale, { weekday: length }).format(date);

export function swimlanesForMultiDayEvents(events: Event[]): Event[][] {
  const sortedEvents = getMultiDayEvents(events)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  const swimlanes = [];

  for (const event of events) {
    let added = false;

    for (const swimlane of swimlanes) {
      const lastEvent = swimlane[swimlane.length - 1];

      if (lastEvent.end.getTime() <= event.start.getTime()) {
        swimlane.push(event);
        added = true;
        break;
      }
    }

    if (!added) {
      swimlanes.push([event]);
    }
  }

  return swimlanes;
}

export const dateToMonth = (date: Date) => date.toLocaleString('en', { month: 'long' });