import { Star } from "lucide-react";
import Image from "next/image";
import { Typography } from "../common/Typography";

export const Review = ({ star, date, img, name, location, review }: { star: number, date: string, img: string, name: string, location: string, review: string }) => {
    return (
        <div className="w-[37.5rem] space-y-2 p-5 rounded-[.5rem] bg-neutral-100">
            <div className="flex justify-between items-center">

                <div className="flex gap-5">
                    <div className="w-10 h-10">
                        <Image
                            src={img}
                            alt="profile"
                            width={500}
                            height={500}
                            className="w-full h-full rounded-full"
                        />
                    </div>

                    <div className="flex flex-col ">
                        <p className="font-inter font-semibold text-[.85rem] text-[#242323] ">
                            {name}
                        </p>

                        <p className="font-inter font-regular text-[.7438rem] text-[#4A4A4A] ">
                            {location}
                        </p>

                    </div>
                </div>

                <div className="space-y-1">
                    <div className="flex gap-1">
                        {Array.from({ length: star }).map((_, i) => (
                            <Star key={i} className="size-5 fill-primary-700 text-primary-700" />
                        ))}
                        {Array.from({ length: 5 - star }).map((_, i) => (
                            <Star key={i} className="size-5 fill-neutral-300 text-neutral-300" />
                        ))}
                    </div>

                    <p className="text-[#4A4A4A] font-inter text-[.7438rem] leading-5 font-regular">
                        {date}
                    </p>
                </div>
            </div>

            <Typography styleName="p3" weight="regular" variant="h1" className="text-[#242323]">
                {review}
            </Typography>

        </div>
    );
};