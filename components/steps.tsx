import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function Steps() {
  return (
    <section
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-[var(--left-bg)] bg-cover bg-center bg-no-repeat mb-32"
      // style={{
      //   backgroundImage: `url(${PlanetOverlayImg.src})`,
      // }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-10">
            <h2 className="text-3xl font-(family-name:--font-service) font-bold text-white md:text-4xl">
              How do we work?
            </h2>
            <p className="mt-4 text-lg text-white font-(family-name:--font-content)">
              Our property management services in Telangana and Andhra Pradesh
              are continually refined using real client feedback, ensuring a
              smooth, flexible, and highly convenient experience designed around
              your needs.
            </p>
          </div>

          {/* <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div
                className="absolute inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]"
                style={{
                  left: "50%",
                  top: "100%",
                  transform: "translate(-50%, -0%)",
                }}
              >
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* Steps */}
          {/* <div className="mx-auto max-w-4xl mb-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              {[
                {
                  title: "Discover",
                  description:
                    "We inspect the property, understand owner goals and local market dynamics to build a tailored plan.",
                },
                {
                  title: "Onboard",
                  description:
                    "Professional listing creation, photography, pricing and legal setup so your property is guest-ready.",
                },
                {
                  title: "Manage",
                  description:
                    "End-to-end operations: guest communication, check-ins, cleaning coordination and maintenance.",
                },
                {
                  title: "Grow",
                  description:
                    "Continuous optimisation using data and feedback to increase occupancy and revenue.",
                },
              ].map((step, idx) => (
                <article
                  key={step.title}
                  className={
                    "bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl shadow-lg lg:w-[23%] transform transition-transform duration-300 " +
                    // alternate slant and vertical offset for a "slanted order" layout on large screens
                    (idx % 2 === 0
                      ? "lg:-rotate-3 lg:-translate-y-6"
                      : "lg:rotate-3 lg:translate-y-6")
                  }
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex-none w-10 h-10 rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-medium text-gray-100">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </article>
              ))}
            </div>
          </div> */}

          <div className="mx-auto max-w-4xl mb-12">
            <div className="relative flex flex-col lg:flex-col lg:items-start gap-6 max-md:-ml-4">
              {(() => {
                const steps = [
                  {
                    title: "Consultation & Property Inspection",
                    description:
                      "We begin by understanding your needs and conducting a detailed inspection of your property.",
                  },
                  {
                    title: "Assessment & Customised Action Plan",
                    description:
                      "We develop a tailored action plan based on inspection insights and your specific goals.",
                  },
                  {
                    title: "Transparent Implementation",
                    description:
                      "Your dedicated manager executes the plan with clarity, consistency, and complete transparency.",
                  },
                  {
                    title: "Ongoing Maintenance & Monitoring",
                    description:
                      "We continuously maintain and monitor your property, providing easy access to all updates through our portal.",
                  },
                ];
                const total = steps.length;
                const cardWidthPct = 65; // must match lg:w-[65%]
                const maxShiftPct = 100 - cardWidthPct; // how far the last card should shift to reach right edge

                return steps.map((step, idx) => {
                  const shiftPct =
                    total > 1 ? idx * (maxShiftPct / (total - 1)) : 0;
                  return (
                    <div
                      key={step.title}
                      className="w-full lg:w-[65%] flex items-center lg:relative lg:left-[var(--shift)]"
                      style={{
                        ["--shift" as any]: `${shiftPct}%`,
                        transformOrigin: "left top",
                        zIndex: idx + 1,
                      }}
                    >
                      <div className="relative flex-none w-26 h-26 mr-1">
                        <svg
                          className="absolute inset-0 w-full h-full"
                          viewBox="0 0 54 54"
                          aria-hidden
                        >
                          {/* track */}
                          <circle
                            cx="27"
                            cy="27"
                            r="16"
                            fill="none"
                            stroke="#374151"
                            strokeWidth="4"
                          />
                          {/* animated stroke (fills clockwise) */}
                          <circle
                            cx="27"
                            cy="27"
                            r="16"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="4"
                            strokeDasharray="100"
                            strokeDashoffset="100"
                            strokeLinecap="round"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              from="100"
                              to="0"
                              dur="1000ms"
                              begin={`${idx * 500}ms`}
                              fill="freeze"
                            />
                          </circle>
                        </svg>

                        <div className="relative text-3xl z-10 w-full h-full rounded-full flex items-center justify-center text-white font-semibold">
                          {idx + 1}
                        </div>
                      </div>

                      <article
                        key={step.title}
                        className={
                          "bg-gradient-to-br from-gray-600/50 to-black/20 p-3 py-2 rounded-2xl shadow-xl  transform transition-transform duration-300"
                        }
                        // shift each card progressively to the right so the last one reaches the right edge
                      >
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-bold text-white font-(family-name:--font-service)">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-white font-(family-name:--font-content)">
                          {step.description}
                        </p>
                      </article>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
