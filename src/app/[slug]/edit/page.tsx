import PageForm from "@/components/forms/PageForm";
import { getPageBySlug, savePage } from "@/controllers/page";
import { Container } from "@mantine/core";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: PageProps) {
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <Container pt="xl"><PageForm page={page} save={savePage} /></Container>
}