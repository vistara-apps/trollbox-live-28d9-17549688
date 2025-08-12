
'use client'

import { useState } from 'react'
import { X, Sparkles, Zap, Crown } from 'lucide-react'

interface Enhancement {
  id: string
  name: string
  description: string
  price: string
  icon: React.ReactNode
}

interface EnhancementModalProps {
  isOpen: boolean
  onClose: () => void
  onPurchase: (enhancement: Enhancement) => void
}

const enhancements: Enhancement[] = [
  {
    id: 'glow-messages',
    name: 'Glow Messages',
    description: 'Make your messages glow with a special effect',
    price: '0.1 USDC',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'boost-visibility',
    name: 'Message Boost',
    description: 'Pin your next message at the top for 5 minutes',
    price: '0.5 USDC',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'power-troll',
    name: 'Power Troll Status',
    description: 'Get special username styling and priority',
    price: '1.0 USDC',
    icon: <Crown className="w-5 h-5" />
  }
]

export function EnhancementModal({ isOpen, onClose, onPurchase }: EnhancementModalProps) {
  const [purchasing, setPurchasing] = useState<string | null>(null)

  if (!isOpen) return null

  const handlePurchase = async (enhancement: Enhancement) => {
    setPurchasing(enhancement.id)
    try {
      await onPurchase(enhancement)
    } finally {
      setPurchasing(null)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-lg max-w-md w-full p-6 animate-bounce-in">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-primary">Power Troll Enhancements</h2>
          <button onClick={onClose} className="text-text-muted hover:text-text">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          {enhancements.map((enhancement) => (
            <div key={enhancement.id} className="border border-border rounded-md p-4">
              <div className="flex items-start space-x-3">
                <div className="text-accent">{enhancement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-text">{enhancement.name}</h3>
                  <p className="text-sm text-text-muted mt-1">{enhancement.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-medium text-primary">{enhancement.price}</span>
                    <button
                      onClick={() => handlePurchase(enhancement)}
                      disabled={purchasing === enhancement.id}
                      className="btn-primary text-sm px-3 py-1 disabled:opacity-50"
                    >
                      {purchasing === enhancement.id ? 'Processing...' : 'Buy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-3 bg-accent/10 rounded-md">
          <p className="text-xs text-text-muted">
            Payments are processed on-chain using Base USDC. Your enhancements will be active immediately after confirmation.
          </p>
        </div>
      </div>
    </div>
  )
}
