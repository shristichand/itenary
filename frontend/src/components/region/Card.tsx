import Image from "next/image";
import Link from "next/link";
import { Typography } from "../common/Typography";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const Card = ({ image, country, continent, link, description }: { image: string, country: string, continent: string, link: string, description?: string }) => {
    return (
        <div className="relative w-95 h-100 rounded-[.5rem] group overflow-hidden">
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
        transition-all duration-300 
        group-hover:-translate-y-15
        z-10
    "
                >
                    <Typography styleName="p5" weight="semibold" className="text-neutral-100">
                        {country}
                    </Typography>
                    <Typography styleName="p3" weight="medium" className="text-neutral-100">
                        {continent}
                    </Typography>

                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100 pt-2">
                        <Typography styleName="p3" weight="regular" className="text-neutral-200 line-clamp-2">
                            {description}
                        </Typography>
                    </div>
                </div>



            </Link>
            <div className="
                    absolute inset-0 top- left-0 p-5
                    bg-black/40 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 z-20
                ">
                <div className="absolute bottom-0 right-0 p-5 z-[99]">
                    <Link href={link}>
                        <Button variant="primary" className="group-hover:px-2 group-hover:py-[.3125rem] cursor-pointer">
                            <Typography styleName="p3" weight="medium" variant="p">
                                View More
                            </Typography>
                            <ArrowRight
                                className="size-4 transition-all duration-200"
                            />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};