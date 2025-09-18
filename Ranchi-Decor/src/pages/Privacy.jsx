export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-200">
            How we collect, use, and protect your personal information
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

              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 ml-4">
                <li>Create an account or make a purchase</li>
                <li>Contact us for support or inquiries</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-600 mb-6">
                This information may include your name, email address, phone number, shipping address,
                billing information, and any other information you choose to provide.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Send you important updates about your orders</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Prevent fraud and maintain security</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties
                without your consent, except as described in this policy. We may share your information
                with trusted third parties who assist us in operating our website, conducting our business,
                or servicing you, as long as those parties agree to keep this information confidential.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction. This includes encryption
                of sensitive data, secure payment processing, and regular security audits. However,
                no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance your browsing experience, analyze
                site traffic, and personalize content. You can control cookie settings through your
                browser preferences. Some features of our website may not function properly without cookies.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Object to certain processing of your information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Retention</h2>
              <p className="text-gray-600 mb-6">
                We retain your personal information for as long as necessary to provide our services,
                comply with legal obligations, resolve disputes, and enforce our agreements. When
                information is no longer needed, we securely delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices or content of these external sites. We encourage you to review the
                privacy policies of any third-party websites you visit.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If we become aware that we have
                collected personal information from a child under 13, we will take steps to delete such information.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  Ranchi Decor<br />
                  123 Main Street, Lalpur<br />
                  Ranchi, Jharkhand 834001<br />
                  Email: privacy@ranchidecor.com<br />
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