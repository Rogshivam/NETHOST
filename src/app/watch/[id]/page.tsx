'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import VideoPlayer from '@/components/video/video-player'
import Navbar from '@/components/layout/navbar'
import PlaceholderImage from '@/components/ui/placeholder-image'

// Mock data - replace with actual data from your API
const mockVideo = {
  id: '1',
  title: 'The Last Adventure',
  description: 'An epic journey through uncharted territories.',
  videoUrl: '/videos/featured-1.mp4',
  duration: '2:30',
  views: 1234,
  isPremium: true,
  relatedVideos: [
    {
      id: '2',
      title: 'Related Video 1',
      duration: '1:45',
    },
    // Add more related videos
  ],
}

export default function WatchPage() {
  const params = useParams()
  const [video, setVideo] = useState(mockVideo) // Replace with actual API call

  useEffect(() => {
    // Fetch video data based on params.id
    // setVideo(data)
  }, [params.id])

  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <div className="relative w-full h-full">
                <PlaceholderImage
                  width={1920}
                  height={1080}
                  text={video.title}
                  className="absolute inset-0"
                />
                <VideoPlayer
                  src={video.videoUrl}
                  autoPlay
                  controls
                  className="relative z-10"
                />
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-white">{video.title}</h1>
              <div className="flex items-center gap-4 mt-2 text-gray-400">
                <span>{video.views.toLocaleString()} views</span>
                <span>•</span>
                <span>{video.duration}</span>
                {video.isPremium && (
                  <>
                    <span>•</span>
                    <span className="text-red-500">Premium</span>
                  </>
                )}
              </div>
              <p className="mt-4 text-gray-300">{video.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-white mb-4">Related Videos</h2>
            <div className="space-y-4">
              {video.relatedVideos.map((relatedVideo) => (
                <div
                  key={relatedVideo.id}
                  className="flex gap-4 cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition-colors"
                >
                  <div className="relative w-40 aspect-video rounded-lg overflow-hidden">
                    <PlaceholderImage
                      width={640}
                      height={360}
                      text={relatedVideo.title}
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                      {relatedVideo.duration}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium line-clamp-2">
                      {relatedVideo.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 