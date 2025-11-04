import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#18274a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Our Offer */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-gray-100">Our offer</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Products and Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Support and Tools */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-gray-100">
              Support and tools
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Instructions For Use/Patient Information
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-gray-100">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Legal Information
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Getinge Privacy Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors text-gray-200"
                >
                  Website use disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-gray-100">
              Get in contact
            </h3>
            <Link
              href="#"
              className="inline-block bg-white text-[#18274a] px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div>© 2025 Getinge │ All rights reserved.</div>
            <div>September 2025</div>
          </div>
          <div className="mt-6 text-xs text-gray-400 leading-relaxed">
            <p>
              This information is aimed exclusively at healthcare professionals
              or other professional audiences and is for informational purposes
              only, is not exhaustive and therefore should not be relied upon as
              a replacement of the Instructions for Use, service manual or
              medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
