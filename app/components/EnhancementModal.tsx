'use client'

import { useState } from 'react'
import { X, Sparkles, Zap, Crown, Star, Shield, Flame } from 'lucide-react'

interface Enhancement {
  id: string
  name: string
  description: string
  price: string
  originalPrice?: string
  icon: React.ReactNode
  popular?: boolean
  features: string[]
  color: string
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
    description: 'Make your messages shine with magical effects',
    price: '0.1 USDC',
    icon: <Sparkles className="w-6 h-6" />,
    features: ['✨ Glowing message effects', '🌟 Sparkle animations', '💫 Stand out in chat'],
    color: 'from-accent to-primary'
  },
  {
    id: 'boost-visibility',
    name: 'Message Boost',
    description: 'Pin your message at the top for maximum visibility',
    price: '0.5 USDC',
    originalPrice: '0.8 USDC',
    icon: <Zap className="w-6 h-6" />,
    popular: true,
    features: ['📌 Pin message for 5 minutes', '⚡ Lightning boost effect', '👀 Maximum visibility'],
    color: 'from-primary to-accent'
  },
  {
    id: 'power-troll',
    name: 'Power Troll Status',
    description: 'Become a legendary troll with exclusive privileges',
    price: '1.0 USDC',
    icon: <Crown className="w-6 h-6" />,
    features: ['👑 Crown badge', '🎨 Custom username styling', '⭐ Priority in chat', '🔥 Exclusive effects'],
    color: 'from-primary via-accent to-primary'
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-card-hover animate-bounce-in">
        {/* Header */}
        <div className="sticky top-0 bg-surface/95 backdrop-blur-sm border-b border-border/50 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Power Troll Enhancements
              </h2>
              <p className="text-sm text-text-muted mt-1">Unlock your trolling potential</p>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-xl hover:bg-border/50 text-text-muted hover:text-text transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          {enhancements.map((enhancement, index) => (
            <div 
              key={enhancement.id} 
              className={`relative border border-border rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] ${
                enhancement.popular ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent/5' : ''
              }`}
            >
              {enhancement.popular && (
                <div className="absolute -top-3 left-6">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${enhancement.color} text-white shadow-lg`}>
                  {enhancement.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-text">{enhancement.name}</h3>
                    <div className="text-right">
                      {enhancement.originalPrice && (
                        <div className="text-xs text-text-muted line-through">
                          {enhancement.originalPrice}
                        </div>
                      )}
                      <div className="text-lg font-bold text-primary">
                        {enhancement.price}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-muted mb-4 leading-relaxed">
                    {enhancement.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {enhancement.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handlePurchase(enhancement)}
                    disabled={purchasing === enhancement.id}
                    className={`w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                      purchasing === enhancement.id ? 'animate-pulse' : ''
                    }`}
                  >
                    {purchasing === enhancement.id ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Flame className="w-4 h-4" />
                        <span>Activate Enhancement</span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-border/50 bg-gradient-to-r from-primary/5 to-accent/5 rounded-b-2xl">
          <div className="flex items-center space-x-3 mb-3">
            <Shield className="w-5 h-5 text-accent" />
            <span className="font-semibold text-text">Secure & Instant</span>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">
            Payments are processed securely on-chain using Base USDC. Your enhancements activate immediately after confirmation. No hidden fees, no subscriptions.
          </p>
        </div>
      </div>
    </div>
  )
}
