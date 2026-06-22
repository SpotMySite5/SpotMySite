export const metadata = {
  title: "Property Management Insights for NRIs in India",
  description:
    "Read expert insights on property management, land verification, and common risks NRIs face while owning property in india.",
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

const articles = [
  {
    id: "1",
    title:
      "What Are Property Management Services in India? How Do They Benefit NRIs?",
    date: "2025-12-01",
    image: "/images/blog/blog1.png",
    url: "/blog/property-management-services-india",
    content: {
      title:
        "Why NRIs Should Consider Property Management Services for Their Properties in India.",
      paragraphs: [
        "Owning property in India is often a cherished aspiration for Non-Resident Indians (NRIs). However, managing property remotely, especially when you're based abroad, can quickly become overwhelming. From ensuring the property is in good condition to handling legal issues and monitoring property activities, the responsibilities can pile up. This is why NRIs should seriously consider property management services like those offered by SpotMySite, which cater specifically to absentee owners in Andhra Pradesh and Telangana.",
      ],
      toc: [
        {
          title: "1. Comprehensive Property Inspections and Reporting",
          paragraphs: [
            "One of the primary challenges for NRIs is staying updated on the condition of their property. With SpotMySite’s Property Video Inspections, you can get a virtual, detailed look at your property, no matter where you are in the world. This service helps you verify the physical state of your property without the need for frequent, costly visits. SpotMySite ensures transparency and peace of mind by providing clear, visual evidence of your property’s condition, which is crucial for making informed decisions about maintenance and upkeep.",
          ],
        },
        {
          title: "2. Legal Support and Documentation",
          paragraphs: [
            "Navigating legal complexities from abroad can be a daunting task. Property-related legalities in India, from title disputes to encumbrances, can pose significant challenges for NRIs. SpotMySite simplifies this process by offering Property Buy & Sell Legal Assistance. Their legal team provides expert support throughout property transactions, ensuring compliance with local laws and a hassle-free process. Whether you're buying, selling, or transferring property, SpotMySite ensures all your documentation is handled meticulously.",
          ],
        },
        {
          title: "3. Land Status Check and Cleanup Services",
          paragraphs: [
            "If you own land in rural areas or undeveloped plots, ensuring that the property is not encroached upon and remains well-maintained is crucial. SpotMySite offers a Land Status Check, which provides you with an updated and verified report on the legal and physical status of your land. Additionally, they provide Land Cleanup & Vegetation Removal services, ensuring that your property remains in prime condition, preventing it from becoming overgrown or neglected.",
          ],
        },
        {
          title: "4. Secure Boundaries and Infrastructure",
          paragraphs: [
            "For those with land or properties requiring additional security measures, SpotMySite offers Fence & Boundary Installation services. Whether you need a protective fence to demarcate your property or secure your premises against unauthorized access, SpotMySite provides reliable solutions that cater to your property’s needs. This service is especially useful for NRIs who may not be able to regularly monitor or maintain security measures.",
          ],
        },
        {
          title: "5. Remote Buyer Walkthrough",
          paragraphs: [
            "For NRIs looking to buy property in India or assess a potential investment, SpotMySite’s Remote Buyer Walkthrough service offers an innovative solution. This service allows you to view properties via a live, guided virtual tour, offering a detailed perspective of the property from the comfort of your home abroad. You can ask questions, request specific angles or features, and get a real-time evaluation without being physically present.",
          ],
        },
        {
          title: "6. Loan Assistance",
          paragraphs: [
            "If you're looking to purchase property or secure financing in India, SpotMySite’s Loan Assistance Services can help navigate the complexities of securing loans from Indian banks or financial institutions. They offer tailored advice and support, ensuring you understand all aspects of the loan application process and securing the best terms available.",
          ],
        },
        {
          title: "7. Long-Term Peace of Mind",
          paragraphs: [
            "With SpotMySite, NRIs can rest easy knowing that their property is managed with the utmost care and attention. SpotMySite’s commitment to transparency and trust ensures that you receive regular updates, clear communication, and reliable services that give you peace of mind. Whether it’s handling routine maintenance, resolving tenant issues, or ensuring legal compliance, SpotMySite acts as your trusted partner in property management.",
          ],
        },
        {
          title: "The Bottom Line",
          paragraphs: [
            "Managing property in India as an NRI can be a challenging and stressful experience, but with SpotMySite’s comprehensive range of property services, those challenges can be significantly reduced. From property inspections and legal assistance to land status checks and security measures, SpotMySite ensures that your property is well taken care of, no matter where you are in the world. By opting for these professional services, NRIs can safeguard their investments, streamline property management tasks, and avoid unnecessary stress.",
            "Reach out to SpotMySite today to learn more about how their services can make property management in India easier and more efficient for you.",
          ],
        },
      ],
    },
  },
  {
    id: "2",
    title: "The Biggest Responsibilities of Property Management Services",
    date: "2025-12-15",
    image: "/images/blog/blog2.png",
    url: "/blog/property-management-responsibilities",
    content: {
      title:
        "Key Responsibilities Every Property Management Service Must Handle",
      paragraphs: [
        "Effective property management goes far beyond just collecting rent and handling minor repairs. It involves a complex set of responsibilities that collectively ensure property owners enjoy a solid return on their investment and tenants experience a safe, comfortable living environment. At its core, successful property management revolves around three major pillar,: property maintenance, tenant management, and legal compliance. These core areas form the backbone of what professional property managers do day in and day out.",
      ],
      toc: [
        {
          title: "1. Property Maintenance: Protecting the Investment",
          paragraphs: [
            "One of the most critical responsibilities of any property management service is ensuring the property is well-maintained. A property that is clean, functional, and visually appealing not only attracts desirable tenants but also retains long‑term occupants, reducing vacancy periods and protecting the property’s value.",
            "Property maintenance includes routine tasks such as landscaping, cleaning common areas, and regular upkeep. Beyond these daily chores, preventative maintenance plays a crucial role. This involves systematic inspections and servicing of critical systems like HVAC, plumbing, roofing, pest control, and electrical equipment to catch issues early before they become costly repairs. When property problems do arise unexpectedly, such as a broken water heater or electrical failure, prompt emergency repairs are essential to keep tenants satisfied and prevent damage to the property.",
            "Another aspect of maintenance is vendor and contractor coordination. Property managers usually maintain relationships with trusted service providers, including plumbers, electricians, landscapers, cleaners, and security personnel. By working with reliable vendors, property managers can ensure quality work at fair rates, keeping both costs and tenant complaints to a minimum.",
          ],
        },
        {
          title: "2. Tenant Management: Creating Harmony and Stability",
          paragraphs: [
            "The second central responsibility of property management revolves around tenants. A property manager essentially acts as the liaison between the property owner and the tenants, balancing the needs of both parties.",
            "A major part of tenant management is screening and selecting suitable tenants. Good screening processes involve thorough background checks, income verification, and rental history reviews. Selecting the right tenant is essential because reliable tenants are likely to pay rent on time, follow the lease terms, and care for the property.",
            "Once tenants are in place, property managers are responsible for rent collection and financial tracking. This includes monitoring payments, handling late or missed rent, and ensuring landlord expectations are met. Many property management services use software and online portals to streamline rent payment, automate reminders, and keep accurate records, which helps reduce human error and improve efficiency.",
            "Handling tenant complaints and disputes is another ongoing task. Tenants may raise issues about maintenance requests, neighbor conflicts, or lease concerns. Property managers must respond promptly and fairly, coordinating with vendors when necessary and mitigating disputes before they escalate. Strong communication and conflict‑resolution skills are, therefore, vital competencies.",
          ],
        },
        {
          title: "3. Legal Compliance: Staying Within the Law",
          paragraphs: [
            "Property management cannot be effective without a solid grasp of the legal environment governing real estate. There are laws at the local, state, and federal levels that govern rental properties, tenant rights, safety standards, fair housing, and eviction procedures. Property managers must stay up to date with these regulations to protect both the owner’s interests and the tenants’ rights.",
            "This includes drafting lease agreements that comply with rental laws, articulating clear terms for rent, deposits, lease durations, and responsibilities, and updating those agreements when legal standards evolve. In addition to leases, property managers must ensure the property meets all safety and building codes, conducting regular inspections for hazards such as mold, faulty wiring, or structural issues.",
          ],
        },
        {
          title: "4. Balancing Responsibilities for Peak Performance",
          paragraphs: [
            "Successfully managing a property means finding a balance between maintenance duties, tenant relations, and legal requirements. To achieve this balance, many property management services incorporate best practices such as:",
            "Using property management software to centralize records, maintenance requests, rent collection, and communication.",
            "Establishing clear communication channels so landlords, tenants, and service providers are all informed and aligned.",
            "Scheduling regular inspections and preventative maintenance to reduce long‑term costs and ensure safety.",
            "Staying educated on applicable laws and regulations to avoid legal complications.",
            "Cultivating a robust network of contractors, legal professionals, and real estate experts who can offer expertise and support when challenges arise.",
          ],
        },
        {
          title: "The Bottom Line",
          paragraphs: [
            "Property management services play a crucial role in preserving investment value and creating a positive, well‑run living or working environment. By prioritizing diligent property maintenance, effective tenant management, and strict legal compliance, property managers support landlords in achieving consistent income and tenants in enjoying a comfortable, secure place to live. While the day‑to‑day demands are significant, mastering these core responsibilities leads to smoother operations, lasting tenant relationships, and a thriving property portfolio.",
          ],
        },
      ],
    },
  },
  {
    id: "3",
    title: "What Happens When a Property Is Left Unchecked",
    date: "2026-01-01",
    image: "/images/blog/blog3.png",
    url: "/blog/property-left-unchecked",
    content: {
      title: "What Happens When a Property Is Left Unchecked",
      paragraphs: [
        "Property ownership often brings a sense of completion. Once the purchase is finalized and documents are secured, many owners assume the major responsibilities are behind them. Over time, attention shifts elsewhere, work, family, or new priorities, and the property slowly fades into the background.",
        "However, property does not remain unchanged simply because it is out of sight.",
      ],
      toc: [
        {
          title: "Property Continues to Change Over Time",
          paragraphs: [
            "Every property exists within an environment that is constantly evolving. Surrounding development, weather conditions, access points, and human activity all influence a property’s condition. Even properties that remain unused continue to age and respond to these external factors.",
            "Boundaries may become less visible, structures experience natural wear, and surrounding areas may change in ways that affect usability or value. What once seemed familiar may no longer reflect the current situation on the ground.",
          ],
        },
        {
          title: "Gradual Issues Are Often Overlooked",
          paragraphs: [
            "Most property-related issues do not appear suddenly. They develop gradually and often go unnoticed for extended periods.",
            "Minor wear, overgrowth, unclear boundaries, or changes in nearby activity may seem insignificant at first. Individually, these issues rarely demand immediate attention. Over time, however, they accumulate and become more difficult to address.",
            "Unchecked properties often face challenges not because of neglect, but because early signs were easy to overlook.",
          ],
        },
        {
          title: "Information Gaps Increase Over Time",
          paragraphs: [
            "When a property remains unchecked, owners may rely on assumptions or outdated information rather than current facts. Occasional updates or second-hand information rarely provide a complete picture of the property’s actual condition.",
            "As time passes, the gap between perception and reality can widen. This lack of clarity often becomes evident when owners need to make important decisions regarding the property.",
            "Staying informed helps reduce uncertainty and supports better decision-making.",
          ],
        },
        {
          title: "Impact on Property Value and Flexibility",
          paragraphs: [
            "A property’s value is influenced not only by market conditions but also by its physical condition, accessibility, and surrounding context.",
            "When properties are left unattended, flexibility can gradually diminish. Actions such as selling, developing, or repurposing a property may require additional effort, verification, or corrective measures that could have been avoided earlier.",
            "Addressing issues sooner helps preserve both value and options.",
          ],
        },
        {
          title: "Awareness Supports Long-Term Ownership",
          paragraphs: [
            "Maintaining awareness does not require constant involvement. It simply means having a clear understanding of the property’s current state.",
            "Awareness allows owners to:",
            "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 1. Identify changes early",
            "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 2. Avoid unexpected complications",
            "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 3. Make informed decisions with confidence",
            "It transforms property ownership from a passive experience into a well-informed one.",
          ],
        },
        {
          title: "Closing Perspective",
          paragraphs: [
            "Properties perform best when they are treated as ongoing responsibilities rather than one-time transactions.",
            "Leaving a property unchecked does not always result in immediate problems, but it often leads to uncertainty. When attention eventually returns to the property, that uncertainty can complicate decisions.",
            "Staying informed is not about anticipating problems, it is about ensuring clarity, confidence, and preparedness when decisions need to be made.",
          ],
        },
      ],
    },
  },
  {
    id: "4",
    title: "Decision-Making Depends on Current Information",
    date: "2026-01-15",
    image: "/images/blog/blog4.png",
    url: "/blog/decision-making-depends",
    content: {
      title: "Decision-Making Depends on Current Information",
      paragraphs: [
        "Property decisions in property management are shaped by the information available at the moment they are made. Whether a decision relates to maintenance planning, financial commitments, future use, or long-term strategy, the quality of the outcome often depends on how current that information is. Property is not static, and decisions based on outdated understanding can gradually lose relevance as conditions change.",
        "Most property information is gathered at specific points in time, during purchase, handover, or initial documentation. At that stage, details about condition, surroundings, and access accurately reflect reality. As time passes, however, properties continue to evolve. Physical wear occurs naturally, nearby development progresses, usage patterns shift, and regulatory expectations may change. Without periodic updates, information that was once reliable becomes less aligned with present conditions.",
        "In many cases, familiarity replaces verification. Owners and stakeholders rely on memory, prior records, or assumptions formed years earlier. While this may feel sufficient when no obvious issues are visible, it introduces uncertainty into decision-making. When changes occur quietly, decisions made on outdated assumptions often require later adjustments, sometimes at inconvenient times.",
        "Current information helps reduce this uncertainty by providing a clearer picture of what exists today rather than what existed in the past. With updated insight, decisions tend to be more deliberate, better timed, and easier to execute. Planning becomes more accurate, priorities are clearer, and unexpected obstacles are less likely to arise during implementation.",
        "Timing also plays a significant role in property-related decisions. Many actions are sensitive to scheduling, coordination, and market conditions. Delays caused by incomplete or outdated information can affect feasibility and efficiency. Access to current information allows decisions to be made proactively rather than reactively, helping preserve flexibility and control.",
        "As properties are held over longer periods, the importance of updated understanding increases. Long-term ownership introduces layers of change that are not always visible through documentation alone. Decisions made later in the ownership cycle often carry greater impact, making it essential that they are based on present conditions rather than historical context.",
        "In property management, information functions as an operational tool rather than static documentation. When information is current, decision-making becomes more structured and predictable. When it is not, decisions are more likely to be reactive and uncertain.",
        "Ultimately, effective property decisions rely on relevance. While past information provides valuable background, it cannot substitute for present insight. Decisions grounded in current information are better aligned with reality and better suited to long-term outcomes.",
      ],
      toc: [],
    },
  },
  {
  "id": "5",
  "title": "Why Property Video Inspection Services Are Essential for NRI Property Owners",
  "date": "2026-06-22",
  "image": "/images/blog/blog5.png",
  "url": "/blog/property-video-inspection-services-nri",
  "content": {
    "title": "Why Property Video Inspection Services Are Essential for NRI Property Owners",
    "paragraphs": [
      "Owning a property in India while living abroad can be challenging. Whether it's a villa, apartment, independent house, commercial building, office space, or an under-construction property, staying updated is not always easy. You may receive updates from relatives, tenants, or neighbors, but nothing gives more confidence than seeing the property yourself. That's where Property Video Inspection Services become valuable."
    ],
    "toc": [
      {
        "title": "1. See Your Property Without Traveling",
        "paragraphs": [
          "Traveling to India every time you want to check your property is not practical. A professional video inspection allows you to view the current condition of your property through detailed videos and photographs, no matter where you are in the world."
        ]
      },
      {
        "title": "2. Get Real-Time Property Updates",
        "paragraphs": [
          "Property conditions can change over time. Maintenance issues, tenant-related concerns, or construction delays often go unnoticed when owners live abroad. Regular video inspections provide clear and updated information about your property's current status."
        ]
      },
      {
        "title": "3. Monitor Tenant Occupancy",
        "paragraphs": [
          "If your property is rented out, you may want to know whether it is being maintained properly. A video inspection helps you verify occupancy status, general upkeep, and the overall condition of the property without depending solely on verbal updates."
        ]
      },
      {
        "title": "4. Track Construction Progress",
        "paragraphs": [
          "For under-construction villas, apartments, or commercial projects, regular inspections provide visibility into ongoing work. You can easily review construction progress and understand how the project is moving forward without making frequent site visits."
        ]
      },
      {
        "title": "5. Identify Maintenance Issues Early",
        "paragraphs": [
          "Small maintenance problems can quickly turn into costly repairs if they are not addressed on time. Regular Property Video Inspections help property owners identify visible issues such as water leakage, wall cracks, damaged interiors, poor upkeep, and general wear and tear. By detecting these concerns early, owners can take corrective action before the damage worsens, helping maintain the property's condition and value over time."
        ]
      },
      {
        "title": "6. Save Time and Travel Costs",
        "paragraphs": [
          "Many NRI property owners spend significant time and money traveling just to verify the condition of their property. Video inspections provide a convenient alternative by delivering accurate visual updates directly to your phone or email."
        ]
      },
      {
        "title": "7. Make Better Property Decisions",
        "paragraphs": [
          "Whether you are planning to rent, sell, renovate, or maintain your property, having current information is important. Video inspection reports help you make decisions based on actual property conditions rather than assumptions."
        ]
      },
      {
        "title": "8. Peace of Mind for NRI Property Owners",
        "paragraphs": [
          "The biggest advantage of a property video inspection is peace of mind. Knowing that your villa, apartment, house, or commercial property is being professionally inspected and documented helps you stay connected to your investment from anywhere in the world."
        ]
      },
      {
        "title": "Conclusion",
        "paragraphs": [
          "Distance should never prevent you from knowing what is happening with your property. Property Video Inspection Services provide NRI property owners with real-time visibility, reliable updates, and complete transparency. Whether you own a residential or commercial property, regular inspections help protect your investment and keep you informed without the need for frequent travel."
        ]
      }
    ]
  }
},
];

const featured = articles[0];
export const posts = articles.slice(0);

const postsSchema = posts.map((p) => ({
  "@type": "BlogPosting",
  headline: p.title,
  url: `https://spotmysite.com${p.url}`,
  datePublished: p.date,
  image: [`https://spotmysite.com${p.image}`],
  author: { "@type": "Organization", name: "SpotMySite" },
}));

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...schema["@graph"],
    {
      "@type": "Blog",
      "@id": "https://spotmysite.com/blog/#blog",
      name: "SpotMySite Blog",
      url: "https://spotmysite.com/blog/",
      isPartOf: { "@id": "https://spotmysite.com/#website" },
      blogPost: postsSchema,
    },
  ],
};
export default function Blogs() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-32">
      {/* Hero / Featured */}
      {/* <section className="mb-12">
        <div className="relative rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-[420px] object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="p-8 md:p-12 text-white max-w-3xl">
              <p className="text-sm uppercase tracking-wider text-white/80">
                Newsroom •{" "}
                {new Date(featured.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                {featured.title}
              </h1>
              <p className="mt-4 text-white/90 max-w-2xl">{featured.excerpt}</p>
              <a
                href={featured.url}
                className="inline-block mt-6 rounded bg-white/95 text-black px-5 py-2 font-medium shadow-sm hover:opacity-90"
              >
                Read story
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section className="grid grid-cols-6 my-12">
        <h1 className="col-span-6 text-3xl text-center font-(family-name:--font-service) font-bold mb-6 md:text-4xl">
          From Our Blog
        </h1>
        <p className=" col-span-4 col-start-2 text-center ml-auto text-lg text-gray-700 font-(family-name:--font-content)">
          Insights, tips, and stories about NRI property management,
          inspections, fencing, and legal support in Andhra Pradesh and
          Telangana.
        </p>
      </section>

      {/* Main grid */}
      <section className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
            <style>{`
              /* add a small clock icon before the post date */
              .group .text-xs.text-gray-500 {
                position: relative;
                padding-left: 20px;
              }
              .group .text-xs.text-gray-500::before {
                content: "";
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 14px;
                height: 14px;
                background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='8'/><path d='M12 8v5l3 3'/></svg>");
                background-repeat: no-repeat;
                background-size: 14px 14px;
              }
            `}</style>
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-4xl overflow-hidden border border-transparent shadow hover:shadow-lg transition-shadow bg-white"
              >
                <a href={post.url} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-500">
                      {(() => {
                        const now = Date.now();
                        const then = new Date(post.date).getTime();
                        const diffMs = Math.max(0, now - then);
                        const diffDays = Math.floor(
                          diffMs / (1000 * 60 * 60 * 24),
                        );

                        if (diffDays === 0) return "Today";
                        if (diffDays === 1) return "1 day ago";
                        if (diffDays < 30) return `${diffDays} days ago`;

                        const diffMonths = Math.floor(diffDays / 30);
                        if (diffMonths === 1) return "1 month ago";
                        if (diffMonths < 12) return `${diffMonths} months ago`;

                        const diffYears = Math.floor(diffDays / 365);
                        return diffYears === 1
                          ? "1 year ago"
                          : `${diffYears} years ago`;
                      })()}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
                    {/* <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p> */}
                    <span className="inline-block mt-4 text-sm text-blue-600">
                      Read more →
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {/* Pagination (simple) */}
          <nav aria-label="Pagination" className="flex justify-center">
            <ul className="inline-flex items-center gap-2">
              <li>
                <a className="px-3 py-2 rounded border bg-gray-200 text-sm">
                  &lt;
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 rounded border  bg-black text-white text-sm"
                  href="/blog?page=1"
                >
                  1
                </a>
              </li>
              <li>
                <a className="px-3 py-2 rounded border bg-gray-200 text-sm">
                  &gt;
                </a>
              </li>
              {/* <li>
                <a
                  className="px-3 py-2 rounded border bg-black text-white text-sm"
                  href="/blog?page=2"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 rounded border text-sm"
                  href="/blog?page=3"
                >
                  3
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </section>

      {/* Structured data for page + posts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
    </div>
  );
}
