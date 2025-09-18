export default function BrandStrip() {
  const brands = ['Armstrong', 'LG Hausys', 'Pergo', 'Greenlam', 'Kajaria', 'Somany']
  return (
    <section className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap items-center justify-center gap-8">
        {brands.map((b) => (
          <div key={b} className="text-gray-500 font-semibold opacity-70 hover:opacity-100 transition">
            {b}
          </div>
        ))}
      </div>
    </section>
  )
}
