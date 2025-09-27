import { useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import products from '../data/products'
import useCart from '../context/useCart'
import useWishlist from '../context/useWishlist'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const navigate = useNavigate()
  const { cart, addToCart, updateQuantity } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()

  // Derive a simple gallery; fallback to the main image
  const gallery = useMemo(() => {
    const imgs = product?.gallery && product.gallery.length > 0 ? product.gallery : [product?.image]
    return imgs.filter(Boolean)
  }, [product])

  const [selectedImage, setSelectedImage] = useState(gallery[0])
  const [qty, setQty] = useState(1)
  const [copied, setCopied] = useState(false)

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
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10">

        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-4 sm:mb-6">
          <Link to="/" className="hover:text-gray-800">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-gray-800">Products</Link>
          <span className="mx-2">/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-gray-800">
            {product.category.replace(/-/g,' ').replace(/\b(spc|pvc|uv|gtm)\b/ig, (m)=>m.toUpperCase()).replace(/\b\w/g, c=>c.toUpperCase())}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">{product.name}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Product Gallery */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-6 sm:p-8">
              <div className="relative group">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop'
                  }}
                />

                {/* Rating badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow">★ {product.rating}</span>
                </div>
                {/* Price badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">₹{product.price.toLocaleString()}</span>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="mt-4 flex gap-3 overflow-auto">
                {gallery.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImage(img)} className={`relative w-16 h-16 rounded-lg overflow-hidden border ${selectedImage===img?'border-emerald-500':'border-transparent'} focus:outline-none`}>
                    <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4 sm:mb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-yellow-400 text-xl">
                    {'★'.repeat(Math.floor(product.rating))}{product.rating % 1 !== 0 ? '☆' : ''}
                  </div>
                  <span className="text-gray-600 font-medium">{product.rating} out of 5 stars</span>
                </div>

                {/* Category and stock */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-block bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-semibold">
                    {product.category.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> In stock
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                  <button onClick={async()=>{
                    try {
                      await navigator.clipboard.writeText(window.location.href)
                      setCopied(true); setTimeout(()=>setCopied(false), 1500)
                    } catch (_) {}
                  }} className="underline hover:text-gray-700">{copied? 'Link copied!' : 'Share'}</button>
                  <span>•</span>
                  <button onClick={()=>navigate('/contact')} className="underline hover:text-gray-700">Need help?</button>
                </div>
              </div>

              {/* Quantity + CTAs */}
              <div className="space-y-4">
                {/* Quantity stepper */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                    <button onClick={()=>setQty(Math.max(1, qty-1))} className="w-10 h-10 grid place-items-center text-xl hover:bg-gray-50">-</button>
                    <input value={qty} onChange={(e)=>{
                      const v = parseInt(e.target.value)||1; setQty(Math.max(1,v))
                    }} className="w-12 text-center outline-none" />
                    <button onClick={()=>setQty(qty+1)} className="w-10 h-10 grid place-items-center text-xl hover:bg-gray-50">+</button>
                  </div>
                  <span className="text-sm text-gray-500">Quantity</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      const existing = cart.find(it => it.id === product.id)
                      if (existing) {
                        updateQuantity(product.id, existing.quantity + qty)
                      } else {
                        addToCart(product)
                        if (qty > 1) updateQuantity(product.id, qty)
                      }
                    }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    🛒 Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      const existing = cart.find(it => it.id === product.id)
                      if (existing) {
                        updateQuantity(product.id, existing.quantity + qty)
                      } else {
                        addToCart(product)
                        if (qty > 1) updateQuantity(product.id, qty)
                      }
                      navigate('/checkout')
                    }}
                    className="w-full border-2 border-purple-600 text-purple-600 py-3.5 rounded-2xl font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    ⚡ Buy Now
                  </button>
                </div>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`w-full py-3 rounded-2xl font-bold text-lg transition-all duration-300 border ${(isInWishlist(product.id)?'bg-rose-50 text-rose-600 border-rose-300':'bg-white text-rose-600 border-rose-400 hover:bg-rose-50')}`}
                >
                  {isInWishlist(product.id) ? '♥ In Wishlist' : '♡ Add to Wishlist'}
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-1">🚚</div>
                  <div className="font-semibold text-gray-800">Free Shipping</div>
                  <div className="text-xs text-gray-600">Above ₹500</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-1">🔄</div>
                  <div className="font-semibold text-gray-800">Easy Returns</div>
                  <div className="text-xs text-gray-600">30-day policy</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-1">🔒</div>
                  <div className="font-semibold text-gray-800">Secure Payment</div>
                  <div className="text-xs text-gray-600">256-bit SSL</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-xl text-center">
                  <div className="text-2xl mb-1">🛠️</div>
                  <div className="font-semibold text-gray-800">Installation</div>
                  <div className="text-xs text-gray-600">Expert support</div>
                </div>
              </div>

              {/* Collapsible info */}
              <div className="mt-8 space-y-3">
                <details className="bg-gray-50 rounded-xl p-4">
                  <summary className="cursor-pointer font-semibold text-gray-800">Description</summary>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                </details>
                <details className="bg-gray-50 rounded-xl p-4">
                  <summary className="cursor-pointer font-semibold text-gray-800">Specifications</summary>
                  <ul className="mt-2 text-gray-600 list-disc pl-6 text-sm">
                    <li>Category: {product.category.replace(/-/g,' ')}</li>
                    <li>Rating: {product.rating} / 5</li>
                    <li>Price: ₹{product.price.toLocaleString()}</li>
                  </ul>
                </details>
                <details className="bg-gray-50 rounded-xl p-4">
                  <summary className="cursor-pointer font-semibold text-gray-800">FAQs</summary>
                  <p className="text-gray-600 mt-2 text-sm">Have questions? <Link to="/contact" className="text-red-500 underline">Contact us</Link> for expert help.</p>
                </details>
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

      {/* Mobile sticky add-to-cart bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:hidden z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-gray-500">Price</div>
            <div className="text-lg font-bold text-gray-800">₹{(product.price * qty).toLocaleString()}</div>
          </div>
          <button
            onClick={() => {
              const existing = cart.find(it => it.id === product.id)
              if (existing) {
                updateQuantity(product.id, existing.quantity + qty)
              } else {
                addToCart(product)
                if (qty > 1) updateQuantity(product.id, qty)
              }
            }}
            className="flex-1 ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold"
          >
            Add {qty} to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
