export const metadata = {
  title: "Verified Property Listings in Andhra Pradesh & Telangana",
  description:
    "SpotMySite Marketplace offers verified property listings in Andhra Pradesh and Telangana with privacy-focused engagement. Buy or sell with confidence.",
};

// const schema = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "Organization",
//       "@id": "https://spotmysite.com/#organization",
//       name: "SpotMySite",
//       url: "https://spotmysite.com/",
//       logo: {
//         "@type": "ImageObject",
//         "@id": "https://spotmysite.com/#logo",
//         url: "https://spotmysite.com/assets/logo.png",
//       },
//       image: { "@id": "https://spotmysite.com/#logo" },
//       description:
//         "NRI-focused property protection and management company built on trust, providing absentee owners in Andhra Pradesh and Telangana with on-the-ground proof, video inspections, fencing, and legal support.",
//       slogan: "Born from Distance. Built on Trust.",
//       missionStatement:
//         "To give every NRI and remote property owner real visibility and peace of mind with eyes and proof on the ground when they can’t be there themselves, ensuring distance never comes between them and their land.",
//       foundingDate: "2025-10-02",
//       areaServed: [
//         { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
//         { "@type": "AdministrativeArea", name: "Telangana" },
//       ],
//       contactPoint: [
//         {
//           "@type": "ContactPoint",
//           contactType: "Customer Support",
//           telephone: "+91-7981387457",
//           email: "mailto:support@spotmysite.com",
//           availableLanguage: ["en", "te"],
//           areaServed: ["Andhra Pradesh", "Telangana"],
//           url: "https://spotmysite.com/contact",
//         },
//       ],
//       sameAs: [
//         "https://www.facebook.com/SpotMySite",
//         "https://www.instagram.com/spotmysite",
//         "https://www.linkedin.com/company/spotmysite",
//       ],
//       knowsAbout: [
//         "NRI property management",
//         "Land inspections",
//         "Fence & boundary installation",
//         "Land cleanup",
//         "Property legal assistance",
//         "NRI loan assistance",
//         "Remote buyer walkthroughs",
//         "Property video inspection",
//       ],
//     },
//     {
//       "@type": "WebSite",
//       "@id": "https://spotmysite.com/#website",
//       url: "https://spotmysite.com/",
//       name: "SpotMySite",
//       publisher: { "@id": "https://spotmysite.com/#organization" },
//       inLanguage: "en",
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://spotmysite.com/about-us/#webpage",
//       url: "https://spotmysite.com/about-us/",
//       name: "About SpotMySite — Our Story, Mission, and Focus on NRI Property Protection",
//       isPartOf: { "@id": "https://spotmysite.com/#website" },
//       about: { "@id": "https://spotmysite.com/#organization" },
//       inLanguage: "en",
//       primaryImageOfPage: {
//         "@type": "ImageObject",
//         url: "https://spotmysite.com/assets/about-us-hero.jpg",
//       },
//       description:
//         "The story behind SpotMySite: born from an NRI family's frustration with vague property updates, built to provide absentee owners in AP & Telangana with trusted, on-the-ground proof and peace of mind.",
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://spotmysite.com/about-us/#breadcrumbs",
//       itemListElement: [
//         {
//           "@type": "ListItem",
//           position: 1,
//           name: "Home",
//           item: "https://spotmysite.com/",
//         },
//         {
//           "@type": "ListItem",
//           position: 2,
//           name: "About Us",
//           item: "https://spotmysite.com/about-us/",
//         },
//       ],
//     },
//   ],
// };
export default function AboutMarketplace() {
  return (
    <div className="mt-30 about_sec max-lg:p-12 max-md:p-8 max-lg:pt-0">
      <h1 className="text-center text-3xl font-(family-name:--font-service) font-bold md:text-4xl">
        SpotMySite Marketplace.
      </h1>
      <div className="letter space-bottom--xxx-large space-top--x-large mt-10">
        <div className="letter__container">
          <div className="letter__article">
            <h2 className="text-2xl font-bold font-(family-name:--font-heading) mb-4">
              A Verification-Driven Property Platform
            </h2>
            <p>
              <b>SpotMySite</b> Marketplace is a verification-driven property
              marketplace in India designed for buyers and sellers seeking a
              secure and structured real estate transaction process.
            </p>
            <p>
              Unlike traditional portals that prioritize listing volume, we
              operate a <b>controlled marketplace</b>. We don't just host ads;
              we validate assets. Every property undergoes a rigorous review
              before approval, ensuring your time is spent on legitimate
              opportunities, not lead-generation traps.
            </p>
            <h2 className="text-2xl font-bold font-(family-name:--font-heading) mb-4">
              Why SpotMySite?
            </h2>
            <p>
              The current landscape is fragmented and volume-driven, riddled
              with duplicate listings, unverified owners, and relentless spam.
              We’ve built a disciplined alternative.
            </p>
            <h2 className="text-2xl font-bold font-(family-name:--font-heading) mb-4">
              Our Core Pillars
            </h2>
            <ol className="list-inside">
              <li>
                <b>Ownership Validation</b> We don't accept anonymous postings.
                Every listing undergoes identity confirmation and a review of
                primary ownership documents to ensure legitimacy.
              </li>
              <li>
                <b>Curated Inventory</b> We prioritize quality over scale. Our
                marketplace features a focused selection of Apartments, Villas,
                Residential Plots, Farmland, and Select Commercial assets.
              </li>
              <li>
                <b>Data Discretion</b> Your privacy is non-negotiable. Exact
                locations and contact details remain confidential until both
                parties are ready to engage, virtually eliminating unsolicited
                outreach.
              </li>
              <li>
                <b>Qualified Engagement</b> By requiring a nominal token payment
                for detailed access, we filter out "non-serious" inquiries. This
                ensures your interactions are only with committed, high-intent
                individuals.
              </li>
            </ol>
            <h2 className="text-2xl font-bold font-(family-name:--font-heading) mb-4">
              The Bottom Line
            </h2>
            <p>SpotMySite is not a mass-inventory portal.</p>
            <p>
              It is a verification-oriented transaction environment designed to
              reduce uncertainty, protect privacy, and elevate trust in real
              estate transactions.
            </p>
            <h2 className="text-2xl font-bold font-(family-name:--font-heading) mb-4">
              Ready to List Your Property?
            </h2>
            <p>
              Submit your listing request and our team will guide you through
              the verification process.
            </p>
          </div>
        </div>
      </div>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
    </div>
  );
}
