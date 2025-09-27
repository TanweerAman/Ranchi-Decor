import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-red-400">Stay Updated</h3>
            <p className="mb-6 text-gray-400 leading-relaxed">Get updates on new collections and offers.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-red-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-red-300 transition-colors">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-red-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-red-300 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-red-300 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-red-400">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=hospital-flooring" className="text-gray-400 hover:text-red-300 transition-colors">
                  Hospital Flooring
                </Link>
              </li>
              <li>
                <Link to="/products?category=office-flooring" className="text-gray-400 hover:text-red-300 transition-colors">
                  Office Flooring
                </Link>
              </li>
              <li>
                <Link to="/products?category=wallpaper" className="text-gray-400 hover:text-red-300 transition-colors">
                  Wallpaper
                </Link>
              </li>
              <li>
                <Link to="/products?category=wooden-flooring" className="text-gray-400 hover:text-red-400 transition-colors">
                  Wooden Flooring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-red-400">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.4 10a7.4 7.4 0 10-14.8 0C4.6 15.2 12 21 12 21s7.4-5.8 7.4-11z"/></svg>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Ranchi Decor Store<br />
                    123 Main Street<br />
                    Ranchi, Jharkhand 834001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M8 5v14m8-14v14M5 19h14"/></svg>
                </div>
                <p className="text-gray-300">+91 9876543210</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <p className="text-gray-300">info@ranchidecor.com</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5.9.4.4.7.9.9 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.5-.4.4-.9.7-1.5.9-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.5.4-.4.9-.7 1.5-.9.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 2.2c-3.1 0-3.5 0-4.7.1-1 .1-1.5.2-1.9.4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3.9-.4 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.5.4 1.9.2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.2 1.9-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.5-.4-1.9-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.57-2.46.67a4.29 4.29 0 001.88-2.37 8.58 8.58 0 01-2.72 1.04A4.28 4.28 0 0015.5 4c-2.4 0-4.29 1.94-4.29 4.33 0 .34.03.67.1.98C7.46 9.18 4.4 7.53 2.4 5a4.36 4.36 0 00-.58 2.18c0 1.5.75 2.83 1.88 3.6-.69-.02-1.35-.22-1.92-.53v.05c0 2.08 1.45 3.81 3.36 4.2-.36.1-.76.15-1.16.15-.28 0-.56-.03-.83-.08.56 1.82 2.2 3.15 4.15 3.19A8.59 8.59 0 012 19.55 12.1 12.1 0 008.29 21c7.2 0 11.14-6.06 11.14-11.33 0-.17 0-.34-.01-.51A7.98 7.98 0 0022.46 6z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Ranchi Decor. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
