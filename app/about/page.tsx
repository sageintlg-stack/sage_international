import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Award, Target, Eye, Users, FileCheck, ArrowRight, CalendarDays, Globe2, Medal, ShieldCheck } from 'lucide-react'
import { FaqSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'About SAGE International | Leading HR & Manpower Outsourcing Company — UAE & Kuwait',
  description: 'SAGE International — established in 2018 — is the UAE and Kuwait\'s trusted HR consulting, manpower outsourcing, and document verification company. Discover our story, mission, and expertise.',
  keywords: [
    'About SAGE International', 'HR Consulting Firm Dubai', 'Workforce Solutions Company UAE',
    'Kuwait Recruitment Company', 'Best HR Company Middle East', 'Manpower Company Dubai History',
    'SAGE International Founded 2018', 'Recruitment Agency Profile UAE', 'HR Firm Kuwait',
    'Staffing Company Profile UAE',
  ],
  alternates: {
    canonical: 'https://sageintlg.com/about',
  },
  openGraph: {
    title: 'About SAGE International | HR & Manpower Solutions — UAE & Kuwait',
    description: 'Learn about SAGE International: established 2018, 500+ professionals deployed, 50+ corporate clients across UAE and Kuwait. Trusted by SLB, KOC, Baker Hughes.',
    url: 'https://sageintlg.com/about',
    images: [{ url: 'https://sageintlg.com/images/about-hero.jpg', width: 1200, height: 630, alt: 'About SAGE International — HR & Manpower Company UAE' }],
  },
}

const aboutFaqs = [
  {
    question: 'When was SAGE International founded?',
    answer: 'SAGE International General Trading L.L.C was founded on 10 June 2018 in Dubai, UAE. Since then, we have grown to become one of the most trusted HR and manpower outsourcing companies serving UAE and Kuwait.',
  },
  {
    question: 'Is SAGE International registered in the UAE?',
    answer: 'Yes. SAGE International General Trading L.L.C is a legally registered company in Dubai, UAE. We are fully compliant with UAE Ministry of Human Resources and Emiratisation (MOHRE) licensing requirements for manpower supply and HR services.',
  },
  {
    question: 'What is SAGE International\'s experience in the HR industry?',
    answer: 'SAGE International has over 6 years of experience in manpower outsourcing, contract staffing, HR advisory, and document verification. We have successfully deployed 500+ professionals across 50+ corporate clients in UAE, Kuwait, and the broader Middle East region.',
  },
  {
    question: 'What is SAGE International\'s mission?',
    answer: 'Our mission is to bridge the gap between human potential and organizational needs by delivering tailored recruitment, strategic HR consulting, and compliant workforce solutions that drive business success for our clients in UAE and Kuwait.',
  },
  {
    question: 'Who are SAGE International\'s major clients?',
    answer: 'SAGE International\'s major clients include SLB (Schlumberger), Kuwait Oil Company (KOC), Baker Hughes, and Al Mansoori Specialized Engineering. We serve 50+ corporate clients across Oil & Gas, Healthcare, IT, Hospitality, and Trading sectors.',
  },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://sageintlg.com/about#webpage',
      'url': 'https://sageintlg.com/about',
      'name': 'About SAGE International | Leading HR & Manpower Outsourcing Company — UAE & Kuwait',
      'description': 'Learn about SAGE International Global Trading — established 2018, 500+ professionals deployed, trusted by SLB, KOC, Baker Hughes.',
      'isPartOf': { '@id': 'https://sageintlg.com/#website' },
      'about': { '@id': 'https://sageintlg.com/#organization' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', 'h3', '.speakable'],
      },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://sageintlg.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': 'https://sageintlg.com/about' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      'mainEntity': aboutFaqs.map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
      })),
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
            alt="SAGE International team — Leading HR and Manpower Outsourcing Company UAE Kuwait"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#2FAF7C] text-sm font-bold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 speakable">
            SAGE International — UAE & Kuwait's Trusted HR Partner
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A trusted manpower outsourcing and HR advisory company empowering organizations across UAE and Kuwait since 2018.
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
              <p className="text-4xl font-black text-white">50+</p>
              <p className="text-white/80 text-sm font-medium mt-1">Corporate Clients</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white">5+</p>
              <p className="text-white/80 text-sm font-medium mt-1">Industry Sectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Company History ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-3">Company History</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 speakable">
                Established in Dubai in 2018
              </h3>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-4">
                SAGE International General Trading L.L.C was established on <strong>10 June 2018</strong> in Dubai, UAE, with a focused mission: to deliver professional manpower outsourcing, HR advisory, and document verification services for organizations across multiple industries in the UAE and Kuwait.
              </p>
              <p className="text-[#6B7280] text-base leading-relaxed mb-4">
                From our first year, we secured partnerships with major energy sector clients in Kuwait — including engagements supporting operations serving KOC and SLB — establishing our reputation for speed, compliance, and quality at the highest levels of the industry.
              </p>
              <p className="text-[#6B7280] text-base leading-relaxed mb-8">
                Over 6+ years, we have grown to serve 50+ corporate clients, deploy 500+ professionals across the UAE and Kuwait, and establish a full-service HR platform that handles everything from candidate sourcing to embassy attestations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-[#1E7F5C] pl-4">
                  <div className="text-3xl font-black text-[#1A1A1A]">5+</div>
                  <div className="text-sm text-[#6B7280] font-medium mt-1">Sectors Covered</div>
                </div>
                <div className="border-l-4 border-[#4B3FA6] pl-4">
                  <div className="text-3xl font-black text-[#1A1A1A]">100%</div>
                  <div className="text-sm text-[#6B7280] font-medium mt-1">Client Retention Rate</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="SAGE International corporate office — HQ Dubai UAE"
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
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Mission & Vision</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="sage-card p-10 mt-0">
              <div className="w-16 h-16 rounded-2xl bg-[#1E7F5C]/10 flex items-center justify-center mb-6">
                <Target size={32} className="text-[#1E7F5C]" />
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">Our Mission</h4>
              <p className="text-[#6B7280] leading-relaxed text-lg">
                To bridge the gap between human potential and organizational needs by delivering tailored recruitment, strategic HR consulting, and compliant workforce solutions that drive measurable business success for our clients across the UAE and Kuwait.
              </p>
            </div>
            <div className="sage-card p-10 mt-0">
              <div className="w-16 h-16 rounded-2xl bg-[#4B3FA6]/10 flex items-center justify-center mb-6">
                <Eye size={32} className="text-[#4B3FA6]" />
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">Our Vision</h4>
              <p className="text-[#6B7280] leading-relaxed text-lg">
                To be the most trusted and preferred HR and manpower outsourcing partner in the GCC region, recognized for our unwavering commitment to quality, compliance, speed, and the professional growth of the individuals and enterprises we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why SAGE ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-3">E-E-A-T Signals</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Why SAGE International is the Right HR Partner
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, color: '#1E7F5C', title: 'Proven Track Record', desc: '6+ years serving Fortune 500 energy clients including SLB, KOC, and Baker Hughes across UAE and Kuwait.' },
              { icon: ShieldCheck, color: '#4B3FA6', title: 'Full Compliance', desc: 'MOHRE-compliant services in UAE and Kuwait MOL compliance — protecting your business from regulatory risk.' },
              { icon: Users, color: '#1E7F5C', title: 'Vetted Talent Network', desc: 'Access to a pre-screened database of 5,000+ professionals across 10+ disciplines ready for deployment.' },
              { icon: Globe2, color: '#4B3FA6', title: 'Regional Expertise', desc: 'Deep knowledge of the UAE and Kuwait business environment, labour laws, and cultural dynamics.' },
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

      {/* ── Industries Served ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-3">Broad Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Industries We Serve</h3>
            <p className="text-[#6B7280] mt-4">
              SAGE International serves organizations across five key sectors in the UAE and Kuwait.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Oil & Gas', 'Healthcare', 'IT & Business Solutions', 'Hospitality', 'Trading'].map((industry) => (
              <div key={industry} className="sage-card p-6 flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300 bg-white">
                <CheckCircle className="text-[#1E7F5C]" size={24} />
                <span className="text-lg font-bold text-[#1A1A1A]">{industry}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/industries" className="inline-flex items-center gap-2 text-[#4B3FA6] font-bold hover:underline">
              See industry details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Call To Action ── */}
      <section className="py-24 bg-[#1A1A1A] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with SAGE International Today
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Let us handle your HR and manpower outsourcing challenges in UAE and Kuwait while you focus on scaling your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#1E7F5C] text-white font-bold hover:bg-[#166347] transition-colors shadow-lg"
          >
            Contact Us Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ── About FAQ ── */}
      <FaqSection
        heading="About SAGE International — FAQ"
        subheading="Common questions about our company, history, and operations."
        items={aboutFaqs}
      />
    </>
  )
}
