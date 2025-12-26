"use client"
import { Funnel, ChevronDown } from "lucide-react"
import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { SubHeadingContainer } from "../common/SubHeadingContainer"
import { Typography } from "../common/Typography"
import { useState, useMemo, useEffect } from "react"
import { Card } from "../region/Card"
import { getPackagesByCountry } from "@/api/package"

interface AllCountriesProps {
    packages?: any[];
}

export const AllCountries = ({ packages = [] }: AllCountriesProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState("All Countries")
    const [displayPackages, setDisplayPackages] = useState(packages)

    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleSelect = async (country: string) => {
        setSelectedCountry(country)
        setIsOpen(false)

        if (country === "All Countries") {
            setDisplayPackages(packages);
        } else {
            try {
                const res = await getPackagesByCountry(country);
                setDisplayPackages(res?.data || []);
            } catch (error) {
                console.error("Failed to filter packages:", error);
            }
        }
    }

    const countries = useMemo(() => {
        const uniqueCountries = new Set(packages.map(p => {
            const attr = p.attributes || p;
            return attr.country?.name || attr.country?.data?.attributes?.name;
        }));
        return ["All Countries", ...Array.from(uniqueCountries).filter(Boolean)];
    }, [packages]);

    useEffect(() => {
        setDisplayPackages(packages);
    }, [packages]);

    return (
        <MaxWidthWrapper>
            <div className="md:space-y-10 space-y-2 md:py-10 py-4">
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 md:gap-0">
                    <div className="max-md:hidden w-full md:w-auto text-center md:text-left">
                        <SubHeadingContainer left headingtext="Tours in all countries" paragraphtext="Discover our curated tour packages of all countries" />
                    </div>

                    <div className="md:hidden w-full md:w-auto text-center md:text-left">
                        <SubHeadingContainer headingtext="Tours in all countries" paragraphtext="Discover our curated tour packages of all countries" />
                    </div>


                    <div className="w-full md:w-auto flex relative gap-5 items-center justify-end md:justify-start">
                        <div className="flex gap-[.625rem]">
                            <Funnel className="size-6" />
                            <Typography
                                styleName="p5"
                                weight="regular"
                                variant="p"
                                className="text-[#000000] max-md:hidden"
                            >
                                Filter by Country:
                            </Typography>
                        </div>
                        <div className="flex gap-5 items-center relative">
                            <div
                                className={`flex items-center gap-2 cursor-pointer bg-transparent md:bg-[#E8E8E8] px-2 py-[.4063rem] md:py-2 md:min-w-[200px] justify-between ${isOpen ? 'rounded-t-[.25rem] rounded-b-none border border-[#E8E8E8]' : 'rounded-[.25rem] border border-neutral-700'}`}
                                onClick={toggleDropdown}
                            >
                                <div className="flex items-center gap-2">
                                    <Typography styleName="p5" weight="regular" variant="p" className="text-[#000000] max-md:text-[.875rem] max-md:leading-[1.1875rem]">
                                        {selectedCountry}
                                    </Typography>
                                </div>
                                <ChevronDown className={`w-4 md:w-6 md:h-6 stroke-[.125rem] text-[#000000] `} />
                            </div>

                            {isOpen && (
                                <div className="absolute top-full left-0 w-full bg-[#E8E8E8] rounded-b-[.25rem] shadow-lg z-50 max-h-[300px] overflow-y-auto transition-all  duration-200">
                                    {countries.map((country: any) => (
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
                                                className="max-md:text-[.875rem] max-md:leading-[1.1875rem]"
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

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[1.875rem] md:gap-y-10">
                    {displayPackages.length > 0 ? (
                        displayPackages.map((item, index) => {
                            const attr = item.attributes || item;
                            const imageUrl = attr.Image?.url
                                ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${attr.Image.url}`
                                : "/image/country/Thailand.png";

                            return (
                                <Card
                                    key={index}
                                    image={imageUrl}
                                    country={attr.Title || attr.country?.data?.attributes?.name}
                                    continent={attr.continent?.Description || attr.continent?.data?.attributes?.name}
                                    link={`/packages/${attr.Slug}`}
                                    description={attr.Description}
                                />
                            );
                        })
                    ) : (
                        <p className="text-center col-span-full text-neutral-500">No packages found.</p>
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    )
}