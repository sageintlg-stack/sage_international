'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  heading?: string
  subheading?: string
  items: FaqItem[]
  className?: string
}

export function FaqSection({
  heading = 'Frequently Asked Questions',
  subheading,
  items,
  className = '',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      className={`py-24 bg-white ${className}`}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-bold text-[#1E7F5C] tracking-widest uppercase mb-3">
            FAQ
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            {heading}
          </h3>
          {subheading && (
            <p className="text-[#6B7280] mt-4 text-lg">{subheading}</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#F7F9FB] transition-colors group"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span
                  className="font-bold text-[#1A1A1A] text-base md:text-lg group-hover:text-[#1E7F5C] transition-colors"
                  itemProp="name"
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#1E7F5C] shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p
                  className="px-6 pb-6 text-[#6B7280] leading-relaxed text-base border-t border-[#E5E7EB] pt-4"
                  itemProp="text"
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
