'use client';

import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { Page } from "@prisma/client";

interface PageFormProps {
  page?: Page;
  save?: (page: Omit<Page, 'id'> | Page) => void;
}

export default function PageForm({ page, save }: PageFormProps) {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      slug: page?.slug || '',
      title: page?.title || '',
      content: page?.content || '',
    },
    validateInputOnChange: true,
    validate: {
      slug: (value) => (/^[A-Za-z-]+$/.test(value) ? null : 'Invalid slug'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(async (values) => {
      if (save) save({
        ...page,
        ...values,
      });
    })}>
      <TextInput
        label="Page Slug"
        placeholder="membership"
        key={form.key('slug')}
        {...form.getInputProps('slug')}
        color="sea"
      />

      <TextInput
        label="Title"
        placeholder="Membership options"
        key={form.key('title')}
        {...form.getInputProps('title')}
        color="sea"
      />

      <Textarea
        label="Content"
        placeholder="# Title\nHello world!"
        key={form.key('content')}
        {...form.getInputProps('content')}
        color="sea"
        rows={16}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" color="sea">Save</Button>
      </Group>
    </form>
  );
};