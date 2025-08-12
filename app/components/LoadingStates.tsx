'use client'

import { MessageCircle, Sparkles, Users } from 'lucide-react'

export function ChatLoadingSkeleton() {
  return (
    <div className="space-y-4 p-6">
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
              <div className="h-4 bg-border rounded loading-skeleton w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ConnectionLoadingState() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center max-w-sm mx-auto p-8">
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto">
            <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-20"></div>
        </div>
        <h3 className="text-lg font-semibold text-text mb-2">Connecting to the Chaos...</h3>
        <p className="text-text-muted text-sm leading-relaxed">
          Preparing your trollbox experience. This might take a moment while we sync with the blockchain.
        </p>
      </div>
    </div>
  )
}

export function EmptyStateWithAction({ 
  title, 
  description, 
  actionText, 
  onAction 
}: {
  title: string
  description: string
  actionText?: string
  onAction?: () => void
}) {
  return (
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
        
        <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
        <p className="text-text-muted mb-6 leading-relaxed">{description}</p>
        
        {actionText && onAction && (
          <button onClick={onAction} className="btn-primary">
            {actionText}
          </button>
        )}
        
        <div className="flex items-center justify-center space-x-6 text-text-muted mt-6">
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
  )
}

export function LoadingSpinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  }
  
  return (
    <div className={`border-2 border-primary/30 border-t-primary rounded-full animate-spin ${sizeClasses[size]} ${className}`} />
  )
}

export function PulsingDot({ className = '' }: { className?: string }) {
  return (
    <div className={`w-2 h-2 bg-accent rounded-full animate-pulse ${className}`} />
  )
}
