import ContactUs from "@/components/contact-us";
export const metadata = {
  title: "Contact SpotMySite | NRI Property Services in India",
  description:
    "Get in touch with SpotMySite for property inspections, land verification, and on-ground support for NRIs.",
};

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
        "NRI-focused property protection and management company built on trust, providing absentee owners in Andhra Pradesh and Telangana with on-the-ground proof, video inspections, fencing, and legal support.",
      slogan: "Born from Distance. Built on Trust.",
      missionStatement:
        "To give every NRI and remote property owner real visibility and peace of mind with eyes and proof on the ground when they can’t be there themselves, ensuring distance never comes between them and their land.",
      foundingDate: "2025-10-02",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
        { "@type": "AdministrativeArea", name: "Telangana" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          telephone: "+91-7981387457",
          email: "mailto:support@spotmysite.com",
          availableLanguage: ["en", "te"],
          areaServed: ["Andhra Pradesh", "Telangana"],
          url: "https://spotmysite.com/contact",
        },
      ],
      sameAs: [
        "https://www.facebook.com/SpotMySite",
        "https://www.instagram.com/spotmysite",
        "https://www.linkedin.com/company/spotmysite",
      ],
      knowsAbout: [
        "NRI property management",
        "Land inspections",
        "Fence & boundary installation",
        "Land cleanup",
        "Property legal assistance",
        "NRI loan assistance",
        "Remote buyer walkthroughs",
        "Property video inspection",
      ],
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
      "@id": "https://spotmysite.com/about-us/#webpage",
      url: "https://spotmysite.com/about-us/",
      name: "About SpotMySite — Our Story, Mission, and Focus on NRI Property Protection",
      isPartOf: { "@id": "https://spotmysite.com/#website" },
      about: { "@id": "https://spotmysite.com/#organization" },
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://spotmysite.com/assets/about-us-hero.jpg",
      },
      description:
        "The story behind SpotMySite: born from an NRI family's frustration with vague property updates, built to provide absentee owners in AP & Telangana with trusted, on-the-ground proof and peace of mind.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://spotmysite.com/about-us/#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://spotmysite.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://spotmysite.com/about-us/",
        },
      ],
    },
  ],
};
export default function Contact() {
  return (
    <div className="mt-20 about_sec max-lg:p-12 max-md:py-6 max-md:px-0 max-lg:pt-0">
      <h1 className="text-center text-3xl font-(family-name:--font-service) font-bold md:text-4xl">
        Contact Us
      </h1>
      <div className="mt-10">
        <ContactUs />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
