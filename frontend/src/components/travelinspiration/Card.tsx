import { ArrowRight, Calendar, User } from "lucide-react"
import Image from "next/image"
import { Typography } from "../common/Typography"
import Link from "next/link"

export const Card = ({ image, date, name, title, description, slug }: { image: string, date: string, name: string, title: string, description: string, slug: string }) => {
    return (
        <div className="md:w-95 w-full h-fit  shadow-[#00000040] shadow-[0px_4px_20px_0px] rounded-[.5rem]">
            <Image
                src={image}
                alt="blogimage"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 380px"
                className="w-full h-48 rounded-t-[.5rem] object-cover"
            />

            <div className="flex flex-col gap-2 pt-5 pl-5.75 pr-5">
                <div className="flex gap-5.25 ">
                    <div className="flex gap-2 items-center " >
                        <Calendar size={20} className="max-md:hidden" />
                        <div className="md:hidden border-l-[.0988rem] border-[#4A4A4A] h-[.8881rem] rounded-l-[.25rem] ms-4"></div>

                        <Typography styleName="p3" weight="regular" className="text-neutral-900 max-md:leading-[1.3031rem]">  {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </Typography>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <User size={20} className="max-md:hidden" />
                        <Typography styleName="p3" weight="regular" className="text-neutral-900 max-md:leading-[1.3031rem]">{name}</Typography>
                    </div>
                </div>
                <div>
                    <Typography styleName="p5" weight="semibold" className="text-[#242323] max-md:leading-[1.54rem] line-clamp-1">{title}</Typography>
                </div>

                <div>
                    <Typography styleName="p3" weight="regular" className="text-neutral-900 max-md:leading-[1.05rem] line-clamp-2">
                        <span dangerouslySetInnerHTML={{ __html: description }}></span>
                    </Typography>

                </div>
            </div>

            <div className="flex justify-end py-5 pr-5">
                <Link
                    href={`/blogs/${slug}`}
                    className="flex items-center gap-[.3125rem]"
                >
                    <Typography styleName="p3" weight="medium" className="text-primary-700 max-md:leading-[1.3031rem]">Read More</Typography>
                    <ArrowRight className="size-4 text-primary-700 max-md:hidden" />
                </Link>

            </div>
        </div>
    )
}