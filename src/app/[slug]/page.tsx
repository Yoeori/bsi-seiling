import { getPageBySlug } from "@/controllers/page";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}


export default async function Page({ params: { slug }}: PageProps) {
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <div>{page.content}</div>;
}