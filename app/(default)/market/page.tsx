import ContactUs from "@/components/contact-us";
import Cta from "@/components/cta";
import MarketBanner from "@/components/market-banner";
import PropertyListing from "@/components/property-listings";
import ServicesComponent from "@/components/services-home";
import Steps from "@/components/steps";
{
  /*
  {
    id: "p1",
    title: "2BHK, Velimela, Hyderabad,TS",
    price: "81,25,000",
    subprice: "6,700/sq.ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 2,
      bathrooms: 2,
      type: "Apartment",
      plotArea: "",
      builtArea: "1,250 sq ft",
      facing: "",
      totalFloors: "",
      floorNo: 14,
      age: "",
      approvedBy: "RERA Approved",
      amenities: ["Gated Community"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-1/image-1.jpeg",
    url: "/market/property-1",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Situated in Velimela, this 2-bedroom residence at Aaditri Empire forms part of a gated residential community nearing completion. With possession scheduled for the end of June 2026, the home offers the clarity of near-ready ownership, a space approaching completion rather than distant delivery.",
          "Spanning approximately 1,250 square feet, the west-facing orientation allows warm evening light to settle naturally into the living spaces. The layout is composed with balance in mind, offering defined private areas alongside an open central living environment designed for everyday comfort.",
        ],
      },
      {
        title: "Living Experience",
        paragraphs: [
          "The living and dining areas unfold with openness, offering a setting suited for both quiet evenings and shared gatherings. Natural light filters through the windows, enhancing the sense of space and calm within the interiors.",
          "The kitchen is positioned for everyday efficiency, while remaining connected to the central living space, encouraging a rhythm that feels both convenient and intuitive. Every corner has been planned to support daily living with ease.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "Two well-sized bedrooms provide private retreats within the home. The primary bedroom offers an en-suite bathroom, creating a personal space designed for comfort and privacy. The second bedroom adapts effortlessly, whether for family, guests, or a flexible work-from-home setting.",
          "Both bathrooms are proportioned to support functionality while maintaining a clean, modern aesthetic.",
        ],
      },
      {
        title: "A Project Nearing Completion",
        paragraphs: [
          "Aaditri Empire is a RERA-approved development, providing regulatory assurance and structural transparency. As the project approaches final stages of completion, buyers benefit from the clarity of a near-ready home, reducing uncertainty often associated with early-stage properties.",
          "With handover expected at the end of June, this residence presents the opportunity to step into ownership with confidence and minimal waiting time.",
        ],
      },
      {
        title: "The Setting: Velimela",
        paragraphs: [
          "Positioned within one of Hyderabad’s steadily developing residential corridors, Velimela combines a quieter neighborhood atmosphere with growing connectivity to the city’s western employment hubs. Its proximity to areas such as Tellapur, Kollur, and the Financial District places it within reach of major workplaces while retaining a more residential character.",
          "Ongoing infrastructure development and expanding community planning continue to shape Velimela into an emerging choice for both end-users and long-term investors.",
          "Here, life unfolds at a measured pace, connected to opportunity, yet comfortably removed from the intensity of the urban core.",
        ],
      },
    ],
    location: "Velimela, Kollur, Hyderabad, Telangana",
  },
  
  */
}
const articles = [
  {
    id: "p1",
    title: "2BHK, Velimela, Hyderabad,TS",
    price: "81,25,000",
    subprice: "6,700/sq.ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 2,
      bathrooms: 2,
      type: "Apartment",
      plotArea: "",
      builtArea: "1,250 sq ft",
      facing: "",
      totalFloors: "",
      floorNo: 14,
      age: "",
      approvedBy: "RERA Approved",
      amenities: ["Gated Community"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-1/image-1.jpeg",
    url: "/market/property-1",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Situated in Velimela, this 2-bedroom residence at Aaditri Empire forms part of a gated residential community nearing completion. With possession scheduled for the end of June 2026, the home offers the clarity of near-ready ownership, a space approaching completion rather than distant delivery.",
          "Spanning approximately 1,250 square feet, the west-facing orientation allows warm evening light to settle naturally into the living spaces. The layout is composed with balance in mind, offering defined private areas alongside an open central living environment designed for everyday comfort.",
        ],
      },
      {
        title: "Living Experience",
        paragraphs: [
          "The living and dining areas unfold with openness, offering a setting suited for both quiet evenings and shared gatherings. Natural light filters through the windows, enhancing the sense of space and calm within the interiors.",
          "The kitchen is positioned for everyday efficiency, while remaining connected to the central living space, encouraging a rhythm that feels both convenient and intuitive. Every corner has been planned to support daily living with ease.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "Two well-sized bedrooms provide private retreats within the home. The primary bedroom offers an en-suite bathroom, creating a personal space designed for comfort and privacy. The second bedroom adapts effortlessly, whether for family, guests, or a flexible work-from-home setting. Both bathrooms are proportioned to support functionality while maintaining a clean, modern aesthetic.",
        
        ],
      },
      {
        title: "A Project Nearing Completion",
        paragraphs: [
          "Aaditri Empire is a RERA-approved development, providing regulatory assurance and structural transparency. As the project approaches final stages of completion, buyers benefit from the clarity of a near-ready home, reducing uncertainty often associated with early-stage properties. With handover expected at the end of June, this residence presents the opportunity to step into ownership with confidence and minimal waiting time.",
      
        ],
      },
      {
        title: "The Setting: Velimela",
        paragraphs: [
          "Positioned within one of Hyderabad’s steadily developing residential corridors, Velimela combines a quieter neighborhood atmosphere with growing connectivity to the city’s western employment hubs. Its proximity to areas such as Tellapur, Kollur, and the Financial District places it within reach of major workplaces while retaining a more residential character. Ongoing infrastructure development and expanding community planning continue to shape Velimela into an emerging choice for both end-users and long-term investors.",
          "Here, life unfolds at a measured pace, connected to opportunity, yet comfortably removed from the intensity of the urban core.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Bedrooms",
        details: [
          "Two well-proportioned bedrooms designed for comfort and privacy",
          "Primary bedroom with attached en-suite bathroom",
          "Functional layouts allowing wardrobe space and natural ventilation",
        ],
      },
      {
        title: "Bathrooms",
        details: [
          "Two bathrooms with modern sanitary fittings",
          "Attached bath in the master bedroom",
          "Clean, practical layouts designed for everyday use",
        ],
      },
      {
        title: "Living space",
        details: [
          "Defined living and dining area with balanced proportions",
          "West-facing orientation allowing warm evening light",
          "Efficient layout supporting both daily living and small gatherings",
        ],
      },
      {
        title: "Kitchen",
        details: [
          "Dedicated kitchen space positioned for functionality",
          "Practical layout designed for everyday convenience",
          "Adequate storage and workflow planning",
        ],
      },
      {
        title: "Project highlights",
        details: [
          "RERA-approved residential development",
          "Near-ready status with possession expected end of June",
          "Located within a growing residential corridor of Velimela",
          "Suitable for self-occupancy or long-term investment",
        ],
      },
      {
        title: "Neighborhood",
        details: [
          "Emerging residential zone with improving infrastructure",
          "Proximity to Tellapur, Kollur, and western employment hubs",
          "Expanding community and connectivity access",
        ],
      },
    ],
    location: "Velimela, Kollur, Hyderabad, Telangana",
  },
  {
    id: "p2",
    title: "Residential Plot, Vaikuntapuram Village, Amaravati",
    price: "71,68,000",
    subprice: "28,000/sq yard",
    type: "For sale",
    propertyDetails: {
      bedrooms: 0,
      bathrooms: 0,
      type: "Land",
      plotArea: "256 Sq. Yards",
      builtArea: "256 Sq. Yards",
      facing: "East Facing",
      totalFloors: "",
      floorNo: "",
      age: "",
      approvedBy: "PUDA Approved",
      amenities: [
        "North West Corner Plot",
        "40 Feet Road access",
        "Electricity Available",
        "Ground water available",
        "Ready for Construction",
      ],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-2/image_1.jpeg",
    url: "/market/property-2",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Located in Vaikuntapuram village within Amaravati Mandal, this 256 sq. yard residential plot offers a strong opportunity for both residential construction and long-term land investment.",
          "Positioned in a PUDA-approved layout, the property benefits from planned development standards and organized road access. The east-facing orientation, combined with its north-west corner position, allows excellent ventilation and flexible construction planning.",
          "The surrounding area maintains a calm residential environment while gradually experiencing development linked to the Amaravati capital region and nearby infrastructure corridors.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "For families planning a future home, the plot offers a peaceful setting away from dense city congestion while still maintaining accessibility to nearby towns and developing regional infrastructure.",
          "The east-facing orientation allows natural morning sunlight, which many homeowners prefer for both architectural planning and traditional Vaastu considerations.",
          "Wide 40-foot roads around the layout improve accessibility and provide comfortable space for residential development.",
        ],
      },
      {
        title: "Development Potential",
        paragraphs: [
          "With 256 sq. yards of land, the property provides flexibility for different types of residential construction depending on personal preference and local regulations.",
          "Possible construction options include:\n- Independent residential house\n- Villa-style home\n- Multi-floor residential building (subject to approvals)",
          "The plot is level and ready for construction, making it suitable for immediate development.",
        ],
      },
      {
        title: "Infrastructure & Utilities",
        paragraphs: [
          "The property is supported by essential infrastructure needed for residential living.",
          "- Electricity connection available in the area\n- Ground water available at shallow depth\n- Sweet water quality reported in nearby bore wells\n- Wide internal layout roads for easy access",
        ],
      },
      {
        title: "The Setting: Vaikuntapuram",
        paragraphs: [
          "Vaikuntapuram is a culturally known village in the Amaravati region, recognized for its traditional surroundings and proximity to important regional developments.",
          "The area is gradually attracting buyers seeking peaceful residential environments near the Amaravati capital corridor.",
          "Nearby highlights include:\n- Krishna River surroundings\n- Amaravati heritage zone within driving distance\n- Access to Vijayawada–Amaravati regional roads\n- Growing residential development in surrounding villages",
        ],
      },
    ],
    location:
      "Vaikuntapuram Village, Amaravati Mandal, Palnadu District, Andhra Pradesh",
  },
  {
    id: "p3",
    title: "3BHK, Kollur, Hyderabad, TS",
    price: "1,10,50,000",
    subprice: "6,800 per Sq Ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 3,
      bathrooms: 3,
      type: "Apartment",
      plotArea: "",
      builtArea: "1,625 sq ft",
      facing: "East Facing",
      totalFloors: "",
      floorNo: 17,
      age: "",
      approvedBy: "RERA Approved",
      amenities: ["Corner Flat", "Courtyard View", "2 Car Parking"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-3/image-17.jpeg",
    url: "/market/property-3",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Situated within GHR Callisto in the Kollur–Tellapur corridor, this east-facing 3-bedroom residence is positioned on the 17th floor in a prime corner configuration.",
          "Overlooking the internal courtyard, the apartment benefits from dual-side openness, allowing natural light and cross ventilation to move freely throughout the home.",
          "As part of a RERA-approved gated community, the residence combines elevation, security, and structured community living within one of Hyderabad's fastest-growing western zones.",
          "From its higher-floor vantage point, the apartment offers a sense of openness and distance from street-level activity, while remaining visually connected to landscaped spaces below.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "The living and dining areas form a central, well-balanced space designed for both everyday comfort and social interaction. The east-facing orientation introduces natural morning light into the home, setting a bright and calm tone to the day.",
          "The corner layout enhances airflow and creates a perceptible sense of width within the apartment. Movement through the space feels deliberate and uninterrupted, with shared areas clearly defined from private zones.",
          "The kitchen is efficiently positioned alongside the dining area, designed to support practical workflow while remaining visually integrated with the home's central living space.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "Three proportioned bedrooms provide flexibility for families or multi-functional living arrangements. The primary bedroom includes an attached bathroom and enjoys the quieter courtyard-facing aspect, offering a more private retreat within the residence.",
          "Each of the three bathrooms is planned with contemporary fittings and functional layouts, maintaining simplicity and ease of maintenance.",
          "The additional bedrooms adapt comfortably for children, guests, or dedicated workspace needs without compromising circulation or natural light.",
        ],
      },
      {
        title: "A Gated Residential Community",
        paragraphs: [
          "GHR Callisto is developed as a gated residential community with controlled access and integrated shared amenities. The high-rise design is supported by landscaped courtyards and structured common areas, encouraging both privacy and interaction within the community.",
          "The apartment includes two dedicated car parking spaces, providing added convenience for multi-vehicle households.",
        ],
      },
      {
        title: "The Setting: Kollur – Tellapur",
        paragraphs: [
          "Located in Hyderabad's expanding western corridor, the Kollur–Tellapur stretch has emerged as a preferred residential extension of the Financial District. The area provides access to major employment hubs while maintaining a more open and less congested environment.",
          "Ongoing infrastructure upgrades and residential development continue to strengthen its long-term growth outlook.",
          "Here, elevated living meets a location positioned for steady urban expansion.",
        ],
      },
    ],
    propertyFeatures: [],
    location: "Kollur, Hyderabad, Telangana",
  },
  {
    id: "p4",
    title: "Residential Plot, Palakollu, West Godavari",
    price: "23,20,000",
    subprice: "8,000 per Sq Yard",
    type: "For sale",
    propertyDetails: {
      bedrooms: 0,
      bathrooms: 0,
      type: "Land",
      plotArea: "290 Sq. Yards",
      builtArea: "290 Sq. Yards",
      facing: "East Facing",
      totalFloors: "",
      floorNo: "",
      age: "",
      approvedBy: "Panchayat Approved",
      amenities: ["Electricity Available", "Ready for construction"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-4/image-3.jpeg",
    url: "/market/property-4",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Located in Palakollu in West Godavari district, this 290 sq. yard east-facing residential plot offers an opportunity for buyers seeking land in a well-known town with strong cultural and residential roots.",
          "Palakollu is recognized as one of the important towns in the Godavari region, known for its traditional communities, temples, and established residential neighborhoods. The plot provides a balanced setting for those planning to build a home while remaining connected to the town's everyday amenities.",
          "The east-facing orientation aligns with traditional Vaastu preferences and is often favored for residential construction.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "For families planning to build a future home, the plot offers a peaceful residential environment while staying connected to the conveniences of a developing town.",
          "Palakollu offers access to local markets, educational institutions, healthcare facilities, and transportation routes connecting nearby cities in the West Godavari region.",
          "The 290 sq. yard size provides comfortable space for constructing a spacious independent home with surrounding open areas.",
        ],
      },
      {
        title: "Development Potential",
        paragraphs: [
          "With a 290 sq. yard plot size, the property allows flexibility for different residential construction styles depending on the owner's preferences and local regulations.",
          "Possible construction options include:\n• Independent residential house\n• Villa-style residence\n• Multi-floor residential building (subject to local approvals)",
          "The land is ready for construction, making it suitable for buyers who want to begin development in the near future.",
        ],
      },
      {
        title: "Infrastructure & Utilities",
        paragraphs: [
          "The plot is supported by essential infrastructure required for residential development.",
          "• Electricity available in the area\n• Accessible through a 20-foot road\n• Suitable for residential construction planning\n• Located within a developing residential zone",
        ],
      },
      {
        title: "The Setting: Palakollu",
        paragraphs: [
          "Palakollu is a historically significant town in West Godavari district, known for its strong cultural heritage and community-centered lifestyle.",
          "The town is well known for the Ksheerarama Temple, one of the Pancharama Kshetras dedicated to Lord Shiva. The surrounding areas offer a mix of traditional neighborhoods and developing residential layouts.",
          "For buyers seeking a home location in the Godavari region, Palakollu provides a blend of cultural identity, community living, and access to regional connectivity.",
        ],
      },
    ],
    location: "Palakollu, West Godavari District, Andhra Pradesh",
  },
  {
    id: "p5",
    title: "3BHK Independent Building, Pendurthi, Visakhapatnam, AP",
    price: "80,00,000",
    subprice: "4,444 per Sq Ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 3,
      bathrooms: 3,
      type: "House",
      plotArea: "",
      builtArea: "1800 Sq Ft",
      facing: "East Facing",
      totalFloors: 3,
      floorNo: "",
      age: "",
      approvedBy: "Panchayat Approved",
      amenities: [
        "Independent Building",
        "4 + 2 Wheeler Parking",
        "Elevator Available",
      ],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-5/image-11.jpeg",
    url: "/market/property-5",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Located in Prasanthi Nagar, Pendurthi, Visakhapatnam, this east-facing independent residential building offers a balanced combination of privacy, accessibility, and everyday living comfort. Positioned within a developing residential neighborhood, the property stands across three floors, with the available 3BHK residence situated on the second floor.",
          "With 1800 square feet of living space, the home is designed to accommodate modern family living while maintaining a practical layout that supports both comfort and functionality. The east-facing orientation allows natural morning light to enter the living spaces, creating a bright and welcoming atmosphere throughout the day.",
          "Being part of a VUDA-approved residential development, the property benefits from regulatory compliance and structured urban planning within the expanding Pendurthi region of Visakhapatnam.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "The living and dining areas are designed as a connected central space, allowing for smooth movement throughout the home. The east-facing orientation enhances natural lighting and helps maintain a bright interior environment during the early hours of the day.",
          "The layout supports both everyday family living and small social gatherings. The placement of the living area allows easy access to bedrooms and the kitchen while maintaining a sense of openness.",
          "The dedicated kitchen space is designed for practical daily use with sufficient room for storage and movement, positioned conveniently beside the dining area.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "The residence includes three well-sized bedrooms, offering flexibility for family living, guest accommodation, or home office use.",
          "The primary bedroom includes an attached bathroom, providing a private and comfortable space within the home. The remaining bathrooms are thoughtfully placed to serve both family members and guests.",
          "Each bedroom receives adequate ventilation and natural light, contributing to a comfortable living environment throughout the year.",
        ],
      },
      {
        title: "A Private Residential Building",
        paragraphs: [
          "Unlike large apartment complexes, this property provides the advantages of independent residential living, offering greater privacy and reduced shared density.",
          "The building includes an elevator, making movement between floors convenient for residents of all ages.",
          "Parking is designed to support larger households, with space for four cars and two two-wheelers, a practical advantage for families with multiple vehicles.",
        ],
      },
      {
        title: "The Setting: Pendurthi – Visakhapatnam",
        paragraphs: [
          "Pendurthi has steadily developed into an important residential extension of Visakhapatnam city. The area offers a combination of residential neighborhoods, educational institutions, and everyday amenities.",
          "Located in Prasanthi Nagar, the property benefits from proximity to local markets, schools, healthcare facilities, and major connecting roads that link residents to the broader Visakhapatnam city region.",
          "With ongoing urban expansion and infrastructure development, Pendurthi continues to grow as a preferred residential area for families seeking spacious homes within the city's expanding boundaries.",
        ],
      },
    ],
    location: "Pendurthi, Visakhapatnam, Andhra Pradesh",
  },
   {
    id: "p6",
    title: "4BHK Premium Villa in Gated Community – North Hyderabad",
    price: "₹2,75,00,000",
    subprice: "4,444 per Sq Ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 5,
      bathrooms: 3,
      type: "House",
      plotArea: "155 Sq Yards",
      builtArea: "2700 Sq Ft",
      facing: "East Facing",
      totalFloors: 3,
      floorNo: "",
      age: "",
      approvedBy: "GHMC ",
      amenities: [
        " Luxury Villa",
        "3 + 2 Car Parking",
        "Elevator Available",
      ],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-6/image-20.jpeg",
    url: "/market/property-5",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Located in a well-developed residential zone in North Hyderabad, this 5BHK independent villa is part of a gated community designed for secure and structured living.",
          "Built across Ground + 2 floors, the home offers approximately 2700 sq ft of living space on a 155 sq yard plot, making it suitable for families looking for both space and long-term value.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          " The villa is designed with a vertically distributed layout, allowing separation between shared and private spaces. The main living area follows an open-plan approach, connecting the living and dining zones in a way that supports both daily routines and social gatherings. Natural light flows through multiple levels, supported by ventilation across floors, creating a sense of openness despite the structured layout. The inclusion of a dedicated home theatre room adds a layer of lifestyle convenience rarely found in standard residential units.",
          "The kitchen is positioned to support daily functionality, with enough space for movement, storage, and workflow without disrupting the main living zones.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "The villa includes four bedrooms, planned to accommodate family living across different floors. Each bedroom offers sufficient space for furniture, storage, and movement without feeling restricted.",
          "The bathrooms are distributed to support accessibility across levels, with practical layouts focused on usability rather than excess. The configuration ensures that both family members and guests have access to private and functional spaces.",
        ],
      },
      {
        title: "A Private Residential Building",
        paragraphs: [
          "As an independent triplex villa within a gated community, this property offers a balance between private ownership and structured residential planning. The G+2 layout allows clear zoning, shared living areas, private bedrooms, and additional lifestyle spaces like the theatre room. Unlike apartments, this format removes shared walls on key living levels while still benefiting from community-level security and infrastructure.",
          "The defined plot ownership (155 sq yards) adds long-term value, especially in a location where land appreciation plays a significant role in overall property growth.",
        ],
      },
      {
        title: "The Setting: Kompally",
        paragraphs: [
          "Kompally has evolved into one of North Hyderabad’s stable residential zones, known for its connectivity to industrial, commercial, and central city areas. Its proximity to Jeedimetla industrial area, NH-44 corridor, and access routes toward Secunderabad and central Hyderabad make it practical for working professionals. At the same time, the area retains a residential character with established communities, schools, and daily infrastructure.",
          "Compared to rapidly speculative zones, Kompally offers more predictable growth, making it relevant for both end-use buyers and those evaluating long-term stability over hype-driven appreciation.",
        ],
      },
    ],
    location: "Pendurthi, Kompally, North Hyderabad",
  },
];

export const posts = articles.slice(0);
export default function Market() {
  return (
    <>
      <div className="container-fluid">
        <MarketBanner />
        <Cta />
        <PropertyListing posts={posts} />
      </div>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
    </>
  );
}
