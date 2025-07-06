import Navbar from '@/components/layout/navbar'
import FeaturedCarousel from '@/components/video/featured-carousel'
import CategorySection from '@/components/video/category-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <FeaturedCarousel />
        <div className="mt-12 space-y-12">
          <CategorySection title="Trending Now" category="trending" />
          <CategorySection title="Popular Movies" category="movies" />
          <CategorySection title="Popular TV Shows" category="tv-shows" />
          <CategorySection title="New Releases" category="new-releases" />
        </div>
      </div>
    </main>
  )
}
