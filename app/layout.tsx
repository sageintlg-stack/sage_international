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
  metadataBase: new URL('https://www.mysageintl.ae'),
  title: {
    default: 'SAGE International | Workforce Solutions for Energy Sector Projects',
    template: '%s | SAGE International',
  },
  description:
    'SAGE International delivers overseas workforce recruitment, workforce mobilisation, and regulatory compliance for energy sector and government projects. UAE-based.',
  keywords: [
    'Workforce Solutions UAE', 'Energy Sector Staffing', 'Overseas Workforce Recruitment',
    'Workforce Mobilisation UAE', 'Oil Gas Workforce UAE', 'Government Project Staffing',
    'SAGE International UAE', 'Industrial Workforce Provider', 'Regulatory Compliance Staffing',
    'www.mysageintl.ae', 'Workforce Deployment UAE', 'Contract Workforce Middle East',
  ],
  authors: [{ name: 'SAGE International General Trading L.L.C', url: 'https://www.mysageintl.ae' }],
  creator: 'SAGE International General Trading L.L.C',
  publisher: 'SAGE International General Trading L.L.C',
  category: 'Workforce Solutions & Energy Sector Staffing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_AE',
    url: 'https://www.mysageintl.ae/',
    title: 'SAGE International | Workforce Solutions for Energy Sector Projects',
    description: 'Overseas workforce recruitment, mobilisation, and regulatory compliance for energy and government sector projects.',
    siteName: 'SAGE International',
    images: [
      {
        url: 'https://www.mysageintl.ae/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'SAGE International — Workforce Solutions for Energy Sector Projects',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAGE International | Workforce Solutions for Energy Sector Projects',
    description: 'Overseas workforce recruitment, mobilisation, and regulatory compliance for energy and government projects.',
    images: ['https://www.mysageintl.ae/images/hero-bg.jpg'],
    site: '@SAGEIntlg',
    creator: '@SAGEIntlg',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  other: {
    // GEO: UAE — Dubai
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai, United Arab Emirates',
    'geo.position': '25.2048;55.2708',
    'ICBM': '25.2048, 55.2708',
    // GEO: Kuwait City
    'geo.region.kw': 'KW-KU',
    'geo.placename.kw': 'Kuwait City, Kuwait',
    'geo.position.kw': '29.3759;47.9774',
    // Verification placeholders — add real tokens once submitted
    // 'google-site-verification': 'YOUR_GOOGLE_VERIFICATION_TOKEN',
    // 'msvalidate.01': 'YOUR_BING_VERIFICATION_TOKEN',
    'rating': 'general',
    'revisit-after': '7 days',
    'language': 'English',
    'coverage': 'Worldwide',
    'distribution': 'global',
    'target': 'all',
  },
}

// ─── Root JSON-LD Schema ────────────────────────────────────────────────────
const rootSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── Organization (global) ──
    {
      '@type': ['Organization', 'Corporation'],
      '@id': 'https://www.mysageintl.ae/#organization',
      'name': 'SAGE International General Trading L.L.C',
      'alternateName': ['SAGE International', 'SAGE Intlg'],
      'url': 'https://www.mysageintl.ae',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.mysageintl.ae/images/sage-logo.png',
        'width': 400,
        'height': 120,
      },
      'image': 'https://www.mysageintl.ae/images/hero-bg.jpg',
      'description': 'SAGE International delivers overseas workforce recruitment, workforce mobilisation, and regulatory compliance for energy sector and government projects. UAE-based.',
      'foundingDate': '2018-06-10',
      'numberOfEmployees': { '@type': 'QuantitativeValue', 'value': '500+' },
      'areaServed': [
        { '@type': 'Country', 'name': 'United Arab Emirates', '@id': 'https://www.wikidata.org/wiki/Q878' },
        { '@type': 'AdministrativeArea', 'name': 'Middle East' },
      ],
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Al Muteena',
        'addressLocality': 'Dubai',
        'addressRegion': 'Dubai',
        'addressCountry': 'AE',
        'postalCode': '00000',
      },
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+971-58-585-5044',
          'contactType': 'customer service',
          'email': 'info@mysageintl.ae',
          'areaServed': ['AE'],
          'availableLanguage': ['English', 'Arabic'],
        },
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Workforce Solutions',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Overseas Workforce Recruitment', 'url': 'https://www.mysageintl.ae/services#overseas-recruitment' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Workforce Mobilisation & Deployment', 'url': 'https://www.mysageintl.ae/services#mobilisation-deployment' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Regulatory & Documentation Management', 'url': 'https://www.mysageintl.ae/services#regulatory-documentation' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Workforce Advisory Support', 'url': 'https://www.mysageintl.ae/services#workforce-advisory' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Documentation & Compliance Support', 'url': 'https://www.mysageintl.ae/services#compliance-support' } },
        ],
      },
      'knowsAbout': [
        'Workforce Recruitment', 'Workforce Mobilisation', 'Regulatory Compliance UAE',
        'Oil & Gas Workforce', 'Government Project Staffing', 'Document Verification',
        'Energy Sector Workforce', 'Overseas Recruitment UAE',
      ],
      'slogan': 'Workforce Solutions for Energy Sector Projects.',
      'sameAs': [
        'https://www.linkedin.com/company/sage-international',
      ],
    },

    // ── LocalBusiness — Dubai ──
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.mysageintl.ae/#localbusiness-dubai',
      'name': 'SAGE International — Dubai',
      'parentOrganization': { '@id': 'https://www.mysageintl.ae/#organization' },
      'url': 'https://www.mysageintl.ae',
      'telephone': '+971-58-585-5044',
      'email': 'info@mysageintl.ae',
      'priceRange': '$$',
      'currenciesAccepted': 'AED',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '18:00',
        },
      ],
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Al Muteena',
        'addressLocality': 'Dubai',
        'addressRegion': 'Dubai',
        'addressCountry': 'AE',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.2048,
        'longitude': 55.2708,
      },
      'hasMap': 'https://maps.google.com/?q=SAGE+International+Dubai',
      'image': 'https://www.mysageintl.ae/images/hero-bg.jpg',
      'sameAs': ['https://www.linkedin.com/company/sage-international'],
    },

    // ── WebSite ──
    {
      '@type': 'WebSite',
      '@id': 'https://www.mysageintl.ae/#website',
      'url': 'https://www.mysageintl.ae',
      'name': 'SAGE International',
      'description': 'Workforce Solutions for Energy Sector and Government Projects — UAE',
      'publisher': { '@id': 'https://www.mysageintl.ae/#organization' },
      'inLanguage': ['en-US', 'ar'],
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': 'https://www.mysageintl.ae/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', 'h2', '.speakable'],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="SAGE International General Trading L.L.C" />
        <meta name="theme-color" content="#1E7F5C" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Canonical & Alternate language */}
        <link rel="alternate" hrefLang="en" href="https://www.mysageintl.ae" />
        <link rel="alternate" hrefLang="ar" href="https://www.mysageintl.ae" />
        <link rel="alternate" hrefLang="x-default" href="https://www.mysageintl.ae" />

        {/* Root JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`} suppressHydrationWarning>
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
