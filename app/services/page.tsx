import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Building, TrendingUp, FileCheck, Briefcase, CheckCircle, ArrowRight } from 'lucide-react'
import { FaqSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'HR & Workforce Services | Manpower Outsourcing, Staffing & Document Verification — UAE & Kuwait',
  description: 'Explore SAGE International\'s full range of services: Manpower Outsourcing, Contract Staffing, Management Consulting, Document Verification & Attestations, and HR Advisory in UAE & Kuwait.',
  keywords: [
    'Manpower Outsourcing Services UAE', 'Contract Staffing Kuwait', 'Document Verification Services Dubai',
    'Management Consulting UAE', 'HR Advisory Middle East', 'Workforce Outsourcing Company Dubai',
    'Labour Supply Company UAE', 'Staff Augmentation Kuwait', 'HR Outsourcing Services UAE',
    'Employee Outsourcing Dubai', 'Temporary Staffing UAE', 'Contract Workers Kuwait',
    'Background Verification Dubai', 'Embassy Attestation UAE', 'Workforce Management UAE',
  ],
  alternates: {
    canonical: 'https://sageintlg.com/services',
  },
  openGraph: {
    title: 'HR & Workforce Services | Manpower Outsourcing & Staffing — UAE & Kuwait',
    description: 'End-to-end workforce and HR solutions tailored to meet the dynamic needs of global industries in the UAE, Kuwait, and the Middle East.',
    url: 'https://sageintlg.com/services',
    images: [{ url: 'https://sageintlg.com/images/services-hero.jpg', width: 1200, height: 630, alt: 'SAGE International HR Services UAE Kuwait' }],
  },
}

const services = [
  {
    id: 'manpower-outsourcing',
    title: 'Manpower Outsourcing',
    icon: Users,
    overview: 'SAGE International\'s manpower outsourcing service provides UAE and Kuwait businesses with the skilled personnel they need to execute operations efficiently — without the complexity of direct employment. We manage the entire workforce lifecycle: recruitment, onboarding, payroll, compliance, and offboarding.',
    detail: 'Whether you need 5 or 500 employees, our outsourcing model allows you to scale your workforce on demand while remaining fully compliant with UAE Labour Law and Kuwait Labour Law. We\'ve successfully deployed professionals for Oil & Gas, Healthcare, IT, and Hospitality sectors.',
    benefits: [
      'Eliminates overhead costs and administrative burden of direct hiring.',
      'Scalable workforce to match seasonal or project-based demands.',
      'Full compliance with UAE and Kuwait labour regulations.',
      'Rapid mobilization — typical deployment within 2–4 weeks.',
    ],
    features: [
      'End-to-end talent sourcing and multi-stage screening',
      'Payroll management, WPS compliance (UAE), and benefits administration',
      'Employee relations, performance management, and dispute resolution',
      'Visa and work permit processing for UAE and Kuwait',
    ],
    faqs: [
      {
        question: 'What is manpower outsourcing in UAE?',
        answer: 'Manpower outsourcing in the UAE means hiring a licensed agency like SAGE International to recruit, deploy, and manage employees on your behalf. The agency handles all HR, payroll, visa, and labour law compliance, while workers serve your operational needs.',
      },
      {
        question: 'How much does manpower outsourcing cost in UAE?',
        answer: 'The cost of manpower outsourcing in UAE varies based on the number of employees, skill level, and services required. SAGE International provides customized pricing based on your specific requirements. Contact us at Info@sageintlg.com for a tailored quote.',
      },
    ],
  },
  {
    id: 'contract-staffing',
    title: 'Contract Staffing',
    icon: Building,
    overview: 'Our contract staffing service connects UAE and Kuwait organizations with pre-vetted, specialized professionals for short-term projects, peak periods, or specialized roles — without the long-term commitment or overhead of permanent employment.',
    detail: 'From contract engineers for Oil & Gas projects in Kuwait to IT contractors for digital transformation projects in Dubai, SAGE International provides the right talent at the right time. Our extensive candidate database and rapid sourcing capabilities ensure you get quality talent fast.',
    benefits: [
      'Immediate access to specialized skills not available internally.',
      'Flexibility to scale teams up or down based on project demands.',
      'Mitigates long-term financial risks of permanent headcount.',
      'No recruitment fees — one simple management fee structure.',
    ],
    features: [
      'Short-term (1 month) to long-term (multi-year) contract placements',
      'Project-based team assembly across Oil & Gas, IT, and Healthcare',
      'Seamless onboarding, induction, and site mobilization',
      'Full contractor management including timesheets and expense reporting',
    ],
    faqs: [
      {
        question: 'What is contract staffing in UAE?',
        answer: 'Contract staffing in the UAE involves placing professionals on fixed-term contracts to fill temporary or project-specific roles. SAGE International manages the contract, payroll, and compliance, while the contractor works at your site under your direction.',
      },
      {
        question: 'Can SAGE provide contract staff for Oil & Gas projects in Kuwait?',
        answer: 'Yes. SAGE International specializes in providing contract staff for Oil & Gas projects in Kuwait including KOC, KNPC, and other energy sector operators. We have a proven track record of rapid mobilization for upstream and downstream operations.',
      },
    ],
  },
  {
    id: 'management-consulting',
    title: 'Management Consultant Services',
    icon: TrendingUp,
    overview: 'SAGE International\'s management consulting practice delivers expert organizational advisory for businesses in UAE and Kuwait — helping leadership teams navigate complex challenges, optimize HR processes, and implement strategies that drive sustainable, measurable growth.',
    detail: 'Our consultants bring decades of combined experience in organizational design, workforce planning, and business process optimization across the Middle East\'s most demanding industries.',
    benefits: [
      'Objective, data-driven insights from experienced Middle East practitioners.',
      'Improved operational efficiency, reduced waste, and higher profitability.',
      'Strategic alignment between HR strategy and organizational goals.',
      'Faster implementation of change with proven change management frameworks.',
    ],
    features: [
      'Organizational design, restructuring, and workforce planning',
      'HR process optimization and digital transformation advisory',
      'Performance management framework design',
      'Change management planning and stakeholder communication',
    ],
    faqs: [
      {
        question: 'What management consulting services does SAGE offer in UAE?',
        answer: 'SAGE International provides organizational design, HR process optimization, performance management framework development, and change management advisory for businesses in UAE and Kuwait.',
      },
    ],
  },
  {
    id: 'document-verification',
    title: 'Document Verification & Attestations',
    icon: FileCheck,
    overview: 'SAGE International provides rigorous document verification and attestation services to ensure the authenticity of educational, professional, and legal documents for your workforce — protecting your organization from credential fraud and ensuring regulatory compliance in UAE and Kuwait.',
    detail: 'Our document verification services cover the full spectrum: from degree verification and professional certificate authentication to embassy attestations, MOL approvals, and background checks. We work with official authorities across 50+ countries to validate credentials quickly and reliably.',
    benefits: [
      'Eliminates the risk of fraudulent credentials slipping through recruitment.',
      'Ensures compliance with UAE MOHRE and Kuwait MOL requirements.',
      'Speeds up visa processing and onboarding timelines significantly.',
      'Provides legally defensible documentation for audits and disputes.',
    ],
    features: [
      'Academic degree verification (university confirmation, HEC, ATESTADO)',
      'Professional certificate authentication (medical, engineering, trade)',
      'Embassy attestation and Ministry of Foreign Affairs (MOFA) legalization',
      'Criminal background checks and reference validation',
    ],
    faqs: [
      {
        question: 'What documents need to be verified for employment in UAE?',
        answer: 'For UAE employment, the following documents typically require verification: educational degrees (attested by MOFA), professional certificates, passport copies, police clearance certificates, and medical fitness certificates. SAGE International handles the complete verification process.',
      },
      {
        question: 'How long does document attestation take in UAE?',
        answer: 'Standard document attestation in UAE typically takes 5–15 business days depending on the document type and country of origin. SAGE International offers expedited verification services to reduce timelines during urgent mobilizations.',
      },
    ],
  },
  {
    id: 'hr-advisory',
    title: 'HR Advisory Services',
    icon: Briefcase,
    overview: 'SAGE International\'s HR Advisory practice helps UAE and Kuwait organizations build the people strategies, policies, and talent management frameworks they need to attract, develop, and retain top talent — transforming HR from a cost center into a strategic business driver.',
    detail: 'From startups establishing their first HR function to established enterprises modernizing outdated policies, our advisors tailor every engagement to your specific organizational culture, headcount stage, and compliance obligations under UAE or Kuwait law.',
    benefits: [
      'Establishes fair, compliant, and modern HR policies aligned with UAE/Kuwait law.',
      'Dramatically boosts employee engagement, retention, and performance.',
      'Positions HR as a strategic function that drives measurable business value.',
      'Reduces risk of labour disputes and regulatory penalties.',
    ],
    features: [
      'HR policy design, employee handbook, and code of conduct development',
      'Compensation benchmarking and benefits structuring for UAE & Kuwait markets',
      'Training needs analysis and learning & development framework design',
      'Talent acquisition strategy and employer branding advisory',
    ],
    faqs: [
      {
        question: 'What HR advisory services are available for companies in Dubai?',
        answer: 'SAGE International provides comprehensive HR advisory in Dubai including HR policy development, compensation benchmarking, employee handbook creation, talent management framework design, and HR compliance auditing under UAE Labour Law.',
      },
    ],
  },
]

const servicesFaqs = [
  {
    question: 'What HR services does SAGE International offer in UAE?',
    answer: 'SAGE International offers five core HR services in the UAE: (1) Manpower Outsourcing — full workforce lifecycle management; (2) Contract Staffing — project-based professional placements; (3) Management Consulting — organizational and HR strategy advisory; (4) Document Verification & Attestations — credential authentication and legal approvals; and (5) HR Advisory — policy development and talent management.',
  },
  {
    question: 'Does SAGE International provide services to companies in Kuwait?',
    answer: 'Yes. SAGE International actively serves clients in Kuwait, including major energy sector operators. Our Kuwait services include manpower outsourcing for oil & gas projects, contract staffing, document verification compliant with Kuwait Ministry of Labour requirements, and HR advisory.',
  },
  {
    question: 'How does SAGE International ensure workforce compliance in UAE?',
    answer: 'SAGE International ensures compliance through: (1) Full WPS (Wage Protection System) payroll processing; (2) UAE Labour Law-compliant employment contracts; (3) MOHRE approvals and visa processing; (4) Ministry of Foreign Affairs document attestations; and (5) regular compliance audits for all deployed staff.',
  },
  {
    question: 'Can SAGE International handle emergency or urgent staffing needs?',
    answer: 'Yes. SAGE International has an established rapid-deployment process with a pre-vetted candidate pipeline across key sectors. For urgent staffing requirements, we can typically mobilize qualified professionals within 2–4 weeks, and faster for roles where we hold ready candidates.',
  },
  {
    question: 'What is the difference between manpower outsourcing and contract staffing?',
    answer: 'Manpower outsourcing involves transferring all HR responsibility — recruitment, payroll, compliance, and administration — to SAGE International for a defined group of workers. Contract staffing refers to placing specific professionals on fixed-term contracts for project needs, with SAGE handling employment while you direct their work.',
  },
]

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sageintlg.com/services#webpage',
      'url': 'https://sageintlg.com/services',
      'name': 'HR & Workforce Services | Manpower Outsourcing, Staffing & Document Verification — UAE & Kuwait',
      'description': 'Complete HR and workforce solutions by SAGE International for UAE and Kuwait businesses.',
      'isPartOf': { '@id': 'https://sageintlg.com/#website' },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://sageintlg.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://sageintlg.com/services' },
        ],
      },
    },
    {
      '@type': 'ItemList',
      'name': 'SAGE International HR & Workforce Services',
      'description': 'Professional HR and workforce services offered by SAGE International in the UAE and Kuwait.',
      'provider': { '@id': 'https://sageintlg.com/#organization' },
      'areaServed': [
        { '@type': 'Country', 'name': 'United Arab Emirates' },
        { '@type': 'Country', 'name': 'Kuwait' },
      ],
      'itemListElement': services.map((s, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'item': {
          '@type': 'ProfessionalService',
          'name': s.title,
          'description': s.overview,
          'url': `https://sageintlg.com/services#${s.id}`,
          'provider': { '@id': 'https://sageintlg.com/#organization' },
          'areaServed': ['United Arab Emirates', 'Kuwait'],
        },
      })),
    },
    {
      '@type': 'HowTo',
      'name': 'How to Outsource Manpower in UAE',
      'description': 'Step-by-step guide to outsourcing your workforce needs in UAE through SAGE International.',
      'step': [
        { '@type': 'HowToStep', 'position': 1, 'name': 'Contact SAGE International', 'text': 'Reach out via email at Info@sageintlg.com or through our contact form to discuss your workforce requirements.' },
        { '@type': 'HowToStep', 'position': 2, 'name': 'Needs Assessment', 'text': 'Our HR specialists assess your manpower needs, role requirements, timelines, and compliance obligations.' },
        { '@type': 'HowToStep', 'position': 3, 'name': 'Candidate Sourcing & Screening', 'text': 'We source, screen, and short-list qualified candidates from our global talent database.' },
        { '@type': 'HowToStep', 'position': 4, 'name': 'Document Verification', 'text': 'All candidate credentials are rigorously verified and attested before deployment.' },
        { '@type': 'HowToStep', 'position': 5, 'name': 'Onboarding & Deployment', 'text': 'We handle visa processing, employment contracts, and full onboarding to get your team operational.' },
      ],
    },
    {
      '@type': 'FAQPage',
      'mainEntity': servicesFaqs.map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
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
            alt="SAGE International workforce and HR services for UAE and Kuwait"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#2FAF7C] text-sm font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            HR & Workforce Solutions in UAE & Kuwait
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            End-to-end manpower outsourcing, contract staffing, HR advisory, and document verification services tailored to the dynamic needs of leading organizations in the UAE and Kuwait.
          </p>
        </div>
      </section>

      {/* ── Detailed Services List ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>

                    {/* Visual / Title Side */}
                    <div className="lg:w-1/3 w-full shrink-0">
                      <div className="sage-card p-8 bg-white text-center h-full flex flex-col items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-[#1E7F5C]/10 flex items-center justify-center mb-6">
                          <Icon size={40} className="text-[#1E7F5C]" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{service.title}</h2>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1E7F5C] text-white text-sm font-semibold hover:bg-[#166347] transition-colors mt-2"
                        >
                          Get a Quote <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-2/3 w-full">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 border-b pb-2 border-[#E5E7EB]">Overview</h3>
                        <p className="text-[#6B7280] text-lg leading-relaxed mb-3">{service.overview}</p>
                        <p className="text-[#6B7280] text-base leading-relaxed">{service.detail}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div>
                          <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#1E7F5C]"></span>
                            Key Benefits
                          </h3>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-[#1E7F5C] shrink-0 mt-0.5" />
                                <span className="text-[#6B7280]">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#4B3FA6]"></span>
                            Key Features
                          </h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-[#4B3FA6] shrink-0 mt-0.5" />
                                <span className="text-[#6B7280]">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Inline service FAQ */}
                      {service.faqs && service.faqs.length > 0 && (
                        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
                          <p className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-4">Quick Answers</p>
                          <div className="space-y-4">
                            {service.faqs.map((faq, i) => (
                              <div key={i}>
                                <p className="font-bold text-[#1A1A1A] text-sm mb-1">{faq.question}</p>
                                <p className="text-[#6B7280] text-sm leading-relaxed">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Call To Action ── */}
      <section className="py-24 bg-[#4B3FA6] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Workforce in UAE or Kuwait?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Get in touch to learn how our tailored manpower outsourcing and HR solutions can support your organization's goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-white text-[#1A1A1A] font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Request a Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ── Services FAQ ── */}
      <FaqSection
        heading="Services FAQ — UAE & Kuwait"
        subheading="Common questions about our HR and workforce solutions."
        items={servicesFaqs}
      />
    </>
  )
}
