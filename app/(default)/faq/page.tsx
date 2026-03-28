import Accordion from "@/components/accordion";
export const metadata = {
  title: "FAQ | SpotMySite",
  description:
    "Learn how SpotMySite collects, uses, and protects your personal information while delivering property services for NRIs and absentee owners.",
};

const faq = [
  {
    question: "What is Property Management?",
    answer:
      "A property management company takes care of your land or property when you can’t be there. They handle inspections, upkeep, and day-to-day issues to keep your property safe and well-maintained.",
  },
  {
    question: "What does SpotMySite actually do?",
    answer:
      "SpotMySite provides on-ground property services in Andhra Pradesh & Telangana. We inspect, verify, document, and protect your land or property when you can’t be there in person.",
  },
  {
    question: "How quickly can an inspection be done?",
    answer:
      "Most inspections, including land status checks or video walkthroughs, are completed within 24–48 hours, depending on the location.",
  },
  {
    question: "What kind of report will I receive?",
    answer:
      "You’ll get HD video, photos, GPS-tagged proofs, and a clear summary explaining the condition of your land or property.",
  },
  {
    question: "Do you cover both open plots and residential flats?",
    answer:
      "Yes. We inspect land, apartments, houses, gated community plots, and even under-construction sites.",
  },
  {
    question: "How do I schedule a service with SpotMySite?",
    answer:
      "Simply message us on WhatsApp or submit a request on our website. Our team will contact you to confirm the details and schedule the visit.",
  },
  {
    question: "Is my data kept private and secure?",
    answer:
      "Yes. All your photos, videos, documents, and property information are kept confidential and shared only with you.",
  },
  {
    question: "What if my land has issues like dumping or boundary problems?",
    answer:
      "We document the issue clearly during inspection and guide you with solutions like fencing, cleanup, or legal support, depending on the situation.",
  },
  {
    question: "Do you offer ongoing property monitoring?",
    answer:
      "Yes. Apart from one-time inspections, we offer custom monthly or quarterly monitoring plans to keep your property safe long-term.",
  },
  {
    question: "Can SpotMySite help with NRI loan assistance?",
    answer:
      "Yes. We coordinate with partner loan associates to help you with loan guidance, documentation, and bank follow-ups.",
  },
  {
    question: "How do I know your team actually visited the property?",
    answer:
      "You’ll receive timestamped photos, GPS coordinates, and real footage from the exact site, so you always know the visit is authentic.",
  },
  {
    question: "What if I need a second inspection?",
    answer:
      "If something is unclear or you want a recheck, we offer re-inspection options depending on the service type.",
  },
  {
    question: "Do you provide fencing and land cleanup services?",
    answer:
      "Yes. Based on the inspection results, we can arrange cleanup, bush/vegetation removal, boundary marking, and fencing work through our verified partners.",
  },
  {
    question: "Do I need to visit the property during the inspection?",
    answer:
      "No. You can stay anywhere; we handle everything and send digital updates. Travel is not required.",
  },
  {
    question: "How is SpotMySite different from a local agent or watchman?",
    answer:
      "We follow a standard, professional process with documented evidence. Every update comes with proof, not assumptions, giving you complete transparency.",
  },
  {
    question: "Where will these services be offered?",
    answer: "Andhra Pradesh & Telangana only.",
  },
  {
    question: "Who are your services mainly for?",
    answer:
      "Our services are ideal for out-of-state owners, NRIs, investors, and anyone managing property from a distance who wants trustworthy on-ground support.",
  },
  {
    question: "What if I want to verify a property before buying it?",
    answer:
      "SpotMySite offers pre-purchase verification services where our team visits the site, checks the surroundings, captures HD video and photos, and provides a clear on-ground status report so you can make an informed decision before investing.",
  },
  {
    question: "What is SpotMySite Marketplace?",
    answer:
      "SpotMySite Marketplace is a curated property platform serving Andhra Pradesh and Telangana. We publish carefully reviewed listings designed for secure and transparent transactions.",
  },
  {
    question: "How is SpotMySite different from other property portals?",
    answer:
      "Unlike open portals that prioritize volume, we prioritize credibility. Each property goes through a structured review process before being published, eliminating spam and misleading listings.",
  },
  {
    question: "Is my contact information made public?",
    answer:
      "No. We follow a privacy-first approach. Seller contact details are never displayed publicly, and buyer communication is managed in a controlled manner.",
  },
  {
    question: "What types of properties are listed?",
    answer:
      "We feature apartments, villas, open plots, agricultural land, and commercial properties across Andhra Pradesh and Telangana.",
  },
  {
    question: "How long does the review process take?",
    answer:
      "Once the required documents are submitted, properties are typically reviewed within a few business days.",
  },
  {
    question: "Is there a fee to list a property?",
    answer:
      "No, listing is free. We only charge for document verification to maintain platform integrity.",
  },
];

export default function FAQ() {
  return (
    <div className="mt-20">
      <section className="flex justify-center sec_careers " id="contact">
        <div className="container">
          <div className=" flex flex-row pt-5 max-lg:pt-5 max-md:flex-col-reverse">
            <div className=" overflow-hidden  px-12 pt-0 pb-2 max-lg:px-6 max-lg:pb-6 max-2xl:pb-0">
              <h1 className="text-3xl font-bold md:text-4xl font-(family-name:--font-heading)">
                FAQ's
              </h1>
              {/* <p className="mt-4 text-lg text-gray-700 font-(family-name:--font-content)">
                <b>Welcome to the FAQ Page</b>
              </p> */}
              <p className="mt-1 text-lg text-gray-700 font-(family-name:--font-content)">
                Here, you will find answers to commonly asked questions about
                our service and how to use it. If you encounter any issues or
                have additional questions, please feel free to reach out to our
                support team.
              </p>
            </div>
          </div>
          <div className=" flex flex-row pt-0 max-lg:pt-0 max-md:flex-col-reverse">
            <div className=" overflow-hidden  px-12 pt-0 pb-4 max-lg:px-6 max-lg:pb-6 max-2xl:pb-5">
              {/* Accordion card component */}
              <div id="accordion-card" className="space-y-4">
                <div className="my-10 mx-auto lg:px-16 space-y-4 lg:space-y-6">
                  {faq.map((item, index) => (
                    <Accordion title={item.question} id={index} key={index}>
                      {item.answer}
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
