import { ArrowLeft, MapPin, Timer } from "lucide-react";
import Image from "next/image";
import { Typography } from "../common/Typography";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { MidSection } from "./MidSection";
import { RightSection } from "./RightSection";
import { Card } from "../gallery/Card";
import { BottomSection } from "./BottomSection";
import Link from "next/link";
import { getContactInfo } from "@/api/home";

export const Package = async ({ packageData, galleryImages }: { packageData: any, galleryImages?: string[] }) => {
    const currentPackage = packageData?.attributes || packageData;
    let contactRes;
    let contactData;
    try {
        contactRes = await getContactInfo();
        contactData = contactRes?.data[0];
    } catch (error) {
        console.log(error)
    }

    if (!currentPackage) {
        return (
            <MaxWidthWrapper>
                <div className="py-20 text-center">
                    <Typography styleName="h3" weight="bold" variant="h1" className="text-neutral-900">
                        Package Not Found
                    </Typography>
                </div>
            </MaxWidthWrapper>
        );
    }

    console.log(currentPackage, "current Package...djsalfjladsjfldsa")

    const imageUrl = currentPackage.Image?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${currentPackage.Image.url}`
        : "/image/country/Thailand.png";

    return (
        <div className="pb-10 ">
            <div>
                <div className="w-full relative h-62.5  overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt="package"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover object-bottom translate-y-[.0625rem]"
                    />

                    <div className="absolute inset-0 bg-[#00000080]"></div>
                    <div className="w-full md:w-300 h-full md:h-auto absolute top-0 md:top-1/2 left-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-end md:block p-5 md:p-0">
                        <Link href="/packages">

                            <div className="max-md:hidden flex gap-[.3125rem] items-center mb-5">
                                <ArrowLeft className="w-4 text-neutral-100" />
                                <Typography styleName="p7" weight="medium" variant="p" className="text-neutral-100 ">
                                    Back
                                </Typography>
                            </div>
                        </Link>

                        <div className="text-left md:text-center md:px-43.5 space-y-2 md:space-y-5 pb-2">
                            <div className="space-y-2 md:space-y-5">
                                <Typography styleName="sub6" weight="semibold" variant="p" className="text-neutral-100 text-[2.5rem] leading-12 md:text-[2.5rem] md:leading-12">
                                    {currentPackage.Title}
                                </Typography>

                                <Typography styleName="p3" weight="regular" variant="p" className="text-[#E8E8E8] text-base md:text-sm max-md:leading-[1.375rem]">
                                    {currentPackage.Description}
                                </Typography>

                                <div className="flex justify-between md:justify-center items-center pt-4 md:pt-0 gap-4 md:gap-10.5">
                                    <div className="flex gap-1 items-center">
                                        <MapPin className="w-5 text-[#D2D2D2]" />
                                        <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2] max-md:text-[1.125rem] max-md:leading-[1.75rem] md:text-xl">
                                            {currentPackage.country.name}
                                        </Typography>
                                    </div>

                                    <div className="flex gap-1 items-center">
                                        <Timer className="w-5 text-[#D2D2D2]" />
                                        <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2] max md:text-xl max-md:leading-[1.75rem]">
                                            {currentPackage.Days || "N/A"} Days / {currentPackage.Nights || "N/A"} Nights
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <MaxWidthWrapper>
                <div className="flex flex-wrap md:flex-nowrap md:gap-10 justify-between pt-10 pb-5">
                    <MidSection
                        description={currentPackage.Overview}
                        places={currentPackage.Places?.map((place: any) => ({
                            text: place.placeName,
                            icon: "MapPin"
                        })) || []}
                        itinerary={currentPackage.Itenary?.map((item: any) => ({
                            day: item.Day,
                            lists: item.ListItem?.map((l: any) => l.ListItem) || []
                        })) || []}
                    />
                    <RightSection
                        contactData={contactData}
                        bestTime={currentPackage.BestTime || "Year Round"}
                        days={currentPackage.Days || 0}
                        nights={currentPackage.Nights || 0}
                        className="max-md:hidden"
                    />
                </div>
            </MaxWidthWrapper>

            <RightSection
                contactData={contactData}
                bestTime={currentPackage.BestTime || "Year Round"}
                days={currentPackage.Days || 0}
                nights={currentPackage.Nights || 0}
                className="block md:hidden"
            />

            <div className="space-y-5 py-5 max-md:bg-white max-md:px-4 md:max-w-300 md:mx-auto">
                <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323]">
                    Photo Gallery
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.9063rem] gap-y-5">
                    {galleryImages && galleryImages.length > 0 ? (
                        galleryImages.map((img: string, index: number) => (
                            <Card key={index} img={img} />
                        ))
                    ) : (
                        currentPackage.gallery?.data?.map((img: any, index: number) => {
                            const galleryUrl = img.attributes?.url
                                ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${img.attributes.url}`
                                : "/image/country/Thailand.png";
                            return <Card key={index} img={galleryUrl} />;
                        })
                    )}
                </div>
            </div>

            <BottomSection packageId={currentPackage.id} />

        </div>
    );
};