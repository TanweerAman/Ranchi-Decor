import { Link } from 'react-router-dom'

export default function PromoStrip() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-black text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="font-semibold text-center md:text-left">
          Upto 40% OFF on Designer Wallpaper | Free Delivery on orders above ₹10,000
        </div>
        <Link
          to="/products?category=wallpaper"
          className="bg-black text-white px-3 py-1 rounded-md text-xs font-semibold hover:bg-gray-900"
        >
          Shop Offers →
        </Link>
      </div>
    </div>
  )
}
