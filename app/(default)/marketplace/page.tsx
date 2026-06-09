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
    url: "/marketplace/property-1",
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
    url: "/marketplace/property-1",
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
    url: "/marketplace/property-2",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Located in Vaikuntapuram village within Amaravati Mandal, this 256 sq. yard residential plot offers a strong opportunity for both residential construction and long-term land investment. Positioned in a PUDA-approved layout, the property benefits from planned development standards and organized road access. The east-facing orientation, combined with its north-west corner position, allows excellent ventilation and flexible construction planning.",
          "The surrounding area maintains a calm residential environment while gradually experiencing development linked to the Amaravati capital region and nearby infrastructure corridors.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "For families planning a future home, the plot offers a peaceful setting away from dense city congestion while still maintaining accessibility to nearby towns and developing regional infrastructure. The east-facing orientation allows natural morning sunlight, which many homeowners prefer for both architectural planning and traditional Vaastu considerations.",
          "Wide 40-foot roads around the layout improve accessibility and provide comfortable space for residential development.",
        ],
      },
      {
        title: "Development Potential",
        paragraphs: [
          "With 256 sq. yards of land, the property provides flexibility for different types of residential construction depending on personal preference and local regulations. Possible construction options include:\n- Independent residential house\n- Villa-style home\n- Multi-floor residential building (subject to approvals). The plot is level and ready for construction, making it suitable for immediate development.",
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
          "Vaikuntapuram is a culturally known village in the Amaravati region, recognized for its traditional surroundings and proximity to important regional developments. The area is gradually attracting buyers seeking peaceful residential environments near the Amaravati capital corridor.",
          "Nearby highlights include:\n- Krishna River surroundings\n- Amaravati heritage zone within driving distance\n- Access to Vijayawada–Amaravati regional roads\n- Growing residential development in surrounding villages",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Land Details",
        details: [
          "256 sq yards residential land",
          "East facing plot",
          "North-west corner position",
          "PUDA approved layout",
          "40-foot internal roads",
        ],
      },
      {
        title: "Building Potential",
        details: [
          "Ready for residential construction",
          "Suitable for independent house or villa",
          "Flexible planning options for future development",
        ],
      },
      {
        title: "Utilities",
        details: [
          " Electricity available",
          "Ground water available at shallow depth",
          "Suitable for borewell installation",
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
    url: "/marketplace/property-3",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Situated within GHR Callisto in the Kollur–Tellapur corridor, this east-facing 3-bedroom residence is positioned on the 17th floor in a prime corner configuration. Overlooking the internal courtyard, the apartment benefits from dual-side openness, allowing natural light and cross ventilation to move freely throughout the home. As part of a RERA-approved gated community, the residence combines elevation, security, and structured community living within one of Hyderabad's fastest-growing western zones.",
          "From its higher-floor vantage point, the apartment offers a sense of openness and distance from street-level activity, while remaining visually connected to landscaped spaces below.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "The living and dining areas form a central, well-balanced space designed for both everyday comfort and social interaction. The east-facing orientation introduces natural morning light into the home, setting a bright and calm tone to the day. The corner layout enhances airflow and creates a perceptible sense of width within the apartment. Movement through the space feels deliberate and uninterrupted, with shared areas clearly defined from private zones.",
          "The kitchen is efficiently positioned alongside the dining area, designed to support practical workflow while remaining visually integrated with the home's central living space.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "Three proportioned bedrooms provide flexibility for families or multi-functional living arrangements. The primary bedroom includes an attached bathroom and enjoys the quieter courtyard-facing aspect, offering a more private retreat within the residence. Each of the three bathrooms is planned with contemporary fittings and functional layouts, maintaining simplicity and ease of maintenance.",
          "The additional bedrooms adapt comfortably for children, guests, or dedicated workspace needs without compromising circulation or natural light.",
        ],
      },
      {
        title: "A Gated Residential Community",
        paragraphs: [
          "GHR Callisto is developed as a gated residential community with controlled access and integrated shared amenities. The high-rise design is supported by landscaped courtyards and structured common areas, encouraging both privacy and interaction within the community. The apartment includes two dedicated car parking spaces, providing added convenience for multi-vehicle households.",
        ],
      },
      {
        title: "The Setting: Kollur – Tellapur",
        paragraphs: [
          "Located in Hyderabad's expanding western corridor, the Kollur–Tellapur stretch has emerged as a preferred residential extension of the Financial District. The area provides access to major employment hubs while maintaining a more open and less congested environment.",
          "Ongoing infrastructure upgrades and residential development continue to strengthen its long-term growth outlook. Here, elevated living meets a location positioned for steady urban expansion.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Wellness & Recreation",
        details: [
          "Aerobics Centre",
          "Basketball Court",
          "Jogging Track",
          "Lawn Tennis Court",
          "Amphitheatre",
          "Swimming Pool",
          "Gymnasium",
        ],
      },
      {
        title: "Community & Social Spaces",
        details: [
          "Clubhouse",
          "Party Hall",
          "Conference Room",
          "Business Center",
          "Reading Room",
          "Terrace Garden",
        ],
      },
      {
        title: "Work & Productivity",
        details: ["Privacy Workstations", "Audio Video Conference Facility"],
      },
      {
        title: "Safety & Security",
        details: ["Security Cabin", "CCTV Enabled Property"],
      },
      {
        title: "Sustainability & Infrastructure",
        details: [
          "Recycling for Waste Reduction",
          "Organic Waste Composting",
          "Health Safe Low VOC Paints",
          "LED Lighting for Common Areas",
          "Water Efficient Fixtures",
          "Solar Panels on Roof",
        ],
      },
    ],
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
    url: "/marketplace/property-4",
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
    propertyFeatures: [
      {
        title: "Land Details",
        details: [
          "290 sq yards residential plot",
          "East-facing orientation",
          "Panchayat approved property",
          "Located within residential surroundings",
        ],
      },
      {
        title: "Building Potential",
        details: [
          "Suitable for independent house construction",
          "Space for villa-style residential planning",
          "Ready for immediate development",
        ],
      },
      {
        title: "Utilities & Access",
        details: [
          "Electricity available",
          "20-foot road access",
          "Suitable for residential infrastructure development",
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
    url: "/marketplace/property-5",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Located in Prasanthi Nagar, Pendurthi, Visakhapatnam, this east-facing independent residential building offers a balanced combination of privacy, accessibility, and everyday living comfort. Positioned within a developing residential neighborhood, the property stands across three floors, with the available 3BHK residence situated on the second floor. With 1800 square feet of living space, the home is designed to accommodate modern family living while maintaining a practical layout that supports both comfort and functionality. The east-facing orientation allows natural morning light to enter the living spaces, creating a bright and welcoming atmosphere throughout the day.",
          "Being part of a VUDA-approved residential development, the property benefits from regulatory compliance and structured urban planning within the expanding Pendurthi region of Visakhapatnam.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "The living and dining areas are designed as a connected central space, allowing for smooth movement throughout the home. The east-facing orientation enhances natural lighting and helps maintain a bright interior environment during the early hours of the day. The layout supports both everyday family living and small social gatherings. The placement of the living area allows easy access to bedrooms and the kitchen while maintaining a sense of openness.",
          "The dedicated kitchen space is designed for practical daily use with sufficient room for storage and movement, positioned conveniently beside the dining area.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "The residence includes three well-sized bedrooms, offering flexibility for family living, guest accommodation, or home office use. The primary bedroom includes an attached bathroom, providing a private and comfortable space within the home. The remaining bathrooms are thoughtfully placed to serve both family members and guests.",
          "Each bedroom receives adequate ventilation and natural light, contributing to a comfortable living environment throughout the year.",
        ],
      },
      {
        title: "A Private Residential Building",
        paragraphs: [
          "Unlike large apartment complexes, this property provides the advantages of independent residential living, offering greater privacy and reduced shared density. The building includes an elevator, making movement between floors convenient for residents of all ages.",
          "Parking is designed to support larger households, with space for four cars and two two-wheelers, a practical advantage for families with multiple vehicles.",
        ],
      },
      {
        title: "The Setting: Pendurthi – Visakhapatnam",
        paragraphs: [
          "Pendurthi has steadily developed into an important residential extension of Visakhapatnam city. The area offers a combination of residential neighborhoods, educational institutions, and everyday amenities. Located in Prasanthi Nagar, the property benefits from proximity to local markets, schools, healthcare facilities, and major connecting roads that link residents to the broader Visakhapatnam city region.",
          "With ongoing urban expansion and infrastructure development, Pendurthi continues to grow as a preferred residential area for families seeking spacious homes within the city's expanding boundaries.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Bedrooms",
        details: [
          "Three well-proportioned bedrooms",
          "Primary bedroom with attached bathroom",
          "Designed for comfortable family living",
        ],
      },
      {
        title: "Bathrooms",
        details: [
          "Three bathrooms with functional layouts",
          "Convenient access from bedrooms and living areas",
        ],
      },
      {
        title: "Living Space",
        details: [
          "East-facing home allowing natural morning light",
          "Well-balanced living and dining layout",
          "Positioned on the second floor of a three-floor building",
        ],
      },
      {
        title: "Kitchen",
        details: [
          "Dedicated kitchen area with practical layout",
          "Positioned close to the dining space for daily convenience",
        ],
      },
      {
        title: "Building Features",
        details: [
          "Independent residential building",
          "Elevator available for easy floor access",
          "Parking space for 4 cars and 2 two-wheelers",
        ],
      },
      {
        title: "Location & Neighborhood",
        details: [
          "Located in Prasanthi Nagar, Pendurthi",
          "Growing residential locality in Visakhapatnam",
          "Access to schools, markets, and city connectivity",
        ],
      },
    ],
    location: "Pendurthi, Visakhapatnam, Andhra Pradesh",
  },
  {
    id: "p6",
    title: "4BHK Premium Villa in Gated Community – North Hyderabad",
    price: "2,75,00,000",
    subprice: "10,185 per Sq Ft",
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
      amenities: [" Luxury Villa", "3 + 2 Car Parking", "Elevator Available"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-6/image-20.jpeg",
    url: "/marketplace/property-6",
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
          "The villa includes four bedrooms, planned to accommodate family living across different floors. Each bedroom offers sufficient space for furniture, storage, and movement without feeling restricted. The bathrooms are distributed to support accessibility across levels, with practical layouts focused on usability rather than excess. The configuration ensures that both family members and guests have access to private and functional spaces.",
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
    propertyFeatures: [
      {
        title: "Bedrooms",
        details: [
          "Five bedrooms distributed across multiple levels",
          "Designed for family living with spatial separation",
          "Adequate room for storage and ventilation",
        ],
      },
      {
        title: "Bathrooms",
        details: [
          "Three bathrooms with functional layouts",
          "Positioned for accessibility across floors",
          "Practical design focused on everyday usability",
        ],
      },
      {
        title: "Living Space",
        details: [
          "Open-plan living and dining configuration",
          "Multi-level layout providing spatial flexibility",
          "Designed for both private use and gatherings",
        ],
      },
      {
        title: "Kitchen",
        details: [
          "Dedicated kitchen with efficient layout",
          "Space for storage and daily workflow",
          "Positioned to remain connected yet functional",
        ],
      },
      {
        title: "Building Features",
        details: [
          "Ground + 2 floors construction",
          "Built-up area of 2700 sq ft",
          "Located on 155 sq yard plot",
          "Includes home theatre room",
          "Situated within gated community",
        ],
      },
      {
        title: "Amenities & Security",
        details: [
          "Private home theatre space",
          "Gated residential environment",
          "24/7 security within gated community",
        ],
      },
      {
        title: "Location & Infrastructure",
        details: [
          "Within Jeedimetla Village, Qutbullapur Mandal",
          "Close to industrial and residential hubs",
          "Access to major road networks and city routes",
          "Located within GHMC jurisdiction",
          "Established residential infrastructure",
        ],
      },
    ],
    location: "Kompally, North Hyderabad, Telangana",
  },
   {
    id: "p7",
    title: "Residential Plot,Maheshwaram, Hyderabad",
    price: "49,99,800",
    subprice: "24,999 per Sq Yard",
    type: "For sale",
    propertyDetails: {
      bedrooms: 0,
      bathrooms: 0,
      type: "Land",
      plotArea: "200 Sq. Yards",
      builtArea: "200 Sq. Yards",
      facing: "East Facing",
      totalFloors: "",
      floorNo: "",
      age: "",
      approvedBy: "HMDA and RERA approved",
      amenities: ["Grand entrance arch",  "Gated community", "24×7 security", "CCTV surveillance", "CC roads", "Street lighting", "Underground electricity", "Underground drainage", "Landscaped parks", "Children’s play area", "Rainwater harvesting", "5 years free maintenance"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-7/image-1.jpeg",
    url: "/marketplace/property-7",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Located in Maheshwaram, Hyderabad, this 200 sq. yard residential plot offers a strong opportunity for both residential construction and long-term land investment. The property benefits from planned development standards and organized road access.",
          "The east-facing orientation allows for good natural light and is preferred for both architectural planning and traditional Vaastu considerations. The surrounding area is steadily developing due to its proximity to key infrastructure and employment zones, making it an attractive choice for both homebuyers and investors.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "For families planning a future home, the plot provides a peaceful residential setting away from heavy city congestion while still maintaining access to nearby developing areas.",
          "The east-facing orientation ensures natural morning sunlight, contributing to a comfortable living environment. The 33-foot roads within the layout improve accessibility and allow sufficient space for smooth residential development.",
        ],
      },
      {
        title: "Development Potential",
        paragraphs: [
          "With 200 sq. yards of land, the property offers flexibility for different types of residential construction depending on individual preferences and local regulations.",
          "Possible construction options include:\n• Independent residential house\n• Villa-style home\n• Duplex residential construction",
          "The plot is level and ready for construction, making it suitable for immediate development without additional preparation.",
        ],
      },
      {
        title: "Amenities",
        paragraphs: [
          "The property features a comprehensive range of amenities designed for a high-quality residential experience.",
          "• Project Standards & Security: Grand entrance arch with a dedicated security cabin, gated community with a secure compound wall, and 24×7 security with CCTV surveillance.",
          "• Infrastructure & Connectivity: Wide CC roads (30’, 40’ & 100’), street lighting throughout the layout, and a modern underground electricity and drainage system. Internal roads and footpaths are also integrated into the design.",
          "• Greenery & Recreation:Landscaped parks, lawns, a dedicated children’s play area, and open green spaces with avenue plantation for a refreshing environment.",
          "• Water & Sustainability: Water tank with individual plot connections and a rainwater harvesting system for sustainable living.",
          "• Value-Added Features: 5 years of free maintenance, Vaastu-compliant plots, and a guaranteed clear title property.",
        ],
      },
      {
        title: "Infrastructure & Utilities",
        paragraphs: [
         "The property is supported by essential infrastructure required for residential living.",
          "• Electricity connection available in the area\n• Water availability confirmed\n• 33-feet wide internal layout roads \n• Planned residential development.",
        ],
      },
      {
       title: "The Setting: Maheshwaram",
        paragraphs: [
          "Maheshwaram, Hyderabad is an emerging residential and investment destination, gaining attention due to its proximity to industrial and economic hubs.",
          "Nearby highlights include the Maheshwaram Bus Depot and the EMC SEZ (Electronics Manufacturing Cluster).",
          "The area is gradually attracting buyers looking for peaceful residential environments with strong future growth potential and improving connectivity.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Land Details",
        details: [
          "200 sq yards residential land",
          "East facing plot",
          "HMDA & RERA approved layout",
          "Located in Residential R1 Zone",
          "33-foot internal roads",
        ],
      },
      {
        title: "Building Potential",
        details: [
          "Ready for residential construction",
          "Suitable for independent house or villa",
          "Flexible planning options for future development",
        ],
      },
      {
        title: "Utilities & Access",
        details: [
        "Electricity and Water available",
          "33-foot road access",
          "Vaastu-compliant plots",
          "Clear title property",
        ],
      },
    ],
    location: "Maheshwaram, Telangana",
  },
  {
    id: "p8", 
    title: "3BHK,  Akividu, Andhra Pradesh",
    price: "70,51,500",
    subprice: "4,500 per Sq Ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 3,
      bathrooms: 3,
      type: "Apartment",
      plotArea: "",
      builtArea: "1,567 sq ft",
      facing: "East Facing",
      totalFloors: "Stilt + 5 Floors",
      floorNo: "",
      age: "Under Construction",
      approvedBy: "RERA Approved",
      amenities: ["Gated Community", "Stilt Parking", "2 Balconies"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-8/image-1.jpeg",
    url: "/marketplace/property-8",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Located in Akividu, this 3BHK apartment is part of a gated residential development designed for structured and comfortable living.",
          "With a built-up area of 1567 sq ft, the apartment offers a balanced layout suitable for modern family requirements. Developed within a Stilt + 5 floor structure, the project ensures organized living with dedicated parking and planned residential design.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "The apartment is designed with a focus on functionality and usability, ensuring efficient use of space. The living and dining areas form a central zone that supports both daily living and social interaction.",
          "The east-facing orientation allows natural morning light, creating a bright and comfortable indoor environment.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "This 3BHK unit includes three well-planned bedrooms designed for privacy and comfort. Each bedroom provides sufficient space for furniture and storage, while maintaining ventilation and flexibility of use.",
          "The three bathrooms are positioned for accessibility and convenience across the home, while two balconies provide additional ventilation and outdoor access.",
        ],
      },
      {
        title: "A Gated Residential Community",
        paragraphs: [
          "This apartment is part of a gated community offering structured and secure living. The project includes controlled access, stilt parking, and organized layout planning to ensure efficient residential use. The project is currently under construction with completion expected within 18 months.",
        ],
      },
      {
        title: "The Setting: Akividu",
        paragraphs: [
          "Akividu is a developing residential town with stable demand and growing infrastructure. The area provides access to essential services such as schools, healthcare, and local markets, along with good internal connectivity.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Living & Private Spaces",
        details: [
          "Three bedrooms designed for family living",
          "Dedicated living and dining areas",
          "Two balconies for ventilation",
          "Practical kitchen workflow design",
        ],
      },
      {
        title: "Building & Community",
        details: [
          "Stilt + 5 floor construction",
          "Gated residential environment",
          "Stilt parking provision",
        ],
      },
      {
        title: "Safety & Infrastructure",
        details: [
          "Controlled access",
          "RERA Approved",
          "Access to essential utilities",
          "Well-connected road network",
        ],
      },
    ],
    location: "Akividu, Andhra Pradesh",
  },
  {
    id: "p9", 
    title: "3BHK Apartment, Bhimavaram, Andhra Pradesh",
    price: "60,00,000",
    subprice: "5,000 per Sq Ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 3,
      bathrooms: 3,
      type: "Apartment",
      plotArea: "",
      builtArea: "1,200 sq ft",
      facing: "East Facing",
      totalFloors: "S+5 Floors",
      floorNo: "",
      age: "Under Construction",
      approvedBy: "RERA Approved",
      amenities: ["Gated Community", "1 Balcony"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-9/image-2.jpeg",
    url: "/marketplace/property-9",
    content: [
      {
        title: "Explore this Property",
        paragraphs: [
          "Located in Bhimavaram, this gated residential apartment project is designed for practical and structured family living.",
          "This east-facing 3BHK apartment offers a balanced combination of space, ventilation, and natural light, making it suitable for both end-use buyers and investors. Being RERA-approved, the project ensures transparency, compliance, and reliability for property buyers.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "The living and dining areas are designed as a connected central space, allowing smooth movement and comfortable daily living.",
          "The east-facing orientation allows natural morning light to enter the home, creating a bright and positive atmosphere. The layout focuses on efficient space utilization without unnecessary complexity.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "The apartment includes three bedrooms designed for functional family living. The master bedroom includes an attached bathroom for privacy and convenience.",
          "The additional bedrooms can be used for children, guests, or workspace, with sufficient space for furniture and storage. All three bathrooms are planned with practical layouts for everyday use.",
        ],
      },
      {
        title: "A Gated Residential Community",
        paragraphs: [
          "The project is developed as a gated community, offering controlled access and a secure environment.",
          "The structured layout supports organized residential living with shared infrastructure and defined spaces. This setup provides better long-term value compared to standalone apartment buildings.",
        ],
      },
      {
        title: "The Setting: Bhimavaram",
        paragraphs: [
          "Bhimavaram is a well-established town with consistent residential demand and growing infrastructure.",
          "It offers access to schools, markets, and essential services, making it suitable for family living. The location supports stable property value and long-term usability.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Bedrooms & Bathrooms",
        details: [
          "Three well-planned bedrooms",
          "Master bedroom with attached bathroom",
          "Three bathrooms with practical layouts",
          "Easy accessibility across the apartment",
        ],
      },
      {
        title: "Living Space & Kitchen",
        details: [
          "East-facing layout with natural light",
          "Connected living and dining area",
          "Dedicated kitchen area designed for daily workflow",
          "Functional layout with storage space",
        ],
      },
      {
        title: "Community & Security",
        details: [
          "Gated residential environment",
          "RERA approved project",
          "Controlled access",
          "Structured apartment planning",
        ],
      },
    ],
    location: "Bhimavaram, Andhra Pradesh",
  },
  {
    id: "p10", 
    title: "3BHK, Bhimavaram, Andhra Pradesh",
    price: "79,50,000",
    subprice: "5,000 per Sq Ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 3,
      bathrooms: 3,
      type: "Apartment",
      builtArea: "1,590 sq ft",
      facing: "East Facing",
      totalFloors: "Stilt + 5 Floors",
      floorNo: "Not Specified",
      age: "Under Construction",
      approvedBy: "RERA Approved",
      amenities: ["Gated Community", "Stilt Parking", "1 Balcony"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-10/image-3.jpeg",
    url: "/marketplace/property-10",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Situated in Bhimavaram, this 3BHK apartment is part of a gated residential community designed for structured and comfortable living.",
          "With a built-up area of 1590 sq ft, the apartment is planned to accommodate modern family requirements, offering a balance between space efficiency and everyday usability. Developed within a Stilt + 5 floor structure, the project ensures organized living with dedicated parking and a planned residential layout.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "The apartment is designed to deliver a practical and functional living environment, with clearly defined spaces for daily activities. The living and dining areas form the core of the home, allowing seamless interaction while maintaining enough room for movement.",
          "The east-facing orientation allows natural morning light to enter the home, creating a bright and comfortable atmosphere during the day. The layout focuses on usable space rather than decorative excess.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "This 3BHK unit includes three well-defined bedrooms, designed to support family living with privacy and comfort. Each bedroom provides adequate space for furniture, storage, and flexible usage such as a guest room or workspace.",
          "The three bathrooms are positioned for accessibility and practical use, ensuring convenience for both residents and visitors.",
        ],
      },
      {
        title: "A Gated Residential Community",
        paragraphs: [
          "This apartment is part of a gated residential environment, offering structured community living with basic security and organization. The project includes controlled access, stilt-level parking, and a planned layout that supports efficient residential use.",
        ],
      },
      {
        title: "The Setting: Bhimavaram",
        paragraphs: [
          "Bhimavaram is a well-established residential and commercial hub with consistent demand and stable infrastructure. The area offers access to schools, hospitals, and daily essentials, along with good internal connectivity.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Living & Private Spaces",
        details: [
          "Three bedrooms designed for family living",
          "Dedicated living and dining areas",
          "One balcony for ventilation and outdoor access",
          "Practical kitchen workflow design",
        ],
      },
      {
        title: "Building & Community",
        details: [
          "Stilt + 5 floor construction",
          "1590 sq ft built-up area",
          "Stilt parking provision",
          "Completion within 18 months",
        ],
      },
      {
        title: "Safety & Infrastructure",
        details: [
          "Controlled access",
          "RERA Approved",
          "Established town infrastructure",
          "Well-connected road network",
        ],
      },
    ],
    location: "Bhimavaram, Andhra Pradesh",
  },
  {
    id: "p11",
    title: "Commercial Property, Akividu, Andhra Pradesh",
    price: "Price upon request",
    subprice: "10,000 per Sq Ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 0,
      bathrooms: 0,
      type: "Commercial Space",
      plotArea: "",
      builtArea: "",
      facing: "South Facing",
      totalFloors: "C + G + 5 Floors",
      floorNo: "",
      age: "Under Construction",
      approvedBy: "Commercial Approved",
      amenities: [
        "Mixed-use Functionality",
        "Retail Spaces",
        "Office Spaces",
        "Residential Integration",
      ],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-11/image-6.jpeg",
    url: "/marketplace/property-11",
    content: [
      {
        title: "Explore this Property",
        paragraphs: [
          "Located in a developing commercial zone of Akividu, this project is designed to support modern business requirements with structured planning and mixed-use functionality.",
          "The project combines commercial and residential spaces within a single complex, making it suitable for businesses looking for accessibility, visibility, and long-term operational convenience. With commercial units positioned across the lower floors, the property ensures high footfall potential for retail outlets and offices.",
        ],
      },
      {
        title: "The Business Experience",
        paragraphs: [
          "The commercial layout is designed to support both independent businesses and growing enterprises. Spacious floor planning allows flexibility in setting up retail stores or office spaces, ensuring ease of movement and visibility.",
          "Ceiling heights ranging from 10 to 15 feet provide an open and functional environment, suitable for various uses including showrooms and branded outlets.",
        ],
      },
      {
        title: "Commercial Spaces",
        paragraphs: [
          "The project includes dedicated commercial floors: the Ground Floor features high visibility retail spaces, the First Floor is suited for offices and service businesses, and the Second Floor offers flexible commercial usage[cite: 4]. Each unit is designed to accommodate business operations efficiently.",
        ],
      },
      {
        title: "Residential Integration",
        paragraphs: [
          "Upper floors (Third & Fourth) are allocated for residential units, creating a mixed-use environment. This supports business owners living close to their workplace and ensures continuous activity within the complex, adding value through combined usage.",
        ],
      },
      {
        title: "Independent Business Advantage",
        paragraphs: [
          "Unlike standalone shops, this complex offers a structured commercial environment, mixed-use development benefits, and strategic positioning for growth. The inclusion of residential floors enhances overall occupancy and consistent engagement within the property.",
        ],
      },
      {
        title: "The Setting: Akividu",
        paragraphs: [
          "Akividu is an emerging town with growing commercial activity and steady infrastructure development. The location supports local businesses and retail expansion, making it a practical choice for entrepreneurs and investors.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Commercial Spaces",
        details: [
          "Dedicated floors for business use",
          "Suitable for office, retail, and start-ups",
          "Designed for accessibility and visibility",
        ],
      },
      {
        title: "Ceiling & Structure",
        details: [
          "Ceiling height: 10 - 15 ft",
          "Spacious layout for flexible usage",
          "C + G + 5 Floor structure",
        ],
      },
      {
        title: "Building Highlights",
        details: [
          "Mixed-use development (Commercial + Residential)",
          "Commercial approved project",
          "Developing commercial surroundings",
        ],
      },
    ],
    location: "Akividu, Andhra Pradesh",
  },
  {
    id: "p12",
    title: "3BHK Luxury Villa in Gated Community - Hyderabad",
    price: "2,02,30,000",
    subprice: "₹8,500 per Sq Ft",
    type: "For sale",
    propertyDetails: {
      bedrooms: 3,
      bathrooms: 3,
      type: "Luxury Villa",
      plotArea: "166 Sq Yards",
      builtArea: "2380 Sq Ft",
      facing: "East Facing",
      totalFloors: "Ground + 2 Floors (Triplex)",
      floorNo: "",
      age: "Under Construction",
      approvedBy: "RERA Approved",
      amenities: ["Gated Villa Community", "1 Car Parking", "Private Balconies (2)"],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-12/image-12.jpeg",
    url: "/marketplace/property-12",
    content: [
      {
        title: "Explore this property",
        paragraphs: [
          "Located in a developing residential zone of Hyderabad, this 3BHK independent villa is part of a gated community designed for secure and structured living.",
          "Built across Ground + 2 floors, the home offers approximately 2380 sq ft of living space on a 166 sq yard plot, making it suitable for families looking for both space and long-term value.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "The villa is designed with a vertically distributed layout, allowing separation between shared and private spaces. The main living area follows an open-plan approach, connecting the living and dining zones in a way that supports both daily routines and social gatherings.",
          "Natural light flows through multiple levels, supported by ventilation across floors, creating a sense of openness despite the structured layout. The kitchen is positioned to support daily functionality with enough space for movement and storage.",
        ],
      },
      {
        title: "Private Spaces",
        paragraphs: [
          "The villa includes three bedrooms, planned to accommodate family living across different floors. Each bedroom offers sufficient space for furniture, storage, and movement without feeling restricted.",
          "The bathrooms are distributed to support accessibility across levels, with practical layouts focused on usability rather than excess.",
        ],
      },
      {
        title: "Independent Luxury Living",
        paragraphs: [
          "As an independent triplex villa within a gated community, this property offers a balance between private ownership and structured residential planning. The G+2 layout allows clear zoning for shared living areas, private bedrooms, and additional flexible spaces.",
          "The defined plot ownership (166 sq yards) adds long-term value, especially in a location where land appreciation plays a significant role in overall property growth.",
        ],
      },
      {
        title: "The Setting: Wadakpally",
        paragraphs: [
          "Wadakpally is emerging as a residential zone with growing relevance due to its connectivity and expansion of surrounding areas. Its access to key road networks and developing infrastructure makes it practical for working professionals and families.",
          "Compared to highly saturated zones, Wadakpally offers more scope for structured growth, making it suitable for both end-use buyers and those evaluating long-term appreciation.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Living & Private Spaces",
        details: [
          "Three bedrooms distributed across multiple levels",
          "Designed for family living with spatial separation",
          "Three bathrooms with functional layouts across floors",
          "Open-plan living and dining configuration",
        ],
      },
      {
        title: "Kitchen & Balconies",
        details: [
          "Dedicated kitchen with efficient layout",
          "Space for storage and daily workflow",
          "Two private balconies for ventilation and outdoor access",
        ],
      },
      {
        title: "Building & Community Highlights",
        details: [
          "Triplex construction (Ground + 2 floors)",
          "Located on 166 sq yard plot",
          "RERA Approved gated community",
          "Completion expected by May 2026",
        ],
      },
    ],
    location: "Wadakpally, Hyderabad, Telangana",
  },
{
    id: "p13",
    title: "Residential Plot, Visakhapatnam",
    price: "32,00,000",
    subprice: "16,000/sq yard",
    type: "For sale",
    propertyDetails: {
      bedrooms: 0,
      bathrooms: 0,
      type: "Residential Plot",
      plotArea: "200 Sq. Yards",
      builtArea: "200 Sq. Yards",
      facing: "East Facing",
      totalFloors: "",
      floorNo: "",
      age: "",
      approvedBy: "VMRDA Approved",
      amenities: [
        "40 Feet Road access",
        "Electricity Available",
        "Bore water available",
        "Ready for Immediate Construction",
      ],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-13/image-9.jpeg",
    url: "/marketplace/property-13",
    content: [
      {
        title: "Explore this Property",
        paragraphs: [
          "Located in Visakhapatnam, this 200 sq. yard residential plot presents a practical opportunity for both residential construction and long-term land investment.",
          "The property benefits from planned layout development and wide road access, making it suitable for immediate construction without additional preparation. The east-facing orientation allows for natural light and is commonly preferred for residential planning.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "For individuals planning to build a home, this plot offers a peaceful residential setting while remaining connected to nearby developing infrastructure.",
          "The east-facing direction ensures natural morning sunlight, contributing to a comfortable living environment. The 40-feet road access improves accessibility and supports smooth residential development.",
        ],
      },
      {
        title: "Development Potential",
        paragraphs: [
          "With 200 sq. yards of land, the plot offers flexibility for various types of residential construction. Possible construction options include independent residential houses, duplex homes, or villa-style constructions.",
          "The plot is ready for immediate construction, making it suitable for buyers looking to start building without delay.",
        ],
      },
      {
        title: "Infrastructure & Utilities",
        paragraphs: [
          "The property is supported by essential infrastructure required for residential living, including available electricity connections and bore water availability.",
          "Access is provided via 40-feet wide road access, and the layout is organized and ready for immediate construction.",
        ],
      },
      {
        title: "The Setting",
        paragraphs: [
          "Visakhapatnam is a developing residential area with growing importance due to nearby infrastructure projects. Its proximity to key locations enhances both residential convenience and investment potential. Nearby highlights include the Bhogapuram Airport and the Nathavalasa Toll Gate.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Land Details",
        details: [
          "200 sq yards residential land",
          "East-facing plot",
          "VMRDA approved layout",
          "40-feet road access",
        ],
      },
      {
        title: "Building Potential",
        details: [
          "Ready for construction",
          "Suitable for independent house or villa",
          "Flexible planning options",
        ],
      },
      {
        title: "Utilities",
        details: [
          "Electricity available",
          "Bore water available",
          "No additional land preparation required",
        ],
      },
    ],
    location: "Visakhapatnam",
  },
  {
  id: "p14",
  title: "Residential Plot, Shadnagar Town, Hyderabad",
  price: "41,25,000",
  subprice: "25,000/sq yard",
  type: "For sale",
  propertyDetails: {
    bedrooms: 0,
    bathrooms: 0,
    type: "Residential Plot",
    plotArea: "165 Sq. Yards",
    builtArea: "165 Sq. Yards",
    facing: "East Facing",
    cornerPlot: "Yes",
    totalFloors: "",
    floorNo: "",
    age: "",
    approvedBy: "DTCP & RERA Approved",
    zoneType: "R1 Zone",
    amenities: [
      "40 Feet Road access",
      "Electricity Available",
      "Borewell Available",
      "Ready for Immediate Construction",
    ],
  },
  images: [] as string[],
  propertyImage: "/images/property/property-14/image-1.jpeg",
  url: "/marketplace/property-14",
  content: [
    {
      title: "Explore this Property",
      paragraphs: [
        "Located in the fast-developing Shadnagar Town near Hyderabad, this 165 sq. yard residential plot presents an excellent opportunity for both residential construction and long-term property investment.",
        "Positioned in a DTCP and RERA-approved layout, the property ensures legal clarity and planned infrastructure development. The east-facing orientation, along with its corner plot advantage, offers better ventilation, enhanced accessibility, and greater flexibility in construction planning.",
        "Situated within a rapidly growing residential corridor, the property benefits from strong connectivity to Hyderabad and upcoming infrastructure developments around Shadnagar."
      ],
    },
    {
      title: "The Living Experience",
      paragraphs: [
        "For families planning to build their dream home, this plot offers a balanced lifestyle with peaceful surroundings while remaining well connected to Hyderabad city.",
        "The east-facing direction allows natural morning sunlight, making it highly preferred for both architectural planning and traditional Vaastu considerations.",
        "The 40-foot road access ensures easy vehicle movement and comfortable residential development."
      ],
    },
    {
      title: "Development Potential",
      paragraphs: [
        "With 165 sq. yards of land, the property offers flexible options for modern residential construction depending on buyer preferences and local regulations.",
        "Possible construction options include: Independent residential house, Duplex home, Villa-style residence, or Multi-floor residential building (subject to approvals).",
        "The plot is fully ready for construction, allowing immediate development without delays."
      ],
    },
    {
      title: "Infrastructure & Utilities",
      paragraphs: [
        "The property is equipped with essential infrastructure required for comfortable residential living.",
        "Key utility provisions include an available electricity connection, borewell water facility, ready access to utility services, and wide 40-foot internal road access in a developed residential surrounding."
      ],
    },
    {
      title: "The Setting: Shadnagar",
      paragraphs: [
        "Shadnagar is one of Hyderabad’s rapidly growing suburban investment destinations, known for its strategic connectivity and expanding infrastructure. Its proximity to major transport corridors and the airport makes it highly attractive for both homeowners and investors. Nearby highlights include the Shadnagar Municipality, Hyderabad International Airport (just 20 minutes away), and easy access to the Hyderabad–Bangalore Highway."
      ],
    },
  ],
  propertyFeatures: [
    {
      title: "Land Details",
      details: [
        "165 sq. yards residential land",
        "East-facing plot",
        "Corner plot",
        "DTCP & RERA approved layout",
        "R1 Zone",
        "40-foot road access",
      ],
    },
    {
      title: "Building Potential",
      details: [
        "Ready for immediate construction",
        "Suitable for independent house or duplex",
        "Flexible future development options",
      ],
    },
    {
      title: "Utilities",
      details: [
        "Electricity available",
        "Borewell water available",
        "Suitable for immediate residential setup",
      ],
    },
  ],
  location: "Shadnagar Town, Hyderabad, Telangana",
},
 {
    id: "p15",
    title: "Residential Plot, Visakhapatnam",
    price: "56,00,000",
    subprice: "28,000/sq yard",
    type: "For sale",
    propertyDetails: {
      bedrooms: 0,
      bathrooms: 0,
      type: "Residential Plot",
      plotArea: "200 Sq. Yards",
      builtArea: "200 Sq. Yards",
      facing: "East Facing",
      totalFloors: "",
      floorNo: "",
      age: "",
      approvedBy: "VMRDA Approved",
      amenities: [
        "40 Feet Road access",
        "Electricity Available",
        "Bore water available",
        "Ready for Immediate Construction",
      ],
    },
    images: [] as string[],
    propertyImage: "/images/property/property-15/image-11.jpeg",
    url: "/marketplace/property-15",
    content: [
      {
        title: "Explore this Property",
        paragraphs: [
          "Located in Visakhapatnam, this 200 sq. yard residential plot offers a strong opportunity for both residential construction and long-term land investment.",
          "The property benefits from structured layout planning and wide road access, making it suitable for immediate construction without additional preparation. The east-facing orientation allows natural light and is commonly preferred for residential planning and Vaastu considerations.",
        ],
      },
      {
        title: "The Living Experience",
        paragraphs: [
          "For families planning to build a home, this plot provides a balanced residential environment with access to nearby infrastructure.",
          "The east-facing direction ensures natural morning sunlight, contributing to a comfortable and well-lit living space. The 40-feet road access enhances connectivity and supports smooth construction.",
        ],
      },
      {
        title: "Development Potential",
        paragraphs: [
          "With 200 sq. yards of land, the plot offers flexibility for different types of residential construction. Possible construction options include an independent residential house, villa-style home, or duplex residential construction.",
          "The plot is ready for construction, making it suitable for immediate development without delays.",
        ],
      },
      {
        title: "Infrastructure & Utilities",
        paragraphs: [
          "The property is supported by essential infrastructure required for residential living, including electricity connection and bore water availability.",
          "It features 40-feet wide road access and is ready for immediate construction.",
        ],
      },
      {
        title: "The Setting: Visakhapatnam",
        paragraphs: [
          "Visakhapatnam is a developing residential area gaining attention due to its proximity to coastal infrastructure and connectivity routes. The area is attracting buyers looking for residential plots with future appreciation potential, with nearby highlights including Bhimm Beach Road.",
        ],
      },
    ],
    propertyFeatures: [
      {
        title: "Land Details",
        details: [
          "200 sq yards residential land",
          "East-facing plot",
          "VMRDA approved layout",
          "40-feet road access",
        ],
      },
      {
        title: "Building Potential",
        details: [
          "Ready for residential construction",
          "Suitable for independent house or villa",
          "Flexible planning options",
        ],
      },
      {
        title: "Utilities",
        details: [
          "Electricity available",
          "Bore water available",
          "Suitable for immediate construction",
        ],
      },
    ],
    location: "Visakhapatnam",
  },
  {
  id: "p16",
  title: "Residential Plot, Gandimaisamma, Medchal–Malkajgiri District",
  price: "1,06,75,000",
  subprice: "35,000/sq yard",
  type: "For sale",
  propertyDetails: {
    bedrooms: 0,
    bathrooms: 0,
    type: "Land",
    plotArea: "305 Sq. Yards",
    builtArea: "305 Sq. Yards",
    facing: "East Facing",
    totalFloors: "",
    floorNo: "",
    age: "",
    approvedBy: "LRS Amount Paid",
    amenities: [
      "South-East Corner Plot",
      "30 Feet Road access (East)",
      "25 Feet Road access (South)",
      "Electricity Available Nearby",
      "Borewell Nearby",
      "Ready for Construction",
    ],
  },
  images: [] as string[],
  propertyImage: "/images/property/property-16/image-1.jpeg",
  url: "/marketplace/property-16",
  content: [
    {
      title: "Explore this Property",
      paragraphs: [
        "Located in Gandimaisamma, Medchal–Malkajgiri District, this 305 sq. yard residential corner plot presents an excellent opportunity for both residential construction and long-term investment. Positioned within a well-established residential area, the property enjoys dual road access and is ready for immediate development. The east-facing orientation and South-East corner position are highly preferred by many homebuyers and investors for residential planning and Vaastu considerations.",
      ],
    },
    {
      title: "The Living Experience",
      paragraphs: [
        "For families planning to build their dream home, this plot offers a peaceful residential environment with convenient access to schools, commercial establishments, healthcare facilities, and transportation networks.",
        "The east-facing direction allows ample natural morning sunlight, creating a bright and comfortable living space. The corner plot advantage provides better ventilation, enhanced accessibility, and greater architectural flexibility. The dual road access from the east and south sides ensures smooth entry and improved convenience for future construction and daily living.",
      ],
    },
    {
      title: "Development Potential",
      paragraphs: [
        "With 305 sq. yards of land, the property offers excellent flexibility for various residential development options. Possible Construction Options:\n- Independent Residential House\n- Luxury Villa\n- Duplex House\n- Rental Income Property\n- Multi-floor Residential Building (subject to local regulations). As the plot is ready for immediate construction, buyers can begin development without significant site preparation.",
      ],
    },
    {
      title: "Infrastructure & Utilities",
      paragraphs: [
        "The property is supported by essential infrastructure required for residential development:",
        "- Electricity available nearby\n- Borewell facility nearby\n- 30-feet and 25-feet road access\n- Ready for immediate construction\n- Well-developed residential surroundings",
      ],
    },
    {
      title: "The Setting: Gandimaisamma",
      paragraphs: [
        "Gandimaisamma has emerged as one of the fast-growing residential locations in the Medchal–Malkajgiri region due to its connectivity, infrastructure growth, and proximity to major employment hubs of Hyderabad. The area continues to attract homebuyers and investors seeking residential plots with strong long-term appreciation potential and easy access to city conveniences.",
        "Nearby Highlights:\n- Sai Baba Temple\n- MRO Office\n- ORR (Outer Ring Road) Connectivity\n- Kompally\n- Bachupally\n- Jeedimetla Industrial Area\n- Medchal Highway Corridor",
      ],
    },
  ],
  propertyFeatures: [
    {
      title: "Land Details",
      details: [
        "305 sq. yards residential land",
        "East-facing plot",
        "South-East corner plot",
        "LRS amount paid",
        "R1 residential zoning",
        "Dual road access",
      ],
    },
    {
      title: "Building Potential",
      details: [
        "Ready for residential construction",
        "Suitable for independent house or villa",
        "Flexible architectural planning options",
        "Strong investment opportunity",
      ],
    },
    {
      title: "Utilities",
      details: [
        "Electricity available nearby",
        "Borewell facility nearby",
        "Dual road connectivity",
        "Suitable for immediate construction and occupancy planning",
      ],
    },
  ],
  location: "Gandimaisamma, Medchal–Malkajgiri District, Telangana",
},
];

export const posts = articles.slice(0);
export default function Marketplace() {
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
