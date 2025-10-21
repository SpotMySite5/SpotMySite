export const metadata = {
  title:
    "Land Cleanup & Vegetation Removal for NRIs | SpotMySite Andhra & Telangana",
  description:
    "SpotMySite helps NRIs clean, clear, and restore land across Andhra Pradesh & Telangana. Professional vegetation removal, debris clearing, and GPS-documented cleanup services.",
};

import React from "react";
import Service from "@/components/ui/service";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://spotmysite.com/services/land-cleanup/#service",
  serviceType: "Land Cleanup and Vegetation Removal",
  name: "Land Cleanup & Vegetation Removal for NRIs | SpotMySite",
  alternateName: "NRI Land Maintenance and Cleaning Service",
  description:
    "SpotMySite provides land cleanup and vegetation removal services for NRIs and absentee owners in Andhra Pradesh and Telangana. Includes debris removal, ground leveling, and full GPS-documented proof.",
  serviceOutput:
    "Cleaned and leveled land with before-and-after photographic and GPS-tagged evidence.",
  category: "Property Maintenance Services",
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
    url: "https://spotmysite.com/services/land-cleanup",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      unitText: "Per Project",
    },
    availability: "https://schema.org/InStock",
  },
  hasPart: [
    { "@type": "Service", name: "Vegetation Removal" },
    { "@type": "Service", name: "Garbage and Debris Removal" },
    { "@type": "Service", name: "Ground Leveling" },
    { "@type": "Service", name: "Eco-Disposal Coordination" },
  ],
  review: {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Verified NRI Client" },
    reviewBody:
      "SpotMySite’s cleanup team restored our vacant land beautifully. Full GPS proof and transparent process — highly recommended for NRIs!",
  },
  image: [
    "https://spotmysite.com/assets/cleanup1.jpg",
    "https://spotmysite.com/assets/cleanup2.jpg",
  ],
  url: "https://spotmysite.com/services/land-cleanup",
  mainEntityOfPage: "https://spotmysite.com/services/land-cleanup",
};

export default function LandCleanup() {
  return (
    <Service>
      <h1>Land Cleanup & Vegetation Removal in Andhra & Telangana</h1>

      <h2>Restore Your Land. Preserve Its Value.</h2>

      <p>
        Land left unattended doesn’t just lose its appeal, it can become a
        liability. Overgrown vegetation, illegal dumping, and unmanaged wild
        growth not only reduce property value but can also invite
        <b> encroachments, disputes</b>, and <b>legal issues</b>.
      </p>

      <p>
        <b>SpotMySite</b> provides professional{" "}
        <b>land cleanup and vegetation removal services</b> designed for{" "}
        <b>
          NRI owners, remote property holders, and families managing inherited
          land
        </b>{" "}
        across <b>Andhra Pradesh and Telangana</b>.
      </p>
      <p>
        We make sure your property stays <b>clean, secure, and ready</b> no
        matter where you are.
      </p>

      <h3>Our Land Cleanup Process</h3>
      <p>
        Each cleanup is managed by a <b>trained on-ground crew</b> under the
        supervision of a <b>local field manager</b>.
      </p>
      <ul>
        <li>
          <b>Brush clearing, weed removal, and trimming wild vegetation</b>
        </li>
        <li>
          <b>Uprooting invasive shrubs</b> and unmanaged growth
        </li>
        <li>
          <b>Debris and garbage removal</b>, including construction waste
        </li>
        <li>
          <b>Basic ground leveling</b> for a clean, maintainable finish
        </li>
      </ul>

      <p>
        We document every stage of the cleanup with{" "}
        <b>photos, GPS data, and HD videos</b>
        so you can see the full transformation remotely.
      </p>

      <h3>What You'll Receive</h3>
      <ul>
        <li>
          <b>Before-and-after high-resolution images</b>
        </li>
        <li>
          <b>Timestamped & geotagged HD walkthrough video</b>
        </li>
        <li>
          <b>Cleanup summary report</b> detailing scope and work performed
        </li>
        <li>
          <b>Secure cloud delivery</b> for easy download and record-keeping
        </li>
      </ul>

      <p>
        <b>
          This service is perfect for owners preparing for fencing, resale, or
          legal documentation
        </b>
        .
      </p>

      <h3>Who We Serve</h3>
      <ul>
        <li>
          <b>NRIs & absentee owners</b> managing unseen or idle land
        </li>
        <li>
          <b>Out-of-state buyers</b> preparing plots for development
        </li>
        <li>
          <b>Families</b> maintaining <b>ancestral or agricultural property</b>
        </li>
        <li>
          <b>Sellers</b> getting land market-ready for listings and photography
        </li>
      </ul>

      <h3>Why Choose SpotMySite</h3>
      <ul>
        <li>
          Cleanup with <b>accountability & professional supervision</b>
        </li>
        <li>
          <b>End-to-end documentation</b> suitable for records or legal proof
        </li>
        <li>
          <b>Transparent pricing</b>, no hidden costs
        </li>
        <li>
          <b>Service coverage</b> across rural & urban Andhra Pradesh and
          Telangana
        </li>
        <li>
          <b>
            Bundled options: fencing, inspections, and legal assistance
            available
          </b>
        </li>
      </ul>

      <p>
        No matter how <b>remote or overgrown</b> your land is,{" "}
        <b>we’ll reach it and restore it</b>.
      </p>

      <h3>Why Timely Cleanup Matters</h3>
      <p>Delaying land cleanup can:</p>
      <ul>
        <li>
          Lower your <b>property’s market value</b>
        </li>
        <li>
          Invite <b>unauthorized use or encroachments</b>
        </li>
        <li>
          Stall <b>future fencing, resale, or construction plans</b>
        </li>
      </ul>

      <h3>Ready to Clean Up Your Land?</h3>
      <p>
        Don’t let time, distance, or vegetation take over your property. With{" "}
        <b>SpotMySite</b>, your <b>land stays clean, secure</b>, and ready for
        whatever comes next.
      </p>
      <p>
        <a href="/#contact">Schedule your Land Cleanup today</a>. We’ll handle
        the ground you can’t reach and deliver the proof you can trust.
      </p>

      <h3>Related Services</h3>
      <p className="flex flex-wrap gap-4">
        <a href="/services/land-status-check" className="badge_new">
          Land Status Check
        </a>

        <a href="/services/fence-boundary-installation" className="badge_new">
          Fence and Boundary Installation
        </a>

        <a href="/services/property-buy-legal-assistance" className="badge_new">
          Property Buy & Sell Legal Assistance
        </a>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Service>
  );
}
