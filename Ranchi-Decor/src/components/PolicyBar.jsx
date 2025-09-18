export default function PolicyBar() {
  const items = [
      { title: 'Free Shipping', desc: 'On orders above ₹10,000', icon: (
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h11v10H3zM14 10h4l3 3v4h-7"/></svg>
      )},
      { title: 'Warranty', desc: 'Up to 10 years warranty', icon: (
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"/></svg>
      )},
      { title: 'Expert Support', desc: 'Mon–Sat, 10am–7pm', icon: (
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13a3 3 0 11-6 0V4a3 3 0 116 0v9zM6 8h6"/></svg>
      )},
      { title: 'Secure Payment', desc: '100% secure checkout', icon: (
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zM5.121 17.804A4 4 0 018 17h8a4 4 0 012.879 1.196L21 21H3l2.121-3.196z"/></svg>
      )},
  ]
  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-3xl">{it.icon}</div>
            <div>
              <div className="font-semibold text-gray-800">{it.title}</div>
              <div className="text-sm text-gray-500">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
