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

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center animate-fade-in-up">
        <div className="absolute inset-0 z-0">
          {/* Enhanced Dark Gradient Overlay */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)' }}
          />
          <Image
            src="/images/hero-bg.jpg"
            alt="Professional workforce and industrial sectors"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-20 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
              Professional Workforce & HR Solutions for Global Industries
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12">
              SAGE International provides manpower outsourcing, staffing, HR advisory, and document verification services for companies across multiple industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-md bg-[#1E7F5C] text-white font-bold hover:bg-[#166347] hover:-translate-y-1 transition-all shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center items-center px-8 py-4 rounded-md bg-white text-[#1A1A1A] font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg"
              >
                Our Services
              </Link>
            </div>
            
            {/* Trust Indicator Row */}
            <div className="pt-8 border-t border-white/20 mt-8">
              <p className="text-sm md:text-base font-medium text-gray-300">
                Trusted by leading companies including <strong className="text-white">SLB</strong>, <strong className="text-white">KOC</strong>, <strong className="text-white">Baker Hughes</strong>, and <strong className="text-white">Al Mansoori</strong>.
              </p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E5E7EB] border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <ClientLogo name="Schlumberger" abbr="SLB" src="/images/clients/slb.png" />
            <ClientLogo name="Kuwait Oil" abbr="KOC" src="/images/clients/koc.png" />
            <ClientLogo name="Baker Hughes" abbr="Baker Hughes" src="/images/clients/baker_hughes.png" />
            <ClientLogo name="Al Mansoori" abbr="Al Mansoori" src="/images/clients/al_mansoori.png" />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">Why Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Why Companies Choose SAGE</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="sage-card p-8 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-[#1E7F5C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E7F5C] transition-colors duration-300">
                <Briefcase className="text-[#1E7F5C] group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Industry Expertise</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Deep understanding of operational needs across Energy, IT, Healthcare, and Trading.
              </p>
            </div>
            
            <div className="sage-card p-8 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-[#4B3FA6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4B3FA6] transition-colors duration-300">
                <Users className="text-[#4B3FA6] group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Reliable Workforce</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Scalable and thoroughly vetted professionals deployed ready for global projects.
              </p>
            </div>
            
            <div className="sage-card p-8 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-[#1E7F5C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E7F5C] transition-colors duration-300">
                <FileCheck className="text-[#1E7F5C] group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Verified Documents</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Rigorous verifications and attestations ensuring zero risk of credential fraud.
              </p>
            </div>
            
            <div className="sage-card p-8 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-[#4B3FA6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4B3FA6] transition-colors duration-300">
                <Zap className="text-[#4B3FA6] group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">Fast Recruitment</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Streamlined processes ensuring swift mobilization from onboarding to deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#4B3FA6] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Looking for Reliable Workforce Solutions?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with SAGE International to connect with skilled professionals and streamline your workforce operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center px-10 py-4 rounded-md bg-[#1E7F5C] text-white font-bold text-lg hover:bg-[#166347] hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── CONTACT PREVIEW ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E7F5C]/10 mb-6">
            <ClipboardList className="text-[#1E7F5C]" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Ready to Get Started?</h2>
          <p className="text-[#6B7280] text-lg mb-10">
            Reach out to our dedicated team via email to discuss your requirements.
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Visit Us</p>
                  <p className="text-lg font-medium text-[#1A1A1A]">
                    SAGE International Offices<br/>
                    <span className="text-sm text-gray-500">Global Operations Center</span>
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
