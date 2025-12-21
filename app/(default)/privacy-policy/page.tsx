export const metadata = {
  title: "Privacy Policy | SpotMySite",
  description:
    "Learn how SpotMySite collects, uses, and protects your personal information while delivering property services for NRIs and absentee owners.",
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
export default function PrivacyPolicy() {
  return (
    <div className="mt-20 service_letter about_sec max-lg:p-12 max-md:p-8 max-lg:pt-0">
      <h1 className="text-center text-3xl font-(family-name:--font-service) font-bold md:text-4xl">
        Privacy Policy
      </h1>
      <div className="letter space-bottom--xxx-large space-top--x-large mt-10">
        <div className="letter__container">
          <div className="letter__article">
            <p>
              At <b>SpotMySite</b>, we respect the trust you place in us. This
              Privacy Policy explains how we collect, use, and protect your
              personal information when you access or use our website,
              <a href="www.spotmysite.com">www.spotmysite.com</a>, along with
              any related software or mobile applications (collectively referred
              to as the “Website”). We are committed to handling your
              information responsibly and in line with applicable laws and
              accepted industry practices.
            </p>
            <p>
              By using the Website, you agree to the terms outlined in this
              Privacy Policy. If you do not agree, please discontinue use of the
              Website. This policy may be updated from time to time, and we
              encourage you to review it periodically to stay aware of any
              changes.
            </p>
            <h3>Information Collection</h3>
            <h3>Personal Information You Provide</h3>
            <p>
              To access certain features of the Website, including account
              registration or restricted areas, you may be required to provide
              personal information. This may include:
            </p>
            <ul>
              <li>
                <b>Account Registration Details:</b> Email address, phone
                number, identity proof, address proof, and other required
                documents (such as employment details or property ownership
                documents for owner users).
              </li>
              <li>
                <b>Transaction-Related Information:</b> When you engage
                SpotMySite services, we may collect details such as your name,
                email address, phone number, location, and service-related
                information.
              </li>
            </ul>
            <h3>Categories of Information Collected</h3>
            <ul>
              <li>
                <b>Owner Users:</b> Full name, contact details, and documents
                required to verify ownership or authorization.
              </li>
              <li>
                <b>Resident Users:</b> Full name, contact information, and
                location details as required for service delivery.
              </li>
            </ul>
            <h3>Cookies and Other Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to enhance user
              experience, understand Website usage, and improve our services.
              These technologies help us remember user preferences and analyze
              Website traffic. You may control or disable cookies through your
              browser settings. However, some features of the Website may not
              function properly if cookies are disabled.
            </p>
            <h3>Legal Basis for Collecting Information</h3>
            <p>We collect personal information based on:</p>
            <ul>
              <li>
                <b>User Consent:</b> Information shared voluntarily by you for
                service-related purposes.
              </li>
              <li>
                <b>Contractual Necessity:</b> Information required to fulfill
                service requests and related obligations.
              </li>
            </ul>
            <h3>Use of Information</h3>
            <p>
              SpotMySite uses personal information for the following purposes:
            </p>
            <ul>
              <li>
                <b>Service Delivery:</b> To operate the Website and provide the
                services you request.
              </li>
              <li>
                <b>Customer Support & Communication:</b> To respond to queries,
                address concerns, and provide service-related updates.
              </li>
              <li>
                <b>Notifications & Updates:</b> To share service information and
                essential communications.
              </li>
              <li>
                <b>Website Improvement & Analytics:</b> To understand usage
                patterns and improve our services and content.
              </li>
            </ul>
            <p>
              We may disclose personal information where required by law, to
              comply with legal processes, or to protect our rights, users, and
              operations.
            </p>
            <h3>Third-Party Services</h3>
            <p>
              The Website may contain links to or integrations with third-party
              websites or services, such as payment processors or mapping tools.
              These third parties operate independently and have their own
              privacy policies. SpotMySite is not responsible for the privacy
              practices of third-party services, and we encourage you to review
              their respective policies.
            </p>
            <h3>Data Retention and Deletion</h3>
            <p>
              Personal information is retained only for as long as necessary to
              fulfill the purpose for which it was collected, including legal
              and regulatory requirements. When the information is no longer
              required, it is securely deleted or anonymized.
            </p>
            <h3>Email Communication & Opt-Out</h3>
            <p>
              You may opt out of receiving non-essential communications by
              contacting us at <b>support@spotmysite.com</b>. Please note that
              essential service-related or transactional communications may
              still be sent.
            </p>
            <h3>Information Security</h3>
            <p>
              We use reasonable and appropriate security measures to protect
              personal information from unauthorized access, misuse, or loss.
              While we take data protection seriously, no system can guarantee
              complete security.
            </p>
            <h3>Children’s Privacy</h3>
            <p>
              SpotMySite services are not intended for individuals under 18
              years of age. We do not knowingly collect personal information
              from minors. If such information is identified, we will take
              appropriate steps to remove it promptly.
            </p>
            <h3>Changes to This Privacy Policy</h3>
            <p>
              This Privacy Policy may be revised periodically. The most current
              version will always be available on this page. Any significant
              changes will be communicated through the Website (typically by
              updating the “Last Updated” date) or via email, where appropriate.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us at <b>support@spotmysite.com</b>.
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
