import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop'
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-semibold">
            ★ {product.rating}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">₹{product.price.toLocaleString()}</span>
          <Link
            to={`/products/${product.id}`}
            className="text-sm font-semibold text-gray-900 group-hover:underline"
          >
            View →
          </Link>
        </div>
      </div>
    </div>
  )
}
