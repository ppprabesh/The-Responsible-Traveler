export type PackageCategory = "trekking" | "climbing" | "hiking" | "discovery" | "cultural" | "cycling"

export interface Package {
  id: string
  title: string
  category: PackageCategory
  image: string
  duration: string
  difficulty: "A" | "B" | "C" | "D" | "E"
  price: number
  description: string
  highlights: string[]
  maxAltitude: string
  groupSize: string
  bestSeason: string
  longDescription: string
  itinerary: { day: string; title: string; description: string; altitude?: string }[]
  includes: string[]
  excludes: string[]
  gallery: string[]
  mapImage?: string
  startingPoint: string
  endingPoint: string
  accommodation: string
  meals: string
  transportation: string
  minAge: number
  fitnessLevel: string
}

export const packages: Package[] = [
 //Trekking packages
  {
    id: "everest-base-camp",
    title: "Everest Base Camp Trek",
    category: "trekking",
    image: "/images/ganeshhimal.jpg",
    duration: "14 Days",
    difficulty: "A",
    price: 1850,
    description: "The classic journey to the foot of the world's highest peak through Sherpa villages and monasteries.",
    longDescription:
      "The Everest Base Camp Trek is the adventure of a lifetime, taking you through the heart of the Khumbu region to the base of the world's highest mountain. This iconic trek offers breathtaking views of towering Himalayan peaks, ancient Buddhist monasteries, and the warm hospitality of the Sherpa people. Walk in the footsteps of legendary mountaineers as you acclimatize through charming villages like Namche Bazaar and Tengboche, eventually reaching the famous Everest Base Camp at 5,364m and the stunning viewpoint of Kala Patthar.",
    highlights: [
      "Namche Bazaar",
      "Tengboche Monastery",
      "Kala Patthar viewpoint",
      "Sherpa culture",
      "Sagarmatha National Park",
    ],
    maxAltitude: "5,545m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    itinerary: [
      {
        day: "1",
        title: "Arrival in Kathmandu",
        description: "Welcome meeting and trek briefing. Transfer to hotel.",
        altitude: "1,400m",
      },
      {
        day: "2",
        title: "Fly to Lukla, Trek to Phakding",
        description: "Scenic flight to Lukla and begin trekking through pine forests.",
        altitude: "2,610m",
      },
      {
        day: "3",
        title: "Trek to Namche Bazaar",
        description: "Cross suspension bridges and climb to the Sherpa capital.",
        altitude: "3,440m",
      },
      {
        day: "4",
        title: "Acclimatization Day in Namche",
        description: "Explore Namche, visit the museum and viewpoints.",
        altitude: "3,440m",
      },
      {
        day: "5",
        title: "Trek to Tengboche",
        description: "Walk through rhododendron forests to the famous monastery.",
        altitude: "3,860m",
      },
      {
        day: "6",
        title: "Trek to Dingboche",
        description: "Enter the alpine zone with stunning Ama Dablam views.",
        altitude: "4,410m",
      },
      {
        day: "7",
        title: "Acclimatization Day in Dingboche",
        description: "Rest day with optional hike to Nagarjun Hill.",
        altitude: "4,410m",
      },
      {
        day: "8",
        title: "Trek to Lobuche",
        description: "Pass memorials and enjoy dramatic mountain scenery.",
        altitude: "4,940m",
      },
      {
        day: "9",
        title: "Trek to Gorak Shep, Visit Base Camp",
        description: "Reach Everest Base Camp and witness the Khumbu Icefall.",
        altitude: "5,364m",
      },
      {
        day: "10",
        title: "Kala Patthar Sunrise, Trek to Pheriche",
        description: "Early morning hike for sunrise views, then descend.",
        altitude: "4,280m",
      },
      {
        day: "11",
        title: "Trek to Namche Bazaar",
        description: "Retrace steps through familiar terrain.",
        altitude: "3,440m",
      },
      {
        day: "12",
        title: "Trek to Lukla",
        description: "Final day of trekking through lower villages.",
        altitude: "2,860m",
      },
      {
        day: "13",
        title: "Fly to Kathmandu",
        description: "Morning flight back to Kathmandu. Free time for shopping.",
        altitude: "1,400m",
      },
      {
        day: "14",
        title: "Departure",
        description: "Transfer to airport for your onward journey.",
        altitude: "1,400m",
      },
    ],
    includes: [
      "Airport transfers",
      "Domestic flights (Kathmandu-Lukla-Kathmandu)",
      "All accommodation during trek",
      "All meals during trek",
      "Experienced English-speaking guide",
      "Porters (1 porter per 2 trekkers)",
      "Sagarmatha National Park permits",
      "TIMS card",
      "First aid kit",
      "Sleeping bag (if required)",
    ],
    excludes: [
      "International flights",
      "Nepal visa fees",
      "Travel insurance",
      "Personal trekking gear",
      "Tips for guides and porters",
      "Alcoholic beverages",
      "Hot showers and charging fees",
      "Emergency evacuation costs",
    ],
    gallery: [
      "/images/ganeshhimal.jpg",
      "/images/prayerflaglangtang.jpg",
      "/images/theladyandtheyak.jpg",
      "/images/tserkori.jpg",
     
      
    ],
    startingPoint: "Lukla",
    endingPoint: "Lukla",
    accommodation: "Tea Houses / Lodges",
    meals: "Breakfast, Lunch, Dinner",
    transportation: "Domestic Flights + Trekking",
    minAge: 12,
    fitnessLevel: "Good fitness required. Prior trekking experience recommended.",
  },
  

  // Climbing Packages
  {
    id: "island-peak",
    title: "Island Peak Climbing",
    category: "climbing",
    image: "/placeholder.svg?height=600&width=800",
    duration: "18 Days",
    difficulty: "B",
    price: 2800,
    description: "Perfect introduction to high altitude mountaineering in the Everest region.",
    longDescription:
      "Island Peak (Imja Tse) at 6,189m is one of Nepal's most popular climbing peaks, offering an excellent introduction to Himalayan mountaineering. Combined with the classic Everest Base Camp trek, this expedition provides technical climbing training and the thrill of summiting a Himalayan peak. The climb involves glacier travel, fixed rope climbing, and basic ice climbing techniques, all with stunning views of Lhotse, Nuptse, and Makalu.",
    highlights: [
      "Technical climbing training",
      "Summit at 6,189m",
      "Everest views",
      "Glacier training",
      "Base Camp experience",
    ],
    maxAltitude: "6,189m",
    groupSize: "2-8",
    bestSeason: "Apr-May, Oct-Nov",
    itinerary: [
      { day: "1", title: "Arrival in Kathmandu", description: "Gear check and briefing.", altitude: "1,400m" },
      { day: "2", title: "Fly to Lukla, Trek to Phakding", description: "Begin the approach.", altitude: "2,610m" },
      { day: "3", title: "Trek to Namche Bazaar", description: "Climb to Sherpa capital.", altitude: "3,440m" },
      { day: "4", title: "Acclimatization in Namche", description: "Rest and explore.", altitude: "3,440m" },
      { day: "5", title: "Trek to Tengboche", description: "Visit the famous monastery.", altitude: "3,860m" },
      { day: "6", title: "Trek to Dingboche", description: "Enter alpine zone.", altitude: "4,410m" },
      { day: "7", title: "Acclimatization in Dingboche", description: "Prepare for altitude.", altitude: "4,410m" },
      { day: "8", title: "Trek to Chhukung", description: "Move to climbing base.", altitude: "4,730m" },
      { day: "9", title: "Climbing Training", description: "Practice techniques.", altitude: "4,730m" },
      { day: "10", title: "Trek to Island Peak Base Camp", description: "Reach base camp.", altitude: "5,087m" },
      { day: "11", title: "Climb to High Camp", description: "Prepare for summit.", altitude: "5,600m" },
      { day: "12", title: "Summit Day, Return to Chhukung", description: "Summit and descend.", altitude: "4,730m" },
      { day: "13", title: "Reserve Day", description: "Weather contingency.", altitude: "4,730m" },
      { day: "14", title: "Trek to Tengboche", description: "Begin return journey.", altitude: "3,860m" },
      { day: "15", title: "Trek to Namche Bazaar", description: "Continue descent.", altitude: "3,440m" },
      { day: "16", title: "Trek to Lukla", description: "Final trekking day.", altitude: "2,860m" },
      { day: "17", title: "Fly to Kathmandu", description: "Return to capital.", altitude: "1,400m" },
      { day: "18", title: "Departure", description: "Transfer to airport.", altitude: "1,400m" },
    ],
    includes: [
      "Flights",
      "Accommodation",
      "Meals",
      "Climbing guide",
      "Porters",
      "Permits",
      "Climbing gear rental",
      "Group climbing equipment",
    ],
    excludes: ["International flights", "Visa", "Personal climbing gear", "Insurance", "Tips", "Personal expenses"],
    gallery: [
      "/images/ganeshhimal.jpg",
      "/images/prayerflaglangtang.jpg",
      "/images/theladyandtheyak.jpg",
      "/images/tserkori.jpg",
    ],
    startingPoint: "Lukla",
    endingPoint: "Lukla",
    accommodation: "Tea Houses + Camping",
    meals: "All Meals Included",
    transportation: "Domestic Flights + Trekking",
    minAge: 18,
    fitnessLevel: "Excellent fitness. Basic climbing experience preferred.",
  },
  
  // Hiking Packages
  {
    id: "nagarkot-sunrise",
    title: "Nagarkot Sunrise Hike",
    category: "hiking",
    image: "/placeholder.svg?height=600&width=800",
    duration: "2 Days",
    difficulty: "C",
    price: 150,
    description: "Witness a spectacular sunrise over the Himalayas from the famous Nagarkot viewpoint.",
    longDescription:
      "The Nagarkot Sunrise Hike is the perfect introduction to Nepal's mountain scenery. Located just 32km from Kathmandu, Nagarkot offers one of the best Himalayan panoramas in the country, with views stretching from Dhaulagiri in the west to Everest in the east. This easy overnight trip includes a scenic drive, short hike through terraced farmland, and an unforgettable sunrise over the world's highest peaks.",
    highlights: [
      "Panoramic Himalayan views",
      "Sunrise photography",
      "Local village exploration",
      "Easy accessibility",
      "Traditional lunch",
    ],
    maxAltitude: "2,175m",
    groupSize: "2-15",
    bestSeason: "Year-round",
    itinerary: [
      {
        day: "1",
        title: "Drive to Nagarkot, Sunset Views",
        description: "Afternoon drive and evening at viewpoint.",
        altitude: "2,175m",
      },
      {
        day: "2",
        title: "Sunrise, Hike, Return to Kathmandu",
        description: "Early sunrise, village hike, return.",
        altitude: "2,175m",
      },
    ],
    includes: ["Transportation", "Hotel accommodation", "Breakfast and lunch", "Guide", "Entry fees"],
    excludes: ["Dinner", "Tips", "Personal expenses", "Beverages"],
    gallery: [
      "/images/ganeshhimal.jpg",
      "/images/prayerflaglangtang.jpg",
      "/images/theladyandtheyak.jpg",
      "/images/tserkori.jpg",
    ],
    startingPoint: "Kathmandu",
    endingPoint: "Kathmandu",
    accommodation: "Mountain Resort",
    meals: "Breakfast, Lunch",
    transportation: "Private Vehicle",
    minAge: 5,
    fitnessLevel: "Minimal fitness required. Suitable for all ages.",
  },
 
  // Discovery Packages
  {
    id: "upper-mustang",
    title: "Upper Mustang Discovery",
    category: "discovery",
    image: "/placeholder.svg?height=600&width=800",
    duration: "14 Days",
    difficulty: "D",
    price: 2400,
    description: "Explore the forbidden kingdom with its ancient Buddhist culture and lunar landscapes.",
    longDescription:
      "Upper Mustang, the former Kingdom of Lo, remained closed to outsiders until 1992, preserving one of the world's most intact Tibetan Buddhist cultures. This discovery trek takes you through a dramatic landscape of eroded cliffs, ancient caves, and whitewashed monasteries to the walled capital of Lo Manthang. Experience a living medieval culture, explore 1,000-year-old cave paintings, and witness the unique customs of this remote Himalayan region.",
    highlights: [
      "Lo Manthang walled city",
      "Ancient cave monasteries",
      "Tibetan culture",
      "Lunar landscapes",
      "Medieval kingdom",
    ],
    maxAltitude: "3,840m",
    groupSize: "2-10",
    bestSeason: "Mar-Nov",
    itinerary: [
      { day: "1", title: "Arrival in Kathmandu", description: "Welcome and preparation.", altitude: "1,400m" },
      { day: "2", title: "Fly to Pokhara, Drive to Jomsom", description: "Begin the journey.", altitude: "2,720m" },
      { day: "3", title: "Trek to Kagbeni", description: "Enter restricted area.", altitude: "2,810m" },
      { day: "4", title: "Trek to Chele", description: "Cross the Kali Gandaki.", altitude: "3,050m" },
      { day: "5", title: "Trek to Syangboche", description: "Climb through canyons.", altitude: "3,475m" },
      { day: "6", title: "Trek to Ghami", description: "Visit monasteries.", altitude: "3,520m" },
      { day: "7", title: "Trek to Tsarang", description: "Explore the ancient town.", altitude: "3,560m" },
      { day: "8", title: "Trek to Lo Manthang", description: "Reach the capital.", altitude: "3,840m" },
      { day: "9", title: "Explore Lo Manthang", description: "Full day in the walled city.", altitude: "3,840m" },
      { day: "10", title: "Trek to Dhakmar", description: "Alternative route back.", altitude: "3,820m" },
      { day: "11", title: "Trek to Ghiling", description: "Continue return.", altitude: "3,570m" },
      { day: "12", title: "Trek to Chhuksang", description: "Through red cliffs.", altitude: "2,980m" },
      { day: "13", title: "Trek to Jomsom", description: "Reach roadhead.", altitude: "2,720m" },
      { day: "14", title: "Fly to Pokhara, Kathmandu", description: "Return and departure.", altitude: "1,400m" },
    ],
    includes: [
      "All flights and transportation",
      "Accommodation",
      "All meals",
      "Guide and porters",
      "Special Upper Mustang permit",
      "ACAP permit",
    ],
    excludes: ["International flights", "Visa", "Insurance", "Personal items", "Tips", "Alcoholic beverages"],
    gallery: [
       "/images/ganeshhimal.jpg",
      "/images/prayerflaglangtang.jpg",
      "/images/theladyandtheyak.jpg",
      "/images/tserkori.jpg",
    ],
    startingPoint: "Jomsom",
    endingPoint: "Jomsom",
    accommodation: "Tea Houses / Local Guesthouses",
    meals: "Breakfast, Lunch, Dinner",
    transportation: "Domestic Flights + Trekking",
    minAge: 14,
    fitnessLevel: "Moderate fitness. Dry high altitude terrain.",
  },
 

  // Cultural Tours
  {
    id: "kathmandu-heritage",
    title: "Kathmandu Valley Heritage",
    category: "cultural",
    image: "/placeholder.svg?height=600&width=800",
    duration: "5 Days",
    difficulty: "E",
    price: 650,
    description: "Discover the UNESCO World Heritage sites of the Kathmandu Valley.",
    longDescription:
      "The Kathmandu Valley is a living museum of art, architecture, and devotion. This comprehensive cultural tour takes you through seven UNESCO World Heritage Sites, including the ancient Durbar Squares of Kathmandu, Patan, and Bhaktapur, the sacred Hindu temple of Pashupatinath, and the great Buddhist stupas of Boudhanath and Swayambhunath. Experience living traditions, witness cremation ceremonies, observe monks in prayer, and explore medieval cities where craftsmen still practice ancient arts.",
    highlights: [
      "Pashupatinath Temple",
      "Boudhanath Stupa",
      "Three Durbar Squares",
      "Swayambhunath",
      "Traditional crafts",
    ],
    maxAltitude: "1,400m",
    groupSize: "2-15",
    bestSeason: "Year-round",
    itinerary: [
      {
        day: "1",
        title: "Arrival, Kathmandu Orientation",
        description: "Welcome and city overview.",
        altitude: "1,400m",
      },
      {
        day: "2",
        title: "Kathmandu Heritage Sites",
        description: "Durbar Square, Swayambhunath, Pashupatinath.",
        altitude: "1,400m",
      },
      {
        day: "3",
        title: "Patan and Boudhanath",
        description: "Explore the golden city and great stupa.",
        altitude: "1,400m",
      },
      { day: "4", title: "Bhaktapur Full Day", description: "Medieval city of devotees.", altitude: "1,400m" },
      { day: "5", title: "Final Exploration, Departure", description: "Shopping, departure.", altitude: "1,400m" },
    ],
    includes: [
      "Airport transfers",
      "Accommodation with breakfast",
      "Private guide",
      "Private transportation",
      "All entry fees",
      "Welcome and farewell dinners",
    ],
    excludes: ["International flights", "Visa", "Lunches", "Tips", "Personal expenses"],
    gallery: [
       "/images/ganeshhimal.jpg",
      "/images/prayerflaglangtang.jpg",
      "/images/theladyandtheyak.jpg",
      "/images/tserkori.jpg",
    ],
    startingPoint: "Kathmandu",
    endingPoint: "Kathmandu",
    accommodation: "Heritage Hotels",
    meals: "Breakfast, 2 Dinners",
    transportation: "Private Vehicle",
    minAge: 5,
    fitnessLevel: "Minimal fitness. Walking tours with some steps.",
  },
 

  // Cycling Packages
  {
    id: "kathmandu-valley-cycling",
    title: "Kathmandu Valley Cycling",
    category: "cycling",
    image: "/placeholder.svg?height=600&width=800",
    duration: "3 Days",
    difficulty: "E",
    price: 350,
    description: "Explore the historic Kathmandu Valley by bike, visiting temples and traditional villages.",
    longDescription:
      "Discover the Kathmandu Valley at your own pace on this scenic cycling tour. Pedal through ancient Newar towns, past terraced rice fields, and alongside centuries-old temples and shrines. This easy-paced tour takes you through the UNESCO World Heritage Site of Bhaktapur, the sacred temple of Changu Narayan, and into the countryside where traditional life continues unchanged. Perfect for cyclists of all levels who want to combine exercise with cultural exploration.",
    highlights: [
      "Bhaktapur Durbar Square",
      "Changu Narayan Temple",
      "Scenic rice paddies",
      "Newar villages",
      "Valley views",
    ],
    maxAltitude: "1,500m",
    groupSize: "2-12",
    bestSeason: "Year-round",
    itinerary: [
      { day: "1", title: "Kathmandu to Bhaktapur", description: "Cycle to the medieval city.", altitude: "1,400m" },
      { day: "2", title: "Bhaktapur to Nagarkot", description: "Climb to the viewpoint.", altitude: "2,175m" },
      {
        day: "3",
        title: "Nagarkot to Changu Narayan to Kathmandu",
        description: "Downhill through villages.",
        altitude: "1,400m",
      },
    ],
    includes: [
      "Quality mountain bike",
      "Helmet and gear",
      "Support vehicle",
      "Accommodation",
      "Breakfast and lunch",
      "Experienced guide",
    ],
    excludes: ["Dinners", "Tips", "Personal expenses", "Travel insurance"],
    gallery: [
      "/images/ganeshhimal.jpg",
      "/images/prayerflaglangtang.jpg",
      "/images/theladyandtheyak.jpg",
      "/images/tserkori.jpg",
    ],
    startingPoint: "Kathmandu",
    endingPoint: "Kathmandu",
    accommodation: "Hotels / Resorts",
    meals: "Breakfast, Lunch",
    transportation: "Cycling + Support Vehicle",
    minAge: 12,
    fitnessLevel: "Basic cycling fitness. Mostly flat with some hills.",
  },
 
]

export const categories = [
  { id: "all", label: "All Packages" },
  { id: "trekking", label: "Trekking" },
  { id: "climbing", label: "Climbing" },
  { id: "hiking", label: "Hiking" },
  { id: "discovery", label: "Discovery Sites" },
  { id: "cultural", label: "Cultural Tours" },
  { id: "cycling", label: "Cycling" },
]

export const difficulties = ["A", "B", "C", "D", "E"]

export function getPackageById(id: string): Package | undefined {
  return packages.find((pkg) => pkg.id === id)
}

export function getRelatedPackages(currentId: string, category: PackageCategory, limit = 3): Package[] {
  return packages.filter((pkg) => pkg.category === category && pkg.id !== currentId).slice(0, limit)
}
