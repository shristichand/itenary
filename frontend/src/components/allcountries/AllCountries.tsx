"use client"
import { Funnel, ChevronDown } from "lucide-react"
import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { SubHeadingContainer } from "../common/SubHeadingContainer"
import { Typography } from "../common/Typography"
import { useState } from "react"
import { Card } from "../region/Card"

const countries = [
    "All Countries",
    "Dubai",
    "Malaysia",
    "Thailand",
    "Singapore",
    "Maldives",
    "Vietnam",
    "Indonesia",
    "Nepal"
]

const packages = [
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Dubai.png",
        country: "Dubai",
        continent: "Asia",
        link: "/packages/dubai-luxury",
        description: "Indulge in the luxury and modern wonders of Dubai."
    },
    {
        image: "/image/country/Vietnam.png",
        country: "Vietnam",
        continent: "Asia",
        link: "/packages/vietnam-culture",
        description: "Discover the rich history and landscapes of Vietnam."
    },
    {
        image: "/image/country/Singapore.png",
        country: "Singapore",
        continent: "Asia",
        link: "/packages/singapore-city",
        description: "Explore the modern marvels and green spaces of Singapore."
    },
    {
        image: "/image/country/Maldives.png",
        country: "Maldives",
        continent: "Asia",
        link: "/packages/maldives-honeymoon",
        description: "Relax in the paradise of the Maldives."
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/packages/malaysia-nature",
        description: "Experience the diversity of Malaysia."
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/packages/himalaya-trek",
        description: "Trek through the majestic Himalayas."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/packages/malaysia-nature",
        description: "Experience the diversity of Malaysia."
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/packages/himalaya-trek",
        description: "Trek through the majestic Himalayas."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/packages/malaysia-nature",
        description: "Experience the diversity of Malaysia."
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/packages/himalaya-trek",
        description: "Trek through the majestic Himalayas."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/packages/malaysia-nature",
        description: "Experience the diversity of Malaysia."
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/packages/himalaya-trek",
        description: "Trek through the majestic Himalayas."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
]

export const AllCountries = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState("All Countries")

    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleSelect = (country: string) => {
        setSelectedCountry(country)
        setIsOpen(false)
    }

    return (
        <MaxWidthWrapper>
            <div className="space-y-10 py-10 ">
                <div className="flex justify-between items-center">
                    <div className="text-left!">
                        <SubHeadingContainer left headingtext="Tours in all countries" paragraphtext="Discover our curated tour packages of all countries" />
                    </div>


                    <div className="flex relative gap-5 items-center">
                        <div className="flex gap-[.625rem]">
                            <Funnel className="size-6" />
                            <Typography
                                styleName="p5"
                                weight="regular"
                                variant="p"
                                className="text-[#000000]"
                            >
                                Filter by Country:
                            </Typography>
                        </div>
                        <div className="flex gap-5 items-center relative">
                            <div
                                className={`flex items-center gap-2  cursor-pointer bg-[#E8E8E8] px-2 py-2 min-w-[200px] justify-between ${isOpen ? 'rounded-t-[.25rem]  rounded-b-none border border-[#E8E8E8]' : 'rounded-[.25rem] border border-neutral-700'}`}
                                onClick={toggleDropdown}
                            >
                                <div className="flex items-center gap-2">
                                    <Typography styleName="p5" weight="regular" variant="p" className="text-[#000000]">
                                        {selectedCountry}
                                    </Typography>
                                </div>
                                <ChevronDown className={`w-6 h-6 stroke-[.125rem] text-[#000000] `} />
                            </div>

                            {isOpen && (
                                <div className="absolute top-full left-0 w-full bg-[#E8E8E8] rounded-b-[.25rem] shadow-lg z-50 max-h-[300px] overflow-y-auto transition-all  duration-200">
                                    {countries.map((country) => (
                                        <div
                                            key={country}
                                            className={`px-4 py-2 cursor-pointer transition-colors ${selectedCountry === country
                                                ? "bg-[#1D4197] text-white"
                                                : "text-[#000000] hover:bg-[#A4A4A4] hover:text-white"
                                                }`}
                                            onClick={() => handleSelect(country)}
                                        >
                                            <Typography
                                                styleName="p5"
                                                weight="regular"
                                                variant="p"
                                            >
                                                {country}
                                            </Typography>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[1.875rem] gap-y-10">
                    {selectedCountry === "All Countries" ? (
                        packages.map((item, index) => (
                            <Card key={index} image={item.image} country={item.country} continent={item.continent} link={item.link} description={item.description} />
                        ))
                    ) : (
                        packages.filter((item) => item.country === selectedCountry).map((item, index) => (
                            <Card key={index} image={item.image} country={item.country} continent={item.continent} link={item.link} description={item.description} />
                        ))
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    )
}