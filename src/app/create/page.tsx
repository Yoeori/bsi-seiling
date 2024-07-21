import PageForm from "@/components/forms/PageForm";
import { savePage } from "@/controllers/page";
import { Container } from "@mantine/core";

export default async function Page() {
  return <Container pt="xl"><PageForm save={savePage} /></Container>
}