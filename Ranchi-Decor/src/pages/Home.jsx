import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import PolicyBar from "../components/PolicyBar";
import SectionHeader from "../components/SectionHeader";
import CategoryTile from "../components/CategoryTile";
import CategoryCarousel from "../components/CategoryCarousel";
import CategoryGrid from "../components/CategoryGrid";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";
import BestSellersCard from "../components/BestSellersCard";
import RecommendedCard from "../components/RecommendedCard";
import ProductModal from "../components/ProductModal";
import products from "../data/products";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featuredCategoryIndex, setFeaturedCategoryIndex] = useState(0);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Featured Categories Data - 8 products from local images
  const featuredCategories = [
    { name: "SPC Flooring", image: "/Image/SPC Flooring.jpg" },
    { name: "Wooden Flooring", image: "/Image/Wooden Flooring.jpg" },
    { name: "Window Blinds", image: "/Image/Window Blinds.jpg" },
    { name: "Artificial Grass", image: "/Image/Artificial Grass (Green).jpg" },
    { name: "Customized Wallpapers", image: "/Image/Customized Wallpapers.jpg" },
    { name: "Fluted Panels", image: "/Image/Fluted Panels.jpg" },
    { name: "Gym Flooring", image: "/Image/Gym Flooring.jpg" },
    { name: "Vinyl Flooring", image: "/Image/vinyl.jpg" }
  ];

  const nextFeaturedCategories = () => {
    if (featuredCategoryIndex + 4 < featuredCategories.length) {
      setFeaturedCategoryIndex(featuredCategoryIndex + 4);
    }
  };

  const prevFeaturedCategories = () => {
    if (featuredCategoryIndex - 4 >= 0) {
      setFeaturedCategoryIndex(featuredCategoryIndex - 4);
    }
  };

  const currentFeaturedCategories = featuredCategories.slice(featuredCategoryIndex, featuredCategoryIndex + 4);

  // Note: Use Tailwind v4 opacity syntax like bg-black/40 instead of bg-opacity-40

  const slides = [
    {
      id: 1,
      title: "Hospital Flooring",
      subtitle: "Durable & Hygienic",
      description:
        "Safe, hygienic floors for healthcare spaces.",
      image:
        "https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg",
      ctaText: "Hospital Flooring",
      ctaLink: "/products?category=hospital-flooring",
    },
    {
      id: 2,
      title: "Office Interiors",
      subtitle: "Modern & Professional",
      description:
        "Designs that elevate workplaces.",
      image:
        "https://images.pexels.com/photos/6899393/pexels-photo-6899393.jpeg",
      ctaText: "Explore Office",
      ctaLink: "/products?category=office-furniture",
    },
    {
      id: 3,
      title: "Gym Flooring",
      subtitle: "Strong & Shock‑Absorbent",
      description:
        "High‑impact surfaces built for performance.",
      image:
        "https://images.unsplash.com/photo-1637666123723-1bea229bd054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMGZsb29yaW5nfGVufDB8fDB8fHww",
      ctaText: "Gym Flooring",
      ctaLink: "/products?category=commercial",
    },
    {
      id: 4,
      title: "Wooden Flooring",
      subtitle: "Warm & Timeless",
      description:
        "Premium wood looks for modern homes.",
      image:
        "https://images.pexels.com/photos/3285193/pexels-photo-3285193.jpeg",
      ctaText: "Shop Wooden",
      ctaLink: "/products?category=interior-design",
    },
    {
      id: 5,
      title: "Vinyl Flooring",
      subtitle: "Luxury Vinyl",
      description:
        "Stylish, easy‑care floors for busy spaces.",
      image:
        "https://images.pexels.com/photos/33893221/pexels-photo-33893221.jpeg",
      ctaText: "Explore Vinyl",
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

  const onTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
    setIsPaused(true);
  };

  const onTouchMove = (e) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    setTouchDeltaX(currentX - touchStartX);
  };

  const onTouchEnd = () => {
    const threshold = 50; // px
    if (touchDeltaX > threshold) {
      prevSlide();
    } else if (touchDeltaX < -threshold) {
      nextSlide();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
    setIsPaused(false);
  };

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
      <section
        className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
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

              {/* Content - perfectly centered */}
              <div className="relative h-full z-30 flex items-center justify-center">
                <div
                  key={`hero-content-${currentSlide}-${slide.id}`}
                  className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
                >
                  <h1 className="animate-hero-text text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
                    {slide.title}
                  </h1>
                  <p className="animate-hero-text anim-delay-100 text-lg sm:text-xl md:text-2xl text-gray-200 mb-2 sm:mb-3">
                    {slide.subtitle}
                  </p>
                  <p className="animate-hero-text anim-delay-200 text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto line-clamp-2">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.ctaLink}
                    className="animate-hero-cta anim-delay-300 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows (hidden on small screens) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all"
            aria-label="Previous slide"
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
            className="hidden md:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all"
            aria-label="Next slide"
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

          {/* Slide Indicators (clickable dots; prominent on mobile) */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Policy Bar */}
      {/* <PolicyBar /> */}

  {/* Categories */}
  <section className="py-8 sm:py-12 lg:py-16 bg-[color:var(--pale-bg,#fbf9f7)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Shop All Categories"
            subtitle="Explore our wide range of products"
          />
          <CategoryGrid categories={categories} />
        </div>
      </section>

  {/* Trending on Ranchi Decor */}
  <section className="py-8 sm:py-12 lg:py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
        Trending on Ranchi Decor
      </h2>
      
      {/* Mobile View - Grid Layout */}
      <div className="block md:hidden">
        {/* Small Product Cards Grid - 2x4 layout */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* SPC Flooring */}
          <Link to="/products" className="bg-gray-50 p-3 flex items-center space-x-3 hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded-lg">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src="/Image/SPC Flooring.jpg"
                alt="SPC Flooring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-xs truncate">SPC Flooring</h3>
              <p className="text-xs text-gray-500">45 products</p>
            </div>
          </Link>

          {/* Wooden Flooring */}
          <Link to="/products" className="bg-gray-50 p-3 flex items-center space-x-3 hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded-lg">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src="/Image/Wooden Flooring.jpg"
                alt="Wooden Flooring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-xs truncate">Wooden Flooring</h3>
              <p className="text-xs text-gray-500">33 products</p>
            </div>
          </Link>

          {/* Window Blinds */}
          <Link to="/products" className="bg-gray-50 p-3 flex items-center space-x-3 hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded-lg">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src="/Image/Window Blinds.jpg"
                alt="Window Blinds"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-xs truncate">Window Blinds</h3>
              <p className="text-xs text-gray-500">4 products</p>
            </div>
          </Link>

          {/* Customized Wallpapers */}
          <Link to="/products" className="bg-gray-50 p-3 flex items-center space-x-3 hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded-lg">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src="/Image/Customized Wallpapers.jpg"
                alt="Customized Wallpapers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-xs truncate">Customized Wallpapers</h3>
              <p className="text-xs text-gray-500">26 products</p>
            </div>
          </Link>

          {/* Artificial Grass */}
          <Link to="/products" className="bg-gray-50 p-3 flex items-center space-x-3 hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded-lg">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src="/Image/Artificial Grass (Green).jpg"
                alt="Artificial Grass"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-xs truncate">Artificial Grass</h3>
              <p className="text-xs text-gray-500">7 products</p>
            </div>
          </Link>

          {/* Fluted Panels */}
          <Link to="/products" className="bg-gray-50 p-3 flex items-center space-x-3 hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded-lg">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src="/Image/Fluted Panels.jpg"
                alt="Fluted Panels"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-xs truncate">Fluted Panels</h3>
              <p className="text-xs text-gray-500">26 products</p>
            </div>
          </Link>

          {/* Vinyl Flooring */}
          <Link to="/products" className="bg-gray-50 p-3 flex items-center space-x-3 hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded-lg">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src="/Image/vinyl.jpg"
                alt="Vinyl Flooring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-xs truncate">Vinyl Flooring</h3>
              <p className="text-xs text-gray-500">14 products</p>
            </div>
          </Link>

          {/* Gym Flooring */}
          <Link to="/products" className="bg-gray-50 p-3 flex items-center space-x-3 hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded-lg">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src="/Image/Gym Flooring.jpg"
                alt="Gym Flooring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-xs truncate">Gym Flooring</h3>
              <p className="text-xs text-gray-500">18 products</p>
            </div>
          </Link>
        </div>

        {/* Mobile Large Promotional Cards - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* SPC Flooring Card */}
          <Link to="/products" className="group cursor-pointer">
            <div className="relative overflow-hidden h-40 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg">
              <img 
                src="/Image/SPC Flooring.jpg"
                alt="SPC Flooring"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1 leading-tight drop-shadow-lg">Transform Your Space with Premium SPC</h3>
                  <p className="text-xs text-white font-medium drop-shadow-lg">SPC Flooring</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs font-bold self-start transition-colors rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </Link>

          {/* Window Blinds Card */}
          <Link to="/products" className="group cursor-pointer">
            <div className="relative overflow-hidden h-40 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg">
              <img 
                src="/Image/Window Blinds.jpg"
                alt="Window Blinds"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1 leading-tight drop-shadow-lg">Blinds That Control Light & Privacy</h3>
                  <p className="text-xs text-white font-medium drop-shadow-lg">Window Blinds</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs font-bold self-start transition-colors rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </Link>

          {/* Fluted Panels Card */}
          <Link to="/products" className="group cursor-pointer">
            <div className="relative overflow-hidden h-40 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg">
              <img 
                src="/Image/Fluted Panels.jpg"
                alt="Fluted Panels"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1 leading-tight drop-shadow-lg">Elegant Panels for Modern Interiors</h3>
                  <p className="text-xs text-white font-medium drop-shadow-lg">Fluted Panels</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs font-bold self-start transition-colors rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </Link>

          {/* Artificial Grass Card */}
          <Link to="/products" className="group cursor-pointer">
            <div className="relative overflow-hidden h-40 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg">
              <img 
                src="/Image/Artificial Grass (Green).jpg"
                alt="Artificial Grass"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1 leading-tight drop-shadow-lg">Natural Look, Zero Maintenance</h3>
                  <p className="text-xs text-white font-medium drop-shadow-lg">Artificial Grass</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs font-bold self-start transition-colors rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop View - Original Carousel Layout */}
      <div className="hidden md:block">
        {/* Categories Container with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => {
              const container = document.getElementById('trending-carousel');
              container.scrollBy({ left: -300, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Arrow */}
          <button
            onClick={() => {
              const container = document.getElementById('trending-carousel');
              container.scrollBy({ left: 300, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Categories Carousel */}
          <div 
            id="trending-carousel"
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* SPC Flooring */}
            <Link to="/products" className="flex-shrink-0">
              <div className="bg-gray-50 p-4 flex items-center space-x-4 min-w-[240px] hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                  <img 
                    src="/Image/SPC Flooring.jpg"
                    alt="SPC Flooring"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">SPC Flooring</h3>
                  <p className="text-xs text-gray-500">45 products</p>
                </div>
              </div>
            </Link>

            {/* Wooden Flooring */}
            <Link to="/products" className="flex-shrink-0">
              <div className="bg-gray-50 p-4 flex items-center space-x-4 min-w-[240px] hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                  <img 
                    src="/Image/Wooden Flooring.jpg"
                    alt="Wooden Flooring"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">Wooden Flooring</h3>
                  <p className="text-xs text-gray-500">33 products</p>
                </div>
              </div>
            </Link>

            {/* Window Blinds */}
            <Link to="/products" className="flex-shrink-0">
              <div className="bg-gray-50 p-4 flex items-center space-x-4 min-w-[240px] hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                  <img 
                    src="/Image/Window Blinds.jpg"
                    alt="Window Blinds"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">Window Blinds</h3>
                  <p className="text-xs text-gray-500">4 products</p>
                </div>
              </div>
            </Link>

            {/* Customized Wallpapers */}
            <Link to="/products" className="flex-shrink-0">
              <div className="bg-gray-50 p-4 flex items-center space-x-4 min-w-[240px] hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                  <img 
                    src="/Image/Customized Wallpapers.jpg"
                    alt="Customized Wallpapers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">Customized Wallpapers</h3>
                  <p className="text-xs text-gray-500">26 products</p>
                </div>
              </div>
            </Link>

            {/* Artificial Grass */}
            <Link to="/products" className="flex-shrink-0">
              <div className="bg-gray-50 p-4 flex items-center space-x-4 min-w-[240px] hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                  <img 
                    src="/Image/Artificial Grass (Green).jpg"
                    alt="Artificial Grass"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">Artificial Grass</h3>
                  <p className="text-xs text-gray-500">7 products</p>
                </div>
              </div>
            </Link>

            {/* Vinyl Flooring */}
            <Link to="/products" className="flex-shrink-0">
              <div className="bg-gray-50 p-4 flex items-center space-x-4 min-w-[240px] hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                  <img 
                    src="/Image/vinyl.jpg"
                    alt="Vinyl Flooring"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">Vinyl Flooring</h3>
                  <p className="text-xs text-gray-500">14 products</p>
                </div>
              </div>
            </Link>

            {/* Gym Flooring */}
            <Link to="/products" className="flex-shrink-0">
              <div className="bg-gray-50 p-4 flex items-center space-x-4 min-w-[240px] hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                  <img 
                    src="/Image/Gym Flooring.jpg"
                    alt="Gym Flooring"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">Gym Flooring</h3>
                  <p className="text-xs text-gray-500">18 products</p>
                </div>
              </div>
            </Link>

            {/* Carpet Tiles */}
            <Link to="/products" className="flex-shrink-0">
              <div className="bg-gray-50 p-4 flex items-center space-x-4 min-w-[240px] hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                  <img 
                    src="/Image/Carpet Tiles.jpg"
                    alt="Carpet Tiles"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">Carpet Tiles</h3>
                  <p className="text-xs text-gray-500">22 products</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Large Promotional Cards - 4 Column Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* SPC Flooring Card */}
          <Link to="/products" className="group cursor-pointer">
            <div className="relative overflow-hidden h-80 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <img 
                src="/Image/SPC Flooring.jpg"
                alt="SPC Flooring"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight drop-shadow-lg">Transform Your Space<br/>with Premium SPC.</h3>
                  <p className="text-sm text-white font-medium drop-shadow-lg">SPC Flooring</p>
                </div>
                {/* <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs font-bold self-start transition-colors">
                  SHOP NOW
                </button> */}
              </div>
            </div>
          </Link>

          {/* Window Blinds Card */}
          <Link to="/products" className="group cursor-pointer">
            <div className="relative overflow-hidden h-80 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <img 
                src="/Image/Window Blinds.jpg"
                alt="Window Blinds"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight drop-shadow-lg">Blinds That Control<br/>Light & Privacy.</h3>
                  <p className="text-sm text-white font-medium drop-shadow-lg">Window Blinds</p>
                </div>
                {/* <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs font-bold self-start transition-colors">
                  SHOP NOW
                </button> */}
              </div>
            </div>
          </Link>

          {/* Fluted Panels Card */}
          <Link to="/products" className="group cursor-pointer">
            <div className="relative overflow-hidden h-80 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <img 
                src="/Image/Fluted Panels.jpg"
                alt="Fluted Panels"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight drop-shadow-lg">Elegant Panels for<br/>Modern Interiors</h3>
                  <p className="text-sm text-white font-medium drop-shadow-lg">Fluted Panels</p>
                </div>
                {/* <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs font-bold self-start transition-colors">
                  SHOP NOW
                </button> */}
              </div>
            </div>
          </Link>

          {/* Artificial Grass Card */}
          <Link to="/products" className="group cursor-pointer">
            <div className="relative overflow-hidden h-80 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <img 
                src="/Image/Artificial Grass (Green).jpg"
                alt="Artificial Grass"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight drop-shadow-lg">Natural Look,<br/>Zero Maintenance.</h3>
                  <p className="text-sm text-white font-medium drop-shadow-lg">Artificial Grass</p>
                </div>
                
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Featured Categories */}
  <section className="py-8 sm:py-12 lg:py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
        Featured Categories
      </h2>
      
      {/* Categories Grid */}
      {/* Mobile: 2-column grid showing all featured categories (desktop unchanged) */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-4">
          {featuredCategories.map((category) => (
            <Link key={category.name} to="/products" className="group cursor-pointer">
              <div className="">
                <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900 text-center">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop/Tablet: original layout with navigation (unchanged) */}
      <div className="relative hidden md:block">
        {/* Navigation Arrows - Visible on all screen sizes */}
        <button
          onClick={prevFeaturedCategories}
          disabled={featuredCategoryIndex === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 border border-gray-300 rounded-full p-2 shadow-lg transition-all duration-200 ${
            featuredCategoryIndex === 0 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white hover:bg-gray-50 text-gray-600'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextFeaturedCategories}
          disabled={featuredCategoryIndex + 4 >= featuredCategories.length}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 border border-gray-300 rounded-full p-2 shadow-lg transition-all duration-200 ${
            featuredCategoryIndex + 4 >= featuredCategories.length 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white hover:bg-gray-50 text-gray-600'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Categories Container - Always show 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {currentFeaturedCategories.map((category, index) => (
            <Link key={`${featuredCategoryIndex}-${index}`} to="/products" className="group cursor-pointer">
              <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-gray-900 text-sm">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
              className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200"
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
              className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200"
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
              className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200"
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
              className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200"
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
