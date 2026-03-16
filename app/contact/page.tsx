'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Mail, Phone, CheckCircle, Send } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#0F172A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
            alt="Contact SAGE International"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#2FAF7C] text-sm font-bold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out to our team of experts to discuss how we can assist with your workforce and HR requirements.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* ── Contact Info ── */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="sage-card p-8 bg-white flex flex-col gap-8 h-full">
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Our Office</h2>
                  <p className="text-[#6B7280] mb-6 border-b pb-6 border-[#E5E7EB]">
                    Main Headquarters & Operations.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E7F5C]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#1E7F5C]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1A1A] mb-1">Address</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      DO3, BN Complex<br />
                      Al Muteena<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E7F5C]/10 flex items-center justify-center shrink-0">
                    <Mail className="text-[#1E7F5C]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1A1A] mb-1">Email</h4>
                    <a href="mailto:Info@sageintlg.com" className="text-[#1E7F5C] hover:underline text-sm font-medium">
                      Info@sageintlg.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E7F5C]/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[#1E7F5C]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1A1A] mb-1">Phone</h4>
                    <p className="text-[#6B7280] text-sm">
                      Placeholder for now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Contact Form ── */}
            <div className="lg:col-span-2">
              <div className="sage-card p-8 lg:p-12 bg-white h-full">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-[#1E7F5C]/10 flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-[#1E7F5C]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">Message Sent Successfully!</h3>
                    <p className="text-[#6B7280] text-lg max-w-md mx-auto mb-8">
                      Thank you for contacting SAGE International. We have received your inquiry and will revert to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setForm({ name: '', email: '', phone: '', company: '', message: '' })
                      }}
                      className="text-[#1E7F5C] font-semibold hover:underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Send us a Message</h2>
                    <p className="text-[#6B7280] mb-8">
                      Fill out the form below with your details and query. We're here to answer any questions you may have.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#1A1A1A]">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#1E7F5C] focus:border-transparent transition-all bg-[#F7F9FB]"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#1A1A1A]">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#1E7F5C] focus:border-transparent transition-all bg-[#F7F9FB]"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#1A1A1A]">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#1E7F5C] focus:border-transparent transition-all bg-[#F7F9FB]"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#1A1A1A]">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            required
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#1E7F5C] focus:border-transparent transition-all bg-[#F7F9FB]"
                            placeholder="Your Company LLC"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1A1A1A]">Message</label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#1E7F5C] focus:border-transparent transition-all bg-[#F7F9FB] resize-none"
                          placeholder="How can we help you today?"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E7F5C] text-white font-bold rounded-md hover:bg-[#166347] transition-colors shadow-md"
                      >
                        <Send size={18} /> Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
