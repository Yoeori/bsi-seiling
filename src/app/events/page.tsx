import EventCalendar from "@/components/EventCalendar/EventCalendar";
import { getEvents } from "@/controllers/event";
import { Container } from "@mantine/core";

interface PageProps {
  searchParams: {
    year?: string;
    month?: string;
  }
}

export default async function Page({ searchParams: { year: yearString, month: monthString } }: PageProps) {
  const today = new Date();

  let year = Number.parseInt(yearString ?? "");
  if (Number.isNaN(year) || year < 2000 || year > 2100) {
    year = today.getFullYear();
  }

  let month = Number.parseInt(monthString ?? "");
  if (Number.isNaN(month) || month < 0 || month > 11) {
    month = today.getMonth();
  }

  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);

  const events = await getEvents({ start, end });
  return <Container pt="lg"><EventCalendar events={events} year={year} month={month} /></Container>;
}