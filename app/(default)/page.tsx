export const metadata = {
  title: "Property Management Services for NRIs in AP & TG SpotMySite",
  description:
    "Hey NRIs and absentee owners, manage your property from anywhere. SpotMySite provides trusted on-ground property management services in Andhra and Telangana.",
};

import MainBanner from "@/components/main-banner";
import ServicesComponent from "@/components/services-home";
import ContactUs from "@/components/contact-us";
import Steps from "@/components/steps";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://spotmysite.com/#organization",
      name: "SpotMySite",
      url: "https://spotmysite.com/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://spotmysite.com/#logo",
        url: "https://spotmysite.com/assets/logo.png",
      },
      image: { "@id": "https://spotmysite.com/#logo" },
      description:
        "NRI-focused property verification and on-ground services in Andhra Pradesh & Telangana: land status checks, video inspections, fencing, legal assistance, and more.",
      slogan: "Proof, Perspective, Peace of Mind",
      foundingDate: "2025-10-02",
      email: "mailto:contact@spotmysite.com",
      telephone: "+91-7981387457",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
        { "@type": "AdministrativeArea", name: "Telangana" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          email: "mailto:contact@spotmysite.com",
          telephone: "+91-7981387457",
          availableLanguage: ["en"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/spotmysite",
        "https://www.instagram.com/spotmysite",
        "https://www.facebook.com/SpotMySite",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": "https://spotmysite.com/#service-catalog",
        name: "SpotMySite Services Catalog",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Property Video Inspection",
              url: "https://spotmysite.com/services/property-video-inspection",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Land Status Check",
              url: "https://spotmysite.com/land-status-check",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Land Cleanup & Vegetation Removal",
              url: "https://spotmysite.com/services/land-cleanup",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fence & Boundary Installation",
              url: "https://spotmysite.com/services/fence-boundary-installation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Property Buy & Sell Legal Assistance",
              url: "https://spotmysite.com/services/property-legal-assistance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "NRI Loan Assistance",
              url: "https://spotmysite.com/services/nri-loan-assistance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Remote Buyer Walkthrough",
              url: "https://spotmysite.com/services/remote-buyer-walkthrough",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://spotmysite.com/#website",
      url: "https://spotmysite.com/",
      name: "SpotMySite",
      publisher: { "@id": "https://spotmysite.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://spotmysite.com/#homepage",
      url: "https://spotmysite.com/",
      name: "SpotMySite — Proof, Perspective, Peace of Mind",
      isPartOf: { "@id": "https://spotmysite.com/#website" },
      about: { "@id": "https://spotmysite.com/#organization" },
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://spotmysite.com/assets/hero-land-inspection.jpg",
      },
      description:
        "SpotMySite helps NRIs verify and manage property in Andhra Pradesh & Telangana with on-ground inspections, fencing, legal assistance, and more.",
    },
  ],
};
export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <MainBanner />
        <ServicesComponent />
        {/* <Steps /> */}
        <ContactUs />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
