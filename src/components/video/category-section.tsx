'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import PlaceholderImage from '@/components/ui/placeholder-image'

// Mock data - replace with actual data from your API
const mockVideos = [
  {
    id: '1',
    title: 'KHOON KI PYASI',
    duration: '2:30',
    isPremium: false,
  },
  {
    id: '2',
    title: 'EK THA LOMDI',
    duration: '1:45',
    isPremium: true,
  },
  {
    id: '3',
    title: 'ONCE UPON A TIME IN BIHAR',
    duration: '1:15',
    isPremium: true,
  },
  {
    id: '4',
    title: 'BAGOOOOOO......',
    duration: '1:69',
    isPremium: true,
  },
  {
    id: '5',
    title: 'BINGIo......',
    duration: '1:69',
    isPremium: true,
  },
  {
    id: '6',
    title: 'no......',
    duration: '1:69',
    isPremium: false,
  },
  // Add more videos as needed
]

interface CategorySectionProps {
  title: string
  category: string
}

export default function CategorySection({ title, category }: CategorySectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // const scroll = (direction: 'left' | 'right') => {
  //   if (containerRef.current) {
  //     const scrollAmount = 400
  //     const newPosition =
  //       direction === 'left'
  //         ? scrollPosition - scrollAmount
  //         : scrollPosition + scrollAmount
  //     containerRef.current.scrollTo({
  //       left: newPosition,
  //       behavior: 'smooth',
  //     })
  //     setScrollPosition(newPosition)
  //   }
  // }
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 400
      const currentScroll = containerRef.current.scrollLeft
      const newPosition =
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      })
    }
  }


  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

      <div className="relative group">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Video Grid */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {mockVideos.map((video) => (
            <Link
              key={video.id}
              href={`/watch/${video.id}`}
              className="flex-none w-64 group"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <PlaceholderImage
                  width={640}
                  height={360}
                  text={video.title}
                  className="w-full h-full"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
                {video.isPremium && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    Premium
                  </div>
                )}
              </div>
              <h3 className="mt-2 text-white font-medium group-hover:text-gray-300 transition-colors">
                {video.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 