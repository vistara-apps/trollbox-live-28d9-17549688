
'use client'

import { useState, useEffect, useCallback } from 'react'
import { Message } from '../types'

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isConnected, setIsConnected] = useState(false)

  // Simulate real-time chat with mock data
  useEffect(() => {
    const mockMessages: Message[] = [
      {
        messageId: '1',
        castHash: 'mock-cast-1',
        fid: '1234',
        timestamp: Date.now() - 300000,
        text: 'Welcome to the chaos! 🔥',
        isBoosted: false,
        username: 'chaosmaster'
      },
      {
        messageId: '2', 
        castHash: 'mock-cast-2',
        fid: '5678',
        timestamp: Date.now() - 240000,
        text: 'This is indeed the most unproductive place ever 😂',
        isBoosted: true,
        username: 'trollking',
        customStyle: 'power-troll'
      },
      {
        messageId: '3',
        castHash: 'mock-cast-3', 
        fid: '9999',
        timestamp: Date.now() - 180000,
        text: 'Anyone else procrastinating here instead of working?',
        isBoosted: false,
        username: 'procrastinator'
      }
    ]

    setMessages(mockMessages)
    setIsConnected(true)

    // Simulate new messages arriving
    const interval = setInterval(() => {
      const randomMessages = [
        'This place is addictive!',
        'Lost track of time again...',
        'Best trollbox ever created 🎉',
        'My productivity just went to zero',
        'Can\'t stop scrolling!',
        'This is pure chaos and I love it',
        'Goodbye productivity, hello chaos!',
        'Most fun I\'ve had all day',
        'This beats actual work 100%'
      ]

      const newMessage: Message = {
        messageId: Date.now().toString(),
        castHash: `mock-cast-${Date.now()}`,
        fid: Math.floor(Math.random() * 10000).toString(),
        timestamp: Date.now(),
        text: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        isBoosted: Math.random() > 0.9,
        username: `anon${Math.floor(Math.random() * 1000)}`
      }

      setMessages(prev => [...prev, newMessage].slice(-50)) // Keep last 50 messages
    }, 8000 + Math.random() * 12000) // Random interval between 8-20 seconds

    return () => clearInterval(interval)
  }, [])

  const sendMessage = useCallback((text: string, userFid?: string) => {
    const newMessage: Message = {
      messageId: Date.now().toString(),
      castHash: `user-cast-${Date.now()}`,
      fid: userFid || 'current-user',
      timestamp: Date.now(),
      text,
      isBoosted: false,
      username: 'you'
    }

    setMessages(prev => [...prev, newMessage])
  }, [])

  return {
    messages,
    isConnected,
    sendMessage
  }
}
