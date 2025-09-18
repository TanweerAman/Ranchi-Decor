import CategoryTile from './CategoryTile'

export default function CategoryCarousel({ categories = [] }) {
  // Duplicate the list to create a seamless loop
  const items = [...categories, ...categories]

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex gap-4 sm:gap-6 marquee" aria-label="category carousel">
          {items.map((category, idx) => (
            <div key={`${category.id}-${idx}`} className="w-[200px] sm:w-[230px] lg:w-[250px] shrink-0">
              <CategoryTile category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
