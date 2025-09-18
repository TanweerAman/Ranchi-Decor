import { Link } from 'react-router-dom'

// Category Grid matching the exact design from screenshots
// - Mobile: 2-column layout with large cards
// - Desktop: 6-column horizontal layout exactly like the screenshot
export default function CategoryGrid({ categories = [] }) {
  return (
    <>
      {/* Desktop Layout - 6 columns in a row, exactly like screenshot */}
      <div className="hidden md:grid md:grid-cols-6 gap-4 lg:gap-6">
        {categories.slice(0, 6).map((cat) => (
          <Link
            key={cat.id}
            to={cat.link}
            className="group bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Small square image */}
              <div className="shrink-0">
                <div className="w-16 h-12 overflow-hidden bg-gray-100 rounded">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Category name */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-sm leading-tight truncate">
                  {cat.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Layout - 2 columns with larger cards */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.link}
            className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 overflow-hidden"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Larger image for mobile */}
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Category name */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-base leading-snug break-words line-clamp-2">
                  {cat.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
