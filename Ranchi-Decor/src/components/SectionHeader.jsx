import { Link } from 'react-router-dom'

export default function SectionHeader({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
      </div>
      {ctaText && ctaLink && (
        <Link
          to={ctaLink}
          className="inline-flex items-center bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-black"
        >
          {ctaText} →
        </Link>
      )}
    </div>
  )
}
