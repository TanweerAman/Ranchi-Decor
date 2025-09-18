import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    let filtered = products
    if (category) {
      filtered = filtered.filter(product => product.category === category)
    }
    if (search) {
      filtered = filtered.filter(product => product.name.toLowerCase() === search.toLowerCase())
    }
    setFilteredProducts(filtered)
  }, [category, search])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Flooring & Decor Products
          </h1>
          <p className="text-gray-600 text-lg">Discover our premium collection of flooring, wallpaper, and carpets</p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                !category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </Link>
            <Link
              to="/products?category=hospital-flooring"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                category === 'hospital-flooring'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hospital Flooring
            </Link>
            <Link
              to="/products?category=office-flooring"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                category === 'office-flooring'
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Office Flooring
            </Link>
            <Link
              to="/products?category=wallpaper"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                category === 'wallpaper'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Wallpaper
            </Link>
            <Link
              to="/products?category=wooden-flooring"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                category === 'wooden-flooring'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Wooden Flooring
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  )
}