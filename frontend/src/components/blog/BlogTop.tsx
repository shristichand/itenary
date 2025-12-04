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
                <div className="w-300 space-y-5 absolute top-1/2 left-1/2 transform translate-x-[-54%] translate-y-[-50%]">
                    <Link href="/blogs">
                        <div className="flex gap-[.3125rem] items-center">
                            <ArrowLeft className="w-4 text-neutral-100" />
                            <Typography styleName="p7" weight="medium" variant="p" className="text-neutral-100 ">
                                Back
                            </Typography>
                        </div>
                    </Link>

                    <div className=" px-43.5 space-y-5">

                        <div className="w-fit px-3 py-[.4375rem] bg-primary-700 rounded-full">
                            <Typography styleName="p5" weight="medium" variant="p" className="text-neutral-100 ">
                                {attr?.blogtag || "Travel"}
                            </Typography>
                        </div>

                        <div className="space-y-5">
                            <Typography styleName="sub6" weight="semibold" variant="p" className="text-neutral-100 ">
                                {attr?.Title}
                            </Typography>

                            <div className="flex gap-10.5 mx-auto w-fit items-center">
                                <div className="flex gap-1 items-center">
                                    <User className="w-5 text-[#D2D2D2]" />
                                    <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2]">
                                        {attr?.Author?.Name || "Admin"}
                                    </Typography>
                                </div>

                                <div className="flex gap-1 items-center">
                                    <Calendar className="w-5  text-[#D2D2D2] " />
                                    <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2]">
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
                                    <Timer className="w-5  text-[#D2D2D2]" />
                                    <Typography styleName="p6" weight="semibold" variant="p" className="text-[#D2D2D2]">
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

