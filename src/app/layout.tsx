import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Landing Page Builder',
  description: 'Custom landing pages built with Contentful and Next.js',
  keywords: ['landing page', 'contentful', 'next.js', 'react'],
  authors: [{ name: 'Landing Page Builder' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: 'Landing Page Builder',
    description: 'Custom landing pages built with Contentful and Next.js',
    siteName: 'Landing Page Builder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Page Builder',
    description: 'Custom landing pages built with Contentful and Next.js',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 