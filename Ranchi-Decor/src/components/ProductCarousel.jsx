import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductItem({ product }) {
  return (
    <div className="w-[240px] sm:w-[280px] lg:w-[320px] shrink-0">
      <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
        <div className="relative aspect-[4/3]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop'
            }}
          />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-1 mt-1">{product.category?.replace('-', ' ')}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductCarousel({ products = [], autoplay = true, intervalMs = 3000 }) {
  const scrollerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const scrollBy = (delta) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const itemWidth = 300 // approximate for scroll amount

  // Autoplay: scroll by one item every interval when not paused
  useEffect(() => {
    if (!autoplay) return
    const el = scrollerRef.current
    if (!el) return
    if (isPaused) return

    const id = setInterval(() => {
      // If reached end, scroll back to start smoothly
      const maxScroll = el.scrollWidth - el.clientWidth
      if (el.scrollLeft + itemWidth >= maxScroll) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: itemWidth, behavior: 'smooth' })
      }
    }, intervalMs)

    return () => clearInterval(id)
  }, [autoplay, intervalMs, isPaused, itemWidth])

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        aria-label="Previous"
        onClick={() => scrollBy(-itemWidth)}
        className="hidden sm:flex items-center justify-center absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow hover:shadow-md border border-gray-200 text-gray-700 hover:bg-gray-50"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
      </button>

      {/* Right arrow */}
      <button
        aria-label="Next"
        onClick={() => scrollBy(itemWidth)}
        className="hidden sm:flex items-center justify-center absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </button>

      {/* Track */}
      <div
        ref={scrollerRef}
        className="overflow-x-auto no-scrollbar scroll-smooth touch-pan-x"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="flex gap-4 sm:gap-6 px-1 snap-x snap-mandatory">
          {products.map((p) => (
            <div key={p.id} className="snap-start">
              <Link to={`/products/${p.id}`}><ProductItem product={p} /></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
