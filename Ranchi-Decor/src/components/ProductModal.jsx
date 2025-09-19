import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useCart from '../context/useCart'

export default function ProductModal({ product, isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const cartContext = useCart()
  const navigate = useNavigate()

  if (!isOpen || !product) return null

  const handleAddToCart = () => {
    if (cartContext && cartContext.addToCart) {
      // Add the product with specified quantity
      for (let i = 0; i < quantity; i++) {
        cartContext.addToCart(product)
      }
      alert(`${quantity} x ${product.name} added to cart!`)
    } else {
      console.log(`Added ${quantity} of ${product.name} to cart`)
      alert(`${quantity} x ${product.name} added to cart!`)
    }
  }

  const handleBuyNow = () => {
    // Add to cart first
    if (cartContext && cartContext.addToCart) {
      for (let i = 0; i < quantity; i++) {
        cartContext.addToCart(product)
      }
    }
    
    // Close modal and navigate to checkout
    onClose()
    navigate('/checkout')
    alert(`Proceeding to checkout with ${quantity} x ${product.name}`)
  }

  const handleViewDetails = () => {
    onClose()
    navigate(`/products/${product.id}`)
  }

  return (
  <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Modal Content */}
          <div className="flex flex-col lg:flex-row overflow-y-auto">
            {/* Product Image */}
            <div className="lg:w-1/2 p-4 sm:p-6">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop'
                  }}
                />
                
                {/* View Details Button */}
                <div className="absolute bottom-0 left-0 right-0">
                  <button 
                    onClick={handleViewDetails}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-b-lg font-semibold transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:w-1/2 p-4 sm:p-6 lg:pl-0">
              <div className="space-y-4">
                {/* Product Name */}
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>
                
                {/* Rating and Reviews */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-blue-600 ml-2 text-sm">0 customer reviews</span>
                  </div>
                  <span className="text-gray-600 text-sm">Sold: 0</span>
                </div>
                
                {/* Price */}
                <div className="text-3xl font-bold text-red-500">
                  ₹{product.price.toLocaleString()}.00
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-4 mt-6">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-6 py-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    🛒 Add To Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold px-6 py-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    ⚡ Buy Now
                  </button>
                </div>
                
                {/* Categories and Tags */}
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-900">Categories:</span>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-blue-600 hover:underline cursor-pointer">Chandelier</span>
                      <span className="text-gray-600">,</span>
                      <span className="text-blue-600 hover:underline cursor-pointer">Classic Chandelier</span>
                      <span className="text-gray-600">,</span>
                      <span className="text-blue-600 hover:underline cursor-pointer">Lighting Products</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-900">Tags:</span>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-blue-600 hover:underline cursor-pointer">chandeliers</span>
                      <span className="text-gray-600">,</span>
                      <span className="text-blue-600 hover:underline cursor-pointer">lights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}