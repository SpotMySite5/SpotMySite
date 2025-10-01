export const metadata = {
  title:
    "SpotMySite | Property Management & NRI Services in Andhra Pradesh & Telangana",
  description:
    "Reliable Property Management Services for NRIs & Absentee Owners in Andhra Pradesh & Telangana. Inspections, Land Checks, Fencing, Loans & Legal Support.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import MainBanner from "@/components/main-banner";
import ServicesComponent from "@/components/services-home";
import ContactUs from "@/components/contact-us";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <MainBanner />
        <ServicesComponent />
        <ContactUs />
      </div>
    </>
  );
}
