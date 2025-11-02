export const metadata = {
  title:
    "NRI Fence & Boundary Installation | Secure Land in Andhra & Telangana",
  description:
    "SpotMySite offers expert fencing and boundary installation for NRIs with GPS-proof security across Andhra Pradesh & Telangana.",
};
import React from "react";
import Service from "@/components/ui/service";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://spotmysite.com/services/fence-boundary-installation#webpage",
      url: "https://spotmysite.com/services/fence-boundary-installation",
      name: "Fence & Boundary Installation for NRIs | SpotMySite",
      description:
        "Professional fence and boundary installation services for NRI landowners across Andhra Pradesh and Telangana. SpotMySite delivers secure fencing with GPS-proof documentation and legal-ready reports.",
      isPartOf: { "@id": "https://spotmysite.com/#website" },
      about: { "@id": "https://spotmysite.com/#organization" },
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://spotmysite.com/assets/fencing1.jpg",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://spotmysite.com/services/fence-boundary-installation#service",
      serviceType: "Fence and Boundary Installation",
      alternateName: "Land Fence Installation and Boundary Marking Service",
      description:
        "Professional fence and boundary installation services for NRI landowners across Andhra Pradesh and Telangana. SpotMySite delivers secure fencing with GPS-proof documentation and legal-ready reports.",
      serviceOutput:
        "Installed fencing with GPS-tagged photos, material details, and completion report.",
      category: "Land Development and Property Protection",
      audience: {
        "@type": "Audience",
        audienceType: "Non-Resident Indians (NRIs)",
      },
      provider: { "@id": "https://spotmysite.com/#organization" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
        { "@type": "AdministrativeArea", name: "Telangana" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://spotmysite.com/services/fence-boundary-installation",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      hasPart: [
        { "@type": "Service", name: "Barbed Wire Fencing" },
        { "@type": "Service", name: "Chain-Link Fencing" },
        { "@type": "Service", name: "Cement/Iron Pole + GI Wire Fencing" },
        { "@type": "Service", name: "Concrete Peg Boundary Marking" },
      ],
      review: {
        "@type": "Review",
        author: { "@type": "Person", name: "Verified NRI Client" },
        datePublished: "2025-10-24",
        reviewBody:
          "Neighbors started using my Warangal plot as a shortcut. SpotMySite fenced it with barbed wire and sent photos with GPS proof  now the land feels protected.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      image: [
        "https://spotmysite.com/assets/fencing1.jpg",
        "https://spotmysite.com/assets/fencing2.jpg",
      ],
      url: "https://spotmysite.com/services/fence-boundary-installation",
      mainEntityOfPage: {
        "@id":
          "https://spotmysite.com/services/fence-boundary-installation#webpage",
      },
      inLanguage: "en",
    },
  ],
};

export default function FenceAndBoundaryInstallation() {
  return (
    <Service>
      <h1>Fence & Boundary Installation in Andhra & Telangana</h1>

      <h2>Secure What’s Yours. Define What’s Rightfully Yours</h2>

      <p>
        Your property deserves to be <b>recognized, respected, and protected</b>
        . Without clear boundary, land becomes vulnerable to{" "}
        <b>encroachments, disputes, or unauthorized resale</b> especially for{" "}
        <b>NRI landowners</b> who can’t visit frequently.
      </p>

      <p>
        With <b>SpotMySite’s Fence & Boundary Installation Service</b>, you get
        more than a fence, you get{" "}
        <b>visibility, proof, and long-term protection</b>.
      </p>

      <p>
        We deliver <b>end-to-end fencing and boundary setup</b> across{" "}
        <b>Andhra Pradesh and Telangana</b>, designed specifically for absentee
        and NRI property owners.
      </p>

      <h3>Fence Options We Offer</h3>

      <p>
        We don’t just build fences, we <b>plan, procure, and execute</b> with
        full professionalism and transparency.
      </p>

      <ul>
        <li>
          <b>Barbed Wire Fencing</b> - Economical, durable, ideal for
          open/agricultural land
        </li>
        <li>
          <b>Chain-Link Fencing</b> - Clean, long-lasting, suited for
          residential/developing plots
        </li>
        <li>
          <b>Stone or Concrete Pegs</b> - Corner markers for quick, visible,
          legal boundaries
        </li>
        <li>
          <b>Cement/Iron Pole + GI Wire</b> - Premium fencing for high-value or
          long-term assets
        </li>
      </ul>

      <p>
        We source <b>high-quality materials</b>, ensure <b>local compliance</b>,
        and adapt designs to <b>terrain and soil type</b> ensuring your land
        fencing lasts for years.
      </p>

      <h3>How Our Fence Installation Works</h3>

      <ol>
        <li>
          <b>Consultation & Boundary Check</b> - Review plot documents, maps,
          and layouts
        </li>
        <li>
          <b>On-Site Assessment</b> - Supervisor inspects and marks boundaries
        </li>
        <li>
          <b>Installation</b> - Verified crew executes fencing under expert
          oversight
        </li>
        <li>
          <b>Completion Proof</b> - Photos, HD video, and GPS-tagged
          documentation
        </li>
      </ol>

      <h3>What You Receive</h3>
      <p>
        Every <b>SpotMySite fencing project</b> comes with documented proof and
        clear visuals:
      </p>

      <ul>
        <li>
          <b>Before & After photos</b> showing complete fencing coverage
        </li>
        <li>
          <b>GPS-tagged visuals</b> and optional HD video walkthrough
        </li>
        <li>
          <b>Detailed work summary report</b> with pole count, wire type, and
          layout dimensions
        </li>
        <li>
          <b>Secure cloud folder</b> to download all reports and media anytime
        </li>
      </ul>

      <h3>Who Needs Fence & Boundary Installation</h3>

      <ul>
        <li>
          <b>NRI landowners</b> securing idle or unmonitored plots
        </li>
        <li>
          <b>Real estate investors</b> preparing land for sale, resale, or
          future development
        </li>
        <li>
          <b>Property sellers or buyers</b> needing visible and verified
          boundaries
        </li>
        <li>
          <b>Families</b> protecting ancestral or inherited land from
          encroachment
        </li>
      </ul>

      <p>
        If you own land in <b>Andhra Pradesh or Telangana</b>, SpotMySite
        ensures it stays <b>defined, safe, and undisputed</b>.
      </p>

      <h3>Why Choose SpotMySite</h3>

      <ul>
        <li>
          <b>Verified on-ground crews</b> supervised by experienced field
          managers
        </li>
        <li>
          Transparent pricing, billed per foot/metre with no hidden charges
        </li>
        <li>
          <b>Fast turnaround</b>, typically completed within <b>7–10 days</b>
        </li>
        <li>
          <b>Legally usable documentation</b> for court, sale, or proof of
          possession
        </li>
      </ul>

      <p>
        <b>SpotMySite</b> combines{" "}
        <b>technical accuracy, local expertise, and NRI transparency</b> making
        land ownership worry-free.
      </p>

      <h3>Set the Boundary. Keep the Peace.</h3>

      <p>
        Don’t wait for trouble to find your land. With{" "}
        <b>SpotMySite’s Fence & Boundary Installation</b>, you{" "}
        <b>secure your property</b> before problems arise. We handle the ground
        you can’t reach the right way, every time.
      </p>

      <p>
        <a href="/#contact">Request Fence Installation Today</a> we’ll handle
        the ground you can’t reach, the right way, every time.
      </p>

      <h3>Related Services</h3>
      <p className="flex flex-wrap gap-4">
        <a href="/services/land-status-check" className="badge_new">
          Land Status Check
        </a>

        <a href="/services/property-video-inspection" className="badge_new">
          Property Video Inspection
        </a>

        <a href="/services/property-buy-legal-assistance" className="badge_new">
          NRI Legal Support
        </a>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Service>
  );
}
