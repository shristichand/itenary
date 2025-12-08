"use client"
import Image from "next/image"
import { Typography } from "../common/Typography"
import { Facebook, Instagram, X } from "lucide-react"
import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { Card } from "../travelinspiration/Card"
import Link from "next/link"

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useState, useEffect } from "react";
import { getBlogs } from "@/api/blog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BlogBottom = ({ blog }: { blog: any }) => {
    const attr = blog?.attributes || blog;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await getBlogs();
                if (res && res.data) {
                    setRelatedBlogs(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch related blogs", error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <MaxWidthWrapper>
            <div className="pt-10 pb-5">
                {/* Render rich text content here. For now just description */}
                <Typography styleName="p3" weight="regular" className="text-neutral-800" variant="div">

                    <p dangerouslySetInnerHTML={{ __html: attr?.Content || attr?.Description || "No content available." }}></p>
                </Typography>
            </div>

            <div className="space-y-5">
                <div className="flex gap-2 md:gap-5">
                    <div className="max-w-[7.4375rem] min-w-[7.4375rem] h-[7.6875rem] md:max-w-20 md:min-w-20 md:h-20 ">
                        <Image
                            src={attr?.author?.Image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${attr.author.Image.url}` : "/image/about/team1.png"}
                            alt="author"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <Typography styleName="p6" weight="medium" variant="p" className="text-[#242323] max-md:text-[1rem] max-md:leading-6 ">
                            {attr?.author?.Name || "Admin"}
                        </Typography>
                        <Typography styleName="p6" weight="regular" variant="p" className="text-neutral-900 max-md:text-[1rem] max-md:leading-[1.1875rem] ">
                            {attr?.author?.AuthorDescription || "No author description available."}
                        </Typography>
                    </div>
                </div>

                <div className="space-y-5">
                    <Typography styleName="p6" weight="regular" variant="p" className="text-[#4A4A4A] max-md:text-[1rem] max-md:leading-[1.3125rem] ">
                        Enjoyed this article? Share it with fellow travelers!
                    </Typography>

                    <div className="flex gap-5">
                        <div className="py-[.375rem]">
                            <Typography styleName="p6" weight="medium" variant="p" className="text-[#4A4A4A] max-md:text-[1rem] max-md:leading-[1.3125rem] ">
                                Share:
                            </Typography>
                        </div>

                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://www.example.com/blogs/${attr?.slug}`} >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1D4197] flex items-center justify-center">
                                <Facebook className="w-5 text-neutral-100" />
                            </div>
                        </Link>

                        <div  >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1D4197] flex items-center justify-center" >
                                <Instagram className="w-5 text-neutral-100" />
                            </div>
                        </div>

                        <Link href={`https://twitter.com/intent/tweet?text=${attr?.title}&url=https://www.example.com/blogs/${attr?.slug}`}>

                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1D4197] flex items-center justify-center">
                                <X className="w-5 text-neutral-100" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="space-y-5 pb-10">
                    <Typography styleName="p6" weight="medium" variant="p" className="text-[#000000] max-md:leading-6 ">
                        Related Articles
                    </Typography>

                    <div className="flex flex-wrap gap-x-7.5 gap-y-10 ">
                        {relatedBlogs.length > 0 ? (
                            relatedBlogs
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .filter((item: any) => item.id !== blog.id)
                                .slice(0, 3)
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map((item: any, index: number) => {
                                    const rAttr = item.attributes || item;
                                    const imageUrl = rAttr.image?.data?.attributes?.url
                                        ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${rAttr.image.data.attributes.url}`
                                        : "/image/country/Dubai.png";
                                    return (
                                        <Card
                                            key={index}
                                            image={imageUrl}
                                            date={rAttr.publishedAt || rAttr.createdAt}
                                            name={rAttr.author?.Name || "Admin"}
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