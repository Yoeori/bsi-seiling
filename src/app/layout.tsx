import '@mantine/core/styles.css';
import { Inter } from 'next/font/google'

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import AppShell from '@/components/AppShell/AppShell';
import { theme } from '@/theme';

export const metadata = {
  title: 'BSI Seiling',
  description: 'Sailing association for adults since 1977',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <AppShell>
            {children}
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}