'use client'

import { useRef, useEffect } from 'react'

interface VideoPlayerProps {
  src: string
  autoPlay?: boolean
  controls?: boolean
  className?: string
}

export default function VideoPlayer({
  src,
  autoPlay = false,
  controls = true,
  className = '',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      // Add any video player initialization logic here
    }
  }, [])

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        controls={controls}
        className="w-full h-full"
        playsInline
      />
    </div>
  )
} 