import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, HeartPulse, MonitorSmartphone, UtensilsCrossed, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import { FaqSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'Industries We Serve | Oil & Gas, Healthcare, IT Staffing — UAE & Kuwait',
  description: 'SAGE International provides specialized HR and manpower outsourcing solutions for Oil & Gas, Healthcare, IT & Business Solutions, Hospitality, and Trading sectors in UAE and Kuwait.',
  keywords: [
    'Oil & Gas Manpower UAE', 'Healthcare Staffing Dubai', 'IT Recruitment Kuwait',
    'Hospitality Staffing Middle East', 'Trading Sector HR', 'Energy Sector Workforce UAE',
    'Oil Gas Recruitment Kuwait', 'Medical Staffing UAE', 'Technology Recruitment Dubai',
    'Hotel Staff Supply UAE', 'KOC Manpower Kuwait', 'Upstream Staffing Middle East',
    'Healthcare Recruitment Kuwait', 'IT Outsourcing Staff UAE', 'Engineering Staffing UAE',
  ],
  alternates: {
    canonical: 'https://sageintlg.com/industries',
  },
  openGraph: {
    title: 'Industries We Serve | Specialized Staffing — UAE & Kuwait | SAGE International',
    description: 'Specialized workforce solutions for Oil & Gas, Healthcare, IT, Hospitality, and Trading in UAE and Kuwait. Trusted by SLB, KOC, and Baker Hughes.',
    url: 'https://sageintlg.com/industries',
    images: [{ url: 'https://sageintlg.com/images/hero-bg.jpg', width: 1200, height: 630, alt: 'SAGE International Industry Sectors UAE Kuwait' }],
  },
}

const industries = [
  {
    title: 'Oil & Gas',
    icon: Building2,
    description: 'SAGE International provides skilled technical, operational, and management personnel for upstream, midstream, and downstream Oil & Gas operations across the UAE and Kuwait. Our clients include KOC, SLB, Baker Hughes, and Al Mansoori.',
    detail: 'We supply a full range of Energy sector professionals — from drilling engineers and HSE officers to materials inspectors and site supervisors — with verified credentials and rapid mobilization times.',
    roles: ['Drilling Engineers', 'HSE Officers', 'Plant Operators', 'Inspection Engineers', 'Materials Controllers', 'Project Managers'],
    image: 'https://images.unsplash.com/photo-1621644342220-40e940f8aa15?q=80&w=2070&auto=format&fit=crop',
    keyword: 'Oil & Gas Staffing UAE & Kuwait',
  },
  {
    title: 'Healthcare',
    icon: HeartPulse,
    description: 'SAGE International sources highly qualified medical professionals, nursing staff, administrative personnel, and specialized healthcare administrators for hospitals, clinics, and medical centers across the UAE and Kuwait.',
    detail: 'We understand the stringent licensing requirements of DHA, HAAD, and Kuwait MOH. Our document verification ensures all medical personnel credentials are authenticated before deployment.',
    roles: ['Registered Nurses', 'Specialist Physicians', 'Medical Technicians', 'Healthcare Administrators', 'Physiotherapists', 'Pharmacists'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    keyword: 'Healthcare Staffing UAE & Kuwait',
  },
  {
    title: 'IT & Business Solutions',
    icon: MonitorSmartphone,
    description: 'SAGE International connects UAE and Kuwait enterprises with technology talent, software engineers, project managers, data analysts, and IT consultants to drive digital transformation and business innovation.',
    detail: 'From cloud engineers to ERP specialists, we source and verify IT professionals who are ready to contribute from day one. Our IT staffing expertise spans fintech, e-commerce, government digitization, and enterprise IT.',
    roles: ['Software Engineers', 'Cloud Architects', 'ERP Specialists', 'Cybersecurity Analysts', 'Data Scientists', 'IT Project Managers'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    keyword: 'IT Staffing & Recruitment UAE',
  },
  {
    title: 'Hospitality',
    icon: UtensilsCrossed,
    description: 'SAGE International supplies experienced, trained hospitality professionals for 4-star and 5-star hotels, resorts, and restaurant chains across the UAE — ensuring world-class service standards and seamless operational efficiency.',
    detail: 'Our hospitality staffing covers front-of-house and back-of-house roles, from F&B managers and chefs to front desk teams and housekeeping supervisors. We understand the seasonal demands of UAE\'s tourism sector.',
    roles: ['F&B Managers', 'Executive Chefs', 'Front Desk Officers', 'Housekeeping Supervisors', 'Events Coordinators', 'Concierge Staff'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    keyword: 'Hospitality Staff Outsourcing UAE',
  },
  {
    title: 'Trading',
    icon: TrendingUp,
    description: 'SAGE International recruits and deploys professionals for logistics, supply chain, retail, wholesale trade, and general trading organizations across the UAE and Kuwait — streamlining operations and enhancing market competitiveness.',
    detail: 'Our trading sector placements cover warehousing managers, procurement officers, logistics coordinators, and sales executives who understand the GCC marketplace and can contribute immediately.',
    roles: ['Supply Chain Managers', 'Procurement Officers', 'Logistics Coordinators', 'Warehouse Supervisors', 'Sales Executives', 'Import/Export Specialists'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
    keyword: 'Trading Sector HR UAE & Kuwait',
  },
]

const industriesFaqs = [
  {
    question: 'Which industries does SAGE International serve in UAE and Kuwait?',
    answer: 'SAGE International serves Oil & Gas, Healthcare, IT & Business Solutions, Hospitality, and Trading sectors in the UAE and Kuwait. Each industry has tailored staffing and HR solutions designed for its unique regulatory, operational, and talent requirements.',
  },
  {
    question: 'Does SAGE International provide Oil & Gas staffing in Kuwait?',
    answer: 'Yes. SAGE International has extensive experience providing oil & gas manpower for Kuwait, including skilled professionals for KOC, KNPC, and international energy companies operating in the country. We handle complete document verification and mobilization.',
  },
  {
    question: 'Can SAGE provide healthcare staffing compliant with UAE DHA requirements?',
    answer: 'Yes. SAGE International\'s healthcare staffing service includes full verification of DHA (Dubai Health Authority), HAAD (Abu Dhabi Health Authority), and MOH (Ministry of Health) licensing requirements. We ensure all healthcare professionals are fully licensed before deployment.',
  },
  {
    question: 'What IT roles can SAGE International fill in Dubai?',
    answer: 'SAGE International fills a wide range of IT roles in Dubai including Software Engineers, Cloud Architects, ERP Specialists (SAP, Oracle), Cybersecurity Analysts, Data Scientists, Business Analysts, and IT Project Managers across various industries.',
  },
  {
    question: 'Does SAGE International serve industries outside this list?',
    answer: 'While our primary focus is Oil & Gas, Healthcare, IT, Hospitality, and Trading, SAGE International has supported clients across Construction, Education, Finance, and Retail sectors. Contact us to discuss your specific industry requirements.',
  },
]

const industriesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sageintlg.com/industries#webpage',
      'url': 'https://sageintlg.com/industries',
      'name': 'Industries We Serve | Oil & Gas, Healthcare, IT Staffing — UAE & Kuwait',
      'description': 'Specialized HR and workforce solutions for key industries in UAE and Kuwait by SAGE International.',
      'isPartOf': { '@id': 'https://sageintlg.com/#website' },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://sageintlg.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Industries', 'item': 'https://sageintlg.com/industries' },
        ],
      },
    },
    {
      '@type': 'ItemList',
      'name': 'Industries Served by SAGE International',
      'description': 'Key industry sectors where SAGE International provides HR and workforce solutions in UAE and Kuwait.',
      'numberOfItems': industries.length,
      'itemListElement': industries.map((ind, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'name': ind.title,
        'description': ind.description,
        'url': `https://sageintlg.com/industries#${ind.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`,
      })),
    },
    {
      '@type': 'FAQPage',
      'mainEntity': industriesFaqs.map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
      })),
    },
  ],
}

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
      />

      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#0F172A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt="SAGE International industry sectors — Oil Gas Healthcare IT UAE Kuwait"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#2FAF7C] text-sm font-bold uppercase tracking-widest mb-3">Sectors We Serve</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Industry Sectors We Serve in UAE & Kuwait
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering specialized manpower outsourcing and HR solutions tailored to the unique talent demands of key industries across the UAE and Kuwait.
          </p>
        </div>
      </section>

      {/* ── Industries Detailed ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={industry.title}
                  id={industry.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                  className="scroll-mt-24"
                >
                  <div className={`grid md:grid-cols-2 gap-12 items-start ${isEven ? '' : 'md:grid-flow-dense'}`}>

                    {/* Image */}
                    <div className={`relative h-72 md:h-96 rounded-2xl overflow-hidden group ${isEven ? '' : 'md:order-2'}`}>
                      <Image
                        src={industry.image}
                        alt={`${industry.keyword} — SAGE International`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading={index < 2 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-[#0F172A]/30" />
                      <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg">
                        <Icon size={20} className="text-[#1E7F5C]" />
                        <span className="text-sm font-bold text-[#1A1A1A]">{industry.title}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? '' : 'md:order-1'}>
                      <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">{industry.keyword}</h2>
                      <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">{industry.title} Manpower Solutions</h3>
                      <p className="text-[#6B7280] text-lg leading-relaxed mb-4">{industry.description}</p>
                      <p className="text-[#6B7280] text-base leading-relaxed mb-6">{industry.detail}</p>

                      <div className="mb-6">
                        <p className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-3">Roles We Place</p>
                        <div className="flex flex-wrap gap-2">
                          {industry.roles.map((role) => (
                            <span
                              key={role}
                              className="px-3 py-1.5 bg-[#1E7F5C]/10 text-[#1E7F5C] text-sm font-semibold rounded-full border border-[#1E7F5C]/20"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1E7F5C] text-white font-semibold hover:bg-[#166347] hover:-translate-y-0.5 transition-all shadow-md"
                      >
                        Enquire for {industry.title} <ArrowRight size={16} />
                      </Link>
                    </div>
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
            SAGE International serves a wide range of sectors beyond the five listed here. Contact us to discuss how we can support your specific industry requirements in UAE or Kuwait.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#1E7F5C] text-white font-bold hover:bg-[#166347] transition-colors shadow-lg"
          >
            Contact Us Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ── Industries FAQ ── */}
      <FaqSection
        heading="Industries FAQ"
        subheading="Common questions about our industry-specific staffing capabilities in UAE and Kuwait."
        items={industriesFaqs}
        className="bg-[#F7F9FB]"
      />
    </>
  )
}
