import { Link } from 'react-router-dom'
import { useState } from 'react'
import useCart from '../context/useCart'
import useWishlist from '../context/useWishlist'

export default function RecommendedCard({ product, onQuickView }) {
  const [isHovered, setIsHovered] = useState(false)
  const cartContext = useCart()
  const wishlistContext = useWishlist()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (cartContext && cartContext.addToCart) {
      cartContext.addToCart(product)
      alert(`${product.name} added to cart!`)
    } else {
      console.log('Added to cart:', product.name)
      alert(`${product.name} added to cart!`)
    }
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (wishlistContext && wishlistContext.toggleWishlist) {
      const isAdded = wishlistContext.toggleWishlist(product)
      const message = isAdded ? 'added to wishlist!' : 'removed from wishlist!'
      alert(`${product.name} ${message}`)
    } else {
      alert(`${product.name} added to wishlist!`)
    }
  }

  const handleQuickView = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (onQuickView) {
      onQuickView(product)
    }
  }

  const isInWishlist = wishlistContext && wishlistContext.isInWishlist 
    ? wishlistContext.isInWishlist(product.id) 
    : false

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-64 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop'
            }}
          />
        </Link>
        
        {/* Product Name Overlay on Hover */}
        {isHovered && (
          <div className="absolute top-3 left-3 right-3">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md shadow-sm">
              <span className="text-sm font-medium text-gray-900 line-clamp-1">
                {product.name}
              </span>
            </div>
          </div>
        )}

        {/* Action Buttons on Hover */}
        {isHovered && (
          <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-2">
            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="bg-white/90 hover:bg-blue-600 hover:text-white text-gray-700 p-2 rounded-full shadow-sm transition-all duration-200 group"
              title="Add to Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l4.5-4.5m0 0L17 3m-5.5 5.5L17 13" />
              </svg>
            </button>
            
            {/* Add to Wishlist */}
            <button 
              onClick={handleWishlist}
              className={`p-2 rounded-full shadow-sm transition-all duration-200 ${
                isInWishlist 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/90 hover:bg-red-500 hover:text-white text-gray-700'
              }`}
              title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <svg className="w-5 h-5" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            {/* Quick View/Zoom */}
            <button 
              onClick={handleQuickView}
              className="bg-white/90 hover:bg-green-600 hover:text-white text-gray-700 p-2 rounded-full shadow-sm transition-all duration-200"
              title="Quick View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <Link to={`/products/${product.id}`}>
          <h3 className="text-base font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
        </Link>
        
        {/* Star Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600 ml-2">0</span>
        </div>
        
        {/* Price */}
        <div className="text-lg font-bold text-red-500">
          ₹{product.price.toLocaleString()}.00
        </div>
      </div>
    </div>
  )
}
