export interface PackageItem {
    slug: string;
    title: string;
    location: string;
    date: string;
    readTime?: string;
    author?: string;
    coverImage: string;
    galleryImages: string[];
    description?: string;
    places: { text: string; icon: string }[];
    itinerary: { day: string; lists: string[] }[];
    bestTime: string;
    duration: string;
}

export const packageData: PackageItem[] = [
    {
        slug: "foodie-guide-japan",
        title: "A Foodie's Guide to Exploring Japanese Cuisine",
        location: "New York, USA",
        date: "June 3, 2023",
        readTime: "10 min read",
        author: "David Kim",
        coverImage: "/image/blog/blog1.svg",
        galleryImages: [
            "/image/gallery/gallery1.png",
            "/image/gallery/gallery2.png",
            "/image/gallery/gallery3.png",
            "/image/gallery/gallery4.png",
            "/image/gallery/gallery5.png",
            "/image/gallery/gallery2.png"
        ],
        description: "Discover the best Japanese cuisine in New York City.",
        places: [
            { text: "Sushi Nakazawa", icon: "map-pin" },
            { text: "Ippudo NY", icon: "map-pin" },
            { text: "Totto Ramen", icon: "map-pin" }
        ],
        itinerary: [
            {
                day: "Day 1 - Sushi Exploration",
                lists: ["Visit Sushi Nakazawa", "Walk around West Village"]
            },
            {
                day: "Day 2 - Ramen Hunt",
                lists: ["Lunch at Ippudo", "Dinner at Totto Ramen"]
            }
        ],
        bestTime: "Year Round",
        duration: "2 Days"
    },
    {
        slug: "hidden-beaches-southeast-asia",
        title: "Top 10 Hidden Beaches in Southeast Asia",
        location: "Bali, Indonesia",
        date: "Dec 25, 2024",
        readTime: "15 min read",
        author: "Sarah Jenkins",
        coverImage: "/image/country/Dubai.png",
        galleryImages: [
            "/image/gallery/gallery1.png",
            "/image/gallery/gallery2.png",
            "/image/gallery/gallery3.png"
        ],
        description: "Explore the untouched beaches of Southeast Asia.",
        places: [
            { text: "Nusa Penida", icon: "map-pin" },
            { text: "Gili Islands", icon: "map-pin" }
        ],
        itinerary: [
            {
                day: "Day 1 - Arrival in Bali",
                lists: ["Check in to hotel", "Beach walk"]
            },
            {
                day: "Day 2 - Island Hopping",
                lists: ["Boat to Nusa Penida", "Snorkeling"]
            }
        ],
        bestTime: "April to October",
        duration: "5 Days"
    },
    {
        slug: "thailand-adventure",
        title: "Thailand Island Hopping Adventure",
        location: "Thailand",
        date: "Jan 10, 2025",
        readTime: "12 min read",
        author: "Alex Johnson",
        coverImage: "/image/country/Thailand.png",
        galleryImages: ["/image/gallery/gallery1.png", "/image/gallery/gallery2.png"],
        description: "Experience the vibrant culture and stunning islands of Thailand.",
        places: [{ text: "Phuket", icon: "map-pin" }, { text: "Phi Phi Islands", icon: "map-pin" }],
        itinerary: [{ day: "Day 1", lists: ["Arrival in Phuket"] }, { day: "Day 2", lists: ["Island Tour"] }],
        bestTime: "November to April",
        duration: "7 Days"
    },
    {
        slug: "dubai-luxury",
        title: "Dubai Luxury Experience",
        location: "Dubai, UAE",
        date: "Feb 15, 2025",
        readTime: "8 min read",
        author: "Maria Garcia",
        coverImage: "/image/country/Dubai.png",
        galleryImages: ["/image/gallery/gallery3.png", "/image/gallery/gallery4.png"],
        description: "Indulge in the luxury and modern wonders of Dubai.",
        places: [{ text: "Burj Khalifa", icon: "map-pin" }, { text: "Dubai Mall", icon: "map-pin" }],
        itinerary: [{ day: "Day 1", lists: ["Arrival"] }, { day: "Day 2", lists: ["City Tour"] }],
        bestTime: "November to March",
        duration: "5 Days"
    },
    {
        slug: "vietnam-culture",
        title: "Vietnam Cultural Journey",
        location: "Vietnam",
        date: "Mar 20, 2025",
        readTime: "14 min read",
        author: "Le Minh",
        coverImage: "/image/country/Vietnam.png",
        galleryImages: ["/image/gallery/gallery5.png", "/image/gallery/gallery1.png"],
        description: "Discover the rich history and landscapes of Vietnam.",
        places: [{ text: "Ha Long Bay", icon: "map-pin" }, { text: "Hanoi", icon: "map-pin" }],
        itinerary: [{ day: "Day 1", lists: ["Hanoi City Tour"] }, { day: "Day 2", lists: ["Ha Long Bay Cruise"] }],
        bestTime: "February to April",
        duration: "10 Days"
    },
    {
        slug: "singapore-city",
        title: "Singapore City Break",
        location: "Singapore",
        date: "Apr 5, 2025",
        readTime: "6 min read",
        author: "Chen Wei",
        coverImage: "/image/country/Singapore.png",
        galleryImages: ["/image/gallery/gallery2.png", "/image/gallery/gallery3.png"],
        description: "Explore the modern marvels and green spaces of Singapore.",
        places: [{ text: "Marina Bay Sands", icon: "map-pin" }, { text: "Gardens by the Bay", icon: "map-pin" }],
        itinerary: [{ day: "Day 1", lists: ["Arrival"] }, { day: "Day 2", lists: ["City Sightseeing"] }],
        bestTime: "February to April",
        duration: "4 Days"
    },
    {
        slug: "maldives-honeymoon",
        title: "Maldives Honeymoon Escape",
        location: "Maldives",
        date: "May 1, 2025",
        readTime: "5 min read",
        author: "Emily Clark",
        coverImage: "/image/country/Maldives.png",
        galleryImages: ["/image/gallery/gallery4.png", "/image/gallery/gallery5.png"],
        description: "Relax in the paradise of the Maldives.",
        places: [{ text: "Male", icon: "map-pin" }, { text: "Resort Island", icon: "map-pin" }],
        itinerary: [{ day: "Day 1", lists: ["Speedboat transfer"] }, { day: "Day 2", lists: ["Relaxation"] }],
        bestTime: "November to April",
        duration: "6 Days"
    },
    {
        slug: "malaysia-nature",
        title: "Malaysia Nature & City",
        location: "Malaysia",
        date: "Jun 10, 2025",
        readTime: "11 min read",
        author: "Ahmad Razak",
        coverImage: "/image/country/Malaysia.png",
        galleryImages: ["/image/gallery/gallery1.png", "/image/gallery/gallery2.png"],
        description: "Experience the diversity of Malaysia.",
        places: [{ text: "Kuala Lumpur", icon: "map-pin" }, { text: "Langkawi", icon: "map-pin" }],
        itinerary: [{ day: "Day 1", lists: ["KL Tower", "Batu Caves"] }, { day: "Day 2", lists: ["Batu Caves"] }, { day: "Day 2", lists: ["Batu Caves"] }, { day: "Day 2", lists: ["Batu Caves"] }, { day: "Day 2", lists: ["Batu Caves"] },  ],
        bestTime: "March to October",
        duration: "8 Days"
    },
    {
        slug: "himalaya-trek",
        title: "Himalayan Trekking Adventure",
        location: "Nepal",
        date: "Oct 1, 2025",
        readTime: "20 min read",
        author: "Dorje Sherpa",
        coverImage: "/image/country/Himalaya.png",
        galleryImages: ["/image/gallery/gallery3.png", "/image/gallery/gallery4.png"],
        description: "Trek through the majestic Himalayas.",
        places: [{ text: "Kathmandu", icon: "map-pin" }, { text: "Everest Base Camp", icon: "map-pin" }],
        itinerary: [{ day: "Day 1", lists: ["Arrival in Kathmandu"] }, { day: "Day 2", lists: ["Flight to Lukla"] }],
        bestTime: "October to November",
        duration: "14 Days"
    }
];
