'use client';

import { useCallback, useState } from "react";
import { allDatesInRange, getDayOfWeek, getEndOfWeekFromDate, getFirstDayOfWeek, getStartOfWeekFromDate } from "./utils";
import styles from "./EventCalendar.module.css";
import Day from "./Day/Day";
import type { Event as PrismaEvent } from "@prisma/client";
import MonthSelect from "./MonthSelect/MonthSelect";
import { Button } from "@mantine/core";
import Link from "next/link";
import Event from "./Event/Event";
import { IconList, IconPlus } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface EventCalendarProps {
  events: PrismaEvent[];
  year: number;
  month: number;
};

export default function EventCalendar({ events, year, month }: EventCalendarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const startDate = new Date(Date.UTC(year, month, 1));
  const endDate = new Date(Date.UTC(year, month + 1, 0));

  const firstDayOfWeek = getFirstDayOfWeek();
  const viewStart = getStartOfWeekFromDate(startDate, firstDayOfWeek);
  const viewEnd = getEndOfWeekFromDate(endDate, firstDayOfWeek);

  const days = allDatesInRange(viewStart, viewEnd);

  const setDate = useCallback((year: number, month: number) => {
    router.push(`${pathname}?${new URLSearchParams({
      "year": `${year}`,
      "month": `${month}`,
    }).toString()}`)
  }, [pathname, router]);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <MonthSelect year={year} month={month} onChange={setDate} />
        <div className={styles["button-group"]}>
          <Button color="sea" component={Link} href={"/events/create"}>
            Create event
            <IconPlus size={18} style={{ marginLeft: 5 }} />
          </Button>
          <Button color="sea" variant="light" component={Link} href={"/events/list"}>
            Show list
            <IconList size={18} style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </div>
      <div className={styles.calendar}>
        <div className={styles.grid}>
          {days.slice(0, 7).map((date, i) => (
            <div className={styles.weekday} style={{
              gridColumn: i + 1,
            }} key={date.getDay()}>{getDayOfWeek(date)}</div>
          ))}
          {days.map((date, i) => (
            <Day key={date.toISOString()} showMonth={i === 0} date={date} grey={date.getMonth() !== startDate.getMonth()} y={Math.floor(i / 7)} x={i % 7} />
          ))}
          {events.map((event) => (
            <Event event={event} key={event.id} />
          ))}
        </div>
      </div>
    </div>
  );
};