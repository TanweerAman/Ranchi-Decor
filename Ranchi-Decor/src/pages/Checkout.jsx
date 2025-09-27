import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useCart from '../context/useCart'

export default function Checkout() {
  const navigate = useNavigate()
  const { cart, getTotal } = useCart()

  // Empty cart state
  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full">
          <div className="text-7xl mb-4">🧺</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some items to proceed to checkout.</p>
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  // Pricing
  const subtotal = getTotal()
  const tax = Math.round(subtotal * 0.18)
  const [promo, setPromo] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const discount = useMemo(() => {
    if (!appliedPromo) return 0
    if (appliedPromo === 'RANCHI10') return Math.round(subtotal * 0.1)
    return 0
  }, [appliedPromo, subtotal])
  const shipping = 0
  const total = Math.max(0, subtotal + tax + shipping - discount)

  // Form state
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    pincode: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    landmark: '',
    instructions: '',
    saveAddress: true,
  })
  const [touched, setTouched] = useState({})
  const [payment, setPayment] = useState('cod') // 'cod' | 'upi'
  const [upiId, setUpiId] = useState('')
  const [placing, setPlacing] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)

  const errors = useMemo(() => {
    const e = {}
    if (!form.fullName || form.fullName.trim().length < 3) e.fullName = 'Please enter your full name'
    const emailOk = /.+@.+\..+/.test(form.email)
    if (!emailOk) e.email = 'Enter a valid email'
    const phoneOk = /^\d{10}$/.test(form.phone)
    if (!phoneOk) e.phone = 'Enter 10-digit phone number'
    const pinOk = /^\d{6}$/.test(form.pincode)
    if (!pinOk) e.pincode = 'Enter 6-digit pincode'
    if (!form.address1.trim()) e.address1 = 'Address is required'
    if (!form.city.trim()) e.city = 'City is required'
    if (!form.state.trim()) e.state = 'State is required'
    if (payment === 'upi') {
      const upiOk = /^[\w.-]+@[\w.-]+$/.test(upiId)
      if (!upiOk) e.upiId = 'Enter a valid UPI ID (e.g., name@bank)'
    }
    return e
  }, [form, payment, upiId])

  const isValid = Object.keys(errors).length === 0

  const handleChange = (key) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm(prev => ({ ...prev, [key]: v }))
  }

  const handleBlur = (key) => () => setTouched(prev => ({ ...prev, [key]: true }))

  const applyPromo = () => {
    const code = promo.trim().toUpperCase()
    if (code === 'RANCHI10') {
      setAppliedPromo(code)
    } else {
      setAppliedPromo(null)
    }
  }

  const placeOrder = async () => {
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      pincode: true,
      address1: true,
      city: true,
      state: true,
      ...(payment === 'upi' ? { upiId: true } : {}),
    })
    if (!isValid) return
    setPlacing(true)
    // Simulate API
    await new Promise(r => setTimeout(r, 1200))
    setPlacing(false)
    setOrderSuccess(true)
    // Redirect after a short delay
    setTimeout(() => navigate('/'), 1600)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Secure Checkout
          </h1>
          <p className="text-gray-600 mt-2">Provide your shipping details and choose a payment method</p>
        </div>

        {/* Success Toast */}
        {orderSuccess && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800">
            ✅ Order placed successfully! Redirecting to home…
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: Shipping + Payment */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Shipping Address</h2>
                <span className="text-xs sm:text-sm text-gray-500">All fields marked * are required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${touched.fullName && errors.fullName ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-purple-500'}`}
                    value={form.fullName}
                    onChange={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    placeholder="e.g., Rahul Kumar"
                  />
                  {touched.fullName && errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${touched.email && errors.email ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-purple-500'}`}
                    value={form.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholder="you@example.com"
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${touched.phone && errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-purple-500'}`}
                    value={form.phone}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/\D/g, '').slice(0, 10)
                      setForm(prev => ({ ...prev, phone: onlyDigits }))
                    }}
                    onBlur={handleBlur('phone')}
                    placeholder="10-digit mobile number"
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${touched.pincode && errors.pincode ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-purple-500'}`}
                    value={form.pincode}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/\D/g, '').slice(0, 6)
                      setForm(prev => ({ ...prev, pincode: onlyDigits }))
                    }}
                    onBlur={handleBlur('pincode')}
                    placeholder="e.g., 834001"
                  />
                  {touched.pincode && errors.pincode && (
                    <p className="mt-1 text-xs text-red-500">{errors.pincode}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1 *</label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${touched.address1 && errors.address1 ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-purple-500'}`}
                    value={form.address1}
                    onChange={handleChange('address1')}
                    onBlur={handleBlur('address1')}
                    placeholder="House no., Building, Street"
                  />
                  {touched.address1 && errors.address1 && (
                    <p className="mt-1 text-xs text-red-500">{errors.address1}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2 (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={form.address2}
                    onChange={handleChange('address2')}
                    placeholder="Area, Colony"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${touched.city && errors.city ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-purple-500'}`}
                    value={form.city}
                    onChange={handleChange('city')}
                    onBlur={handleBlur('city')}
                    placeholder="e.g., Ranchi"
                  />
                  {touched.city && errors.city && (
                    <p className="mt-1 text-xs text-red-500">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${touched.state && errors.state ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-purple-500'}`}
                    value={form.state}
                    onChange={handleChange('state')}
                    onBlur={handleBlur('state')}
                    placeholder="e.g., Jharkhand"
                  />
                  {touched.state && errors.state && (
                    <p className="mt-1 text-xs text-red-500">{errors.state}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Landmark (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={form.landmark}
                    onChange={handleChange('landmark')}
                    placeholder="Nearby landmark"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Instructions (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={form.instructions}
                    onChange={handleChange('instructions')}
                    placeholder="Any specific instructions?"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <input id="saveAddress" type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" checked={form.saveAddress} onChange={handleChange('saveAddress')} />
                <label htmlFor="saveAddress" className="text-sm text-gray-700">Save this address for future orders</label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Payment Method</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${payment === 'cod' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input
                    type="radio"
                    name="payment"
                    className="text-purple-600 focus:ring-purple-500"
                    checked={payment === 'cod'}
                    onChange={() => setPayment('cod')}
                  />
                  <div>
                    <div className="font-semibold text-gray-800">Cash on Delivery</div>
                    <div className="text-xs text-gray-500">Pay when the order arrives at your doorstep</div>
                  </div>
                </label>

                <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${payment === 'upi' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input
                    type="radio"
                    name="payment"
                    className="text-purple-600 focus:ring-purple-500"
                    checked={payment === 'upi'}
                    onChange={() => setPayment('upi')}
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">UPI</div>
                    <div className="text-xs text-gray-500">Pay securely via your UPI app</div>
                    {payment === 'upi' && (
                      <div className="mt-3">
                        <input
                          type="text"
                          placeholder="yourname@bank"
                          className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${touched.upiId && errors.upiId ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-purple-500'}`}
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          onBlur={handleBlur('upiId')}
                        />
                        {touched.upiId && errors.upiId && (
                          <p className="mt-1 text-xs text-red-500">{errors.upiId}</p>
                        )}
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 sticky top-24">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>

              {/* Items */}
              <div className="max-h-64 overflow-auto pr-1 mb-4 space-y-3">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-800 truncate">{item.name}</div>
                      <div className="text-xs text-gray-500">Qty {item.quantity} × ₹{item.price.toLocaleString()}</div>
                    </div>
                    <div className="text-sm font-bold text-gray-800">₹{(item.price * item.quantity).toLocaleString()}</div>
                  </div>
                ))}
              </div>

              {/* Promo */}
              <div className="mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="Promo code (try RANCHI10)"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button type="button" onClick={applyPromo} className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">Apply</button>
                </div>
                {appliedPromo && (
                  <p className="text-xs text-green-600 mt-1">Code {appliedPromo} applied! You saved ₹{discount.toLocaleString()}.</p>
                )}
                {promo && !appliedPromo && (
                  <p className="text-xs text-gray-500 mt-1">Available code: RANCHI10 (10% off)</p>
                )}
              </div>

              {/* Totals */}
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Discount</span>
                    <span className="text-green-600">− ₹{discount.toLocaleString()}</span>
                  </div>
                )}
                <hr className="border-gray-200" />
                <div className="flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span className="text-green-600">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={placeOrder}
                disabled={!isValid || placing}
                className={`w-full py-3 rounded-2xl font-bold transition-all duration-300 ${(!isValid || placing) ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl transform hover:scale-105'}`}
              >
                {placing ? 'Placing Order…' : 'Place Order'}
              </button>

              <Link to="/cart" className="block text-center mt-3 text-sm text-purple-600 hover:text-purple-700">Back to Cart</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur border-t border-gray-200 p-4 flex items-center justify-between z-40">
        <div>
          <div className="text-xs text-gray-500">Total</div>
          <div className="text-lg font-bold text-green-600">₹{total.toLocaleString()}</div>
        </div>
        <button
          type="button"
          onClick={placeOrder}
          disabled={!isValid || placing}
          className={`px-6 py-3 rounded-xl font-semibold ${(!isValid || placing) ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'}`}
        >
          {placing ? 'Placing…' : 'Place Order'}
        </button>
      </div>
    </div>
  )
}
