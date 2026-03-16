import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Handshake, Globe, Shield, TrendingUp } from 'lucide-react'

interface Client {
  abbr: string
  name: string
  sector: string
  description: string
}

const clients: Client[] = [
  {
    abbr: 'SLB',
    name: 'Schlumberger Limited (SLB)',
    sector: 'Oilfield Services',
    description:
      'The world\'s leading provider of technology and services to the global energy industry. SAGE International has supported SLB with specialist recruitment and document verification for their Kuwait operations.',
  },
  {
    abbr: 'KOC',
    name: 'Kuwait Oil Company',
    sector: 'National Oil Company',
    description:
      'Kuwait\'s flagship national oil company, responsible for the exploration and production of crude oil and natural gas. We have partnered with KOC to source skilled engineering and operational professionals.',
  },
  {
    abbr: 'BH',
    name: 'Baker Hughes',
    sector: 'Energy Technology',
    description:
      'A global energy technology company delivering solutions across the energy value chain. SAGE International has provided HR advisory and recruitment services for Baker Hughes Kuwait operations.',
  },
  {
    abbr: 'AM',
    name: 'Al Mansoori',
    sector: 'Oilfield Services',
    description:
      'A leading oilfield services company operating across the Middle East. We have supported Al Mansoori\'s workforce expansion in Kuwait with targeted recruitment and compliance services.',
  },
]

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="group bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm hover:shadow-lg hover:border-[#1E7F5C] transition-all duration-300">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100 group-hover:bg-[#F0FAF5] transition-colors duration-300">
          <span className="text-2xl font-bold text-gray-400 group-hover:text-[#1E7F5C] transition-colors duration-300">
            {client.abbr}
          </span>
        </div>
        <div>
          <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">{client.name}</h3>
          <span className="inline-block text-xs font-medium bg-[#F0FAF5] text-[#1E7F5C] px-2.5 py-1 rounded-full mb-3">
            {client.sector}
          </span>
          <p className="text-sm text-[#6B7280] leading-relaxed">{client.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 bg-[#0F172A]">
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
            <p className="text-[#2FAF7C] text-sm font-semibold uppercase tracking-widest mb-3">Our Clients</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance mb-4">
              Trusted by Industry Leaders
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              SAGE International is proud to partner with Kuwait&apos;s most respected energy and industrial
              companies, delivering reliable recruitment and HR solutions that make a real difference.
            </p>
          </div>
        </section>

        {/* ── Client Logos Grid ── */}
        <section className="py-20 bg-[#F7F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#1E7F5C] text-sm font-semibold uppercase tracking-wider mb-3">Our Partners</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] text-balance mb-4">
                Companies We Work With
              </h2>
              <p className="text-[#6B7280] max-w-xl mx-auto leading-relaxed">
                We are honoured to serve these outstanding organisations operating across Kuwait&apos;s energy sector.
              </p>
            </div>

            {/* Logo strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {clients.map((client) => (
                <div
                  key={client.abbr}
                  className="group flex items-center justify-center p-8 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#1E7F5C] hover:shadow-md transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-[#1E7F5C] transition-colors duration-300">
                    {client.abbr}
                  </span>
                </div>
              ))}
            </div>

            {/* Client detail cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clients.map((client) => (
                <ClientCard key={client.abbr} client={client} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Partnership Section ── */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#1E7F5C] text-sm font-semibold uppercase tracking-wider mb-3">How We Partner</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] text-balance mb-4">
                Our Approach to Client Partnerships
              </h2>
              <p className="text-[#6B7280] max-w-xl mx-auto leading-relaxed">
                We build long-term relationships based on trust, transparency, and consistent delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Handshake, title: 'Long-Term Relationships', desc: 'We invest in understanding your business deeply to become a true extension of your HR function.' },
                { icon: Globe, title: 'Global Network', desc: 'Access to an international talent pool combined with deep local knowledge of the Kuwait market.' },
                { icon: Shield, title: 'Compliance First', desc: 'All placements and services adhere to Kuwaiti labor law and international best practices.' },
                { icon: TrendingUp, title: 'Measurable Results', desc: 'We track performance metrics and continuously improve our service to deliver better outcomes.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-[#F7F9FB] rounded-xl p-8 border border-[#E5E7EB] hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1E7F5C]/10 mb-5">
                    <Icon size={22} className="text-[#1E7F5C]" />
                  </div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">{title}</h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gradient-to-r from-[#4B3FA6] to-[#6D5FD3]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance mb-4">
              Become Our Next Success Story
            </h2>
            <p className="text-white/80 max-w-xl mx-auto leading-relaxed mb-8">
              Join the growing list of Kuwait&apos;s leading companies that trust SAGE International for their
              recruitment and HR needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#4B3FA6] font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
