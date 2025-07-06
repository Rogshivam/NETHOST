'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import PlaceholderImage from '@/components/ui/placeholder-image'

// Mock data - replace with actual data from your API
const featuredVideos = [
  {
    id: '1',
    title: 'The Last Adventure',
    description: 'An epic journey through uncharted territories.',
    isPremium: true,
  },
  {
    id: '2',
    title: 'Mystery of the Deep',
    description: 'Dive into the unknown depths of the ocean.',
    isPremium: false,
  },
  // Add more featured videos as needed
]

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredVideos.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredVideos.length - 1 : prevIndex - 1
    )
  }

  const currentVideo = featuredVideos[currentIndex]

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <PlaceholderImage
          width={1920}
          height={1080}
          text={currentVideo.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            {currentVideo.title}
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            {currentVideo.description}
          </p>
          <div className="flex gap-4">
            <Link
              href={`/watch/${currentVideo.id}`}
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Watch Now
            </Link>
            {currentVideo.isPremium && (
              <Link
                href="/premium"
                className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Upgrade to Premium
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
} 