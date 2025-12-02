"use client"
import { Send, Star } from "lucide-react";
import { Typography } from "../common/Typography";
import { Input } from "../ui/input";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export const SendReview = () => {
    const [rating, setRating] = useState(0);
    return (
        <div className="w-[35rem] h-fit space-y-5 bg-neutral-100 py-10 px-5 rounded-[.5rem]">
            <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323]">
                Leave a Review
            </Typography>

            <div className="flex gap-5">
                <div className="space-y-1 w-full">
                    <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Name</Typography>
                    <Input placeholder="Enter your name" />
                </div>

                <div className="space-y-1 w-full">
                    <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Email</Typography>
                    <Input placeholder="Enter your email" />
                </div>


            </div>

            <div className="space-y-1">
                <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Ratings</Typography>
                <div className="flex gap-1 ">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={() => setRating(star)}
                            className="cursor-pointer"
                        >
                            {star <= rating ? (
                                <Star className="size-5 fill-primary-700 text-primary-700" />
                            ) : (
                                <Star className="size-5 text-neutral-300 fill-neutral-300" />
                            )}
                        </button>
                    ))}
                </div>

            </div>

            <div className="space-y-1">
                <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Reviews</Typography>
                <Textarea placeholder="Enter your review" className="resize-none" />
            </div>

            <Button variant="default" className="w-full py-[.5625rem] px-[12.7188rem]">
                <Typography styleName="p3" variant="p" weight="semibold" className="text-neutral-100">
                    Send Review</Typography>
                <Send className="w-5" />
            </Button>
        </div>
    );
};