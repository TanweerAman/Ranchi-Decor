export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-200">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-500 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using Ranchi Decor's website and services, you accept and agree to be bound by
                the terms and provision of this agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-6">
                Permission is granted to temporarily download one copy of the materials on Ranchi Decor's website
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to decompile or reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Product Information</h2>
              <p className="text-gray-600 mb-6">
                We strive to provide accurate product descriptions and pricing information. However, we do not
                warrant that product descriptions or other content on this site is accurate, complete, reliable,
                current, or error-free. In the event of a pricing error, we reserve the right to cancel orders.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Orders and Payment</h2>
              <p className="text-gray-600 mb-6">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel
                any order for any reason. Payment must be received in full before order processing begins.
                We accept various payment methods including credit cards, debit cards, and online banking.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Shipping and Delivery</h2>
              <p className="text-gray-600 mb-6">
                We offer free delivery on orders above ₹10,000 within Ranchi city limits. Delivery timelines
                are estimates and may vary based on product availability and location. We are not responsible
                for delays caused by factors beyond our control.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Returns and Refunds</h2>
              <p className="text-gray-600 mb-6">
                We offer a 7-day return policy for most products, provided they are in original condition and
                packaging. Custom orders and certain products may not be eligible for return. Refunds will be
                processed within 7-10 business days after product inspection.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Warranty</h2>
              <p className="text-gray-600 mb-6">
                All our products come with a minimum 1-year warranty against manufacturing defects. Premium
                products may have extended warranty coverage up to 10 years. Warranty claims must be made
                within the warranty period with proof of purchase.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Installation Services</h2>
              <p className="text-gray-600 mb-6">
                Professional installation services are available for all our products. Installation charges
                vary based on product type and complexity. Our certified technicians ensure proper installation
                and provide post-installation guidance.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                In no event shall Ranchi Decor or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your
                use of the website, to understand our practices.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of
                Jharkhand, India, and you irrevocably submit to the exclusive jurisdiction of the courts
                in that state or location.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately
                upon posting on our website. Your continued use of our services constitutes acceptance of
                the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  Ranchi Decor<br />
                  123 Main Street, Lalpur<br />
                  Ranchi, Jharkhand 834001<br />
                  Email: info@ranchidecor.com<br />
                  Phone: +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}