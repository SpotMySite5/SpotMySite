export const metadata = {
  title: "Terms & Conditions | SpotMySite Property Services",
  description:
    "Review SpotMySite’s terms and conditions covering property services, payments, responsibilities, and legal usage policies.",
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
export default function TermsAndConditions() {
  return (
    <div className="mt-20 service_letter about_sec max-lg:p-12 max-md:p-8 max-lg:pt-0">
      <h1 className="text-center text-3xl font-(family-name:--font-service) font-bold md:text-4xl">
        Terms & Conditions
      </h1>
      <div className="letter space-bottom--xxx-large space-top--x-large mt-10">
        <div className="letter__container">
          <div className="letter__article">
            <p>
              These general terms and conditions (the “Terms”) govern the
              agreement between SpotMySite and its clients/customers. By
              engaging with SpotMySite’s services, clients agree to these Terms
              and Conditions.
            </p>
            <h2>Definitions:</h2>
            <ul>
              <li>
                <b>SpotMySite</b> refers to the company providing services, with
                its registered office located at [office address].
              </li>
              <li>
                <b>Client/Customer</b> refers to any natural or legal person
                with whom SpotMySite has entered into an agreement or intends to
                do so.
              </li>
              <li>
                <b>Agreement</b> refers to any agreement between SpotMySite and
                a client wherein SpotMySite undertakes to carry out specific
                services or activities.
              </li>
              <li>
                <b>Services/Activities</b> refers to the tasks and services that
                SpotMySite is contractually bound to perform, which may include
                site visits, administrative, financial, or technical management,
                or any other services defined in the agreement.
              </li>
              <li>
                <b>Written</b> refers to both traditional forms of written
                communication and digital written communication when applicable,
                with the physical forms being kept at SpotMySite’s registered
                office for reference.
              </li>
            </ul>
            <h2>Terms and Conditions</h2>
            <ol>
              <li>
                <p>
                  <b>Quotations and Client Responsibility:</b>
                </p>
                <p>
                  SpotMySite's quotations are based on the information provided
                  by the client. Incomplete or incorrect details may render the
                  quotation invalid, and the client will not be entitled to
                  derive any rights from such quotations.
                </p>
              </li>
              <li>
                <p>
                  <b>Misrepresentation and Legal Issues:</b>
                </p>
                <p>
                  In case of property misrepresentation or any legal disputes,
                  SpotMySite reserves the right to cancel the contract, and 50%
                  of the total payment made by the client shall be forfeited.
                  Any such disputes will be subject to arbitration or another
                  competent authority, as agreed by both parties.
                </p>
              </li>
              <li>
                <p>
                  <b>Scope of Obligations:</b>
                </p>
                <p>
                  SpotMySite is only responsible for fulfilling obligations that
                  are expressly outlined in the agreement with the client. Any
                  additional obligations outside the scope of the agreement are
                  not binding.
                </p>
              </li>
              <li>
                <p>
                  <b>Payment Terms:</b>
                </p>
                <p>
                  SpotMySite does not accept cash payments. Clients are strongly
                  advised not to make any cash payments in any form to
                  SpotMySite employees, agents, contractors, or vendors, unless
                  specifically communicated in writing by authorised
                  representatives of the company. Any breaches of this policy
                  should be reported to SpotMySite immediately.
                </p>
              </li>
              <li>
                <p>
                  <b>Property Location:</b>
                </p>
                <p>
                  The client is required to provide the exact location of the
                  property, either personally or through an authorised
                  representative, upon onboarding with SpotMySite.
                </p>
              </li>
              <li>
                <p>
                  <b>Service and Onboarding Price:</b>
                </p>
                <p>
                  The price for onboarding is subject to the Service selected by
                  the client. The offer provided by SpotMySite is revocable or
                  subject to change depending on the chosen Service during the
                  onboarding process, or upon execution of a final agreement.
                </p>
              </li>
              <li>
                <p>
                  <b>Site/Property Cleaning:</b>
                </p>
                <p>
                  The Service price includes cleaning services within the
                  boundaries of the property, such as vegetation removal.
                  However, it excludes demolition of existing buildings,
                  clearing debris, and cutting. These additional services can be
                  provided as add-ons and will be charged separately.
                </p>
              </li>
              <li>
                <p>
                  <b>Additional Work and Costs:</b>
                </p>
                <p>
                  SpotMySite acknowledges the possibility of additional work
                  being required. If additional services or activities are
                  needed, SpotMySite will delay the execution of such activities
                  until the client agrees to the additional costs and terms. Any
                  delay in providing these additional services does not
                  constitute a default on SpotMySite's part.
                </p>
              </li>
              <li>
                <p>
                  <b>Changes in Terms and Prices:</b>
                </p>
                <p>
                  The prices, terms, and conditions provided are indicative and
                  subject to change without prior notice. Clients are
                  responsible for periodically checking for updates to these
                  terms.
                </p>
              </li>
              <li>
                <p>
                  <b>Payment Delays and Contract Cancellation:</b>
                </p>
                <p>
                  Timely payments are essential. Any delay in payment may lead
                  to the cancellation of the contract. If the client cancels the
                  contract more than 15 days after the onboarding/payment, 50%
                  of the total payment will be forfeited, in addition to the
                  travel costs incurred during the site visit.
                </p>
              </li>
              <li>
                <p>
                  <b>Complaints and Resolution:</b>
                </p>
                <p>
                  In case of a complaint, the client must provide a detailed
                  description of the issue, allowing SpotMySite to respond and
                  address it appropriately. If the complaint is valid,
                  SpotMySite will make reasonable efforts to resolve the issue
                  and provide services in the correct manner.
                </p>
              </li>
              <li>
                <p>
                  <b>Property Ownership and Third Parties:</b>
                </p>
                <p>
                  Contracts are made solely in favour of the property/landowner.
                  Any third parties representing the owner are not covered by
                  these terms.
                </p>
              </li>
              <li>
                <p>
                  <b>Legal Disputes:</b>
                </p>
                <p>
                  Any legal disputes arising during the provision of services
                  shall be resolved through arbitration or another competent
                  authority, as agreed by both parties. The costs for such
                  arbitration will be charged separately based on actual costs.
                </p>
              </li>
            </ol>
            <h2>Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of India. The courts located in
              <b>Hyderabad, Telangana</b>, shall have exclusive jurisdiction
              over any disputes arising out of or in connection with these
              Terms, the Agreement, or the services provided by SpotMySite.
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
