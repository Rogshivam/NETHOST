import Navbar from '@/components/layout/navbar'
import CategorySection from '@/components/video/category-section'

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Movies</h1>
        <div className="space-y-12">
          <CategorySection title="Action Movies" category="action" />
          <CategorySection title="Comedy Movies" category="comedy" />
          <CategorySection title="Drama Movies" category="drama" />
          <CategorySection title="Sci-Fi Movies" category="sci-fi" />
        </div>
      </div>
    </main>
  )
} 