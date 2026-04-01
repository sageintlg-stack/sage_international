import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  Briefcase,
  FileCheck,
  Building,
  TrendingUp,
  ArrowRight,
  ClipboardList,
  UserCheck,
  Building2,
  Globe2,
  Award,
  Zap,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
  HardHat,
  Layers,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'SAGE International | Workforce Solutions for Energy Sector Projects',
  description: 'SAGE International delivers overseas workforce recruitment, workforce mobilisation, and regulatory compliance for energy sector and government projects. Based in UAE.',
  keywords: [
    'Workforce Solutions UAE', 'Energy Sector Staffing', 'Manpower Deployment UAE',
    'Overseas Workforce Recruitment', 'Oil Gas Workforce UAE', 'Government Project Staffing',
    'Workforce Mobilisation Middle East', 'Regulatory Compliance Staffing UAE',
    'SAGE International UAE', 'Industrial Workforce Provider', 'Contract Workforce UAE',
    'www.mysageintl.ae',
  ],
  alternates: {
    canonical: 'https://www.mysageintl.ae',
    languages: {
      'en-US': 'https://www.mysageintl.ae',
    },
  },
  openGraph: {
    title: 'SAGE International | Workforce Solutions for Energy Sector Projects',
    description: 'Overseas workforce recruitment, mobilisation, and regulatory compliance for energy and government projects.',
    url: 'https://www.mysageintl.ae/',
    images: [
      {
        url: 'https://www.mysageintl.ae/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'SAGE International — Workforce Solutions for Energy Sector Projects',
      },
    ],
  },
}

// ─── Homepage JSON-LD ──────────────────────────────────────────────────────
const homePageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.mysageintl.ae/#webpage',
      'url': 'https://www.mysageintl.ae',
      'name': 'SAGE International | Workforce Solutions for Energy Sector Projects',
      'description': 'SAGE International delivers overseas workforce recruitment, deployment, and regulatory compliance for energy and government sector projects.',
      'isPartOf': { '@id': 'https://www.mysageintl.ae/#website' },
      'about': { '@id': 'https://www.mysageintl.ae/#organization' },
      'inLanguage': 'en-US',
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.mysageintl.ae' },
        ],
      },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', '.speakable'],
      },
    },
  ],
}



function ClientLogo({ name, abbr, src }: { name: string; abbr: string; src?: string }) {
  return (
    <div className="flex items-center justify-center p-8 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
      {src ? (
        <Image src={src} alt={`${name} Logo`} width={140} height={70} className="object-contain max-h-14 opacity-75 hover:opacity-100 transition-opacity" />
      ) : (
        <div className="text-center">
          <div className="text-3xl font-black text-[#1E7F5C] tracking-tighter">
            {abbr}
          </div>
          <div className="text-xs font-semibold text-[#1A1A1A] mt-2 uppercase tracking-wide">
            {name}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Page Component ────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Root JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center animate-fade-in-up">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.30) 100%)' }}
          />
          <Image
            src="/images/hero-bg.jpg"
            alt="Workforce solutions for energy sector projects"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-20 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 speakable">
              Workforce Solutions for Energy Sector Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 speakable">
              Overseas recruitment, rapid mobilisation, and regulatory compliance — delivered for energy and government sector clients.
            </p>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-10 py-4 rounded-md bg-[#1E7F5C] text-white font-bold text-lg hover:bg-[#166347] hover:-translate-y-1 transition-all shadow-lg"
            >
              Contact Us
            </Link>

            {/* Minimal indicators */}
            <div className="pt-10 border-t border-white/20 mt-10 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1E7F5C] flex items-center justify-center">
                  <Award size={16} className="text-white" />
                </div>
                <span className="text-gray-200 text-sm font-medium">8+ Years Experience</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1E7F5C] flex items-center justify-center">
                  <Globe2 size={16} className="text-white" />
                </div>
                <span className="text-gray-200 text-sm font-medium">UAE-based operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ── PROJECT DELIVERY MODEL ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">Process</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Project Delivery Model
              </h3>
            </div>
            <div className="bg-[#F7F9FB] rounded-2xl p-8 md:p-12 shadow-sm border border-[#E5E7EB]">
              <ul className="space-y-2">
                {[
                  'Workforce sourcing',
                  'Candidate screening',
                  'Documentation & compliance support',
                  'Mobilization & deployment',
                  'On-site coordination',
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-4 py-3 border-b border-gray-200 last:border-0">
                    <CheckCircle2 size={24} className="text-[#1E7F5C] shrink-0" />
                    <span className="text-[#1A1A1A] text-lg font-bold">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITY ── */}
      <section id="capability" className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Capability
              </h3>
            </div>

            {/* ── CORE CAPABILITIES ── */}
            <div className="mb-16">
              <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Core Capabilities
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 border border-white/10 rounded-2xl p-6 bg-white/5">
                {[
                  'Large-scale workforce mobilisation',
                  'Multi-country recruitment operations',
                  'Full regulatory compliance execution',
                  'Workforce lifecycle management',
                  'Rapid deployment capability',
                  'Energy sector manpower solutions',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2FAF7C] shrink-0" />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── EXECUTION CAPABILITIES ── */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Execution Capabilities
              </h4>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4 border border-white/10 rounded-2xl p-8 bg-white/5 shadow-inner">
                {[
                  { title: 'Rapid workforce mobilisation', icon: Zap },
                  { title: 'Multi-location deployment', icon: MapPin },
                  { title: 'Regulatory compliance handling', icon: ShieldCheck },
                  { title: 'International candidate sourcing', icon: Globe2 },
                  { title: 'Documentation & compliance support', icon: FileCheck },
                  { title: 'Workforce planning support', icon: Briefcase },
                  { title: 'Sector-specific recruitment expertise', icon: Building2 },
                ].map((item, i, arr) => (
                  <div key={i} className={`flex items-center gap-4 ${i === arr.length - 1 ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto w-full' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-[#2FAF7C]/10 flex items-center justify-center shrink-0 border border-[#2FAF7C]/20 shadow-sm">
                      <item.icon size={18} className="text-[#2FAF7C]" />
                    </div>
                    <span className="text-white text-[15px] font-medium leading-snug">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">Sectors</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Industries We Serve
            </h3>
            <p className="text-[#6B7280]">
              Multi-disciplinary workforce solutions across regulated industries.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="sage-card flex flex-col items-center justify-center p-10 text-center group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#1E7F5C]/10 mb-5 group-hover:bg-[#1E7F5C] transition-colors duration-300 shadow-sm border border-gray-100">
                <Building2 size={36} className="text-[#1E7F5C] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#1E7F5C] transition-colors">Oil &amp; Gas</span>
            </div>
            <div className="sage-card flex flex-col items-center justify-center p-10 text-center group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#4B3FA6]/10 mb-5 group-hover:bg-[#4B3FA6] transition-colors duration-300 shadow-sm border border-gray-100">
                <Layers size={36} className="text-[#4B3FA6] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#4B3FA6] transition-colors">Government Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED CLIENTS ── */}
      <section className="py-24 bg-[#F7F9FB] border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">Clients</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Selected Clients</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E5E7EB] border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
            <ClientLogo name="Schlumberger" abbr="SLB" src="/images/clients/slb.png" />
            <ClientLogo name="Kuwait Oil Company" abbr="KOC" src="/images/clients/koc.png" />
            <ClientLogo name="Baker Hughes" abbr="Baker Hughes" src="/images/clients/baker_hughes.png" />
            <ClientLogo name="Al Mansoori" abbr="Al Mansoori" src="/images/clients/al_mansoori.png" />
          </div>
        </div>
      </section>

      {/* ── CONTACT PREVIEW ── */}
      <section className="py-24 bg-white border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E7F5C]/10 mb-6">
            <ClipboardList className="text-[#1E7F5C]" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Get in Touch</h2>
          <p className="text-[#6B7280] text-lg mb-10">
            Contact us to discuss your project workforce requirements.
          </p>

          <div className="bg-white rounded-2xl p-8 sm:p-10 flex flex-col items-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full max-w-lg mx-auto">
            <div className="flex flex-col gap-6 w-full mb-8 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E7F5C]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#1E7F5C]" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Email</p>
                  <a href="mailto:info@mysageintl.ae" className="text-lg font-bold text-[#1A1A1A] hover:text-[#4B3FA6] transition-colors block">
                    info@mysageintl.ae
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E7F5C]/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="text-[#1E7F5C]" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Phone / WhatsApp</p>
                  <a href="tel:+971585855044" className="text-lg font-bold text-[#1A1A1A] hover:text-[#4B3FA6] transition-colors block">
                    +971 58 585 5044
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E7F5C]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#1E7F5C]" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Office</p>
                  <p className="text-base font-medium text-[#1A1A1A]">
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 w-full justify-center rounded-md bg-[#1E7F5C] text-white font-semibold hover:bg-[#166347] hover:-translate-y-0.5 transition-all shadow-md"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
