
export interface Message {
  messageId: string
  castHash: string
  fid: string
  timestamp: number
  text: string
  isBoosted: boolean
  customStyle?: string
  username?: string
  profilePictureUrl?: string
}

export interface User {
  fid: string
  username: string
  profilePictureUrl?: string
  customStyleApplied?: string
  isPowerTroll?: boolean
}

export interface Cast {
  castHash: string
  fid: string
  timestamp: number
  text: string
  frameUrl?: string
  parentCastHash?: string
}
