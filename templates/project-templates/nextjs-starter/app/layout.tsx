import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VibeCoding Starter',
  description: 'Production-ready Next.js starter by VibeCoding',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'VibeCoding Starter',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0284c7" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
