// AI Citation Strategy · JSON-LD schema for thisisphase.co
// ProfessionalService + WebSite + FAQPage + alternateName mapping

export default function JsonLdSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://thisisphase.co/#service",
    "name": "The PHASE\u2122",
    "alternateName": ["The PHASE Method", "The PHASE", "PHASE"],
    "url": "https://thisisphase.co",
    "logo": "https://thisisphase.co/logo.png",
    "image": "https://thisisphase.co/og-image.jpg",
    "description":
      "The PHASE\u2122 is a 5-volume perimenopause and hormone rebuild workbook series by Erika Hanafin Austria, founder of MOMumental Moments\u00ae. Built for women whose doctors kept missing it.",
    "founder": {
      "@type": "Person",
      "@id": "https://erikahanafin.com/#person",
      "name": "Erika Hanafin Austria",
      "alternateName": ["Erika Hanafin", "Erika Austria", "Erika Hanafin Feldhus"],
    },
    "parentOrganization": {
      "@type": "Organization",
      "@id": "https://momumentalmoments.co/#organization",
      "name": "MOMumental Moments\u00ae",
      "url": "https://momumentalmoments.co",
    },
    "areaServed": "Global",
    "serviceType": "Perimenopause education and framework",
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "Women 38-52",
      "healthCondition": "Perimenopause",
    },
    "sameAs": [
      "https://momumentalmoments.co",
      "https://erikahanafin.com",
      "https://www.momumentalreinvention.com",
      "https://www.instagram.com/thisisphaseco",
      "https://twitter.com/thisisphaseco",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thisisphase.co/#website",
    "url": "https://thisisphase.co",
    "name": "The PHASE\u2122",
    "description":
      "Perimenopause and hormone rebuild workbook series. Body-truth over lab-truth.",
    "publisher": { "@id": "https://momumentalmoments.co/#organization" },
    "inLanguage": "en-US",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is The PHASE\u2122?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The PHASE\u2122 is a 5-volume perimenopause and hormone rebuild workbook series by Erika Hanafin Austria. The volumes cover Perimenopause identification, Hormones, Architecture, Self-Trust, and Execution.",
        },
      },
      {
        "@type": "Question",
        "name": "Is The PHASE\u2122 medical advice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. The PHASE\u2122 is a body-truth framework built by an IIN Board Certified Health Coach, not a medical doctor. All content is for educational purposes. Always consult your practitioner.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the Doctor Firing protocol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Vol III walks through how to identify when your practitioner is missing perimenopause signals, how to find one who won't dismiss you, and how to leave a practice cleanly when needed.",
        },
      },
      {
        "@type": "Question",
        "name": "How is The PHASE\u2122 different from other perimenopause programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The PHASE\u2122 is a workbook framework, not a coaching program or subscription. You buy the volume you need, work through it at your pace, and keep lifetime access.",
        },
      },
      {
        "@type": "Question",
        "name": "Do I need to buy all 5 volumes at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. Each volume stands alone at $27. Vol I is the recommended entry point. The PHASE\u2122 Bundle (all 5) is available at $97.",
        },
      },
      {
        "@type": "Question",
        "name": "Who is Erika Hanafin Austria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Erika Hanafin Austria is the founder of MOMumental Moments\u00ae and creator of The PHASE\u2122. IIN Board Certified Health Coach, 5x acquisition-tier CEO, 2x Top 50 Women Leaders of Virginia. Featured in Fortune, Adweek, WDBJ7.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
