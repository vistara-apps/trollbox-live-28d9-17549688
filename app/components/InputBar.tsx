'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Smile, Zap } from 'lucide-react'

interface InputBarProps {
  onSendMessage: (text: string) => void
  disabled?: boolean
}

export function InputBar({ onSendMessage, disabled = false }: InputBarProps) {
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const characterLimit = 280
  const charactersUsed = message.length
  const charactersRemaining = characterLimit - charactersUsed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !disabled && !isSending) {
      setIsSending(true)
      try {
        await onSendMessage(message.trim())
        setMessage('')
        inputRef.current?.focus()
      } finally {
        setIsSending(false)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  // Auto-focus on mount for better UX
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your chaos... 🔥"
            className="input-bar flex-1 pr-12"
            disabled={disabled || isSending}
            maxLength={characterLimit}
          />
          
          {/* Character counter */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            {charactersUsed > 0 && (
              <span className={`text-2xs font-medium ${
                charactersRemaining < 20 
                  ? 'text-danger' 
                  : charactersRemaining < 50 
                    ? 'text-accent' 
                    : 'text-text-muted'
              }`}>
                {charactersRemaining}
              </span>
            )}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={!message.trim() || disabled || isSending}
          className={`btn-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden ${
            isSending ? 'animate-pulse' : ''
          }`}
        >
          {isSending ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </form>
      
      {/* Quick actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-surface text-text-muted hover:text-accent transition-all duration-200"
            title="Add emoji"
            disabled={disabled}
          >
            <Smile className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-surface text-text-muted hover:text-primary transition-all duration-200"
            title="Boost message"
            disabled={disabled}
          >
            <Zap className="w-4 h-4" />
          </button>
        </div>
        
        <div className="text-2xs text-text-muted">
          Press Enter to send
        </div>
      </div>
    </div>
  )
}
