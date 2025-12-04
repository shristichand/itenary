"use client"
import Image from "next/image"
import { Typography } from "../common/Typography"
import { Facebook, Instagram, X } from "lucide-react"
import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { Card } from "../travelinspiration/Card"
import Link from "next/link"

export const BlogBottom = ({ blog, relatedBlogs = [] }: { blog: any, relatedBlogs?: any[] }) => {
    const attr = blog?.attributes || blog;

    return (
        <MaxWidthWrapper>
            <div className="pt-10 pb-5">
                {/* Render rich text content here. For now just description */}
                <Typography styleName="p3" weight="regular" className="text-neutral-800">
                    {attr?.Content || attr?.Description || "No content available."}
                </Typography>
            </div>

            <div className="space-y-5">
                <div className="flex gap-5">
                    <div className="max-w-20 min-w-20 h-20 ">
                        <Image
                            src={attr?.author?.Image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${attr.author.Image.url}` : "/image/about/team1.png"}
                            alt="author"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <Typography styleName="p6" weight="medium" variant="p" className="text-[#242323] ">
                            {attr?.author?.Name || "Admin"}
                        </Typography>
                        <Typography styleName="p6" weight="medium" variant="p" className="text-neutral-900 ">
                            {attr?.author?.AuthorDescription || "No author description available."}
                        </Typography>
                    </div>
                </div>

                <div className="space-y-5">
                    <Typography styleName="p6" weight="regular" variant="p" className="text-[#4A4A4A] ">
                        Enjoyed this article? Share it with fellow travelers!
                    </Typography>

                    <div className="flex gap-5">
                        <div className="py-[.375rem]">
                            <Typography styleName="p6" weight="medium" variant="p" className="text-[#4A4A4A] ">
                                Share:
                            </Typography>
                        </div>

                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://www.example.com/blogs/${attr?.slug}`} >
                            <div className="w-10 h-10 rounded-full bg-[#1D4197] flex items-center justify-center">
                                <Facebook className="w-5 text-neutral-100" />
                            </div>
                        </Link>

                        <div  >
                            <div className="w-10 h-10 rounded-full bg-[#1D4197] flex items-center justify-center" >
                                <Instagram className="w-5 text-neutral-100" />
                            </div>
                        </div>

                        <Link href={`https://twitter.com/intent/tweet?text=${attr?.title}&url=https://www.example.com/blogs/${attr?.slug}`}>

                            <div className="w-10 h-10 rounded-full bg-[#1D4197] flex items-center justify-center">
                                <X className="w-5 text-neutral-100" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="space-y-5 pb-10">
                    <Typography styleName="p6" weight="regular" variant="p" className="text-[#000000] ">
                        Related Articles
                    </Typography>

                    <div className="flex flex-wrap gap-x-7.5 gap-y-10 ">
                        {relatedBlogs.length > 0 ? (
                            relatedBlogs.map((item, index) => {
                                const rAttr = item.attributes || item;
                                const imageUrl = rAttr.image?.data?.attributes?.url
                                    ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${rAttr.image.data.attributes.url}`
                                    : "/image/country/Dubai.png";
                                return (
                                    <Card
                                        key={index}
                                        image={imageUrl}
                                        date={rAttr.date}
                                        name={rAttr.author}
                                        title={rAttr.title}
                                        description={rAttr.description}
                                        slug={rAttr.slug}
                                    />
                                );
                            })
                        ) : (
                            <p>No related articles found.</p>
                        )}
                    </div>
                </div>
            </div>
        </MaxWidthWrapper >

    )
}