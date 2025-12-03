"use client"
import { Send, Star } from "lucide-react";
import { Typography } from "../common/Typography";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { reviewSchema, ReviewFormData } from "./schema";
import { submitReview } from "../../lib/api";

export const SendReview = () => {
    const [rating, setRating] = useState(0);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset
    } = useForm<ReviewFormData>({
        resolver: zodResolver(reviewSchema),
    });

    const mutation = useMutation({
        mutationFn: submitReview,
        onSuccess: () => {
            alert("Review submitted successfully!");
            reset();
            setRating(0);
        },
        onError: (error) => {
            console.error("Error submitting review:", error);
            alert("Failed to submit review.");
        },
    });

    const onSubmit = (data: ReviewFormData) => {
        mutation.mutate(data);
    };

    const handleRatingChange = (star: number) => {
        setRating(star);
        setValue("rating", star, { shouldValidate: true });
    };

    return (
        <div className="w-[35rem] h-fit space-y-5 bg-neutral-100 py-10 px-5 rounded-[.5rem]">
            <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323]">
                Leave a Review
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex gap-5">
                    <div className="space-y-1 w-full">
                        <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Name</Typography>
                        <Input placeholder="Enter your name" {...register("name")} />
                        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-1 w-full">
                        <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Email</Typography>
                        <Input placeholder="Enter your email" {...register("email")} />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </div>
                </div>

                <div className="space-y-1">
                    <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Ratings</Typography>
                    <div className="flex gap-1 ">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => handleRatingChange(star)}
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
                    <input type="hidden" {...register("rating", { valueAsNumber: true })} />
                    {errors.rating && <span className="text-red-500 text-xs">{errors.rating.message}</span>}
                </div>

                <div className="space-y-1">
                    <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Reviews</Typography>
                    <Textarea placeholder="Enter your review" className="resize-none" {...register("review")} />
                    {errors.review && <span className="text-red-500 text-xs">{errors.review.message}</span>}
                </div>

                <Button type="submit" variant="default" className="w-full py-[.5625rem] px-[12.7188rem]" disabled={mutation.isPending}>
                    <Typography styleName="p3" variant="p" weight="semibold" className="text-neutral-100">
                        {mutation.isPending ? "Sending..." : "Send Review"}
                    </Typography>
                    <Send className="w-5" />
                </Button>
            </form>
        </div>
    );
};