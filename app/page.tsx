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
} from 'lucide-react'

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
    <div className="sage-card p-8 flex flex-col h-full group">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1E7F5C]/10 mb-6 group-hover:bg-[#1E7F5C] transition-colors duration-300">
        <Icon size={24} className="text-[#1E7F5C] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
      <p className="text-[#6B7280] text-sm leading-relaxed mb-6 flex-grow">{description}</p>
      <Link
        href={`/services#${linkId}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-[#1E7F5C] hover:text-[#4B3FA6] transition-colors"
      >
        Learn More <ArrowRight size={16} />
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
    <div className="sage-card flex flex-col items-center justify-center gap-4 p-6 text-center group">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F7F9FB] group-hover:bg-[#4B3FA6]/10 transition-colors duration-300">
        <Icon size={28} className="text-[#4B3FA6]" />
      </div>
      <span className="text-sm font-bold text-[#1A1A1A]">{label}</span>
    </div>
  )
}

function ClientLogo({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center justify-center p-8 bg-white grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      <div className="text-center">
        <div className="text-3xl font-black text-[#1E7F5C] tracking-tighter">
          {abbr}
        </div>
        <div className="text-xs font-semibold text-[#1A1A1A] mt-2 uppercase tracking-wide">
          {name}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          {/* Replace with an actual image showing professional workforce and industrial sectors */}
          <div className="absolute inset-0 bg-[#0F172A]/80 mix-blend-multiply z-10" />
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt="Professional workforce and industrial sectors"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-20 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Professional Workforce & HR Solutions for Global Industries
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
              SAGE International provides manpower outsourcing, staffing, HR advisory, and document verification services for companies across multiple industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-md bg-[#1E7F5C] text-white font-bold hover:bg-[#166347] transition-colors shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center items-center px-8 py-4 rounded-md bg-white text-[#1A1A1A] font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Our Services
              </Link>
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
                alt="Corporate Meetings"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">About SAGE International</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Reliable Workforce Solutions Provider
              </h3>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                Established in 2018, SAGE International is dedicated to empowering businesses by connecting them with top-tier talent and providing comprehensive human resource management solutions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Manpower Outsourcing',
                  'Staffing Services',
                  'HR Advisory',
                  'Document Verification',
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
                Learn More about us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY SERVICES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Key Services</h3>
            <p className="text-[#6B7280]">
              Delivering end-to-end workforce and HR solutions designed to scale with your business requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Users}
              title="Manpower Outsourcing"
              description="Flexible and scalable workforce solutions to meet operational demands without the overhead."
              linkId="manpower-outsourcing"
            />
            <ServiceCard
              icon={Building}
              title="Contract Staffing"
              description="Skilled professionals on a contractual basis for your short and long-term project needs."
              linkId="contract-staffing"
            />
            <ServiceCard
              icon={TrendingUp}
              title="Management Consultant"
              description="Expert consulting services to optimize business processes and operational efficiency."
              linkId="management-consulting"
            />
            <ServiceCard
              icon={FileCheck}
              title="Document Verification"
              description="Rigorous screening and attestations ensuring authenticity and compliance for all personnel."
              linkId="document-verification"
            />
            <ServiceCard
              icon={Briefcase}
              title="HR Advisory Services"
              description="Strategic human resources consulting for policies, compliance, and talent management."
              linkId="hr-advisory"
            />
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">Sectors</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Industries We Serve</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            <IndustryCard icon={Building2} label="Oil & Gas" />
            <IndustryCard icon={HeartPulse} label="Healthcare" />
            <IndustryCard icon={MonitorSmartphone} label="IT & Business" />
            <IndustryCard icon={UtensilsCrossed} label="Hospitality" />
            <IndustryCard icon={TrendingUp} label="Trading" />
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="py-24 bg-white border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Trusted by Leading Companies</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E5E7EB] border border-[#E5E7EB] rounded-2xl overflow-hidden">
            <ClientLogo name="Schlumberger" abbr="SLB" />
            <ClientLogo name="Kuwait Oil Company" abbr="KOC" />
            <ClientLogo name="Baker Hughes" abbr="Baker Hughes" />
            <ClientLogo name="Al Mansoori" abbr="Al Mansoori" />
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 bg-gradient-to-br from-[#1E7F5C] to-[#4B3FA6] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Looking for Reliable Workforce Solutions?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Partner with SAGE International today and ensure your business runs smoothly with the right talent and compliance.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center px-10 py-4 rounded-md bg-white text-[#1A1A1A] font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── CONTACT PREVIEW ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F0FAF5] mb-6">
            <ClipboardList className="text-[#1E7F5C]" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Ready to Get Started?</h2>
          <p className="text-[#6B7280] text-lg mb-8">
            Reach out to our dedicated team via email to discuss your requirements.
          </p>
          <div className="bg-[#F7F9FB] rounded-2xl p-8 inline-flex flex-col items-center shadow-sm border border-[#E5E7EB]">
            <a href="mailto:Enquiry@mysageintl.ae" className="text-2xl font-bold text-[#4B3FA6] hover:underline mb-6 block">
              Enquiry@mysageintl.ae
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-[#1E7F5C] text-white font-semibold hover:bg-[#166347] transition-colors shadow-md"
            >
              Send Inquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
