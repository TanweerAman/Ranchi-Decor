export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About Ranchi Decor
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner for premium flooring and interior decoration solutions in Ranchi
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, Ranchi Decor has been at the forefront of transforming spaces across Ranchi
                and Jharkhand. What started as a small flooring store has grown into a comprehensive interior
                solutions provider, serving residential, commercial, and institutional clients.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in premium flooring materials including PVC flooring, carpet tiles, wooden flooring,
                and decorative wallpapers. Our commitment to quality, innovation, and customer satisfaction
                has made us the preferred choice for discerning customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide high-quality, affordable flooring and interior decoration products that enhance
                the beauty, functionality, and durability of spaces across Ranchi and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Ranchi Decor?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-gray-600">We source only the finest materials and use latest technology in our products</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold mb-3">Free Delivery</h3>
                <p className="text-gray-600">Free delivery on orders above ₹10,000 within Ranchi city limits</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-3">Expert Installation</h3>
                <p className="text-gray-600">Professional installation service by our certified technicians</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">10 Year Warranty</h3>
                <p className="text-gray-600">Comprehensive warranty coverage on all our products</p>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-3">Commercial & Institutional</h3>
                <p className="text-gray-600">Specialized flooring solutions for hospitals, offices, schools, and commercial spaces</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3">Residential Solutions</h3>
                <p className="text-gray-600">Beautiful flooring and wallpaper options for homes and apartments</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3">Custom Design</h3>
                <p className="text-gray-600">Personalized wallpaper designs and custom flooring solutions</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="/products"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
