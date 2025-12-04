import { Star } from "lucide-react"
import { Typography } from "../common/Typography"
import Image from "next/image"

export const Card = ({ testimonial, star, image, name, location }: { testimonial: string, star: number, image: string, name: string, location: string }) => {
    return (
        <div className="w-95 h-fit p-5 bg-neutral-100 flex flex-col gap-2 rounded-[.5rem] shadow-[#00000040] shadow-[0px_4px_20px_0px] ">
            {/* star section */}
            <div className="flex gap-1">
                {Array.from({ length: star }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary-700 text-primary-700" />
                ))}
                {Array.from({ length: 5 - star }).map((_, i) => (
                    <Star key={i} className="size-4 fill-neutral-300 text-neutral-300" />
                ))}
            </div>

            <div>
                <Typography styleName="p3" weight="regular" className="text-[#242323] text-justify">
                    {testimonial}
                </Typography>
            </div>

            <div>
                {/* Profile Section */}
                <div className="flex gap-5">
                    <div className="w-10 h-10 space-y-0.5">
                        <Image
                            src="/image/icons/profileAvatar.png"
                            alt="profile"
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                        />
                    </div>

                    <div>
                        <p className="text-[#242323] font-semibold leading-6 text-[.85rem] font-inter">
                            {name}
                        </p>
                        <p className="text-[#4A4A4A] leading-5 text-[.7438rem] font-inter">
                            {location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}