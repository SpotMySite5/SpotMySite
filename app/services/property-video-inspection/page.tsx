export const metadata = {
  title: "Property Video Inspection Services for NRIs in AP & TG",
  description:
    "Get a complete visual walkthrough of your property, conducted by a trained and uniformed SpotMySite inspector. Contact us for property video inspection services",
};

import React from "react";
import Service from "@/components/ui/service";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://spotmysite.com/services/property-video-inspection#webpage",
      url: "https://spotmysite.com/services/property-video-inspection",
      name: "Property Video Inspection for NRIs | SpotMySite",
      description:
        "SpotMySite provides HD property video inspections for NRIs and remote landlords across Andhra Pradesh and Telangana. Get GPS-tagged images, timestamped videos, and secure reports within 48 hours.",
      isPartOf: { "@id": "https://spotmysite.com/#website" },
      about: { "@id": "https://spotmysite.com/#organization" },
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://spotmysite.com/assets/property-inspection1.jpg",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://spotmysite.com/services/property-video-inspection#service",
      serviceType: "Property Video Inspection",
      name: "Property Video Inspection for NRIs | SpotMySite",
      alternateName: "NRI Property Video Check Service",
      description:
        "SpotMySite provides HD property video inspections for NRIs and remote landlords across Andhra Pradesh and Telangana. Get GPS-tagged images, timestamped videos, and secure reports within 48 hours.",
      serviceOutput:
        "HD video file, timestamped inspection report, and GPS-tagged proof images.",
      category: "Real Estate Property Verification",
      provider: { "@id": "https://spotmysite.com/#organization" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
        { "@type": "AdministrativeArea", name: "Telangana" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://spotmysite.com/services/property-video-inspection",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      hasPart: [
        { "@type": "Service", name: "HD Walkthrough Video" },
        { "@type": "Service", name: "Live Video Call Inspection" },
        { "@type": "Service", name: "GPS-Tagged Image Proof" },
        { "@type": "Service", name: "Tenant Coordination" },
      ],
      // review: {
      //   "@type": "Review",
      //   author: { "@type": "Person", name: "Verified NRI Client" },
      //   datePublished: "2025-10-24",
      //   reviewBody:
      //     "I live in Texas and hadn’t seen my flat in Vijayawada for almost two years. SpotMySite did a full video inspection, they even showed small balcony cracks I didn’t know about. Felt so reassuring to finally see it myself.",
      //   reviewRating: {
      //     "@type": "Rating",
      //     ratingValue: "5",
      //     bestRating: "5",
      //     worstRating: "1",
      //   },
      // },
      image: [
        "https://spotmysite.com/assets/property-inspection1.jpg",
        "https://spotmysite.com/assets/property-inspection2.jpg",
      ],
      url: "https://spotmysite.com/services/property-video-inspection",
      mainEntityOfPage: {
        "@id":
          "https://spotmysite.com/services/property-video-inspection#webpage",
      },
      inLanguage: "en",
    },
  ],
};
export default function PropertyVideoInspection() {
  return (
    <Service>
      <h1>Property Video Inspection in Andhra &amp; Telangana</h1>

      <h2>Real Eyes on Your Property - Even When You’re Miles Away</h2>

      <p>
        Whether you’re an NRI, a remote landlord, or an investor managing
        properties from overseas, the biggest challenge you face is visibility.
        Relying on second-hand updates, tenant messages, or infrequent visits
        often leaves you uncertain about your property’s true condition.
      </p>

      <p>
        With <b>SpotMySite’s Property Video Inspections</b>, you no longer have
        to guess. We deliver{" "}
        <b>
          timestamped HD walkthroughs, GPS-tagged images, and inspection notes
        </b>
        , so you know exactly what’s happening inside your{" "}
        <b>home, flat, or rental</b> from anywhere in the world.
      </p>

      <h3>What Is a Property Video Inspection?</h3>
      <p>
        A <b>complete visual walkthrough</b> of your property, conducted by a{" "}
        <b>trained and uniformed SpotMySite inspector</b>, covering:
      </p>
      <ul>
        <li>Main entry, doors, and security grills</li>
        <li>Living rooms, bedrooms, kitchen &amp; bathrooms</li>
        <li>Utility areas, balconies, storage spaces</li>
        <li>Cleanliness, damage, or maintenance issues</li>
        <li>Tenant confirmation &amp; occupancy status (if applicable)</li>
      </ul>

      <p>
        All inspections are conducted <b>transparently</b> and, when occupied,
        <b> with tenant consent</b>.
      </p>

      <h3>What You Receive</h3>
      <ul>
        <li>
          <b>Full HD video walkthrough</b> of your apartment or home
        </li>
        <li>
          <b>Still images</b> highlighting specific concerns (damage, leaks,
          clutter)
        </li>
        <li>
          <b>Inspector notes</b> on wall stains, moisture signs, or misuse
        </li>
        <li>
          <b>Location-stamped inspection summary</b>
        </li>
        <li>
          <b>Optional live video call walkthrough</b>
        </li>
        <li>
          <b>Secure cloud folder</b> to download all reports and media anytime
        </li>
      </ul>

      <p>Every report gives you verified proof, not assumptions.</p>

      <h3>Who This Is For</h3>
      <ul>
        <li>
          <b>NRIs</b> owning apartments or houses in India
        </li>
        <li>
          <b>Remote landlords</b> managing rental flats or vacant homes
        </li>
        <li>
          <b>Investors</b> wanting periodic asset checks
        </li>
        <li>
          <b>Sellers</b> needing verified condition proof before sale
        </li>
      </ul>

      <h3>How our Property Video Inspection Works</h3>
      <ol>
        <li>
          <b>Request an Inspection</b> - Submit via our portal or WhatsApp
        </li>
        <li>
          <b>Access Coordination</b> - We arrange entry with tenant/caretaker
        </li>
        <li>
          <b>On-Site Visit</b> - Trained inspector performs a respectful,
          professional walkthrough
        </li>
        <li>
          <b>Delivery</b> - Receive your secure HD report within{" "}
          <b>24–48 hours</b> (rush options available)
        </li>
      </ol>

      <h3>Why Choose SpotMySite?</h3>
      <p>
        Every <b>SpotMySite</b> inspector is background-verified, uniformed, and
        trained to handle tenant coordination with professionalism and courtesy.
        We never store your video on personal devices, and we only share links
        with verified owners. Available across{" "}
        <b>Andhra Pradesh &amp; Telangana</b>.
      </p>

      <h3>See It for Yourself</h3>
      <p>
        Don’t rely on vague phone calls or outdated photos. Get{" "}
        <b>clear visual proof</b>
        and make confident decisions about your property even from 10,000 miles
        away.
      </p>

      <p>
        <a href="/#contact">Request Your Inspection Today</a> and know exactly
        what’s happening inside your property without flying across the world.
      </p>

      <h3>Related Services</h3>
      <p className="flex flex-wrap gap-4">
        <a href="/services/property-buy-legal-assistance" className="badge_new">
          Property Buy and Sell Legal Assistance
        </a>
        <br />
        <a href="/services/remote-buyer-walkthrough" className="badge_new">
          Remote Buyer Walk Through
        </a>
        <br />
        <a href="/services/loan-assistance" className="badge_new">
          Loan Assistance Service
        </a>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Service>
  );
}
