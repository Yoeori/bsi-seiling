import ImageHeader from "@/components/ImageHeader/ImageHeader";
import { getPageBySlug } from "@/controllers/page";
import { Container } from "@mantine/core";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

const IMAGES = [
  {
    src: "/images/ran-trip.webp",
    alt: "View from the RAN cabin",
  },
  {
    src: "/images/sailing.jpg",
    alt: "Schmelnick sailing in the fjord",
  },
];

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

  const img = IMAGES[1]; // TODO

  return <>
    <ImageHeader {...img} tiny />
    <Container>
      <MDXRemote source={page.content} />
    </Container>
  </>
}