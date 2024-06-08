import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Shopify',
  description: 'Everything you need all in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-background min-h-screen antialiased',
          GeistSans.className
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
