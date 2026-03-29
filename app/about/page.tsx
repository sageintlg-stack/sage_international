import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle,
  Target,
  Eye,
  Users,
  ShieldCheck,
  ArrowRight,
  Globe2,
  Award,
  Building2,
  Layers,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About SAGE International | Workforce Solutions for Energy Sector Projects',
  description: 'SAGE International — established in Dubai 2018 — delivers overseas workforce recruitment and deployment for energy sector and government projects. UAE-based.',
  keywords: [
    'About SAGE International', 'Workforce Solutions UAE', 'Energy Sector Staffing Company',
    'Workforce Recruitment UAE', 'SAGE International Founded 2018', 'Industrial Workforce Provider UAE',
    'Overseas Workforce Recruitment', 'Government Project Staffing UAE', 'www.mysageintl.ae',
  ],
  alternates: {
    canonical: 'https://www.mysageintl.ae/about',
  },
  openGraph: {
    title: 'About SAGE International | Workforce Solutions for Energy Sector Projects',
    description: 'Established 2018. Overseas workforce recruitment and deployment for energy sector and government projects. UAE-based.',
    url: 'https://www.mysageintl.ae/about',
    images: [{ url: 'https://www.mysageintl.ae/images/about-hero.jpg', width: 1200, height: 630, alt: 'About SAGE International — Workforce Solutions UAE' }],
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.mysageintl.ae/about#webpage',
      'url': 'https://www.mysageintl.ae/about',
      'name': 'About SAGE International | Workforce Solutions for Energy Sector Projects',
      'description': 'SAGE International — established 2018 in Dubai — delivers overseas workforce recruitment and deployment for energy and government sector projects.',
      'isPartOf': { '@id': 'https://www.mysageintl.ae/#website' },
      'about': { '@id': 'https://www.mysageintl.ae/#organization' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', 'h3', '.speakable'],
      },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.mysageintl.ae' },
          { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': 'https://www.mysageintl.ae/about' },
        ],
      },
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#0F172A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
            alt="SAGE International — Workforce Solutions for Energy Sector Projects"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#2FAF7C] text-sm font-bold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 speakable">
            Workforce Solutions for Energy Sector Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            UAE-based workforce recruitment and deployment company, serving energy and government sector clients since 2018.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-14 bg-[#1E7F5C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-white">2018</p>
              <p className="text-white/80 text-sm font-medium mt-1">Year Founded</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white">500+</p>
              <p className="text-white/80 text-sm font-medium mt-1">Professionals Deployed</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white">8+</p>
              <p className="text-white/80 text-sm font-medium mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white">UAE</p>
              <p className="text-white/80 text-sm font-medium mt-1">Primary Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 speakable">
                Established in Dubai, 2018
              </h3>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-4">
                SAGE International General Trading L.L.C was established on <strong>10 June 2018</strong> in Dubai, UAE. We provide overseas workforce recruitment and end-to-end deployment for energy sector and government project clients.
              </p>
              <p className="text-[#6B7280] text-base leading-relaxed mb-8">
                From day one, we built our reputation executing workforce mandates for major energy operators — sourcing, mobilising, and deploying skilled professionals across regulated, multi-disciplinary projects with full documentation compliance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-[#1E7F5C] pl-4">
                  <div className="text-3xl font-black text-[#1A1A1A]">500+</div>
                  <div className="text-sm text-[#6B7280] font-medium mt-1">Professionals Deployed</div>
                </div>
                <div className="border-l-4 border-[#4B3FA6] pl-4">
                  <div className="text-3xl font-black text-[#1A1A1A]">8+</div>
                  <div className="text-sm text-[#6B7280] font-medium mt-1">Years in Operation</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="SAGE International operations — Dubai UAE"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-3">Our Purpose</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Mission &amp; Vision</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="sage-card p-10 mt-0">
              <div className="w-16 h-16 rounded-2xl bg-[#1E7F5C]/10 flex items-center justify-center mb-6">
                <Target size={32} className="text-[#1E7F5C]" />
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">Our Mission</h4>
              <p className="text-[#6B7280] leading-relaxed text-base">
                To source, mobilise, and deploy compliant workforce for energy sector and government projects — executing with precision, speed, and full regulatory adherence.
              </p>
            </div>
            <div className="sage-card p-10 mt-0">
              <div className="w-16 h-16 rounded-2xl bg-[#4B3FA6]/10 flex items-center justify-center mb-6">
                <Eye size={32} className="text-[#4B3FA6]" />
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">Our Vision</h4>
              <p className="text-[#6B7280] leading-relaxed text-base">
                To be the most reliable workforce partner for regulated-sector projects across the GCC — known for operational excellence, compliance, and consistent project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why SAGE ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-3">Why Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Why Choose SAGE International
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                color: '#1E7F5C',
                title: 'Proven Track Record',
                desc: '8+ years executing workforce mandates for major energy operators including SLB and Baker Hughes.',
              },
              {
                icon: ShieldCheck,
                color: '#4B3FA6',
                title: 'Full Compliance',
                desc: 'Regulatory documentation, visa handling, and attestation — fully managed and compliant.',
              },
              {
                icon: Users,
                color: '#1E7F5C',
                title: 'Mobilisation Ready',
                desc: 'Pre-screened professionals across multiple disciplines, deployable on short lead times.',
              },
              {
                icon: Globe2,
                color: '#4B3FA6',
                title: 'Sector Expertise',
                desc: 'Deep operational experience in Oil & Gas and government project environments.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="sage-card p-8 bg-white hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${item.color}15` }}>
                    <Icon size={28} style={{ color: item.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">{item.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Capability ── */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-sm font-bold text-[#2FAF7C] tracking-widest uppercase mb-3">What We Deliver</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Operational Capability</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Overseas workforce sourcing & recruitment',
                'Rapid mobilisation and on-site deployment',
                'Regulatory documentation management',
                'Visa and permit processing',
                'Credential verification & background screening',
                'End-to-end workforce coordination',
                'Multi-discipline project staffing',
                'Workforce advisory and planning support',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-white/10">
                  <CheckCircle2 size={18} className="text-[#1E7F5C] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-3">Sectors</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Industries We Serve</h3>
            <p className="text-[#6B7280] mt-4">
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

      {/* ── CTA ── */}
      <section className="py-24 bg-[#1A1A1A] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Contact us to discuss your workforce requirements for your next energy or government project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#1E7F5C] text-white font-bold hover:bg-[#166347] transition-colors shadow-lg"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
