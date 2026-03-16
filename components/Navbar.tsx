'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, ChevronDown, Users, Briefcase, FileCheck, Building, TrendingUp } from 'lucide-react'

const serviceItems = [
  {
    label: 'Manpower Outsourcing',
    href: '/services#manpower-outsourcing',
    icon: Users,
    description: 'Comprehensive manpower solutions to execute projects efficiently.',
  },
  {
    label: 'Contract Staffing',
    href: '/services#contract-staffing',
    icon: Building,
    description: 'Flexible staffing connecting you with top-tier professionals.',
  },
  {
    label: 'Management Consultant',
    href: '/services#management-consulting',
    icon: TrendingUp,
    description: 'Expert advisory services to optimize processes and drive growth.',
  },
  {
    label: 'Document Verification',
    href: '/services#document-verification',
    icon: FileCheck,
    description: 'Reliable document verification and attestations for operations.',
  },
  {
    label: 'HR Advisory',
    href: '/services#hr-advisory',
    icon: Briefcase,
    description: 'Strategic HR consulting for workforce management and policies.',
  },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 150) // 150ms delay prevents accidental closes
  }

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isServicesActive = pathname === '/services' || pathname.startsWith('/services')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/sage-logo.png"
              alt="SAGE International"
              width={200}
              height={64}
              priority
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#1E7F5C] ${
                pathname === '/' ? 'text-[#1E7F5C]' : 'text-[#1A1A1A]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#1E7F5C] ${
                pathname === '/about' ? 'text-[#1E7F5C]' : 'text-[#1A1A1A]'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-[#1E7F5C] py-2 ${
                  isServicesActive ? 'text-[#1E7F5C]' : 'text-[#1A1A1A]'
                }`}
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Panel Outer Container (Acts as invisible bridge) */}
              <div
                className={`absolute top-[100%] left-1/2 -translate-x-1/2 pt-6 w-[22rem] transition-all duration-200 z-50 before:absolute before:-top-6 before:left-0 before:w-full before:h-8 before:bg-transparent ${
                  servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                role="menu"
              >
                {/* Visual Dropdown Card */}
                <div className="bg-white rounded-xl shadow-xl border border-[#E5E7EB] overflow-hidden relative">
                  {/* Arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#E5E7EB] rotate-45 z-10" />

                  <div className="relative z-20 p-2">
                  {serviceItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F0FAF5] group transition-colors duration-150"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#F0FAF5] group-hover:bg-[#1E7F5C] flex items-center justify-center transition-colors duration-150">
                          <Icon size={16} className="text-[#1E7F5C] group-hover:text-white transition-colors duration-150" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#1E7F5C] transition-colors duration-150">
                            {item.label}
                          </div>
                          <div className="text-xs text-[#6B7280] leading-relaxed mt-0.5">{item.description}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                  <div className="border-t border-[#E5E7EB] px-4 py-3 bg-[#F7F9FB]">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-[#1E7F5C] hover:text-[#166347] transition-colors duration-150 block text-center"
                    >
                      View all services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#1E7F5C] ${
                  pathname === link.href ? 'text-[#1E7F5C]' : 'text-[#1A1A1A]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-[#1E7F5C] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#166347] transition-colors duration-200"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#1E7F5C] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-[#E5E7EB]`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1">
          <Link
            href="/"
            className={`text-sm font-medium py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-[#F7F9FB] hover:text-[#1E7F5C] ${
              pathname === '/' ? 'text-[#1E7F5C] bg-[#F0FAF5]' : 'text-[#1A1A1A]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-[#F7F9FB] hover:text-[#1E7F5C] ${
              pathname === '/about' ? 'text-[#1E7F5C] bg-[#F0FAF5]' : 'text-[#1A1A1A]'
            }`}
          >
            About
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between text-sm font-medium py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-[#F7F9FB] hover:text-[#1E7F5C] ${
                isServicesActive ? 'text-[#1E7F5C] bg-[#F0FAF5]' : 'text-[#1A1A1A]'
              }`}
            >
              Services
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-[#E5E7EB] pl-3">
                {serviceItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 text-sm py-2 px-2 rounded-lg text-[#6B7280] hover:text-[#1E7F5C] hover:bg-[#F0FAF5] transition-colors duration-150"
                    >
                      <Icon size={14} />
                      {item.label}
                    </Link>
                  )
                })}
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#1E7F5C] py-2 px-2 hover:underline"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-[#F7F9FB] hover:text-[#1E7F5C] ${
                pathname === link.href ? 'text-[#1E7F5C] bg-[#F0FAF5]' : 'text-[#1A1A1A]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mt-2 bg-[#1E7F5C] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center hover:bg-[#166347] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
