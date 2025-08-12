
'use client'

import { useEffect, useRef } from 'react'
import { ChatBubble } from './ChatBubble'
import { Message } from '../types'

interface ChatFeedProps {
  messages: Message[]
  currentUserFid?: string
}

export function ChatFeed({ messages, currentUserFid }: ChatFeedProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.length === 0 && (
        <div className="text-center text-text-muted py-8">
          <p className="text-lg font-medium mb-2">Welcome to the chaos!</p>
          <p className="text-sm">Be the first to break the silence...</p>
        </div>
      )}
      {messages.map((message) => (
        <ChatBubble
          key={message.messageId}
          message={message}
          isOwnMessage={message.fid === currentUserFid}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
