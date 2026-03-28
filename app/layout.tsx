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
  metadataBase: new URL('https://sageintlg.com'),
  title: {
    default: 'SAGE International | #1 Manpower Outsourcing & HR Agency in UAE & Kuwait',
    template: '%s | SAGE International',
  },
  description:
    'SAGE International is the leading manpower outsourcing, contract staffing, HR advisory, and document verification agency trusted by SLB, KOC, Baker Hughes in UAE and Kuwait.',
  keywords: [
    'Manpower Outsourcing UAE', 'HR Advisory Kuwait', 'Contract Staffing Dubai',
    'Document Verification Middle East', 'Recruitment Agency UAE', 'Energy Sector Staffing',
    'SAGE International General Trading', 'Best HR Company UAE', 'Workforce Solutions Kuwait',
    'Labour Supply Company Dubai', 'Staff Outsourcing UAE', 'HR Consulting Dubai',
    'Manpower Agency Kuwait', 'Staffing Company UAE', 'Executive Recruitment Middle East',
  ],
  authors: [{ name: 'SAGE International General Trading L.L.C', url: 'https://sageintlg.com' }],
  creator: 'SAGE International General Trading L.L.C',
  publisher: 'SAGE International General Trading L.L.C',
  category: 'Human Resources & Workforce Solutions',
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
    url: 'https://sageintlg.com/',
    title: 'SAGE International | #1 HR & Manpower Outsourcing Agency — UAE & Kuwait',
    description: 'Trusted by SLB, KOC, Baker Hughes. Professional manpower outsourcing, contract staffing, HR advisory, and document verification in UAE & Kuwait.',
    siteName: 'SAGE International',
    images: [
      {
        url: 'https://sageintlg.com/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'SAGE International — Professional Workforce Solutions UAE & Kuwait',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAGE International | Top HR & Manpower Outsourcing Agency — UAE & Kuwait',
    description: 'Expert manpower outsourcing, staffing, HR advisory, and document verification. Trusted by SLB, KOC, Baker Hughes.',
    images: ['https://sageintlg.com/images/hero-bg.jpg'],
    site: '@SAGEIntlg',
    creator: '@SAGEIntlg',
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
      '@id': 'https://sageintlg.com/#organization',
      'name': 'SAGE International General Trading L.L.C',
      'alternateName': ['SAGE International', 'SAGE Intlg'],
      'url': 'https://sageintlg.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://sageintlg.com/images/sage-logo.png',
        'width': 400,
        'height': 120,
      },
      'image': 'https://sageintlg.com/images/hero-bg.jpg',
      'description': 'SAGE International is a leading manpower outsourcing, HR advisory, contract staffing, and document verification company trusted by global energy giants including SLB, KOC, and Baker Hughes across UAE and Kuwait.',
      'foundingDate': '2018-06-10',
      'numberOfEmployees': { '@type': 'QuantitativeValue', 'value': '500+' },
      'areaServed': [
        { '@type': 'Country', 'name': 'United Arab Emirates', '@id': 'https://www.wikidata.org/wiki/Q878' },
        { '@type': 'Country', 'name': 'Kuwait', '@id': 'https://www.wikidata.org/wiki/Q817' },
        { '@type': 'Country', 'name': 'Saudi Arabia' },
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
          'telephone': '+971-XX-XXXXXXX',
          'contactType': 'customer service',
          'email': 'Info@sageintlg.com',
          'areaServed': ['AE', 'KW', 'SA'],
          'availableLanguage': ['English', 'Arabic'],
          'contactOption': 'TollFree',
        },
        {
          '@type': 'ContactPoint',
          'contactType': 'sales',
          'email': 'Info@sageintlg.com',
          'areaServed': ['AE', 'KW'],
          'availableLanguage': ['English', 'Arabic'],
        },
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'HR & Workforce Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Manpower Outsourcing', 'url': 'https://sageintlg.com/services#manpower-outsourcing' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Contract Staffing', 'url': 'https://sageintlg.com/services#contract-staffing' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Management Consulting', 'url': 'https://sageintlg.com/services#management-consulting' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Document Verification & Attestations', 'url': 'https://sageintlg.com/services#document-verification' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'HR Advisory Services', 'url': 'https://sageintlg.com/services#hr-advisory' } },
        ],
      },
      'knowsAbout': [
        'Manpower Outsourcing', 'HR Advisory', 'Contract Staffing', 'Document Verification',
        'Oil & Gas Staffing', 'Healthcare Recruitment', 'IT Staffing', 'Workforce Solutions',
        'Labour Law Compliance UAE', 'MOL Attestation', 'Employee Outsourcing',
      ],
      'slogan': 'Connecting Talent. Empowering Business.',
      'sameAs': [
        'https://www.linkedin.com/company/sage-international',
      ],
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '47',
        'bestRating': '5',
        'worstRating': '1',
      },
    },

    // ── LocalBusiness — Dubai ──
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sageintlg.com/#localbusiness-dubai',
      'name': 'SAGE International — Dubai Office',
      'parentOrganization': { '@id': 'https://sageintlg.com/#organization' },
      'url': 'https://sageintlg.com',
      'telephone': '+971-XX-XXXXXXX',
      'email': 'Info@sageintlg.com',
      'servesCuisine': null,
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
      'image': 'https://sageintlg.com/images/hero-bg.jpg',
      'sameAs': ['https://www.linkedin.com/company/sage-international'],
    },

    // ── LocalBusiness — Kuwait ──
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sageintlg.com/#localbusiness-kuwait',
      'name': 'SAGE International — Kuwait Office',
      'parentOrganization': { '@id': 'https://sageintlg.com/#organization' },
      'url': 'https://sageintlg.com/contact',
      'telephone': '+965-XXXXXXXX',
      'email': 'Info@sageintlg.com',
      'priceRange': '$$',
      'currenciesAccepted': 'KWD',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          'opens': '09:00',
          'closes': '17:00',
        },
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Kuwait City',
        'addressRegion': 'Al Asimah',
        'addressCountry': 'KW',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 29.3759,
        'longitude': 47.9774,
      },
      'hasMap': 'https://maps.google.com/?q=SAGE+International+Kuwait',
      'image': 'https://sageintlg.com/images/hero-bg.jpg',
    },

    // ── WebSite ──
    {
      '@type': 'WebSite',
      '@id': 'https://sageintlg.com/#website',
      'url': 'https://sageintlg.com',
      'name': 'SAGE International',
      'description': 'Leading Manpower Outsourcing & HR Solutions Company in UAE & Kuwait',
      'publisher': { '@id': 'https://sageintlg.com/#organization' },
      'inLanguage': ['en-US', 'ar'],
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': 'https://sageintlg.com/?s={search_term_string}',
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
        <link rel="alternate" hrefLang="en" href="https://sageintlg.com" />
        <link rel="alternate" hrefLang="ar" href="https://sageintlg.com" />
        <link rel="alternate" hrefLang="x-default" href="https://sageintlg.com" />

        {/* Root JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchema) }}
        />
      </head>
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
