"use client"
import Image from "next/image"
import { Typography } from "../common/Typography"
import { Facebook, Instagram, X } from "lucide-react"
import { blogData, TravelInspiration } from "../travelinspiration/TravelInspiration"
import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { Card } from "../travelinspiration/Card"
import Link from "next/link"

export const BlogBottom = ({ slug }: { slug: string }) => {
    console.log(slug)
    return (
        <MaxWidthWrapper>
            <p className="pt-10 pb-5">Blog Content</p>

            <div className="space-y-5">
                <div className="flex gap-5">
                    <div className="min-w-20 h-20 ">
                        <Image
                            src="/image/about/team1.png"
                            alt="blog"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <Typography styleName="p6" weight="medium" variant="p" className="text-[#242323] ">
                            David Kim
                        </Typography>
                        <Typography styleName="p6" weight="medium" variant="p" className="text-neutral-900 ">
                            Travel writer and photographer with a passion for discovering hidden gems around the world. Sharing stories and tips to inspire your next adventure.
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

                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://www.example.com/${slug}`} >
                            <div className="w-10 h-10 rounded-full bg-[#1D4197] flex items-center justify-center">
                                <Facebook className="w-5 text-neutral-100" />
                            </div>
                        </Link>

                        <div  >
                            <div className="w-10 h-10 rounded-full bg-[#1D4197] flex items-center justify-center" >
                                <Instagram className="w-5 text-neutral-100" />
                            </div>
                        </div>

                        <Link href={`https://twitter.com/intent/tweet?text=YOUR_TEXT&url=https://www.example.com/${slug}`}>

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
                        {blogData.filter((item) => item.slug !== slug).map((item, index) => (
                            <Card key={index} image={item.image} date={item.date} name={item.name} title={item.title} description={item.description} slug={item.slug} />
                        ))}
                    </div>
                </div>
            </div>
        </MaxWidthWrapper >

    )
}