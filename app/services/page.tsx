import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  Truck,
  FileCheck,
  Briefcase,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Workforce Services | Overseas Recruitment & Deployment — SAGE International UAE',
  description: 'SAGE International delivers overseas workforce recruitment, mobilisation, regulatory documentation management, and compliance support for energy sector and government projects in the UAE.',
  keywords: [
    'Overseas Workforce Recruitment UAE', 'Workforce Mobilisation UAE', 'Energy Sector Staffing UAE',
    'Regulatory Documentation Management', 'Workforce Deployment UAE', 'Government Project Staffing UAE',
    'Workforce Compliance UAE', 'Industrial Manpower UAE', 'SAGE International Services',
  ],
  alternates: {
    canonical: 'https://www.mysageintl.ae/services',
  },
  openGraph: {
    title: 'Workforce Services | SAGE International UAE',
    description: 'Overseas workforce recruitment and deployment for energy sector and government projects. Full regulatory compliance management included.',
    url: 'https://www.mysageintl.ae/services',
    images: [{ url: 'https://www.mysageintl.ae/images/services-hero.jpg', width: 1200, height: 630, alt: 'SAGE International Workforce Services UAE' }],
  },
}

const services = [
  {
    id: 'overseas-recruitment',
    title: 'Overseas Workforce Recruitment',
    icon: Users,
    iconColor: '#1E7F5C',
    overview: 'Overseas recruitment for energy sector and government project roles. We source, screen, and deliver mobilisation-ready professionals from international talent markets.',
    bullets: [
      'Role profiling & requisition',
      'Global candidate sourcing',
      'Technical screening',
      'Pre-offer compliance',
      'Deployment coordination',
    ],
  },
  {
    id: 'mobilisation-deployment',
    title: 'Workforce Mobilisation & Deployment',
    icon: Truck,
    iconColor: '#4B3FA6',
    overview: 'Rapid on-site deployment with full mobilisation coordination — from visa and travel to site induction. We manage the deployment process so your project is not delayed.',
    bullets: [
      'Visa & permit processing',
      'Medical coordination',
      'Travel & logistics',
      'Site induction management',
      'Rapid mobilisation execution',
    ],
  },
  {
    id: 'regulatory-documentation',
    title: 'Regulatory & Documentation Management',
    icon: FileCheck,
    iconColor: '#1E7F5C',
    overview: 'Full management of regulatory documentation, attestations, and compliance filings required for deploying international workforce in regulated project environments.',
    bullets: [
      'Degree authentication',
      'MOFA legalization',
      'License verification',
      'Clearance processing',
      'Compliance tracking',
    ],
  },
  {
    id: 'workforce-advisory',
    title: 'Workforce Advisory Support',
    icon: Briefcase,
    iconColor: '#4B3FA6',
    overview: 'Operational advisory on workforce planning, role structuring, and deployment strategy for energy sector and government project environments.',
    bullets: [
      'Manpower planning',
      'Competency mapping',
      'Schedule alignment',
      'Contingency planning',
      'Lifecycle advisory',
    ],
  },
  {
    id: 'compliance-support',
    title: 'Documentation & Compliance Support',
    icon: ClipboardCheck,
    iconColor: '#1E7F5C',
    overview: 'Ongoing documentation and compliance management for deployed workforce — ensuring continuous regulatory adherence from mobilisation through demobilisation.',
    bullets: [
      'Contract administration',
      'Regulatory filings',
      'Permit tracking',
      'Audit management',
      'Exit compliance',
    ],
  },
]

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.mysageintl.ae/services#webpage',
      'url': 'https://www.mysageintl.ae/services',
      'name': 'Workforce Services | SAGE International UAE',
      'description': 'Overseas workforce recruitment, mobilisation, regulatory documentation management, and compliance support for energy sector and government projects.',
      'isPartOf': { '@id': 'https://www.mysageintl.ae/#website' },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.mysageintl.ae' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.mysageintl.ae/services' },
        ],
      },
    },
    {
      '@type': 'ItemList',
      'name': 'SAGE International Workforce Services',
      'provider': { '@id': 'https://www.mysageintl.ae/#organization' },
      'areaServed': [{ '@type': 'Country', 'name': 'United Arab Emirates' }],
      'itemListElement': services.map((s, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'item': {
          '@type': 'ProfessionalService',
          'name': s.title,
          'description': s.overview,
          'url': `https://www.mysageintl.ae/services#${s.id}`,
          'provider': { '@id': 'https://www.mysageintl.ae/#organization' },
        },
      })),
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#0F172A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="SAGE International workforce services for energy sector projects"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#2FAF7C] text-sm font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Workforce Solutions for Project Delivery
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From overseas recruitment to on-site deployment and full regulatory compliance — we manage the entire workforce delivery process for energy and government sector projects.
          </p>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-20">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>

                    {/* Icon / Title Card */}
                    <div className="lg:w-1/3 w-full shrink-0">
                      <div className="sage-card p-8 bg-white text-center h-full flex flex-col items-center justify-center">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                          style={{ backgroundColor: `${service.iconColor}15` }}
                        >
                          <Icon size={40} style={{ color: service.iconColor }} />
                        </div>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-5">{service.title}</h2>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1E7F5C] text-white text-sm font-semibold hover:bg-[#166347] transition-colors"
                        >
                          Contact Us <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 w-full">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 border-b pb-2 border-[#E5E7EB]">
                          What We Deliver
                        </h3>
                        <p className="text-[#6B7280] text-base leading-relaxed">{service.overview}</p>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#1E7F5C]"></span>
                          Scope of Service
                        </h3>
                        <ul className="space-y-3">
                          {service.bullets.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-[#1E7F5C] shrink-0 mt-0.5" />
                              <span className="text-[#6B7280] text-sm">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
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
            Contact us to outline your workforce requirements and we will scope the right solution for your project.
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
