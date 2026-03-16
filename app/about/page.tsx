import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Award, Target, Eye, Users, FileCheck, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#0F172A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
            alt="About SAGE International"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#2FAF7C] text-sm font-bold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Who We Are</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A trusted recruitment and HR partner empowering organizations with professional workforce solutions.
          </p>
        </div>
      </section>

      {/* ── Company History ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-3">Company History</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Established in 2018</h3>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                SAGE International was established on <strong>10 June 2018</strong> to provide professional workforce solutions, HR advisory services, and document verification for organizations across multiple industries.
              </p>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                Over the years, we have built a reputation for excellence, reliability, and precision, helping leading corporate clients optimize their human resources and scale their operations efficiently.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-[#1E7F5C] pl-4">
                  <div className="text-3xl font-black text-[#1A1A1A]">10+</div>
                  <div className="text-sm text-[#6B7280] font-medium mt-1">Sectors Covered</div>
                </div>
                <div className="border-l-4 border-[#4B3FA6] pl-4">
                  <div className="text-3xl font-black text-[#1A1A1A]">100%</div>
                  <div className="text-sm text-[#6B7280] font-medium mt-1">Commitment</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="Corporate Office"
                fill
                className="object-cover"
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
                To bridge the gap between human potential and organizational needs by delivering tailored recruitment, strategic HR consulting, and compliant workforce solutions that drive business success.
              </p>
            </div>
            <div className="sage-card p-10 mt-0">
              <div className="w-16 h-16 rounded-2xl bg-[#4B3FA6]/10 flex items-center justify-center mb-6">
                <Eye size={32} className="text-[#4B3FA6]" />
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">Our Vision</h4>
              <p className="text-[#6B7280] leading-relaxed text-lg">
                To be the most trusted and preferred HR partner globally, recognized for our unwavering dedication to quality, integrity, and the professional growth of the individuals and enterprises we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries Served ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1E7F5C] uppercase tracking-widest mb-3">Broad Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Industries Served</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Oil & Gas', 'Healthcare', 'IT & Business Solutions', 'Hospitality', 'Trading'].map((industry) => (
              <div key={industry} className="sage-card p-6 flex items-center gap-4">
                <CheckCircle className="text-[#1E7F5C]" size={24} />
                <span className="text-lg font-bold text-[#1A1A1A]">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call To Action ── */}
      <section className="py-24 bg-[#1A1A1A] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with SAGE International
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Let us handle your HR and recruitment challenges while you focus on scaling your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#1E7F5C] text-white font-bold hover:bg-[#166347] transition-colors shadow-lg"
          >
            Contact Us Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
