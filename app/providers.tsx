'use client'

import { MiniKitProvider } from '@coinbase/onchainkit/minikit'
import { base } from 'wagmi/chains'
import type { ReactNode } from 'react'
import { ThemeProvider } from './components/ThemeProvider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <MiniKitProvider
        apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'demo-key'}
        chain={base}
        config={{
          appearance: {
            mode: 'auto',
            theme: 'base',
            name: 'Trollbox Live',
            logo: '/logo.png',
          },
        }}
      >
        {children}
      </MiniKitProvider>
    </ThemeProvider>
  )
}
