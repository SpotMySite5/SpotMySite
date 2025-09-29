export const metadata = {
  title: "SpotMySite",
  description: "",
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
      <MainBanner />
      <ServicesComponent />
      <ContactUs />
    </>
  );
}
