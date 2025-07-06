import Navbar from '@/components/layout/navbar'
import CategorySection from '@/components/video/category-section'

export default function TVShowsPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">TV Shows</h1>
        <div className="space-y-12">
          <CategorySection title="Popular TV Shows" category="popular" />
          <CategorySection title="New Episodes" category="new-episodes" />
          <CategorySection title="Drama Series" category="drama-series" />
          <CategorySection title="Comedy Series" category="comedy-series" />
        </div>
      </div>
    </main>
  )
} 