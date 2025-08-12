'use client'

import { useEffect, useRef } from 'react'
import { ChatBubble } from './ChatBubble'
import { Message } from '../types'
import { MessageCircle, Sparkles, Users } from 'lucide-react'

interface ChatFeedProps {
  messages: Message[]
  currentUserFid?: string
  isLoading?: boolean
}

export function ChatFeed({ messages, currentUserFid, isLoading = false }: ChatFeedProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (isLoading) {
    return (
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-border rounded-full loading-skeleton"></div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 bg-border rounded loading-skeleton w-20"></div>
                    <div className="h-3 bg-border rounded loading-skeleton w-12"></div>
                  </div>
                  <div className="h-4 bg-border rounded loading-skeleton w-3/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto py-12">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-text mb-2">Welcome to the Chaos!</h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              The trollbox is eerily quiet... Be the first brave soul to break the silence and start the mayhem!
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-text-muted">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">0 active trolls</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">0 messages</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <ChatBubble
              key={message.messageId}
              message={message}
              isOwnMessage={message.fid === currentUserFid}
            />
          ))}
        </>
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}
