
'use client'

import { useEffect, useState } from 'react'
import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
  useClose,
  useNotification
} from '@coinbase/onchainkit/minikit'
import { ChatFeed } from './components/ChatFeed'
import { InputBar } from './components/InputBar'
import { Header } from './components/Header'
import { EnhancementModal } from './components/EnhancementModal'
import { useChat } from './hooks/useChat'

export default function TrollboxLive() {
  const { setFrameReady, isFrameReady, context } = useMiniKit()
  const { messages, isConnected, sendMessage } = useChat()
  const [isEnhancementModalOpen, setIsEnhancementModalOpen] = useState(false)
  
  const addFrame = useAddFrame()
  const openUrl = useOpenUrl()
  const close = useClose()
  const sendNotification = useNotification()

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady()
    }
  }, [setFrameReady, isFrameReady])

  const handleShare = async () => {
    try {
      await openUrl('https://warpcast.com/~/compose?text=Join%20the%20chaos%20at%20Trollbox%20Live%20-%20the%20most%20unproductive%20place%20on%20the%20internet!')
    } catch (error) {
      console.error('Share failed:', error)
    }
  }

  const handleAddFrame = async () => {
    try {
      const result = await addFrame()
      if (result) {
        console.log('Frame added:', result.url, result.token)
        await sendNotification({
          title: 'Welcome to Trollbox Live! 🎉',
          body: 'You\'ve joined the most unproductive place on the internet!'
        })
      }
    } catch (error) {
      console.error('Add frame failed:', error)
    }
  }

  const handleEnhancementPurchase = async (enhancement: any) => {
    // Simulate payment processing
    console.log('Processing payment for:', enhancement.name)
    
    try {
      // In a real app, this would trigger an on-chain transaction
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      await sendNotification({
        title: 'Enhancement Activated! ✨',
        body: `Your ${enhancement.name} is now active!`
      })
      
      setIsEnhancementModalOpen(false)
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  const handleSendMessage = (text: string) => {
    const userFid = context?.user?.fid?.toString()
    sendMessage(text, userFid)
  }

  return (
    <div className="h-screen bg-bg flex flex-col">
      <Header
        onShare={handleShare}
        onEnhance={() => setIsEnhancementModalOpen(true)}
        onClose={close}
        isFrameAdded={context?.client?.added}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {!isConnected ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-text-muted">Connecting to the chaos...</p>
            </div>
          </div>
        ) : (
          <>
            <ChatFeed 
              messages={messages} 
              currentUserFid={context?.user?.fid?.toString()} 
            />
            
            <div className="border-t border-border p-4 bg-surface">
              <InputBar 
                onSendMessage={handleSendMessage}
                disabled={!isConnected}
              />
            </div>
          </>
        )}
      </div>

      {!context?.client?.added && (
        <div className="p-4 bg-primary/10 border-t border-primary/20">
          <button
            onClick={handleAddFrame}
            className="w-full btn-primary text-sm py-2"
          >
            🔥 Save Trollbox to Your Apps
          </button>
        </div>
      )}

      <EnhancementModal
        isOpen={isEnhancementModalOpen}
        onClose={() => setIsEnhancementModalOpen(false)}
        onPurchase={handleEnhancementPurchase}
      />
      
      <footer className="p-2 text-center">
        <button
          onClick={() => openUrl('https://base.org')}
          className="text-xs text-text-muted hover:text-accent transition-colors"
        >
          Built on Base with MiniKit
        </button>
      </footer>
    </div>
  )
}
