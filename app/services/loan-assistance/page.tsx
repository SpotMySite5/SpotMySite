export const metadata = {
  title: "Property Loan Assistance Services for NRIs in AP & TG",
  description:
    "SpotMySite provides NRI loan assistance services in AP & TG, coordinating with banks, legal advisors, and experts to handle eligibility checks and documentation",
};

import React from "react";
import Service from "@/components/ui/service";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://spotmysite.com/services/nri-loan-assistance#webpage",
      url: "https://spotmysite.com/services/nri-loan-assistance",
      name: "NRI Loan Assistance | SpotMySite",
      description:
        "SpotMySite provides end-to-end NRI loan assistance for home, land, construction, and commercial property loans across Andhra Pradesh and Telangana. Our team coordinates documentation, bank liaison, and legal opinion to ensure smooth approval.",
      isPartOf: { "@id": "https://spotmysite.com/#website" },
      about: { "@id": "https://spotmysite.com/#organization" },
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://spotmysite.com/assets/loan-assistance1.jpg",
      },
    },
    {
      "@type": "Service",
      "@id": "https://spotmysite.com/services/nri-loan-assistance#service",
      serviceType: "NRI Loan Assistance",
      name: "NRI Loan Assistance | SpotMySite",
      alternateName: "Home, Land & Construction Loan Support for NRIs",
      description:
        "SpotMySite provides end-to-end NRI loan assistance for home, land, construction, and commercial property loans across Andhra Pradesh and Telangana. Our team coordinates documentation, bank liaison, and legal opinion to ensure smooth approval.",
      serviceOutput:
        "Approved home or land loan with verified documentation and legal clearance.",
      category: "Financial Services",
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
        url: "https://spotmysite.com/services/nri-loan-assistance",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      hasPart: [
        { "@type": "Service", name: "Home Loan Assistance" },
        { "@type": "Service", name: "Land or Plot Purchase Loan Assistance" },
        { "@type": "Service", name: "Construction Loan Assistance" },
        { "@type": "Service", name: "Commercial Property Loan Assistance" },
      ],
      // review: {
      //   "@type": "Review",
      //   author: { "@type": "Person", name: "Verified NRI Client" },
      //   datePublished: "2025-10-24",
      //   reviewBody:
      //     "We compared multiple NRI loan options through SpotMySite. They explained everything clearly and helped us lock the best interest rate.",
      //   reviewRating: {
      //     "@type": "Rating",
      //     ratingValue: "5",
      //     bestRating: "5",
      //     worstRating: "1",
      //   },
      // },
      image: [
        "https://spotmysite.com/assets/loan-assistance1.jpg",
        "https://spotmysite.com/assets/loan-assistance2.jpg",
      ],
      url: "https://spotmysite.com/services/nri-loan-assistance",
      mainEntityOfPage: {
        "@id": "https://spotmysite.com/services/nri-loan-assistance#webpage",
      },
      inLanguage: "en",
    },
  ],
};

export default function LoanAssistance() {
  return (
    <Service>
      <h1>NRI Loan Assistance in Andhra &amp; Telangana</h1>

      <h2>Navigate Home Loans in India with Confidence</h2>

      <p>
        For NRIs, securing a <b>home, land, or commercial property</b> loan in
        India can feel like decoding a complex puzzle. Endless paperwork,
        constant follow-ups, and unclear bank requirements often make the
        process <b>stressful and time-consuming</b>.
      </p>

      <p>
        <b>SpotMySite’s NRI Loan Assistance Service</b> simplifies the entire
        journey from eligibility to disbursement. We coordinate with banks,
        <b> legal advisors, and financial experts</b>, so you never lose time or
        miss a step.
      </p>

      <h3>What We Help With</h3>
      <ul>
        <li>
          <b>Loan eligibility assessment</b> based on your income, profile and
          property
        </li>
        <li>
          <b>Bank comparison</b> evaluate interest rates and loan terms (
          <b>we're not tied to any one lender</b>)
        </li>
        <li>
          <b>Document checklist preparation</b> for NRI applicants (passport,
          OCI, visa, income proof, etc.)
        </li>
        <li>
          <b>Property paperwork coordination</b> - title deed, tax receipts, EC,
          layout plans
        </li>
        <li>
          <b>Legal opinion coordination</b> for property-backed loans
        </li>
        <li>
          <b>TDS and tax compliance guidance</b> for loan-linked transactions
        </li>
        <li>
          <b>Loan application preparation and submission</b>
        </li>
        <li>
          <b>Bank coordination</b> for verification calls and site visits
        </li>
        <li>
          <b>POA (Power of Attorney) execution</b> if you can’t be physically
          present
        </li>
        <li>
          <b>Final disbursement tracking</b> & bank agreement review
        </li>
      </ul>

      <p>
        Whether it’s a <b>home loan</b>, <b>land loan</b>,{" "}
        <b>construction loan</b>, or <b>commercial property loan</b>,{" "}
        <b>SpotMySite</b> ensures your file is{" "}
        <b>clean, compliant, and ready for approval</b>.
      </p>

      <h3>Types of Loans We Help With</h3>
      <ul>
        <li>
          <b>Home Loan</b> - Apartments, villas, independent houses
        </li>
        <li>
          <b>Plot Purchase Loan</b> - Land, residential or commercial
        </li>
        <li>
          <b>Construction Loan</b> - Building new homes or adding floors
        </li>
        <li>
          <b>Commercial Loan</b> - Shops, small offices, showrooms, mixed-use
          buildings
        </li>
      </ul>
      <p>
        We work with both <b>banks</b> to identify the best financing options
        for your needs.
      </p>

      <h3>How the Process Works</h3>
      <ol>
        <li>
          <b>Loan Planning &amp; Consultation</b> - Understand needs, compare
          banks/NBFCs
        </li>
        <li>
          <b>Document Preparation</b> - Clear checklist, secure portal,
          notarization help
        </li>
        <li>
          <b>Bank Liaison &amp; Legal Prep</b> - Coordinate for legal opinion,
          valuation, POA if needed
        </li>
        <li>
          <b>Submission &amp; Approval</b> - <b>SpotMySite</b> submits and
          tracks every step
        </li>
        <li>
          <b>Disbursement &amp; Closure</b> - Oversee release, review
          agreements, ensure delivery of documents
        </li>
      </ol>

      <h3>Who This Is For</h3>
      <ul>
        <li>
          <b>NRIs</b> purchasing property in Andhra Pradesh or Telangana
        </li>
        <li>
          <b>Indians abroad</b> constructing homes on ancestral or new plots
        </li>
        <li>
          <b>Families</b> managing loan applications for relatives working
          overseas
        </li>
        <li>
          <b>Buyers</b> who want expert guidance navigating Indian financial
          institutions
        </li>
      </ul>
      <p>
        Wherever you are, <b>SpotMySite</b> ensures your{" "}
        <b>loan process is smooth, verified, and compliant</b>.
      </p>

      <h3>Why Choose SpotMySite</h3>
      <ul>
        <li>
          Deep understanding of <b>Indian banks &amp; NRI documentation</b>{" "}
          requirements
        </li>
        <li>
          <b>Professionally packaged loan files</b> - no missing paperwork or
          rejections
        </li>
        <li>
          <b>Single point of contact</b> - we handle all bank, legal, and
          financial coordination
        </li>
        <li>
          Integrated <b>legal verification</b> before loan approval
        </li>
        <li>
          <b>100% remote-friendly</b> - POA execution, video consults, secure
          document exchange
        </li>
      </ul>
      <p>
        We don’t just connect you to lenders, we make the process{" "}
        <b>friction-free, secure, and reliable</b>.
      </p>

      <h3>Property Financing Without Friction</h3>
      <p>
        With <b>SpotMySite</b>, your <b>NRI property loan</b> is managed with
        full transparency and expert oversight.
      </p>

      <p>
        <a href="/#contact">Request NRI Loan Assistance Today</a> - We help you
        get the loan. You focus on the home or the opportunity.
      </p>

      <h3>Related Services</h3>
      <p className="flex flex-wrap gap-4">
        <a href="/services/remote-buyer-walkthrough" className="badge_new">
          Remote Buyer Walkthrough
        </a>
        <br />
        <a href="/services/property-video-inspection" className="badge_new">
          Property Video Inspection
        </a>
        <br />
        <a href="/services/property-buy-legal-assistance" className="badge_new">
          Property Buy &amp; Sell Legal Assistance
        </a>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Service>
  );
}
