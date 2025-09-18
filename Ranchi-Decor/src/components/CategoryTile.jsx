import { Link } from 'react-router-dom'

export default function CategoryTile({ category }) {
  return (
    <Link
      to={category.link}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="aspect-square relative">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
          <p className="text-white/80 text-sm flex items-center gap-1">
            Explore now
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </p>
        </div>
      </div>
    </Link>
  )
}
