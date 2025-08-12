'use client'

import React, { useState } from 'react'
import { Share2, Sparkles, X, Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

interface HeaderProps {
  onShare: () => void
  onEnhance: () => void
  onClose: () => void
  isFrameAdded?: boolean
}

export function Header({ onShare, onEnhance, onClose, isFrameAdded }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [showThemeMenu, setShowThemeMenu] = useState(false)

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ]

  const currentThemeIcon = themeOptions.find(option => option.value === theme)?.icon || Monitor

  return (
    <header className="glass-effect border-b border-border/50 p-4 sticky top-0 z-40 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trollbox Live
            </h1>
            <p className="text-2xs text-text-muted">The most unproductive place on the internet</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <div className="relative">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 rounded-lg hover:bg-surface/50 text-text-muted hover:text-text transition-all duration-200"
              title="Change theme"
            >
              {React.createElement(currentThemeIcon, { className: "w-4 h-4" })}
            </button>
            
            {showThemeMenu && (
              <div className="absolute right-0 top-full mt-2 bg-surface border border-border rounded-xl shadow-card-hover p-1 min-w-[120px] z-50">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value as any)
                      setShowThemeMenu(false)
                    }}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      theme === option.value 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-border/50 text-text'
                    }`}
                  >
                    <option.icon className="w-4 h-4" />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button
            onClick={onEnhance}
            className="btn-secondary text-2xs px-3 py-2 h-8"
            title="Power Troll Enhancements"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Enhance
          </button>
          
          <button
            onClick={onShare}
            className="btn-primary text-2xs px-3 py-2 h-8"
            title="Share Trollbox"
          >
            <Share2 className="w-3 h-3 mr-1" />
            Share
          </button>
          
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-surface/50 text-text-muted hover:text-text transition-all duration-200"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
