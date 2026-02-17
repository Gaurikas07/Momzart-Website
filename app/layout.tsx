import type { Metadata, Viewport } from 'next';
import './globals.css';
import Link from 'next/link';
import PWAProvider from '@/components/PWAProvider';

export const metadata: Metadata = {
  title: 'Momzart - Premium Handmade Candles',
  description: 'Ecommerce PWA for premium handmade candles.',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/icons/icon-192.svg' },
    { rel: 'apple-touch-icon', url: '/icons/icon-192.svg' }
  ]
};

export const viewport: Viewport = {
  themeColor: '#49321f'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <Link href="/" className="text-xl font-bold text-brand">Momzart</Link>
            <div className="flex gap-4 text-sm font-medium">
              <Link href="/products">Products</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/orders">Orders</Link>
              <Link href="/admin">Admin</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        <PWAProvider />
      </body>
    </html>
  );
}
