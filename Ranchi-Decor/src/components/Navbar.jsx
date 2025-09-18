import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import useCart from '../context/useCart'

export default function Navbar() {
  const { cart } = useCart()
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate('/products?search=' + encodeURIComponent(searchQuery.trim()))
    }
  }

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs sm:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-300">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M8 5v14m8-14v14M5 19h14"/></svg>
              +91 9876543210
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              info@ranchidecor.com
            </span>
          </div>
          {/* Hide secondary links on mobile, show from md up */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/wishlist" className="hover:text-yellow-400 transition-colors">Wishlist</Link>
            <Link to="/account" className="hover:text-yellow-400 transition-colors">My Account</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center ">
            {/* <img
              src="/logo2.png"
              alt="Ranchi Decor"
              className="h-12 w-auto"
            /> */}
            <span className="text-2xl sm:text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Ranchi Decor
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for flooring, wallpaper, carpet..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Cart */}
            <Link to="/cart" className="relative flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h12.2M7 13l1.5-7h11"/></svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden lg:block">Cart</span>
            </Link>

            {/* Login */}
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
            >
              🔍
            </button>
          </form>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex justify-center mt-6 border-t border-gray-200 pt-4">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Categories ▼
              </span>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <Link to="/products?category=hospital-flooring" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hospital Flooring</Link>
                <Link to="/products?category=office-flooring" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Office Flooring</Link>
                <Link to="/products?category=commercial-flooring" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Commercial Flooring</Link>
                <Link to="/products?category=wallpaper" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Wallpaper</Link>
                <Link to="/products?category=wallpaper-customize" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Custom Wallpaper</Link>
                <Link to="/products?category=carpet" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Carpet</Link>
                <Link to="/products?category=gtm-flooring" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">GTM Flooring</Link>
                <Link to="/products?category=wooden-flooring" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Wooden Flooring</Link>
              </div>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white border-t border-gray-200 pt-4">
            <nav className="space-y-2">
              <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Home</Link>
              <Link to="/products" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Products</Link>
              <Link to="/about" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">About Us</Link>
              <Link to="/contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Contact</Link>
              <Link to="/cart" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Cart ({cartCount})</Link>
              <Link to="/login" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Login</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
