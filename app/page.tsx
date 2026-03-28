import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  Briefcase,
  FileCheck,
  Building,
  HeartPulse,
  MonitorSmartphone,
  UtensilsCrossed,
  TrendingUp,
  ArrowRight,
  ClipboardList,
  UserCheck,
  Building2,
  CalendarDays,
  Globe2,
  Award,
  Zap,
  Mail,
  MapPin,
  MessageSquare,
  Medal,
  Star,
  Quote,
} from 'lucide-react'
import { FaqSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: '#1 Manpower Outsourcing & HR Agency in UAE & Kuwait | SAGE International',
  description: 'SAGE International is the leading manpower outsourcing, contract staffing, HR advisory & document verification agency in UAE & Kuwait. Trusted by SLB, KOC, Baker Hughes & Al Mansoori.',
  keywords: [
    'Manpower Outsourcing UAE', 'HR Consulting Kuwait', 'Staffing Agency Dubai',
    'Workforce Solutions Middle East', 'Top Recruitment Agency UAE',
    'Contract Staffing Kuwait', 'Document Verification Dubai',
    'Best HR Agency UAE', 'Oil Gas Recruitment Kuwait', 'Energy Staffing Middle East',
    'HR Solutions Dubai', 'Temp Staffing Agency UAE', 'Executive Search Middle East',
    'Manpower Supply Company Dubai', 'Labour Outsourcing UAE',
    'Staff Outsourcing Agency UAE', 'Manpower Company Kuwait',
    'Recruitment Company Dubai', 'HR Outsourcing UAE', 'Workforce Provider Kuwait',
  ],
  alternates: {
    canonical: 'https://sageintlg.com',
    languages: {
      'en-US': 'https://sageintlg.com',
    },
  },
  openGraph: {
    title: '#1 Manpower Outsourcing in UAE & Kuwait | SAGE International',
    description: 'SAGE International — trusted by SLB, KOC, Baker Hughes for manpower outsourcing, HR advisory, and staffing across UAE and Kuwait.',
    url: 'https://sageintlg.com/',
    images: [
      {
        url: 'https://sageintlg.com/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'SAGE International — #1 Professional Workforce Solutions UAE & Kuwait',
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
      '@id': 'https://sageintlg.com/#webpage',
      'url': 'https://sageintlg.com',
      'name': '#1 Manpower Outsourcing & HR Agency in UAE & Kuwait | SAGE International',
      'description': 'SAGE International is the leading manpower outsourcing, contract staffing, HR advisory and document verification agency in UAE & Kuwait.',
      'isPartOf': { '@id': 'https://sageintlg.com/#website' },
      'about': { '@id': 'https://sageintlg.com/#organization' },
      'inLanguage': 'en-US',
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://sageintlg.com' },
        ],
      },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', '.speakable'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://sageintlg.com/#faqpage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is manpower outsourcing?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Manpower outsourcing is when a company hires a third-party agency like SAGE International to recruit, deploy, manage, and administer employees on their behalf. This reduces HR overhead, ensures compliance with local labour laws in UAE and Kuwait, and allows businesses to scale their workforce flexibly.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Why choose SAGE International for HR services in UAE?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'SAGE International has been operating since 2018, having deployed 500+ professionals across 50+ corporate clients including SLB, KOC, and Baker Hughes. We specialize in Oil & Gas, Healthcare, IT, and Hospitality sectors across UAE and Kuwait, providing end-to-end workforce solutions.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does SAGE International operate in Kuwait?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. SAGE International serves clients in both the UAE and Kuwait, including major energy companies such as Kuwait Oil Company (KOC). We provide manpower outsourcing, contract staffing, HR advisory, and document verification services across both countries.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What industries does SAGE International serve?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'SAGE International serves Oil & Gas, Healthcare, IT & Business Solutions, Hospitality, and Trading sectors in the UAE and Kuwait. We provide specialized staffing and HR solutions tailored to the unique demands of each industry.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What services does SAGE International offer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'SAGE International offers five core services: (1) Manpower Outsourcing — end-to-end workforce management; (2) Contract Staffing — flexible short and long-term placements; (3) Management Consulting — strategic HR and organizational advisory; (4) Document Verification & Attestations — credential authentication and embassy attestations; and (5) HR Advisory Services — policy development and talent management.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How does document verification work with SAGE International?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'SAGE International conducts rigorous verification of academic degrees, professional certificates, and legal documents through official channels including embassy attestations, MOL verifications, and background checks. This ensures zero credential fraud risk during hiring in the UAE and Kuwait.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How can I contact SAGE International?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'You can contact SAGE International by emailing Info@sageintlg.com or by visiting our Contact page at sageintlg.com/contact. Our team is available Sunday through Thursday during business hours for UAE and Kuwait inquiries.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What makes SAGE International different from other staffing agencies in the UAE?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'SAGE International stands out through its deep sector expertise in Oil & Gas and Healthcare, its proven track record with Fortune 500 energy clients like SLB and Baker Hughes, its fast deployment capability, and its comprehensive document verification and compliance services — all under one roof.',
          },
        },
      ],
    },
  ],
}

const homepageFaqs = [
  {
    question: 'What is manpower outsourcing?',
    answer: 'Manpower outsourcing is when a company hires a third-party agency like SAGE International to recruit, deploy, manage, and administer employees on their behalf. This reduces HR overhead, ensures compliance with local labour laws in UAE and Kuwait, and allows businesses to scale their workforce flexibly.',
  },
  {
    question: 'Why choose SAGE International for HR services in UAE?',
    answer: 'SAGE International has been operating since 2018, having deployed 500+ professionals across 50+ corporate clients including SLB, KOC, and Baker Hughes. We specialize in Oil & Gas, Healthcare, IT, and Hospitality sectors across UAE and Kuwait, providing end-to-end workforce solutions.',
  },
  {
    question: 'Does SAGE International operate in Kuwait?',
    answer: 'Yes. SAGE International serves clients in both the UAE and Kuwait, including major energy companies such as Kuwait Oil Company (KOC). We provide manpower outsourcing, contract staffing, HR advisory, and document verification services across both countries.',
  },
  {
    question: 'What industries does SAGE International serve?',
    answer: 'SAGE International serves Oil & Gas, Healthcare, IT & Business Solutions, Hospitality, and Trading sectors in the UAE and Kuwait. We provide specialized staffing and HR solutions tailored to the unique demands of each industry.',
  },
  {
    question: 'What services does SAGE International offer?',
    answer: 'SAGE International offers five core services: (1) Manpower Outsourcing — end-to-end workforce management; (2) Contract Staffing — flexible short and long-term placements; (3) Management Consulting — strategic HR advisory; (4) Document Verification & Attestations — credential authentication; and (5) HR Advisory Services — policy development and talent management.',
  },
  {
    question: 'How can I contact SAGE International?',
    answer: 'You can contact SAGE International by emailing Info@sageintlg.com or by visiting our Contact page at sageintlg.com/contact. Our team is available Sunday through Thursday during business hours for UAE and Kuwait inquiries.',
  },
]

const testimonials = [
  {
    quote: 'SAGE International mobilized our entire field crew for a critical upstream project in record time. Their document verification was flawless.',
    author: 'Operations Director',
    company: 'Leading Oil & Gas Company, Kuwait',
    rating: 5,
  },
  {
    quote: 'The HR advisory team at SAGE helped us restructure our entire workforce compliance framework across our UAE operations. Outstanding professionalism.',
    author: 'HR Manager',
    company: 'Global Energy Firm, Dubai',
    rating: 5,
  },
  {
    quote: 'Reliable, fast, and thorough. SAGE International has been our exclusive staffing partner for contract placements across multiple UAE projects.',
    author: 'Procurement Lead',
    company: 'Engineering Contractor, Abu Dhabi',
    rating: 5,
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────

function ServiceCard({
  icon: Icon,
  title,
  description,
  linkId,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
  linkId: string
}) {
  return (
    <div className="sage-card p-10 flex flex-col h-full group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 -z-10 transition-transform group-hover:scale-110 duration-500" />
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1E7F5C]/10 mb-8 group-hover:bg-[#1E7F5C] transition-colors duration-300">
        <Icon size={32} className="text-[#1E7F5C] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{title}</h3>
      <p className="text-[#6B7280] text-base leading-relaxed mb-8 flex-grow">{description}</p>
      <Link
        href={`/services#${linkId}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-[#1E7F5C] hover:text-[#4B3FA6] transition-colors"
      >
        Learn More <ArrowRight size={18} />
      </Link>
    </div>
  )
}

function IndustryCard({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
}) {
  return (
    <div className="sage-card flex flex-col items-center justify-center p-8 text-center group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F7F9FB] mb-5 group-hover:bg-[#4B3FA6]/10 transition-colors duration-300 shadow-sm border border-gray-100 group-hover:border-[#4B3FA6]/20">
        <Icon size={36} className="text-[#4B3FA6] group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-base font-bold text-[#1A1A1A] group-hover:text-[#4B3FA6] transition-colors">{label}</span>
    </div>
  )
}

function ClientLogo({ name, abbr, src }: { name: string; abbr: string; src?: string }) {
  return (
    <div className="flex items-center justify-center p-8 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
      {src ? (
        <Image src={src} alt={`${name} Logo`} width={160} height={80} className="object-contain max-h-16" />
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

function TestimonialCard({ quote, author, company, rating }: typeof testimonials[0]) {
  return (
    <div className="sage-card p-8 bg-white flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <Quote size={28} className="text-[#1E7F5C]/30" />
      <p className="text-[#1A1A1A] text-base leading-relaxed font-medium flex-grow italic">
        "{quote}"
      </p>
      <div className="flex gap-0.5 mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <div>
        <p className="font-bold text-[#1A1A1A] text-sm">{author}</p>
        <p className="text-[#6B7280] text-xs">{company}</p>
      </div>
    </div>
  )
}

// ─── Page Component ────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Root JSON-LD (HomePage + FAQ schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center animate-fade-in-up">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.35) 100%)' }}
          />
          <Image
            src="/images/hero-bg.jpg"
            alt="Professional manpower outsourcing and HR solutions for UAE and Kuwait industries"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-20 text-center md:text-left">
          <div className="max-w-3xl">
            {/* AIO-friendly badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E7F5C]/20 border border-[#1E7F5C]/40 mb-6">
              <Award size={16} className="text-[#2FAF7C]" />
              <span className="text-[#2FAF7C] text-sm font-bold tracking-wide">Trusted by SLB · KOC · Baker Hughes · Al Mansoori</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 speakable">
              #1 Manpower Outsourcing & HR Agency in UAE & Kuwait
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 speakable">
              SAGE International delivers professional manpower outsourcing, contract staffing, HR advisory, and document verification services for leading organizations across the UAE, Kuwait, and the Middle East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-md bg-[#1E7F5C] text-white font-bold hover:bg-[#166347] hover:-translate-y-1 transition-all shadow-lg"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center items-center px-8 py-4 rounded-md bg-white text-[#1A1A1A] font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust Indicator Row */}
            <div className="pt-8 border-t border-white/20 mt-8 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1E7F5C] flex items-center justify-center">
                  <Award size={16} className="text-white" />
                </div>
                <span className="text-gray-200 text-sm font-medium">6+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#4B3FA6] flex items-center justify-center">
                  <Users size={16} className="text-white" />
                </div>
                <span className="text-gray-200 text-sm font-medium">500+ Professionals Deployed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1E7F5C] flex items-center justify-center">
                  <Globe2 size={16} className="text-white" />
                </div>
                <span className="text-gray-200 text-sm font-medium">UAE & Kuwait Operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT COMPANY ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="SAGE International corporate team meeting — HR solutions UAE"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">About SAGE International</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                The Trusted Workforce Solutions Partner for UAE & Kuwait
              </h3>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-4">
                Established on 10 June 2018, SAGE International General Trading L.L.C is dedicated to empowering businesses by connecting them with top-tier talent and delivering comprehensive human resource management solutions across the UAE and Kuwait.
              </p>
              <p className="text-[#6B7280] text-base leading-relaxed mb-6">
                We have built an exceptional reputation for excellence, reliability, and precision — helping 50+ leading corporate clients in the Oil & Gas, Healthcare, IT, and Hospitality sectors to optimize their human capital and scale their operations efficiently.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Manpower Outsourcing — Full Lifecycle Management',
                  'Contract & Flexible Staffing Solutions',
                  'Strategic HR Advisory & Compliance',
                  'Document Verification & Embassy Attestations',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1A1A1A] font-medium">
                    <UserCheck className="text-[#1E7F5C]" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#4B3FA6] text-white font-semibold hover:bg-[#3d3388] transition-colors shadow-md"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY CREDIBILITY (STATS) ── */}
      <section className="py-16 bg-white relative z-10 -mt-10 mx-4 lg:mx-auto max-w-6xl rounded-2xl shadow-xl border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-12 h-12 rounded-full bg-[#1E7F5C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CalendarDays className="text-[#1E7F5C]" size={24} />
              </div>
              <span className="text-3xl font-black text-[#1A1A1A] mb-1">6+</span>
              <span className="text-sm font-semibold text-[#6B7280]">Years Experience</span>
            </div>
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-12 h-12 rounded-full bg-[#4B3FA6]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-[#4B3FA6]" size={24} />
              </div>
              <span className="text-3xl font-black text-[#1A1A1A] mb-1">500+</span>
              <span className="text-sm font-semibold text-[#6B7280]">Workforce Deployed</span>
            </div>
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-12 h-12 rounded-full bg-[#1E7F5C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Medal className="text-[#1E7F5C]" size={24} />
              </div>
              <span className="text-3xl font-black text-[#1A1A1A] mb-1">50+</span>
              <span className="text-sm font-semibold text-[#6B7280]">Corporate Clients</span>
            </div>
            <div className="flex flex-col items-center text-center px-4 group">
              <div className="w-12 h-12 rounded-full bg-[#4B3FA6]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe2 className="text-[#4B3FA6]" size={24} />
              </div>
              <span className="text-3xl font-black text-[#1A1A1A] mb-1">5+</span>
              <span className="text-sm font-semibold text-[#6B7280]">Industries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY SERVICES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our HR & Workforce Services in UAE & Kuwait
            </h3>
            <p className="text-[#6B7280]">
              End-to-end workforce and HR solutions designed to help organizations in the UAE and Kuwait scale their operations efficiently, compliantly, and fast.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Users}
              title="Manpower Outsourcing"
              description="Flexible, scalable workforce solutions for UAE and Kuwait — we manage the entire employee lifecycle so you can focus on your core business."
              linkId="manpower-outsourcing"
            />
            <ServiceCard
              icon={Building}
              title="Contract Staffing"
              description="Skilled professionals on a contractual basis for short and long-term project needs across the energy, healthcare, and technology sectors."
              linkId="contract-staffing"
            />
            <ServiceCard
              icon={TrendingUp}
              title="Management Consulting"
              description="Expert organizational and HR consulting to optimize business processes, restructure teams, and implement growth strategies."
              linkId="management-consulting"
            />
            <ServiceCard
              icon={FileCheck}
              title="Document Verification"
              description="Rigorous credential screening, background checks, and embassy attestations — ensuring full compliance and zero fraud risk."
              linkId="document-verification"
            />
            <ServiceCard
              icon={Briefcase}
              title="HR Advisory Services"
              description="Strategic human resources consulting for policies, compliance, talent management, and high-performance culture development."
              linkId="hr-advisory"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-md border-2 border-[#1E7F5C] text-[#1E7F5C] font-bold hover:bg-[#1E7F5C] hover:text-white transition-all"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">Sectors</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Industry Sectors We Serve in UAE & Kuwait
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            <IndustryCard icon={Building2} label="Oil & Gas" />
            <IndustryCard icon={HeartPulse} label="Healthcare" />
            <IndustryCard icon={MonitorSmartphone} label="IT & Business" />
            <IndustryCard icon={UtensilsCrossed} label="Hospitality" />
            <IndustryCard icon={TrendingUp} label="Trading" />
          </div>
          <div className="text-center mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[#4B3FA6] font-bold hover:underline"
            >
              See all industries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="py-24 bg-white border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">Our Clients</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Trusted by Global Industry Leaders</h3>
            <p className="text-[#6B7280] mt-4">
              From multinational energy giants to leading regional contractors — SAGE International is the trusted workforce partner for organizations that demand the best.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E5E7EB] border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <ClientLogo name="Schlumberger" abbr="SLB" src="/images/clients/slb.png" />
            <ClientLogo name="Kuwait Oil" abbr="KOC" src="/images/clients/koc.png" />
            <ClientLogo name="Baker Hughes" abbr="Baker Hughes" src="/images/clients/baker_hughes.png" />
            <ClientLogo name="Al Mansoori" abbr="Al Mansoori" src="/images/clients/al_mansoori.png" />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">Client Reviews</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              What Our Clients Say
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">Why Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Why Companies Choose SAGE International
            </h3>
            <p className="text-[#6B7280] mt-4">
              We combine deep domain expertise, a vetted talent network, and a full-service HR platform to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="sage-card p-8 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-[#1E7F5C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E7F5C] transition-colors duration-300">
                <Briefcase className="text-[#1E7F5C] group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Industry Expertise</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Deep understanding of operational needs across Energy, IT, Healthcare, and Trading in UAE and Kuwait.
              </p>
            </div>

            <div className="sage-card p-8 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-[#4B3FA6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4B3FA6] transition-colors duration-300">
                <Users className="text-[#4B3FA6] group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Reliable Workforce</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Scalable and thoroughly vetted professionals deployed ready for global projects with full HR support.
              </p>
            </div>

            <div className="sage-card p-8 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-[#1E7F5C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E7F5C] transition-colors duration-300">
                <FileCheck className="text-[#1E7F5C] group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Verified Documents</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Rigorous verifications and attestations ensuring zero risk of credential fraud across all hires.
              </p>
            </div>

            <div className="sage-card p-8 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-[#4B3FA6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4B3FA6] transition-colors duration-300">
                <Zap className="text-[#4B3FA6] group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Fast Deployment</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Streamlined processes ensuring swift mobilization from candidate sourcing to on-site deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-[#4B3FA6] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Looking for Reliable Workforce Solutions in UAE or Kuwait?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with SAGE International — the region's most trusted manpower outsourcing and HR agency. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center px-10 py-4 rounded-md bg-[#1E7F5C] text-white font-bold text-lg hover:bg-[#166347] hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* ── FAQ SECTION (AIO) ── */}
      <FaqSection
        heading="Frequently Asked Questions"
        subheading="Everything you need to know about manpower outsourcing and HR services in UAE & Kuwait."
        items={homepageFaqs}
      />

      {/* ── CONTACT PREVIEW ── */}
      <section className="py-24 bg-[#F7F9FB] border-t border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E7F5C]/10 mb-6">
            <ClipboardList className="text-[#1E7F5C]" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Ready to Get Started?</h2>
          <p className="text-[#6B7280] text-lg mb-10">
            Reach out to our dedicated HR and workforce team to discuss your requirements in UAE or Kuwait.
          </p>

          <div className="bg-white rounded-2xl p-8 sm:p-10 flex flex-col items-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full max-w-lg mx-auto">
            <div className="flex flex-col gap-6 w-full mb-8 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E7F5C]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#1E7F5C]" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Email Us</p>
                  <a href="mailto:Info@sageintlg.com" className="text-lg font-bold text-[#1A1A1A] hover:text-[#4B3FA6] transition-colors block">
                    Info@sageintlg.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E7F5C]/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="text-[#1E7F5C]" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">WhatsApp</p>
                  <a href="#" className="text-lg font-bold text-[#1A1A1A] hover:text-[#4B3FA6] transition-colors block">
                    Chat with our team
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E7F5C]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#1E7F5C]" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Our Offices</p>
                  <p className="text-base font-medium text-[#1A1A1A]">
                    Dubai, UAE &amp; Kuwait City, Kuwait
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 w-full justify-center rounded-md bg-[#1E7F5C] text-white font-semibold hover:bg-[#166347] hover:-translate-y-0.5 transition-all shadow-md"
            >
              Send an Inquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
