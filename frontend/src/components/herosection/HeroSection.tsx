"use client";
import Image from "next/image";
import { Typography } from "../common/Typography";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../ui/input-group";
import { Calendar, MapPin, Search } from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation } from "@tanstack/react-query";
import { heroSchema, HeroFormData } from "./schema";
import { sendInquiry } from "../../api/inquiry";
import { getHeroData } from "../../api/home";

export const HeroSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<HeroFormData>({
        resolver: zodResolver(heroSchema),
    });

    const { data: heroData } = useQuery({
        queryKey: ["hero"],
        queryFn: getHeroData,
    });

    const mutation = useMutation({
        mutationFn: sendInquiry,
        onSuccess: () => {
            alert("Inquiry submitted successfully!");
        },
        onError: (error) => {
            console.error("Error submitting inquiry:", error);
            alert("Failed to submit inquiry.");
        },
    });

    const onSubmit = (data: HeroFormData) => {
        mutation.mutate(data);
    };

    const title = heroData?.data?.Title || "Discover the World's Hidden Gems";
    const subtitle = heroData?.data?.Description || "Unforgettable adventures await. Let us guide you to the most breathtaking destinations around the globe.";
    const imageUrl = heroData?.data?.Image?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${heroData.data.Image.url}`
        : "/image/hero/hero.svg";

    return (
        <div className="relative w-screen max-w-screen h-167.5 overflow-x-hidden">
            <Image
                src={imageUrl}
                alt="hero"
                width={500}
                height={500}
                className="w-full h-full object-cover object-bottom translate-y-[.0625rem]"
            />

            <div className="w-215 space-y-10  absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-60%]">
                <div className="flex flex-col  justify-center items-center gap-5">
                    <div className="w-157.25 space-y-5">
                        <Typography styleName="d2" weight="bold" variant="p" className="text-neutral-100 max-w-135 text-center">
                            {title}
                        </Typography>

                        <Typography styleName="p5" weight="regular" className="text-neutral-100 max-w-157.25 text-center">
                            {subtitle}
                        </Typography>
                    </div>
                </div>

                <div >
                    <div className="w-full  bg-[#F0F0F0] p-5 rounded-[.5rem]">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                            <div className="flex gap-5 ">
                                <div className="w-full flex flex-col gap-2 ">
                                    <Typography styleName="p3" weight="regular" className="text-neutral-800 ">
                                        Location
                                    </Typography>

                                    <div>
                                        <InputGroup className="border border-neutral-400 focus-visible:ring-0">
                                            <InputGroupInput
                                                placeholder="Where are you going ?"
                                                className="placeholder:text-neutral-800 placeholder:text-4 placeholder:leading-6"
                                                {...register("Location")}
                                            />
                                            <InputGroupAddon>
                                                <MapPin className="size-6 text-[#1D4197]" />
                                            </InputGroupAddon>
                                            <InputGroupAddon align="inline-start">
                                                <InputGroupButton>

                                                </InputGroupButton>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {errors.Location && (
                                            <span className="text-red-500 text-sm">{errors.Location.message}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full flex flex-col gap-2 ">
                                    <Typography styleName="p3" weight="regular" className="text-neutral-800 ">
                                        Date
                                    </Typography>

                                    <div>
                                        <InputGroup className="border border-neutral-400 focus-visible:ring-0">
                                            <InputGroupInput
                                                type="date"
                                                placeholder="Select a date"
                                                className="placeholder:text-neutral-800 placeholder:text-4 placeholder:leading-6"
                                                {...register("Date")}
                                            />
                                            <InputGroupAddon>
                                                <Calendar className="size-6 text-[#1D4197]" />
                                            </InputGroupAddon>
                                            <InputGroupAddon align="inline-start">
                                                <InputGroupButton>

                                                </InputGroupButton>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {errors.Date && (
                                            <span className="text-red-500 text-sm">{errors.Date.message}</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end ">
                                <Button type="submit" variant="default" className="px-5! flex! items-center!" disabled={mutation.isPending}>
                                    <Search className="w-5" />
                                    <Typography styleName="p3" weight="semibold" className="text-neutral-100">
                                        {mutation.isPending ? "Searching..." : "Search"}
                                    </Typography>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};