'use client'

import { Message } from '../types'
import { formatDistanceToNow } from '../utils/time'
import { Crown, Zap } from 'lucide-react'

interface ChatBubbleProps {
  message: Message
  isOwnMessage?: boolean
}

export function ChatBubble({ message, isOwnMessage = false }: ChatBubbleProps) {
  return (
    <div className={`animate-slide-up ${isOwnMessage ? 'ml-6' : 'mr-6'} group`}>
      <div className={`chat-bubble ${message.isBoosted ? 'boosted' : ''} ${isOwnMessage ? 'own-message ml-auto' : ''} hover:scale-[1.01] transition-transform duration-200`}>
        <div className="flex items-start space-x-3">
          {!isOwnMessage && (
            <div className="flex-shrink-0">
              {message.profilePictureUrl ? (
                <img 
                  src={message.profilePictureUrl} 
                  alt={message.username || 'User'}
                  className="w-8 h-8 rounded-full ring-2 ring-border group-hover:ring-accent/30 transition-all duration-200"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-sm font-semibold">
                  {(message.username || `anon${message.fid.slice(-4)}`).charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`user-tag ${message.customStyle ? 'power-troll' : ''}`}>
                {message.username || `anon${message.fid.slice(-4)}`}
              </span>
              
              {message.customStyle && (
                <Crown className="w-3 h-3 text-primary" />
              )}
              
              {message.isBoosted && (
                <div className="flex items-center space-x-1 bg-gradient-to-r from-primary to-accent text-white px-2 py-1 rounded-full text-2xs font-semibold shadow-glow">
                  <Zap className="w-3 h-3" />
                  <span>BOOSTED</span>
                </div>
              )}
              
              <span className="text-2xs text-text-muted">
                {formatDistanceToNow(message.timestamp)}
              </span>
            </div>
            
            <div className="prose prose-sm max-w-none">
              <p className="text-sm leading-relaxed break-words text-text-secondary m-0">
                {message.text}
              </p>
            </div>
          </div>
          
          {isOwnMessage && (
            <div className="flex-shrink-0">
              {message.profilePictureUrl ? (
                <img 
                  src={message.profilePictureUrl} 
                  alt={message.username || 'User'}
                  className="w-8 h-8 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-200"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-semibold">
                  {(message.username || `anon${message.fid.slice(-4)}`).charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
