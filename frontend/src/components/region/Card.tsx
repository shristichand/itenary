import Image from "next/image";
import Link from "next/link";
import { Typography } from "../common/Typography";

export const Card = ({ image, country, continent, link }: { image: string, country: string, continent: string, link: string }) => {
    return (
        <div className="relative w-95 h-100 rounded-[.5rem]">
            <Link href={link}>
                <Image
                    src={image}
                    alt="region-image"
                    width={380}
                    height={260}
                    className="w-full h-full object-cover rounded-[.5rem]"
                />

                <div className="absolute bottom-0 left-0 p-5 ">
                <Typography styleName="p5" weight="semibold" className="text-neutral-100">
                    {country}
                </Typography>
                <Typography styleName="p3" weight="medium" className="text-neutral-100">
                    {continent}
                </Typography>
                </div>
            </Link>
        </div>
    );
};