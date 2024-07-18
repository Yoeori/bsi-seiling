import ImageHeader from "@/components/ImageHeader/ImageHeader";
import { getPageBySlug } from "@/controllers/page";
import { Container } from "@mantine/core";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

const IMAGES = [
  {
    src: "/images/headers/ran-trip.webp",
    alt: "View from the RAN cabin",
  },
  {
    src: "/images/headers/sailing.jpg",
    alt: "Schmelnick sailing in the fjord",
  },
  {
    src: "/images/headers/header-1.jpg",
    alt: "Schmelnick with the city in the background",
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

  const img = IMAGES[page.slug.length % IMAGES.length];

  return <>
    <ImageHeader {...img} tiny />
    <Container>
      <MDXRemote source={page.content} />
    </Container>
  </>
}