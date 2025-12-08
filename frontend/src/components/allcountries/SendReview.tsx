"use client"
import { Send, Star } from "lucide-react";
import { Typography } from "../common/Typography";
import { useToast } from "../common/ToastContext";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { reviewSchema, ReviewFormData } from "./schema";
import { sendReview } from "../../api/review";

export const SendReview = ({ packageId }: { packageId: string }) => {
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

    const { showToast } = useToast();

    const mutation = useMutation({
        mutationFn: sendReview,
        onSuccess: () => {
            showToast("Review submitted successfully!", "success");
            reset();
            setRating(0);
        },
        onError: (error) => {
            console.error("Error submitting review:", error);
            showToast("Failed to submit review.", "error");
        },
    });

    const onSubmit = (data: ReviewFormData) => {
        console.log("Submitting:", data);
        const payload = {
            Name: data.Name,
            Location: data.Location,
            Rating: data.Rating,
            Review: data.Review,
            package: {
                connect: [packageId]
            }
        };
        mutation.mutate(payload);
    };

    const handleRatingChange = (star: number) => {
        setRating(star);
        setValue("Rating", star, { shouldValidate: true });
    };

    return (
        <div className="w-full md:w-140 h-fit space-y-5 bg-neutral-100 py-10 px-4 md:px-5 rounded-[.5rem]">
            <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323] max-md:text-[1.125rem] max-md:leading-[1.75rem]">
                Leave a Review
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex gap-5 max-md:flex max-md:flex-col">
                    <div className="space-y-1 w-full">
                        <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Name</Typography>
                        <Input className="max-md:h-10 w-full" placeholder="Enter your name" {...register("Name")} />
                        {errors.Name && <span className="text-red-500 text-xs">{errors.Name.message}</span>}
                    </div>

                    <div className="space-y-1 w-full">
                        <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Location</Typography>
                        <Input className="max-md:h-10 w-full" placeholder="Enter your location" {...register("Location")} />
                        {errors.Location && <span className="text-red-500 text-xs">{errors.Location.message}</span>}
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
                    <input type="hidden" {...register("Rating", { valueAsNumber: true })} />
                    {errors.Rating && <span className="text-red-500 text-xs">{errors.Rating.message}</span>}
                </div>

                <div className="space-y-1">
                    <Typography styleName="p5" variant="p" weight="medium" className="text-[#242323]">Your Reviews</Typography>
                    <Textarea className="max-md:h-10 resize-none" placeholder="Enter your review"{...register("Review")} />
                    {errors.Review && <span className="text-red-500 text-xs">{errors.Review.message}</span>}
                </div>

                <Button type="submit" variant="default" className="w-full py-[.5625rem] px-[12.7188rem] max-md:h-10 cursor-pointer" disabled={mutation.isPending}>
                    <Typography styleName="p3" variant="p" weight="semibold" className="text-neutral-100">
                        {mutation.isPending ? "Sending..." : "Send Review"}
                    </Typography>
                    <Send className="w-5" />
                </Button>
            </form>
        </div>
    );
};