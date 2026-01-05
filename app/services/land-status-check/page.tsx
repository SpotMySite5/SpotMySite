export const metadata = {
  title: "Land Status Check Services for NRIs in AP & TG",
  description:
    "Receive on-ground land inspection reports with GPS-tagged photos and videos to protect your land from misuse, encroachments, and disputes for NRIs",
};

import React from "react";
import Service from "@/components/ui/service";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://spotmysite.com/land-status-check#webpage",
      url: "https://spotmysite.com/land-status-check",
      name: "Land Status Check for NRIs | SpotMySite",
      description:
        "Verified land inspection with GPS-tagged photos, timestamped HD video, and a structured report within 48 hours. Designed for NRIs and absentee owners across Andhra Pradesh and Telangana.",
      isPartOf: { "@id": "https://spotmysite.com/#website" },
      about: { "@id": "https://spotmysite.com/#organization" },
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://spotmysite.com/assets/land-status-check1.jpg",
      },
    },
    {
      "@type": "Service",
      "@id": "https://spotmysite.com/land-status-check#service",
      name: "Land Status Check for NRIs | SpotMySite",
      serviceType: "Property Inspection / Land Verification",
      alternateName: "NRI Land Verification & GPS Inspection",
      description:
        "I bought a plot in Nellore years ago but had no idea what’s happening there. SpotMySite found that someone was dumping trash on one corner. They sent clear photos and GPS tags, we fixed it immediately.",
      provider: { "@id": "https://spotmysite.com/#organization" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
        { "@type": "AdministrativeArea", name: "Telangana" },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "NRIs, absentee landowners, out-of-state buyers, families managing ancestral land",
      },
      serviceOutput: [
        "Complete perimeter photo set (entry, corners, surroundings)",
        "GPS-tagged, timestamped HD walkthrough video",
        "Inspection summary report with observations and red flags",
        "Secure cloud delivery",
      ],
      category: "Real Estate Property Verification",
      offers: {
        "@type": "Offer",
        url: "https://spotmysite.com/land-status-check",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      availableChannel: [
        {
          "@type": "ServiceChannel",
          serviceUrl: "https://spotmysite.com/land-status-check",
          name: "Remote Delivery",
        },
      ],
      isSimilarTo: [
        { "@type": "Service", name: "Fence & Boundary Installation" },
        { "@type": "Service", name: "Land Cleanup & Vegetation Removal" },
        { "@type": "Service", name: "Property Legal Assistance (Buy/Sell)" },
      ],
      // review: {
      //   "@type": "Review",
      //   author: { "@type": "Person", name: "Verified NRI Client" },
      //   datePublished: "2025-10-24",
      //   reviewBody:
      //     "SpotMySite’s Land Status Check gave me complete clarity about my farmland near Vijayawada. The GPS images and HD video were incredibly detailed and professional.",
      //   reviewRating: {
      //     "@type": "Rating",
      //     ratingValue: "5",
      //     bestRating: "5",
      //     worstRating: "1",
      //   },
      // },
      image: [
        "https://spotmysite.com/assets/land-status-check1.jpg",
        "https://spotmysite.com/assets/land-status-check2.jpg",
      ],
      url: "https://spotmysite.com/land-status-check",
      mainEntityOfPage: {
        "@id": "https://spotmysite.com/land-status-check#webpage",
      },
      inLanguage: "en",
    },
  ],
};

export default function LandStatusCheck() {
  return (
    <Service>
      <h1>Land Status Check in Andhra &amp; Telangana</h1>

      <h2>Monitor Your Land - Without Being There</h2>

      <p>
        Empty land is often an easy target. When you’re miles away from your
        land, small issues can turn into serious problems,{" "}
        <b>illegal dumping, encroachments, or unauthorized usage</b>. For{" "}
        <b>NRI landowners</b> and absentee property holders, these issues can be
        financially and legally damaging.
      </p>

      <p>
        With <b>SpotMySite’s</b> Land Status Check, you gain verified, on-ground
        insights on your land’s real condition, delivered fast, accurate, and
        with full proof.
      </p>
      <p>
        Stay informed, act early, and protect your investment before small
        issues become costly problems.
      </p>

      <h3>What We Inspect During a Land Status Check</h3>
      <p>
        Our trained <b>field inspection team</b> performs a complete land
        verification covering every risk that affects property value and
        ownership clarity:
      </p>
      <ul>
        <li>
          <b>Illegal Dumping</b> - garbage, debris, or construction waste
        </li>
        <li>
          <b>Unauthorized Use</b> - temporary sheds, farming, or livestock
          activity
        </li>
        <li>
          <b>Boundary Disputes</b> - shifted fencing, new posts, unauthorized
          construction
        </li>
        <li>
          <b>Access Issues</b> - blocked entrances, new barriers, or restricted
          approach routes
        </li>
      </ul>

      <p>
        Every inspection is documented with <b>GPS coordinates</b>,{" "}
        <b>timestamps</b>, and <b>directional photos</b> creating a verifiable
        record of your land’s condition.
      </p>

      <h3>What You Receive in Your Inspection Report</h3>
      <p>
        You’ll receive a secure, structured inspection package within{" "}
        <b>48 hours</b> that includes:
      </p>
      <ul>
        <li>
          Complete <b>perimeter photo set</b> (entry, corners, surroundings)
        </li>
        <li>
          A short <b>HD video walkthrough</b> of the site
        </li>
        <li>
          <b>GPS-tagged visuals</b> with time/date proof
        </li>
        <li>
          <b>Observations on red flags</b> (debris, unauthorized activity,
          boundary changes)
        </li>
      </ul>

      <p>
        Each report is easy to download, share, and use as official
        documentation for <b>legal, resale, or insurance purposes</b>.
      </p>

      <h3>Who Needs Land Status Check Services</h3>
      <ul>
        <li>
          <b>NRI landowners</b> who can’t travel frequently
        </li>
        <li>
          <b>Out-of-state buyers</b> verifying land before a deal
        </li>
        <li>
          <b>Investors</b> safeguarding long-term land assets
        </li>
        <li>
          <b>Families</b> managing ancestral or shared holdings
        </li>
      </ul>

      <p>
        Wherever you are in the world, <b>SpotMySite</b> gives you{" "}
        <b>visual proof and peace of mind</b> about your land in Andhra Pradesh
        and Telangana.
      </p>

      <h3>Why Choose SpotMySite?</h3>
      <ul>
        <li>
          Field agents with experience in <b>rural and urban land</b>{" "}
          assessments
        </li>
        <li>
          Reports strong enough for <b>legal or resale validation</b>
        </li>
        <li>
          Transparent and <b>owner-only reporting and access</b>
        </li>
      </ul>

      <h3>Why Land Verification Matters</h3>
      <p>
        Land is valuable, but only if it's protected. Common risks across Andhra
        &amp; Telangana include:
      </p>
      <ul>
        <li>
          <b>Unauthorized fencing</b> or boundary disputes by neighbors
        </li>
        <li>Trash buildup from nearby construction activity</li>
        <li>
          <b>Encroachments</b> that shift your legal boundary line
        </li>
        <li>
          <b>Delayed property transactions</b> due to missing proof
        </li>
      </ul>

      <p>
        A <b>SpotMySite</b> inspection report may be the only protection between
        you and a legal dispute or delayed transaction.
      </p>

      <h3>How SpotMySite Land Status Check Works</h3>
      <ol>
        <li>
          Share your <b>plot location and any documents</b> you have
        </li>
        <li>
          Our verified field agent visits the site within <b>48–72 hours</b>
        </li>
        <li>
          You receive a clear, organized{" "}
          <b>inspection report with GPS-tagged photos and video</b>.
        </li>
      </ol>

      <p>
        We also offer repeat monitoring and coordination for fencing or cleanup
        services.
      </p>

      <h3>Stay Ahead of Trouble - Protect Your Land Today</h3>
      <p>
        You own the land. Don’t let misuse, neglect, or silence take that from
        you. <b>SpotMySite</b> helps you protect it with{" "}
        <b>visual proof, legal-ready documentation, and timely action</b>.
      </p>

      <p>
        <a href="/#contact">Schedule your land check today</a> and let your next
        update be certainty, not surprise.
      </p>

      <h3>Explore Related Services</h3>
      <p className="flex flex-wrap gap-4">
        <a href="/services/fence-boundary-installation" className="badge_new">
          Fence &amp; Boundary Installation
        </a>
        <br />
        <a href="/services/land-cleanup" className="badge_new">
          Land Cleanup &amp; Vegetation Removal
        </a>
        <br />
        <a href="/services/property-buy-legal-assistance" className="badge_new">
          Property Buy and Sell Legal Assistance
        </a>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Service>
  );
}
