import Image from 'next/image'
import Link from 'next/link'
import { Users, Building, TrendingUp, FileCheck, Briefcase, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'manpower-outsourcing',
    title: 'Manpower Outsourcing',
    icon: Users,
    overview: 'Comprehensive manpower outsourcing solutions to provide your organization with the skilled personnel it needs to execute projects efficiently. We manage the entire lifecycle of the outsourced workforce.',
    benefits: [
      'Reduces overhead costs and administrative burdens.',
      'Scalable workforce to match project demands.',
      'Ensures compliance with local labor and employment laws.',
    ],
    features: [
      'Talent sourcing and screening',
      'Payroll and benefits management',
      'Employee relations and dispute resolution',
    ],
  },
  {
    id: 'contract-staffing',
    title: 'Contract Staffing',
    icon: Building,
    overview: 'Flexible contract staffing services that connect you with top-tier professionals for short-term projects or specialized roles without the long-term commitment of permanent hires.',
    benefits: [
      'Immediate access to specialized skills and expertise.',
      'Flexibility to scale teams up or down rapidly.',
      'Mitigates the risks associated with permanent employment.',
    ],
    features: [
      'Short and long-term contract placements',
      'Project-based team assembly',
      'Seamless onboarding and integration',
    ],
  },
  {
    id: 'management-consulting',
    title: 'Management Consultant Services',
    icon: TrendingUp,
    overview: 'Expert advisory services to help your leadership team navigate complex organizational challenges, optimize processes, and implement strategies that drive sustainable growth.',
    benefits: [
      'Objective insights from experienced industry veterans.',
      'Improved operational efficiency and profitability.',
      'Strategic alignment of resources and goals.',
    ],
    features: [
      'Organizational design and restructuring',
      'Performance improvement strategies',
      'Change management support',
    ],
  },
  {
    id: 'document-verification',
    title: 'Document Verification & Attestations',
    icon: FileCheck,
    overview: 'Rigorous and reliable document verification and attestation services to ensure the authenticity of educational, professional, and legal documents for your workforce and operations.',
    benefits: [
      'Eliminates the risk of credential fraud.',
      'Ensures compliance with regulatory and industry standards.',
      'Speeds up the hiring and onboarding process.',
    ],
    features: [
      'Academic and professional certificate verification',
      'Legalization and embassy attestations',
      'Background checks and reference validation',
    ],
  },
  {
    id: 'hr-advisory',
    title: 'HR Advisory Services',
    icon: Briefcase,
    overview: 'Strategic Human Resources consulting to develop policies, frameworks, and talent management practices that align with your corporate objectives and foster a high-performance culture.',
    benefits: [
      'Establishes fair, compliant, and modern HR policies.',
      'Boosts employee engagement and retention.',
      'Transforms HR from an administrative function to a strategic partner.',
    ],
    features: [
      'HR policy and handbook development',
      'Compensation and benefits structuring',
      'Training and development frameworks',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#0F172A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="SAGE International Services"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#2FAF7C] text-sm font-bold uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            End-to-end workforce and HR solutions tailored to meet the dynamic needs of global industries.
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
                        <h2 className="text-2xl font-bold text-[#1A1A1A]">{service.title}</h2>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-2/3 w-full">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 border-b pb-2 border-[#E5E7EB]">Overview</h3>
                        <p className="text-[#6B7280] text-lg leading-relaxed">{service.overview}</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
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
            Ready to Optimize Your Workforce?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Get in touch to learn how our tailored services can support your organization's goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-white text-[#1A1A1A] font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Request a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
