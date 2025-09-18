import { useParams } from 'react-router-dom'
import products from '../data/products'
import useCart from '../context/useCart'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart } = useCart()

  if(!product) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop'
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ★ {product.rating}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 text-xl mr-3">
                    {'★'.repeat(Math.floor(product.rating))}
                    {product.rating % 1 !== 0 && '☆'}
                  </div>
                  <span className="text-gray-600 font-medium">
                    {product.rating} out of 5 stars
                  </span>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {product.category.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🛒 Add to Cart
                </button>
                <button className="w-full border-2 border-purple-600 text-purple-600 py-4 rounded-2xl font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                  ❤️ Add to Wishlist
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">🚚</div>
                  <div className="font-semibold text-gray-800">Free Shipping</div>
                  <div className="text-sm text-gray-600">On orders above ₹500</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="font-semibold text-gray-800">Easy Returns</div>
                  <div className="text-sm text-gray-600">30-day return policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <img src={relatedProduct.image} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2">{relatedProduct.name}</h3>
                    <p className="text-green-600 font-bold">₹{relatedProduct.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
