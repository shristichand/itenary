import Image from "next/image";
import Link from "next/link";
import { Typography } from "../common/Typography";
import { Button } from "../ui/button";
import { ArrowRight, MapPin, Timer } from "lucide-react";

export const Card = ({ image, country, continent, link, location, days, nights }: { image: string, country: string, continent: string, link: string, location: string, days: string, nights: string }) => {
    return (
        <div className="relative md:w-95 w-full md:h-100 h-95 rounded-[.5rem] group overflow-hidden">
            <Link href={link}>
                <Image
                    src={image}
                    alt="region-image"
                    width={380}
                    height={260}
                    className="w-full h-full object-cover rounded-[.5rem]"
                />

                <div
                    className="
    absolute bottom-0 left-0 p-5 
    z-10 
    transition-all duration-300

    /* Mobile: visible and no hover movement */
    -translate-y-15

    /* Desktop: animate on hover */
    md:translate-y-0
    md:group-hover:-translate-y-15
    z-[100]
  "

                >
                    <Typography styleName="p5" weight="semibold" className="text-neutral-100 max-md:text-[1.0688rem] max-md:leading-[1.5437rem]">
                        {country}
                    </Typography>
                    <Typography styleName="p3" weight="medium" className="text-neutral-100 max-md:text-[.8313rem] max-md:leading-[1.3062rem] line-clamp-1">
                        {continent}
                    </Typography>

                    <div className="
    h-auto opacity-100
    md:h-0 md:opacity-0 md:overflow-hidden
    md:group-hover:h-auto md:group-hover:opacity-100
    transition-all duration-300 pt-2 
">


                        <div className="flex items-center gap-[.475rem] ">
                            <MapPin className="size-4.75 stroke-[.0988rem] text-neutral-300 " />
                            <p className="text-neutral-300 text-[.8313rem] leading-[1.3062rem] ">
                                {location}
                            </p>
                        </div>

                        <div className="flex items-center gap-[.475rem] pt-[.475rem]">
                            <Timer className="size-4.75 stroke-[.0988rem] text-neutral-300 " />
                            <p className="text-neutral-300 text-[.8313rem] leading-[1.3062rem] ">
                                {days} days / {nights} nights
                            </p>
                        </div>
                    </div>


                </div>



            </Link>
            <div
                className="
    absolute inset-0 left-0 p-5
    transition-opacity duration-300 z-20 

    /* --- Mobile (default) --- */
    opacity-100 bg-black/40

    /* --- Desktop: hover behavior --- */
    md:opacity-0 md:bg-black/40 md:group-hover:opacity-100
  "
            >
                <div className="absolute bottom-0 right-0 p-5 z-[99]">
                    <Link href={link}>
                        <Button
                            variant="primary"
                            className="md:group-hover:px-2 md:group-hover:py-[.3125rem] cursor-pointer"
                        >
                            <Typography styleName="p3" weight="medium" variant="p">
                                View More
                            </Typography>
                            <ArrowRight className="size-4 transition-all duration-200" />
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};