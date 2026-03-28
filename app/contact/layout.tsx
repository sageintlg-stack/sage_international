import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact SAGE International | HR & Manpower Outsourcing — Dubai UAE & Kuwait',
  description: 'Contact SAGE International for manpower outsourcing, contract staffing, HR advisory, and document verification in Dubai UAE and Kuwait. Email: Info@sageintlg.com.',
  keywords: [
    'Contact SAGE International', 'HR Agency Dubai Contact', 'Recruitment Agency Kuwait Contact',
    'Manpower Agency Email UAE', 'HR Consulting Inquiry Dubai', 'Staffing Agency Contact UAE',
    'Manpower Company Contact Kuwait', 'SAGE International Email', 'HR Agency Phone UAE',
    'Outsourcing Company Contact Dubai',
  ],
  alternates: {
    canonical: 'https://sageintlg.com/contact',
  },
  openGraph: {
    title: 'Contact SAGE International | HR & Workforce Solutions — UAE & Kuwait',
    description: 'Get in touch with SAGE International for manpower outsourcing, HR advisory, contract staffing, and document verification in Dubai UAE and Kuwait.',
    url: 'https://sageintlg.com/contact',
    images: [{ url: 'https://sageintlg.com/images/hero-bg.jpg', width: 1200, height: 630, alt: 'Contact SAGE International UAE Kuwait' }],
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://sageintlg.com/contact#webpage',
      'url': 'https://sageintlg.com/contact',
      'name': 'Contact SAGE International | HR & Manpower Outsourcing — Dubai UAE & Kuwait',
      'description': 'Contact SAGE International General Trading for manpower outsourcing, HR advisory, contract staffing, and document verification in UAE and Kuwait.',
      'isPartOf': { '@id': 'https://sageintlg.com/#website' },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://sageintlg.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Contact', 'item': 'https://sageintlg.com/contact' },
        ],
      },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', '.speakable'],
      },
    },
    // Dubai Office
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sageintlg.com/contact#dubai',
      'name': 'SAGE International — Dubai Office',
      'parentOrganization': { '@id': 'https://sageintlg.com/#organization' },
      'telephone': '+971-XX-XXXXXXX',
      'email': 'Info@sageintlg.com',
      'url': 'https://sageintlg.com',
      'priceRange': '$$',
      'currenciesAccepted': 'AED',
      'paymentAccepted': 'Bank Transfer, Cheque',
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
        'postalCode': '00000',
        'addressCountry': 'AE',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.2048,
        'longitude': 55.2708,
      },
      'hasMap': 'https://maps.google.com/?q=SAGE+International+Dubai+UAE',
      'image': 'https://sageintlg.com/images/hero-bg.jpg',
      'sameAs': ['https://www.linkedin.com/company/sage-international'],
    },
    // Kuwait Office
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sageintlg.com/contact#kuwait',
      'name': 'SAGE International — Kuwait Office',
      'parentOrganization': { '@id': 'https://sageintlg.com/#organization' },
      'telephone': '+965-XXXXXXXX',
      'email': 'Info@sageintlg.com',
      'url': 'https://sageintlg.com',
      'priceRange': '$$',
      'currenciesAccepted': 'KWD',
      'paymentAccepted': 'Bank Transfer',
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
      'hasMap': 'https://maps.google.com/?q=SAGE+International+Kuwait+City',
      'image': 'https://sageintlg.com/images/hero-bg.jpg',
    },
  ],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  )
}
