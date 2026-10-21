/* Shared JSON-LD builders — inlined at build time into static pages */
export const SITE = 'https://www.zendtpayments.com';

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.zendtpayments.com/#organization",
    "name": "Zendt",
    "alternateName": "Zendt Payments",
    "legalName": "Zendt Payments Private Limited",
    "url": "https://www.zendtpayments.com/",
    "logo": "https://www.zendtpayments.com/logo-full.png",
    "description": "Zendt is the financial OS for Indian freelancers. It lets freelancers invoice clients, receive international and domestic payments and manage their money, all in one place.",
    "slogan": "The financial OS for Indian freelancers",
    "foundingDate": "2024-12",
    "founder": {
      "@id": "https://www.zendtpayments.com/#alen-thomas"
    },
    "employee": [
      {
        "@id": "https://www.zendtpayments.com/#alen-thomas"
      },
      {
        "@id": "https://www.zendtpayments.com/#akshay-k"
      }
    ],
    "identifier": [
      {
        "@type": "PropertyValue",
        "propertyID": "CIN",
        "value": "U62013KL2025PTC093716"
      },
      {
        "@type": "PropertyValue",
        "propertyID": "DPIIT",
        "value": "DIPP211145"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rajagiri Orbiit, Infopark Phase 1, Kakkanad",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682042",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "email": "contact@zendtpayments.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "hello@zendtpayments.com",
        "telephone": "+91-73560-04147",
        "areaServed": "IN",
        "availableLanguage": [
          "English",
          "Malayalam",
          "Hindi"
        ]
      },
      {
        "@type": "ContactPoint",
        "contactType": "general enquiries",
        "email": "contact@zendtpayments.com",
        "areaServed": "IN"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/zendtpayments",
      "https://www.instagram.com/zendtpayments",
      "https://x.com/zendtpayments",
      "https://apps.apple.com/app/id6775251573",
      "https://play.google.com/store/apps/details?id=com.zendt.app",
      "https://startups.startupmission.in/startups/ZD5PG",
      "https://www.f6s.com/company/zendt-payments"
    ]
  };
}

export function founderSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://www.zendtpayments.com/#alen-thomas",
      "name": "Alen Thomas",
      "jobTitle": "Founder and CEO",
      "description": "Alen Thomas is the Founder and CEO of Zendt, the financial OS for freelancers across India.",
      "worksFor": {
        "@id": "https://www.zendtpayments.com/#organization"
      },
      "homeLocation": {
        "@type": "Place",
        "name": "Kochi, Kerala, India"
      },
      "url": "https://www.zendtpayments.com/about",
      "sameAs": [
        "https://www.linkedin.com/in/alenthomass/",
        "https://x.com/AlenThomasss"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://www.zendtpayments.com/#akshay-k",
      "name": "Akshay K",
      "jobTitle": "Co-founder and CTO",
      "worksFor": {
        "@id": "https://www.zendtpayments.com/#organization"
      },
      "sameAs": [
        "https://www.linkedin.com/in/akshayk1810/"
      ]
    }
  ];
}

export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    })),
  };
}

export function articleSchema({ title, description, url, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: 'Alen Thomas',
      jobTitle: 'Founder',
      worksFor: { '@id': `${SITE}/#organization` },
    },
    publisher: { '@id': `${SITE}/#organization` },
    inLanguage: 'en-IN',
  };
}
