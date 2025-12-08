import Image from "next/image"
import { Typography } from "../common/Typography"
import { ArrowLeft, Calendar, Timer, User } from "lucide-react"
import Link from "next/link"

export const BlogTop = ({ blog }: { blog: any }) => {
    const attr = blog?.attributes || blog;
    const blogImage = Array.isArray(attr?.Image) ? attr.Image[0] : attr?.Image;
    const imageUrl = blogImage?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${blogImage.url}`
        : "/image/blog/blog.svg";

    return (
        <div>
            <div className="w-full relative h-62.5  overflow-hidden">
                <Image
                    src={imageUrl}
                    alt="blog"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-bottom translate-y-[.0625rem]"
                />

                <div className="absolute inset-0 bg-[#00000080]"></div>
                <div className="w-full md:w-300 h-full md:h-auto 
                flex flex-col justify-between
                 md:block p-4 md:p-0
                  absolute -top-20
                  md:top-1/2 
                  left-0 
                  md:left-1/2 md:transform md:translate-x-[-54%] md:translate-y-[-50%]">
                    <Link href="/blogs" className="max-md:hidden">
                        <div className="flex gap-[.3125rem] items-center">
                            <ArrowLeft className="w-4 text-neutral-100" />
                            <Typography styleName="p7" weight="medium" variant="p" className="text-neutral-100 ">
                                Back
                            </Typography>
                        </div>
                    </Link>

                    <div className="md:px-43.5 space-y-5 md:space-y-5 flex flex-col h-full justify-between md:justify-start pt-20 md:pt-0">

                        <div className="w-fit px-3 py-[.4375rem] bg-primary-700 rounded-full">
                            <Typography styleName="p5" weight="medium" variant="p" className="text-neutral-100 max-md:text-sm">
                                {attr?.blogtag?.tag || "Travel"}
                            </Typography>
                        </div>

                        <div className="space-y-5 md:space-y-5 mt-auto md:mt-0">
                            <Typography styleName="sub6" weight="semibold" variant="p" className="text-neutral-100 max-md:text-[2rem] max-md:leading-10">
                                {attr?.Title}
                            </Typography>

                            <div className="flex flex-wrap gap-[.5938rem] md:gap-10.5 md:mx-auto w-full md:w-fit items-center">
                                <div className="flex gap-1 items-center">
                                    <User className="w-5 text-[#D2D2D2] max-md:w-4" />
                                    <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2] max-md:text-[1.125rem] max-md:leading-[1.75rem]">
                                        {attr?.Author?.Name || "Admin"}
                                    </Typography>
                                </div>

                                <div className="flex gap-1 items-center">
                                    <Calendar className="w-5  text-[#D2D2D2] max-md:w-4" />
                                    <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2] max-md:text-[1.125rem] max-md:leading-[1.75rem]">
                                        {attr?.createdAt
                                            ? new Date(attr.createdAt).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            })
                                            : "Unknown Date"
                                        }
                                    </Typography>
                                </div>

                                <div className="flex gap-1 items-center">
                                    <Timer className="w-5  text-[#D2D2D2] max-md:w-4" />
                                    <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2] max-md:text-[1.125rem] max-md:leading-[1.75rem]">
                                        {attr?.ReadDuration || "5 min read"} min read
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

