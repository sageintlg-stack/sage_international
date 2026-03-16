import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SAGE International General Trading L.L.C | Recruitment & HR Solutions',
  description:
    'SAGE International General Trading L.L.C provides professional recruitment, HR advisory, and document verification services for leading energy and industrial companies in Kuwait.',
  keywords: 'recruitment, HR advisory, document verification, Kuwait, oil gas, SLB, KOC, Baker Hughes',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
