import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import PolicyBar from "../components/PolicyBar";
import SectionHeader from "../components/SectionHeader";
import CategoryTile from "../components/CategoryTile";
import CategoryCarousel from "../components/CategoryCarousel";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";
import BestSellersCard from "../components/BestSellersCard";
import RecommendedCard from "../components/RecommendedCard";
import ProductModal from "../components/ProductModal";
import products from "../data/products";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Note: Use Tailwind v4 opacity syntax like bg-black/40 instead of bg-opacity-40

  const slides = [
    {
      id: 1,
      title: "Premium Hospital Flooring",
      subtitle: "Transform Your Space",
      description:
        "Discover our extensive collection of hospital, office, and commercial flooring solutions designed for durability and style.",
      image:
        "https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg",
      ctaText: "Hospital Flooring",
      ctaLink: "/products?category=hospital-flooring",
    },
    {
      id: 2,
      title: "Office Interiors",
      subtitle: "Professional Spaces",
      description:
        "Create inspiring work environments with our premium office furniture and interior solutions.",
      image:
        "https://images.pexels.com/photos/6899393/pexels-photo-6899393.jpeg",
      ctaText: "Explore Office",
      ctaLink: "/products?category=office-furniture",
    },
    {
      id: 3,
      title: "Gym Flooring",
      subtitle: "Built to Last",
      description:
        "Industrial-grade materials and designs for high-traffic commercial environments.",
      image:
        "https://images.unsplash.com/photo-1637666123723-1bea229bd054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMGZsb29yaW5nfGVufDB8fDB8fHww",
      ctaText: "Gym Flooring",
      ctaLink: "/products?category=commercial",
    },
    {
      id: 4,
      title: "Wooden Flooring",
      subtitle: "Luxury Living",
      description:
        "Transform your space with our curated collection of modern furniture and decor pieces.",
      image:
        "https://images.pexels.com/photos/3285193/pexels-photo-3285193.jpeg",
      ctaText: "Shop Design",
      ctaLink: "/products?category=interior-design",
    },
    {
      id: 5,
      title: "Vinycl Flooring",
      subtitle: "ransform Your Space with Luxury Vinyl Flooring",
      description:
        "Easy to maintain and long-lasting, vinyl flooring combines elegance with practicality.",
      image:
        "https://images.pexels.com/photos/33893221/pexels-photo-33893221.jpeg",
      ctaText: "Explore Our Collection",
      ctaLink: "/products?category=lighting",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isPaused]);

  const categories = [
    {
      id: 1,
      name: "Hospital Flooring",
      image: "https://media.istockphoto.com/id/1454794642/photo/empty-corridor-hospital.jpg?s=2048x2048&w=is&k=20&c=G5Sp6FTRKA-VIFqLTQmcIZwyMmlyh1OabpGC8Kx87IM=",
      link: "/products?category=hospital-flooring",
    },
    {
      id: 2,
      name: "Office Flooring",
      image: "https://images.unsplash.com/photo-1541558869434-2840d308329a",
      link: "/products?category=office-flooring",
    },
    {
      id: 3,
      name: "Commercial Decor",
      image: "https://media.istockphoto.com/id/529272173/photo/modern-office-room-interior.jpg?s=2048x2048&w=is&k=20&c=ugBSQmwO4Ko81_J7piBGuwbgY7bwOI7Q7eBj-ey5OrE=",
      link: "/products?category=commercial-decor",
    },
    {
      id: 4,
      name: "GYM Flooring",
      image: "https://media.istockphoto.com/id/511319848/photo/retro-indoor-gymnasium.jpg?s=1024x1024&w=is&k=20&c=CE0vpFEZoVoZGSFmpeoB-IBQuO8UyFo0ATrC463T7U4=",
      link: "/products?category=gym-flooring",
    },
    {
      id: 5,
      name: "Vinyl Flooring",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      link: "/products?category=vinyl-flooring",
    },
    {
      id: 6,
      name: "Wooden Flooring",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products?category=wooden-flooring",
    },
  ];

  const featuredProducts = products.slice(0, 8);
  const bestSellers = products.slice(8, 16);
  const recommendedProducts = products.slice(16, 24);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Fallback gradient background (behind image) */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600 to-purple-600" />

              {/* Actual image element so we can detect load/error and ensure rendering */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover z-10"
                loading={index === 0 ? "eager" : "lazy"}
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                onLoad={() =>
                  setImagesLoaded((prev) => ({ ...prev, [slide.id]: true }))
                }
                onError={() => {
                  // Mark as loaded to hide the spinner; gradient stays as the background
                  setImagesLoaded((prev) => ({ ...prev, [slide.id]: true }));
                }}
              />

              {/* Loading Overlay */}
              {!imagesLoaded[slide.id] && (
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-lg font-semibold">Loading...</p>
                  </div>
                </div>
              )}

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 z-20" />

              {/* Content */}
              <div className="relative h-full flex items-center justify-center text-center z-30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-2 sm:mb-4">
                    {slide.subtitle}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.ctaLink}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Policy Bar */}
      <PolicyBar />

  {/* Categories */}
  <section className="py-8 sm:py-12 lg:py-16 bg-[color:var(--pale-bg,#fbf9f7)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Shop by Category"
            subtitle="Explore our wide range of products"
          />
          <CategoryCarousel categories={categories} />
        </div>
      </section>

  {/* Featured Products */}
  <section className="py-8 sm:py-12 lg:py-16 bg-[color:var(--pale-bg,#fbf9f7)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Products"
            subtitle="Handpicked items for your space"
          />
          <ProductCarousel products={featuredProducts} />
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

  {/* Best Sellers */}
  <section className="py-16 bg-[color:var(--pale-bg,#fbf9f7)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Best Selling Products
            </h2>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('best-sellers-carousel');
                container.scrollBy({ left: -320, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('best-sellers-carousel');
                container.scrollBy({ left: 320, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Products Carousel */}
            <div 
              id="best-sellers-carousel"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {bestSellers.slice(0, 10).map((product) => (
                <BestSellersCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={handleQuickView}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* Recommended For You */}
  <section className="py-16 bg-[color:var(--pale-bg,#fbf9f7)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Recommended For You
            </h2>
            <p className="text-gray-600">
              Discover flooring options that match your style and budget.
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('recommended-carousel');
                container.scrollBy({ left: -320, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('recommended-carousel');
                container.scrollBy({ left: 320, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Products Carousel */}
            <div 
              id="recommended-carousel"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {recommendedProducts.map((product) => (
                <RecommendedCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={handleQuickView}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* Brand Strip removed */}

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
            Get in touch with our experts for personalized recommendations and
            competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
