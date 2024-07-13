import { Anchor, Group } from "@mantine/core";
import Link from "next/link";

export default function Navigation() {
  return <Group>
    <Anchor component={Link} href="/" >
      Home
    </Anchor>
    <Anchor component={Link} href="/about">
      About BSI
    </Anchor>
    <Anchor component={Link} href="/events" >
      Events
    </Anchor>
  </Group>
}