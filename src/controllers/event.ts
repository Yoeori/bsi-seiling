import prisma from "@/lib/prisma";

interface EventQuery {
  start?: Date;
  end?: Date;
}

export const getEvents = async (options?: EventQuery) => {
  const rangeQuery = {
    gte: options?.start,
    lte: options?.end
  }

  const events = await prisma.event.findMany({
    where: {
      OR: [
        { start: rangeQuery },
        { end: rangeQuery },
        { start: { gte: options?.start }, end: { lte: options?.end } },
        { start: { lte: options?.start }, end: { gte: options?.end } },
      ]
    }
  });


  return events;
}