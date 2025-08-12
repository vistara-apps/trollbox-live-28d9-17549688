import './globals.css'
import { Providers } from './providers'
import ErrorBoundary from './components/ErrorBoundary'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Trollbox Live - The Most Unproductive Place on the Internet',
  description: 'Join the chaos at Trollbox Live! A real-time chat experience built on Base with MiniKit integration. Connect, troll, and enhance your messages with on-chain features.',
  keywords: 'trollbox, chat, base, blockchain, farcaster, minikit, real-time',
  authors: [{ name: 'Trollbox Live Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f1f1f' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        <ErrorBoundary>
          <Providers>
            {children}
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}
