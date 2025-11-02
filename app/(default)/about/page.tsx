export const metadata = {
  title: "About SpotMySite | NRI Property Management & Protection",
  description:
    "SpotMySite is a young, NRI-focused property management company helping owners across Andhra & Telangana with trusted inspections, fencing, and legal support.",
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
export default function About() {
  return (
    <div className="mt-30 about_sec max-lg:p-12 max-md:p-8 max-lg:pt-0">
      <h1 className="text-center text-3xl font-(family-name:--font-service) font-bold md:text-4xl">
        Born from Distance. Built on Trust.
      </h1>
      <div className="letter space-bottom--xxx-large space-top--x-large mt-10">
        <div className="letter__container">
          <div className="letter__article">
            <p>
              We never planned to start a property management company. It began
              with a simple need just wanting an update about a small piece of{" "}
              <b>family land in India</b>. we relied on relatives for
              information, but updates were often{" "}
              <b>vague, delayed, or missing</b>.
            </p>
            <p>
              “Looks like someone built a shed there,” an uncle once said. Weeks
              of silence followed.
            </p>
            <p>
              Frustration turned into worry. Were the boundaries intact? Was the
              land being misused? Zooming into blurry satellite maps wasn’t
              enough. That’s when it hit us, if we were struggling, thousands of
              NRIs and <b>absentee owners</b> must be feeling the same. That
              moment became the beginning of <b>SpotMySite</b> a{" "}
              <b>
                young, purpose-driven property management and protection company
              </b>
              , born not from a business plan but from a{" "}
              <b>need for clarity, connection, and trust</b>.
            </p>
            <p>
              We may be a new name, but our mission runs deep, to give every NRI
              and remote property owner <b>real visibility and peace of mind</b>
              , with <b>eyes and proof on the ground</b>
              when they can’t be there themselves.
            </p>
            <p>
              Our growing team across <b>Andhra Pradesh and Telangana</b>{" "}
              includes{" "}
              <b>
                trained field agents, legal experts, and on-ground coordinators
              </b>{" "}
              who handle everything from{" "}
              <b>
                Land Status Checks and Property Video Inspections to Land
                Cleanup, Fencing, Legal Assistance, and NRI Loan Support
              </b>
              .
            </p>
            <p>We’re not brokers. We don’t sell or take commissions.</p>
            <p>
              We work <b>only for you</b> protecting your property as if it were
              our own. Every inspection, video, and report we deliver answers
              one simple question:
            </p>
            <p>
              <i>“If this were mine, what would I want to know right now?”</i>
            </p>
            <p>
              <b>SpotMySite</b> may be young, but it was built on something
              timeless{" "}
              <b>
                trust, honesty, and the belief that distance should never come
                between you and your land
              </b>
              .
            </p>
            <p>
              If you’ve ever worried about your property back home, you’re not
              alone. We’ve been there. That’s why we built SpotMySite{" "}
              <b>for people like us, for people like you</b>.
            </p>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
