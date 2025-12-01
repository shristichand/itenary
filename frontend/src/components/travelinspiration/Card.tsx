import { ArrowRight, Calendar, User } from "lucide-react"
import Image from "next/image"
import { Typography } from "../common/Typography"
import Link from "next/link"

export const Card = ({ image, date, name, title, description }: { image: string, date: string, name: string, title: string, description: string }) => {
    return (
        <div className="w-95  shadow-[#00000040] shadow-[0px_4px_20px_0px] rounded-[.5rem]">
            <div>
                <Image
                    src={image}
                    alt="blogimage"
                    width={500}
                    height={500}
                    className="w-95 h-48 rounded-t-[.5rem] object-cover"
                />
            </div>

            <div className="flex flex-col gap-2 pt-5 pl-5.75 pr-5">
                <div className="flex gap-5.25">
                    <div className="flex gap-2 items-center">
                        <Calendar size={20} />
                        <Typography styleName="p3" weight="regular" className="text-neutral-900">{date}</Typography>
                    </div>

                    <div className="flex gap-2 items-center">
                        <User size={20} />
                        <Typography styleName="p3" weight="regular" className="text-neutral-900">{name}</Typography>
                    </div>
                </div>
                <div>
                    <Typography styleName="p5" weight="semibold" className="text-[#242323] line-clamp-1">{title}</Typography>
                </div>

                <div>
                    <Typography styleName="p3" weight="regular" className="text-neutral-900 line-clamp-2">{description}</Typography>

                </div>
            </div>

            <div className="flex justify-end py-5 pr-5">
                <Link
                href="/"
                className="flex items-center gap-[.3125rem]"
                >
                    <Typography styleName="p3" weight="medium" className="text-primary-700">Read More</Typography>
                    <ArrowRight className="size-4 text-primary-700"/>
                </Link>

            </div>
        </div>
    )
}