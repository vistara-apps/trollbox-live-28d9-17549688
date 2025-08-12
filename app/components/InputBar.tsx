
'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

interface InputBarProps {
  onSendMessage: (text: string) => void
  disabled?: boolean
}

export function InputBar({ onSendMessage, disabled = false }: InputBarProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your chaos..."
        className="input-bar flex-1"
        disabled={disabled}
        maxLength={280}
      />
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  )
}
