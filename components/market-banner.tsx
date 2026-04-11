import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
// import videoSource from "@/public/videos/bg-video.mp4";

export default function MarketBanner() {
  return (
    <section className="relative max-lg:rounded-bl-lg 2xl:container 2xl:mx-auto 2xl:overflow-hidden">
      <div className="container-fluid mx-auto">
        <div className=" flex flex-row max-lg:flex-col-reverse gap-8 md:gap-12">
          {/* Section header */}
          <div className="banner_left basis-3/7 max-lg:basis-full mx-auto max-w-3xl max-lg:mx-w-8xl max-lg:mx-6 max-md:mx-4 pl-12 pr-12 lg:pt-0 lg:pb-0 lg:my-auto pb-24 max-lg:pt-0 max-lg:pb-10 max-lg:px-6 md:pb-20">
            <h1 className="font-bold font-(family-name:--font-service) text-3xl">
              <br className="max-lg:hidden" />{" "}
              <span className="text-2xl">
                Welcome To SpotMySite Marketplace
              </span>
            </h1>
            {/* <h2 className="text-lg font-medium font-(family-name:--font-service) text-white "></h2> */}
            <p className="mt-4 text-md font-(family-name:--font-service)">
              Find your dream property with verified listings in trusted
              platform...{" "}
              <small>
                <a
                  className="link whitespace-nowrap text-xs text-blue-600 font-semibold"
                  href="/marketplace/about"
                >
                  Explore More
                </a>
              </small>
            </p>
          </div>
          {/* Grid */}
          <div className="banner_right basis-4/7 max-lg:basis-full overflow-hidden  text-center flex-shrink-0">
            {/* video */}
            <div className=" w-full h-72 max-md:h-52 max-lg:h-64">
              {/* <img
                src="/images/marketbg.png"
                alt="Market Banner"
                className="shadow-lg object-fill w-full h-full"
              /> */}
              <video
                className="shadow-lg object-fill w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/market-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
