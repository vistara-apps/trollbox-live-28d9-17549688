
import './globals.css'
import { Providers } from './providers'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Trollbox Live',
  description: 'The most unproductive place on the internet',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
