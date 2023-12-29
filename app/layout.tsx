import type { Metadata } from 'next';
import { libreFranklin } from './lib/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex isn\'t wearing clothes again',
  description: 'Web garden for strolling, meditation, and hiring.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={libreFranklin.className}
      >{children}</body>
    </html>
  )
}
