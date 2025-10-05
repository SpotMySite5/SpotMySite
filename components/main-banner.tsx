import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
// import videoSource from "@/public/videos/bg-video.mp4";

export default function MainBanner() {
  return (
    <section className="relative bg-gray-900 max-lg:rounded-bl-lg sec_1 2xl:container 2xl:mx-auto 2xl:overflow-hidden">
      <div className="mx-auto">
        <div className=" flex flex-row max-lg:flex-col-reverse gap-8 md:gap-12">
          {/* Section header */}
          <div className="banner_left basis-3/7 max-lg:basis-full mx-auto max-w-3xl pl-24 pr-12 lg:pt-0 lg:pb-0 lg:my-auto pb-24 max-lg:pt-0 max-lg:pb-10 max-lg:px-6 md:pb-20">
            <h5 className="font-bold text-white font-(family-name:--font-service) text-3xl">
              Your Property,
              <br /> Verified for Peace of Mind.
            </h5>
            {/* <h2 className="text-lg font-medium font-(family-name:--font-service) text-white "></h2> */}
            <p className="mt-4 text-md text-white font-(family-name:--font-service)">
              <b>SpotMySite</b> Provides Property Services for NRIs & Absentee
              Owners in Andhra Pradesh & Telangana from Inspections to Legal
              Support, Delivered with Transparency and Trust...
              <small>
                <a className="link" href="/about">
                  Explore More
                </a>
              </small>
            </p>
          </div>
          {/* Grid */}
          <div className="banner_right basis-4/7 max-lg:basis-full overflow-hidden  text-center flex-shrink-0">
            {/* video */}
            <div className=" w-full h-100 max-lg:h-auto">
              <video
                className="shadow-lg object-fill w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
