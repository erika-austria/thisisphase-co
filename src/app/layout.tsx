import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
import { ROOT_METADATA } from '@/lib/seo';
import { ORGANIZATION_SCHEMA, PERSON_SCHEMA, WEBSITE_SCHEMA } from '@/lib/schema';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = ROOT_METADATA;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* JSON-LD · Organization, Person, WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([ORGANIZATION_SCHEMA, PERSON_SCHEMA, WEBSITE_SCHEMA]),
          }}
        />
        {/* Theme color for mobile chrome */}
        <meta name="theme-color" content="#fff9f1" />
        <meta name="color-scheme" content="light" />
        {/* Preconnect to fonts (already optimized by next/font) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-pink focus:text-cream focus:px-4 focus:py-2">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
