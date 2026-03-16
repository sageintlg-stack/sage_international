import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">SAGE International</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Professional workforce solutions, HR advisory services, and document verification for organizations across multiple industries.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#manpower-outsourcing" className="hover:text-primary transition-colors">
                  Manpower Outsourcing
                </Link>
              </li>
              <li>
                <Link href="/services#contract-staffing" className="hover:text-primary transition-colors">
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link href="/services#management-consulting" className="hover:text-primary transition-colors">
                  Management Consultant Services
                </Link>
              </li>
              <li>
                <Link href="/services#document-verification" className="hover:text-primary transition-colors">
                  Document Verification & Attestations
                </Link>
              </li>
              <li>
                <Link href="/services#hr-advisory" className="hover:text-primary transition-colors">
                  HR Advisory Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>
                  DO3, BN Complex
                  <br />
                  Al Muteena
                  <br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:Enquiry@mysageintl.ae" className="hover:text-white transition-colors">
                  Enquiry@mysageintl.ae
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+971 00 000 0000</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SAGE International General Trading L.L.C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
