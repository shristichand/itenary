import { ArrowLeft, Calendar, MapPin, Timer, User } from "lucide-react";
import Image from "next/image";
import { Typography } from "../common/Typography";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { MidSection } from "./MidSection";
import { RightSection } from "./RightSection";
import { Card } from "../gallery/Card";
import { BottomSection } from "./BottomSection";
import { packageData } from "../../data/packages";
import Link from "next/link";

export const Package = ({ slug }: { slug: string }) => {
    const currentPackage = packageData.find((item) => item.slug === slug);

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

    return (
        <div className="pb-10 ">
            <div>
                <div className="w-full relative h-62.5  overflow-hidden">
                    <Image
                        src={currentPackage.coverImage}
                        alt="blog"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover object-bottom translate-y-[.0625rem]"
                    />

                    <div className="absolute inset-0 bg-[#00000080]"></div>
                    <div className="w-300 space-y-5 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                        <Link href="/packages">

                            <div className="flex gap-[.3125rem] items-center">
                                <ArrowLeft className="w-4 text-neutral-100" />
                                <Typography styleName="p7" weight="medium" variant="p" className="text-neutral-100 ">
                                    Back
                                </Typography>
                            </div>
                        </Link>

                        <div className="text-center  px-43.5 space-y-5 pb-2">
                            <div className="space-y-5">
                                <Typography styleName="sub6" weight="semibold" variant="p" className="text-neutral-100 ">
                                    {currentPackage.title}
                                </Typography>

                                <Typography styleName="p3" weight="regular" variant="p" className="text-[#E8E8E8]">
                                    {currentPackage.description}
                                </Typography>

                                <div className="flex gap-10.5 justify-center items-center ">
                                    <div className="flex gap-1 items-center">
                                        <MapPin className="w-5 text-[#D2D2D2]" />
                                        <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2]">
                                            {currentPackage.location}
                                        </Typography>
                                    </div>



                                    <div className="flex gap-1 items-center">
                                        <Timer className="w-5  text-[#D2D2D2]" />
                                        <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2]">
                                            {currentPackage.readTime}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <MaxWidthWrapper>
                <div className="flex gap-10 justify-between pt-10 pb-5">
                    <MidSection
                        description={currentPackage.description}
                        places={currentPackage.places}
                        itinerary={currentPackage.itinerary}
                    />
                    <RightSection
                        bestTime={currentPackage.bestTime}
                        duration={currentPackage.duration}
                    />
                </div>

                <div className="space-y-5 py-5">
                    <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323]">
                        Photo Gallery
                    </Typography>

                    <div className="grid grid-cols-3 gap-x-[1.9063rem] gap-y-5">
                        {currentPackage.galleryImages.map((img, index) => (
                            <Card key={index} img={img} />
                        ))}
                    </div>
                </div>

                <BottomSection />
            </MaxWidthWrapper>
        </div>
    );
};