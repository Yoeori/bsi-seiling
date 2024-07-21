import type { Event as PrismaEvent } from "@prisma/client";
import styles from "./Event.module.css";
import { Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

interface EventProps {
  event: PrismaEvent;
};

export default function Event({ event }: EventProps) {
  const [opened, { close, open }] = useDisclosure(false);

  return <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
    <Popover.Target>
      <Link href={`/events/${event.id}`} className={styles.event} onMouseEnter={open} onMouseLeave={close}>{event.title}</Link>
    </Popover.Target>
    <Popover.Dropdown style={{ pointerEvents: 'none' }}>
      <Text size="sm">This popover is shown when user hovers the target element</Text>
    </Popover.Dropdown>
  </Popover>
}