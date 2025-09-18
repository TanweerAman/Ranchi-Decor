export default function Checkout() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded"/>
        <input type="text" placeholder="Address" className="w-full border p-2 rounded"/>
        <input type="text" placeholder="City" className="w-full border p-2 rounded"/>
        <input type="text" placeholder="Pincode" className="w-full border p-2 rounded"/>
        <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Place Order</button>
      </form>
    </div>
  )
}
