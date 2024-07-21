'use server';

import prisma from "@/lib/prisma";
import { Page } from "@prisma/client";

export const getPageBySlug = async (slug: string) => {
  return await prisma.page.findFirst({
    where: {
      slug,
    },
  });
}

export const savePage = async (page: Omit<Page, 'id'> | Page) => {
  if ('id' in page) {
    await prisma.page.update({
      where: {
        id: page.id,
      },
      data: page,
    });
  } else {
    await prisma.page.create({
      data: page,
    });
  }
}