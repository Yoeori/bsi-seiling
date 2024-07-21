import { createContext } from "react";

export interface EventCalendarContext {
  days: {
    [date: number]: {

    }
  }
};

export const EventCalendarContext = createContext<EventCalendarContext | undefined>(undefined);