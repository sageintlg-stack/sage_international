import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Project Experience | SAGE International',
  description: 'A track record of successful workforce mobilisation and deployment across the energy and government sectors.',
}

const projectExperience = [
  {
    project: 'KOC Workforce Deployment',
    client: 'Kuwait Oil Company',
    description: 'Deployment of skilled workforce for upstream operations.',
  },
  {
    project: 'SLB Field Operations Staffing',
    client: 'SLB (Schlumberger)',
    description: 'Mobilisation of technical field personnel for energy projects.',
  },
  {
    project: 'Baker Hughes Project Staffing',
    client: 'Baker Hughes',
    description: 'Recruitment and deployment for oilfield services projects.',
  },
  {
    project: 'Al Mansoori Workforce Supply',
    client: 'Al Mansoori Petroleum Services',
    description: 'Multi-discipline workforce supply for petro-services contracts.',
  },
  {
    project: 'Government Project Manpower',
    client: 'UAE Federal Authority',
    description: 'Regulated workforce mobilisation for government infrastructure.',
  },
  {
    project: 'Energy Sector Compliance Deployment',
    client: 'Regional Energy Operator',
    description: 'Regulatory documentation & mobilisation for energy projects.',
  },
]

export default function ExperiencePage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-[#0F172A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Project Experience
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A track record of successful workforce mobilisation and deployment across the energy and government sectors.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectExperience.map((item, i) => (
              <div
                key={i}
                className="sage-card p-8 group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white border-l-4 border-[#1E7F5C] rounded-2xl shadow-sm"
              >
                <h2 className="text-lg font-bold text-[#1A1A1A] mb-1">{item.project}</h2>
                <p className="text-xs font-semibold text-[#4B3FA6] uppercase tracking-wide mb-3">
                  {item.client}
                </p>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Need workforce for your next project?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-[#1E7F5C] text-white font-bold hover:bg-[#166347] transition-all"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
