import Image from "next/image"
import { Typography } from "../common/Typography"
import { ArrowLeft, Calendar, Timer, User } from "lucide-react"

export const BlogTop = () => {
    return (
        <div className="w-full relative h-[15.625rem]  overflow-hidden">
            <Image
                src="/image/blog/blog1.svg"
                alt="blog"
                width={500}
                height={500}
                className="w-full h-full object-cover object-bottom translate-y-[.0625rem]"
            />

            <div className="absolute inset-0 bg-[#00000080]"></div>
            <div className="w-[75rem] space-y-5 absolute top-1/2 left-1/2 transform translate-x-[-54%] translate-y-[-50%]">
                <div className="flex gap-[.3125rem] items-center">
                    <ArrowLeft className="w-4 text-neutral-100" />
                    <Typography styleName="p7" weight="medium" variant="p" className="text-neutral-100 ">
                        Back
                    </Typography>
                </div>

                <div className=" px-[10.875rem] space-y-5">

                    <div className="w-[9rem] px-3 py-[.4375rem] bg-primary-700 rounded-full">
                        <Typography styleName="p5" weight="medium" variant="p" className="text-neutral-100 ">
                            Food & Culture
                        </Typography>
                    </div>

                    <div className="space-y-5">
                        <Typography styleName="sub6" weight="semibold" variant="p" className="text-neutral-100 ">
                            A Foodie's Guide to Exploring Japanese Cuisine
                        </Typography>

                        <div className="flex gap-[2.625rem] mx-auto w-fit items-center">
                            <div className="flex gap1 items-center">
                                <User className="w-5 text-neutral-100" />
                                <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2]">
                                    David Kim
                                </Typography>
                            </div>

                            <div className="flex gap1 items-center">
                                <Calendar className="w-5  text-neutral-100 " />
                                <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2]">
                                    June 3, 2023
                                </Typography>
                            </div>

                            <div className="flex gap1 items-center">
                                <Timer className="w-5  text-neutral-100" />
                                <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2]">
                                    10 min read
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

