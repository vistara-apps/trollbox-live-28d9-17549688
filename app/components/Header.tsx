
'use client'

import { Share2, Sparkles, X } from 'lucide-react'

interface HeaderProps {
  onShare: () => void
  onEnhance: () => void
  onClose: () => void
  isFrameAdded?: boolean
}

export function Header({ onShare, onEnhance, onClose, isFrameAdded }: HeaderProps) {
  return (
    <header className="bg-surface border-b border-border p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-primary">Trollbox Live</h1>
          <p className="text-xs text-text-muted">The most unproductive place on the internet</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={onEnhance}
            className="btn-secondary text-xs px-3 py-1"
            title="Power Troll Enhancements"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Enhance
          </button>
          
          <button
            onClick={onShare}
            className="btn-primary text-xs px-3 py-1"
            title="Share Trollbox"
          >
            <Share2 className="w-3 h-3 mr-1" />
            Share
          </button>
          
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
