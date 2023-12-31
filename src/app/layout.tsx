import '../styles/globals.css';

import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';
import { Roboto } from 'next/font/google';

import type { Metadata } from 'next';
const roboto = Roboto({ subsets: ['latin'], weight: ['500', '900'] });

export const metadata: Metadata = {
  title: "Tom's Jazz School",
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={twMerge(roboto.className, 'antialiased')}>{children}</body>
    </html>
  );
}

