import Image from 'next/image'
import Link from 'next/link'
import { Building2, HeartPulse, MonitorSmartphone, UtensilsCrossed, TrendingUp, ArrowRight } from 'lucide-react'

const industries = [
  {
    title: 'Oil & Gas',
    icon: Building2,
    description: 'Providing skilled technical, operational, and management personnel for upstream, midstream, and downstream operations in the energy sector.',
    image: 'https://images.unsplash.com/photo-1621644342220-40e940f8aa15?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Healthcare',
    icon: HeartPulse,
    description: 'Sourcing qualified medical professionals, administrative staff, and specialized healthcare administrators for hospitals and medical centers.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'
  },
  {
    title: 'IT & Business Solutions',
    icon: MonitorSmartphone,
    description: 'Connecting enterprises with tech talent, software engineers, project managers, and IT consultants to drive digital transformation.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Hospitality',
    icon: UtensilsCrossed,
    description: 'Supplying experienced staff for hotels, resorts, and restaurants, ensuring excellent service standards and operational efficiency.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Trading',
    icon: TrendingUp,
    description: 'Recruiting for logistics, supply chain, retail, and wholesale trade organizations to streamline operations and enhance market reach.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop'
  }
]

export default function IndustriesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#0F172A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt="SAGE International Industries"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#2FAF7C] text-sm font-bold uppercase tracking-widest mb-3">Sectors</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Industries We Serve</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering specialized workforce solutions tailored to the unique demands of diverse industry sectors.
          </p>
        </div>
      </section>

      {/* ── Industries Grid ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <div key={industry.title} className="sage-card flex flex-col overflow-hidden group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0F172A]/40 group-hover:bg-[#0F172A]/20 transition-colors" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-lg">
                      <Icon size={24} className="text-[#1E7F5C]" />
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{industry.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed flex-grow">
                      {industry.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Call To Action ── */}
      <section className="py-24 bg-white text-center border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Don't see your industry listed?
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-10">
            We operate across a wide range of sectors. Reach out to us to find out how we can support your specific industrial requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#1E7F5C] text-white font-bold hover:bg-[#166347] transition-colors shadow-lg"
          >
            Contact Us Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
