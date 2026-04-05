import PropertyDetail from "../PropertyDetail";
import { posts } from "../page";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "About SpotMySite | NRI Property Management & Protection",
  description:
    "SpotMySite is a young, NRI-focused property management company helping owners across Andhra & Telangana with trusted inspections, fencing, and legal support.",
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

// const articles = [
//   {
//     id: "1",
//     title:
//       "What Are Property Management Services in India? How Do They Benefit NRIs?",
//     date: "2025-12-15",
//     image: "/images/blog/blog1.png",
//     url: "/blog/property-management-services-india",
//   },
//   {
//     id: "2",
//     title: "The Biggest Responsibilities of Property Management Services",
//     date: "2025-12-01",
//     image: "/images/blog/blog2.png",
//     url: "/blog/property-management-responsibilities",
//   },
// ];

// const featured = articles[0];

// const postsSchema = posts.map((p) => ({
//   "@type": "BlogPosting",
//   headline: p.title,
//   url: `https://spotmysite.com${p.url}`,
//   datePublished: p.date,
//   image: [`https://spotmysite.com${p.image}`],
//   author: { "@type": "Organization", name: "SpotMySite" },
// }));

// const pageSchema = {
//   "@context": "https://schema.org",
//   "@graph": [
//     ...schema["@graph"],
//     {
//       "@type": "Blog",
//       "@id": "https://spotmysite.com/blog/#blog",
//       name: "SpotMySite Blog",
//       url: "https://spotmysite.com/blog/",
//       isPartOf: { "@id": "https://spotmysite.com/#website" },
//       blogPost: postsSchema,
//     },
//   ],
// };

export async function generateStaticParams() {
  // This must return ALL possible slugs
  const slugs = posts.map((post) =>
    post.url.replace(/^\/+/, "").replace(/^marketplace\//, ""),
  );
  // dedupe and return as required shape: { slug: string }
  return Array.from(new Set(slugs)).map((slug) => ({ slug }));
}
export default async function BlogDetailPage(props: { params: any }) {
  const { params } = props;
  const slug = String(params?.slug || "");
  const property = posts.find((b) => b.url === `/marketplace/${slug}`);

  if (!property) {
    return <h1>No Property Details found</h1>;
  }

  const images = await getPropertyImages(slug);
  property.images = images.length ? images : property.images;

  return <PropertyDetail property={property} />;
}

async function getPropertyImages(slug: string): Promise<string[]> {
  const dir = path.join(process.cwd(), "public", "images", "property", slug);
  try {
    const files = await fs.promises.readdir(dir);
    return files
      .filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f))
      .map((f) => `/images/property/${slug}/${f}`);
  } catch (err) {
    // directory missing or other error -> return empty array
    return [];
  }
}
