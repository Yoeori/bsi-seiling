import { dateToMonth } from "../utils";
import styles from "./Day.module.css";

interface DayProps {
  date: Date;
  grey?: boolean;
  showMonth?: boolean;
  x: number;
  y: number;
};

export default function Day({ date, showMonth, grey, x, y }: DayProps) {
  const today = new Date();
  const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();

  return <div className={styles.day} style={{
    gridColumn: `${x + 1} / span 1`,
    gridRow: `calc(2 + var(--swimlanes) * ${y}) / span var(--swimlanes)`,
  }} data-disabled={grey}>
    <div className={styles["day-information"]}>
      {date.getDate() === 1 || showMonth ? <div className={styles["text-month"]}>{dateToMonth(date)}</div> : ""}
      <div className={styles["text-day"]} data-today={isToday}>{date.getDate()}</div>
    </div>
  </div>
}