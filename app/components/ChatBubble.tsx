
'use client'

import { Message } from '../types'
import { formatDistanceToNow } from '../utils/time'

interface ChatBubbleProps {
  message: Message
  isOwnMessage?: boolean
}

export function ChatBubble({ message, isOwnMessage = false }: ChatBubbleProps) {
  return (
    <div className={`animate-fade-in ${isOwnMessage ? 'ml-8' : 'mr-8'}`}>
      <div className={`chat-bubble ${message.isBoosted ? 'boosted' : ''} ${isOwnMessage ? 'ml-auto bg-primary/10' : ''}`}>
        <div className="flex items-start space-x-2">
          {!isOwnMessage && message.profilePictureUrl && (
            <img 
              src={message.profilePictureUrl} 
              alt={message.username || 'User'}
              className="w-6 h-6 rounded-full"
            />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className={`user-tag ${message.customStyle ? 'power-troll' : ''}`}>
                {message.username || `anon${message.fid.slice(-4)}`}
              </span>
              {message.isBoosted && (
                <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                  🔥 BOOSTED
                </span>
              )}
              <span className="text-xs text-text-muted">
                {formatDistanceToNow(message.timestamp)}
              </span>
            </div>
            <p className="text-sm leading-relaxed break-words">
              {message.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
