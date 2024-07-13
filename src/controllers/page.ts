'use server';

import prisma from "@/lib/prisma";

export const getPageBySlug = async (slug: string) => {
  return await prisma.page.findFirst({
    where: {
      slug,
    },
  });
}