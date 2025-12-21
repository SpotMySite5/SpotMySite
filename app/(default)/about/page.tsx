export const metadata = {
  title: "Get Expert Property Management Services in AP & TG for NRIs",
  description:
    "Managing property from abroad can be challenging for many NRIs. Get reliable property management services in Andhra and Telangana with complete peace of mind.",
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
        Reliable Property Management Services for NRIs.
      </h1>
      <div className="letter space-bottom--xxx-large space-top--x-large mt-10">
        <div className="letter__container">
          <div className="letter__article">
            <p>
              We never set out to build a property management company. It
              started with a simple need, wanting a clear update on a small
              piece of family land in India.
            </p>
            <p>
              Like many NRIs, we depended on relatives for information. But
              updates were often vague, delayed, or incomplete.
            </p>
            <p>
              <i>“Looks like someone built a shed there,”</i> an uncle once
              mentioned. Weeks passed with no further clarity.
            </p>
            <p>
              Concern quickly turned into anxiety. Were the boundaries intact?
              Was the land being encroached upon? Satellite images and blurry
              maps couldn’t answer these questions. Around this time, we
              realized how difficult it was for NRIs searching for{" "}
              <b>property management services in Hyderabad</b>, even basic
              visibility was hard to come by.
            </p>
            <p>
              That realization sparked the beginning of <b>SpotMySite</b>.
            </p>
            <p>
              SpotMySite wasn’t born from a business plan, but from a genuine
              need for <b>trust, transparency, and real on-ground visibility</b>
              . If we were struggling to protect our own property from thousands
              of miles away, countless others were likely facing the same
              challenge.
            </p>
            <p>
              We may be a new name, but our mission is deeply rooted, to give
              NRIs and distant property owners true peace of mind with{" "}
              <b>real eyes on the ground</b>. As we grew, many clients shared
              that they had worked with multiple{" "}
              <b>property management companies in Andhra Pradesh</b>, yet still
              lacked reliable updates, reinforcing the need for a better, more
              accountable solution.
            </p>
            <p>
              Today, our on-ground teams across{" "}
              <b>Andhra Pradesh and Telangana</b>
              include trained field agents, legal professionals, and dedicated
              coordinators. We manage everything from{" "}
              <b>
                land status checks and video inspections to land cleanup,
                fencing, legal guidance, and NRI loan assistance
              </b>
              .
            </p>
            <p>
              We are not brokers.
              <br />
              We don’t sell properties.
              <br />
              We don’t work on commissions.
            </p>
            <p>
              We work <b>only for you</b>, protecting your property as if it
              were our own.
            </p>
            <p>
              Every inspection, every video, and every report we deliver is
              guided by one simple question.
            </p>
            <p>
              <b>
                <i>
                  “If this were my land, what would I want to know right now?”
                </i>
              </b>
            </p>
            <p>
              SpotMySite may be young, but it is built on timeless values,{" "}
              <b>trust, honesty, and accountability</b>. Distance should never
              stand between you and your property.
            </p>
            <p>
              If you’ve ever worried about what’s happening to your land back
              home, you’re not alone. We’ve been there too.
            </p>
            <p>
              That’s why we built <b>SpotMySite</b>, for people like us, and for
              people like you.
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
