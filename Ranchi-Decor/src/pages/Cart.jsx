import useCart from '../context/useCart'
import { Link, useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart()
  const navigate = useNavigate()

  if(cart.length === 0) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center bg-white p-12 rounded-3xl shadow-2xl max-w-md">
        <div className="text-8xl mb-6">🛒</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link
          to="/products"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
        >
          Start Shopping ✨
        </Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Your Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg">Review your items and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-3">₹{item.price.toLocaleString()} each</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          −
                        </button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cart.length} items)</span>
                  <span className="font-semibold">₹{getTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">₹{(getTotal() * 0.18).toLocaleString()}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-green-600">₹{(getTotal() * 1.18).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
              >
                Proceed to Checkout 🚀
              </button>

              <Link
                to="/products"
                className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-2xl font-semibold text-center hover:bg-purple-600 hover:text-white transition-all duration-300 block"
              >
                Continue Shopping
              </Link>

              {/* Promo Code */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-3">Have a Promo Code?</h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
