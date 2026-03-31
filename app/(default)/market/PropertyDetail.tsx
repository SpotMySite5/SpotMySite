// ...existing code...
"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { TbBuildingCommunity } from "react-icons/tb";
import { BiArea } from "react-icons/bi";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { BsSunrise } from "react-icons/bs";
import { PiSunHorizonBold } from "react-icons/pi";
import { PiStairs } from "react-icons/pi";
import { BsCalendarWeek } from "react-icons/bs";
import { PiSealCheckBold } from "react-icons/pi";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
type TocItem = {
  title?: string;
  paragraphs?: string[];
};

type Property = {
  id: string;
  title: string;
  price?: string | number;
  subprice?: string; // e.g. price per sq.ft
  type?: string;
  images?: string[]; // gallery images
  image?: string;
  imageCaption?: string;
  url?: string;
  excerpt?: string;
  // content can be either plain text or a structured object with optional title and table-of-contents
  content?: { title?: string; paragraphs?: string[] }[];
  propertyFeatures?: { title: string; details: string[] }[];
  contentHtml?: string; // preferred: safe HTML (server sanitized)
  features?: { key: string; value?: string }[];
  location?: string;
  author?: string;
  propertyDetails?: {
    bedrooms?: number;
    bathrooms?: number;
    type?: string;
    plotArea?: string;
    builtArea?: string;
    facing?: string;
    totalFloors?: string | number;
    floorNo?: string | number;
    age?: string;
    approvedBy?: string;
    amenities?: string[];
  };
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function PropertyDetail({ property }: { property: Property }) {
  const form = useRef<any>(null);
  const [phone, setPhone] = useState("");
  const [phoneCountry, setPhoneCountry] = useState<string>("in");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedAll, setExpandedAll] = useState(false);

  useEffect(() => {
    try {
      const lang =
        navigator.language || (navigator.languages && navigator.languages[0]);
      if (lang && lang.includes("-")) {
        const cc = lang.split("-")[1].toLowerCase();
        setPhoneCountry(cc);
        return;
      }
    } catch (e) {
      // ignore
    }

    // Fallback: lightweight IP geolocation (no key) — replace with your own server API if preferred
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data?.country_code)
          setPhoneCountry(String(data.country_code).toLowerCase());
      })
      .catch(() => {
        /* keep default */
      });
  }, []);
  const [mainImage, setMainImage] = useState<string | undefined>(
    property?.images?.[0] ?? property?.image,
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDsC_QZ5UHP2Lu2YflzR0uoe30O0aHf6nM",
  });
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(
    mapInstance: google.maps.Map,
  ) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    if (coords) {
      const bounds = new window.google.maps.LatLngBounds(coords);
      mapInstance.fitBounds(bounds);
    }

    setMap(mapInstance);
  }, []);

  const onUnmount = React.useCallback(function callback(_: google.maps.Map) {
    setMap(null);
  }, []);

  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  useEffect(() => {
    if (!isLoaded || !property?.location) return;

    // use the Maps JS Geocoder to turn an address into coords
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: property.location }, (results, status) => {
      if (status === "OK" && results?.[0]) {
        const loc = results[0].geometry.location;
        setCoords({ lat: loc.lat(), lng: loc.lng() });
      } else {
        console.warn("Geocode failed:", status, property.location);
      }
    });
  }, [isLoaded, property?.location]);

  const sendEmail = (e: any) => {
    if (isSubmitting || isSuccess) return;
    setIsSubmitting(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eyggq9s",
        "template_e24hq49",
        form.current,
        "cwjwFqL7CjZlE5QXK",
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsSubmitting(false);
          form.current.reset();
          form.current.phone.value = "";
          setPhone("");
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <article className="mt-24 mb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-(family-name:--font-service) font-bold text-gray-900">
            {property?.title}
          </h1>
          <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
            {property.location && (
              <div className="flex items-center gap-1">
                <MdOutlineLocationOn className="size-4 inline-block" />
                <span>{property.location}</span>
              </div>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left / Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery */}
            <div>
              <div className="w-full bg-gray-100 rounded-lg shadow-sm text-center overflow-hidden">
                <img
                  src={mainImage ?? "/placeholder.jpg"}
                  alt={property?.title}
                  className="w-auto h-[420px] object-cover mx-auto rounded-lg"
                />
              </div>

              {property.images && property.images.length > 1 && (
                <div className="mt-3 flex gap-3 overflow-x-auto">
                  {property.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setMainImage(src)}
                      className={`flex-shrink-0 w-auto h-16 rounded-md overflow-hidden border ${
                        mainImage === src
                          ? "ring-2 ring-indigo-500"
                          : "border-gray-200"
                      }`}
                      aria-label={`Show image ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt={`thumb-${i}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {property.imageCaption && (
                <p className="mt-2 text-sm text-center text-gray-500">
                  {property.imageCaption}
                </p>
              )}
            </div>

            {/* Price / Status / Summary */}
            <div className="flex items-start justify-between gap-6 p-4 bg-white rounded-md shadow-sm border">
              <div>
                {property.price && (
                  <p className="text-2xl font-extrabold text-gray-900">
                    &#8377;{property.price}
                  </p>
                )}
                {property.subprice && (
                  <p className="mt-0 text-sm text-gray-700">
                    &#8377;{property.subprice}
                  </p>
                )}
              </div>

              {property.type && (
                <div className="self-start">
                  <span className="inline-block rounded-full bg-green-800/90 text-white text-xs font-semibold px-3 py-1">
                    {property.type}
                  </span>
                </div>
              )}
            </div>

            {/* Features */}
            {property.propertyDetails && (
              <section className="p-4 bg-white rounded-md shadow-sm border">
                <h3 className="text-base font-bold mb-3">Property features</h3>
                <dl className="grid md:grid-cols-4 grid-cols-2 gap-3 text-sm text-gray-800">
                  {property.propertyDetails.type && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <TbBuildingCommunity className="text-2xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">
                          Type
                        </dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.type}
                        </dd>
                      </div>
                    </div>
                  )}
                  {property.propertyDetails.plotArea && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <HiOutlineArrowsExpand className="text-2xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">
                          Plot area
                        </dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.plotArea}
                        </dd>
                      </div>
                    </div>
                  )}

                  {property.propertyDetails.builtArea && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <BiArea className="text-2xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">
                          Built area
                        </dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.builtArea}
                        </dd>
                      </div>
                    </div>
                  )}

                  {property.propertyDetails.facing && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <PiSunHorizonBold className="text-2xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">
                          Facing
                        </dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.facing}
                        </dd>
                      </div>
                    </div>
                  )}

                  {property.propertyDetails.bedrooms !== undefined && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <IoBedOutline className="text-2xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">
                          Bedrooms
                        </dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.bedrooms}
                        </dd>
                      </div>
                    </div>
                  )}

                  {property.propertyDetails.bathrooms !== undefined && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <LuBath className="text-2xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">
                          Bathrooms
                        </dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.bathrooms}
                        </dd>
                      </div>
                    </div>
                  )}

                  {property.propertyDetails.floorNo !== undefined && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <PiStairs className="text-2xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">
                          Floor No
                        </dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.floorNo}
                        </dd>
                      </div>
                    </div>
                  )}

                  {property.propertyDetails.totalFloors && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <PiStairs className="text-2xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">
                          Total floors
                        </dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.totalFloors}
                        </dd>
                      </div>
                    </div>
                  )}

                  {property.propertyDetails.age && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <BsCalendarWeek className="text-xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">Age</dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.age}
                        </dd>
                      </div>
                    </div>
                  )}

                  {property.propertyDetails.approvedBy && (
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <PiSealCheckBold className="text-2xl text-gray-500" />
                      </div>
                      <div>
                        <dt className="font-bold text-xs text-gray-500">
                          Approved by
                        </dt>
                        <dd className="mt-0 font-bold text-sm">
                          {property.propertyDetails.approvedBy}
                        </dd>
                      </div>
                    </div>
                  )}
                </dl>
                {property.propertyDetails.amenities &&
                  property.propertyDetails.amenities.length > 0 && (
                    <div className="mt-4">
                      <dt className="text-base mb-2 font-bold text-gray-900">
                        Amenities
                      </dt>
                      <dd className="">
                        <ul className="flex flex-wrap gap-3 list-none list-inside space-y-1 text-sm ">
                          {property.propertyDetails.amenities.map((a, idx) => (
                            <li
                              className="rounded-full bg-(--navbar-bg) mb-1 text-white font-medium px-4 py-1 whitespace-nowrap"
                              key={idx}
                            >
                              {a}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
              </section>
            )}

            {/* Description / Content */}
            <section className="prose prose-lg max-w-none">
              {property.contentHtml ? (
                <div
                  dangerouslySetInnerHTML={{ __html: property.contentHtml }}
                />
              ) : property.content ? (
                <>
                  {!expandedAll &&
                    Array.isArray(property.content) &&
                    property.content.slice(0, 1).map((section, sidx) => (
                      <section key={sidx} className="mb-6">
                        {section.title && (
                          <h3 className="text-base font-semibold mb-2">
                            {section.title}
                          </h3>
                        )}
                        <p
                          style={{ whiteSpace: "pre-line" }}
                          className="text-sm leading-relaxed mb-3"
                        >
                          {section.paragraphs?.[0]}
                        </p>
                      </section>
                    ))}
                  {expandedAll && Array.isArray(property.content) ? (
                    property.content.map((section, sidx) => (
                      <section key={sidx} className="mb-6">
                        {section.title && (
                          <h3 className="text-base font-semibold mb-2">
                            {section.title}
                          </h3>
                        )}
                        {section.paragraphs?.map((p, idx) => (
                          <p
                            key={idx}
                            style={{ whiteSpace: "pre-line" }}
                            className="text-sm leading-relaxed mb-3"
                          >
                            {p}
                          </p>
                        ))}
                      </section>
                    ))
                  ) : (
                    // support content as a single object: { paragraphs?, toc? }
                    <>
                      {(property.content as any).paragraphs?.map(
                        (p: string, idx: number) => (
                          <p key={idx} className="leading-relaxed mb-3">
                            {p}
                          </p>
                        ),
                      )}
                      {Array.isArray((property.content as any).toc) &&
                        (property.content as any).toc.map(
                          (item: TocItem, idx: number) => (
                            <div key={idx} className="mb-4">
                              {item.title && (
                                <h4 className="font-medium mb-1">
                                  {item.title}
                                </h4>
                              )}
                              {item.paragraphs?.map((pp, j) => (
                                <p key={j} className="leading-relaxed mb-2">
                                  {pp}
                                </p>
                              ))}
                            </div>
                          ),
                        )}
                    </>
                  )}
                  {Array.isArray(property.content) &&
                    property.content.some(
                      (s) => (s.paragraphs?.length || 0) > 1,
                    ) && (
                      <button
                        type="button"
                        onClick={() => setExpandedAll((v) => !v)}
                        className="mt-2 text-sm inline-flex text-indigo-600 hover:underline"
                        aria-expanded={expandedAll}
                      >
                        {expandedAll ? "Show less" : "Show more"}
                        &nbsp;
                        {expandedAll ? (
                          <IoChevronUp className="size-5 mt-0.5" />
                        ) : (
                          <IoChevronDown className="size-5 mt-0.5" />
                        )}
                      </button>
                    )}
                </>
              ) : (
                <p>No description available.</p>
              )}
            </section>
            <section className="prose prose-lg max-w-none">
              {property.propertyFeatures &&
                property.propertyFeatures.length > 0 && (
                  <ul>
                    {property.propertyFeatures.map((feature, idx) => (
                      <div className="grid grid-cols-3 gap-4 mb-3" key={idx}>
                        <div className="...">
                          <p className="text-sm font-medium">{feature.title}</p>
                        </div>
                        <div className="col-span-2 ...">
                          <ul>
                            {feature.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="text-sm mb-1.5 list-disc"
                              >
                                <p>{detail}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </ul>
                )}
            </section>

            <section>
              <div
                className="flex items-start justify-between gap-6 p-2 bg-white rounded-md shadow-sm border"
                style={{ height: "370px", width: "100%" }}
              >
                {isLoaded && coords && (
                  <GoogleMap
                    mapContainerStyle={{ height: "352px", width: "100%" }}
                    center={coords}
                    zoom={13}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  >
                    <Marker position={coords} />
                  </GoogleMap>
                )}
              </div>
            </section>
          </div>

          {/* Right / Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="p-5 bg-white rounded-md border shadow-sm">
              <h4 className="text-lg font-semibold mb-3">
                Register your interest
              </h4>
              <form className="space-y-3" ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="id" value={property.id} />
                <input type="hidden" name="property" value={property.title} />
                <div>
                  <label className="block text-sm text-gray-700">Name</label>
                  <input
                    className="mt-1 block w-full rounded border px-3 py-2"
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Email</label>
                  <input
                    className="mt-1 block w-full rounded border px-3 py-2"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Phone</label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    inputClass="w-full px-3 py-5 border rounded"
                    inputStyle={{ width: "100%", border: "1px solid #6a7282" }}
                    buttonStyle={{
                      border: "1px solid #6a7282",
                      borderRadius: "5px 0 0 5px",
                    }}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: false,
                    }}
                    country={phoneCountry}
                    countryCodeEditable={false}
                    value={phone}
                    onChange={setPhone}
                  />
                </div>
                {/* <div>
                  <label className="block text-sm text-gray-700">Message</label>
                  <textarea
                    className="mt-1 block w-full rounded border px-3 py-2"
                    rows={4}
                    placeholder="Any questions?"
                  />
                </div> */}
                <button
                  type="submit"
                  style={{
                    cursor: isSubmitting || isSuccess ? "default" : "pointer",
                  }}
                  className={`form_button text-white px-4 py-2 my-3 rounded-full w-full ${
                    isSubmitting || isSuccess
                      ? "opacity-60 pointer-events-none"
                      : ""
                  }`}
                  disabled={isSubmitting || isSuccess}
                  aria-busy={isSubmitting}
                >
                  {/* {!isSuccess ? "Submit" : "Registered Successfully"} */}
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : isSuccess ? (
                    "Registered Successfully"
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>

            <div className="p-5 bg-white rounded-md border text-sm text-gray-700">
              <h5 className="font-semibold mb-2">Contact details</h5>
              <p>SpotMySite</p>
              <p className="mt-1">support@spotmysite.com</p>
              <p className="mt-1">+91 79813 87457</p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
export default React.memo(PropertyDetail);
