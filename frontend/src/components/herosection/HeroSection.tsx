"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "../common/Typography";
import { useToast } from "../common/ToastContext";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../ui/input-group";
import { Calendar, MapPin, Search } from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation } from "@tanstack/react-query";
import { heroSchema, HeroFormData } from "./schema";
import { sendInquiry } from "../../api/inquiry";
import { getHeroData } from "../../api/home";

export const HeroSection = ({ heroData }: { heroData: any }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<HeroFormData>({
        resolver: zodResolver(heroSchema),
    });

    const { showToast } = useToast();

    const mutation = useMutation({
        mutationFn: sendInquiry,
        onSuccess: () => {
            showToast("Inquiry submitted successfully!", "success");
            reset();
        },
        onError: (error) => {
            console.error("Error submitting inquiry:", error);
            showToast("Failed to submit inquiry.", "error");
        },
    });

    const onSubmit = (data: HeroFormData) => {
        mutation.mutate(data);
    };

    const title = heroData?.Title;
    const subtitle = heroData?.Description;

    // Get images from API or use fallback
    const heroImages = heroData?.Image?.length > 0
        ? heroData.Image.map((img: any) => `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${img.url}`)
        : ["/image/hero/travelheroimage.jpg"];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev: number) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroImages.length]);

    return (
        <div className="relative w-screen max-w-screen ">
            {/* Image Section */}
            <div className="relative w-full md:h-167.5 h-[18.6875rem] ">
                {/* Slider Track */}
                {/* <div
                    className="flex w-full h-full transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                > */}
                <div
                    className="flex w-full h-full transition-transform duration-1000 ease-in-out slider-fix"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >

                    {heroImages.map((img: string, index: number) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0 relative"
                        >
                            <Image
                                src={img}
                                alt={`hero-${index}`}
                                width={1920}
                                height={1080}
                                quality={100}
                                priority={index === 0}
                                className="w-full h-full object-cover object-bottom"
                            />
                        </div>
                    ))}
                </div>

                {/* Text Overlay - Centered on Image */}
                <div className="absolute top-1/2 md:top-[45%] left-1/2 transform md:-translate-x-1/2 md:-translate-y-[95%] -translate-x-1/2 -translate-y-[50%] z-10 w-full flex flex-col items-center gap-5 px-4">
                    <div className="md:w-157.25 md:space-y-5 space-y-[.6094rem] wrap-break-word">
                        <Typography styleName="d2" weight="bold" variant="p" className="max-md:text-[1.5rem] max-md:leading-[1.9494rem] text-neutral-100 md:max-w-135 text-center">
                            {title}
                        </Typography>

                        <Typography styleName="p5" weight="regular" className="text-neutral-100 max-w-157.25 text-center max-md:text-[.875rem] max-md:leading-[.7919rem]">
                            {subtitle}
                        </Typography>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="hidden md:flex absolute bottom-10 left-1/2 transform translate-x-[-50%] z-20 gap-3">
                    {heroImages.map((_: string, index: number) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`rounded-full transition-all duration-300 ${index === currentSlide
                                ? "w-4 h-4 bg-[#1D4197] opacity-100"
                                : "w-4 h-4 bg-[#E8E8E8] opacity-50 hover:opacity-75"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Curve Overlay */}
                <div className="w-full min-w-full absolute bottom-0 left-0 right-0 z-10"

                >
                    <Image
                        src="/image/hero/curve.svg"
                        alt="curve"
                        width={500}
                        height={500}
                        priority
                        className="w-full h-full object-cover object-bottom  translate-y-[1px]"
                    />

                </div>
            </div>

            {/* Search Form Section */}
            {/* Desktop: Absolute overlay. Mobile: Static block below image. */}
            <div className="md:absolute md:top-[65%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 w-full md:w-auto">
                <div className="w-full md:w-215 px-4 md:px-0 bg-[#F0F0F0] md:bg-transparent pb-10 md:pb-0">

                    {/* Pagination Dots - Mobile Below Image */}
                    <div className="md:hidden flex justify-center py-4 gap-3">
                        {heroImages.map((_: string, index: number) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`rounded-full transition-all duration-300 ${index === currentSlide
                                    ? "w-2 h-2 bg-[#1D4197] opacity-100"
                                    : "w-2 h-2 bg-[#D9D9D9] opacity-100 hover:opacity-75"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="w-full bg-[#F0F0F0] md:p-5 rounded-[.5rem]">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                            <div className="flex flex-col md:flex-row md:gap-5">
                                <div className="w-full flex flex-col gap-2">
                                    <Typography styleName="p3" weight="regular" className="text-neutral-800 max-md:leading-[1.375rem]">
                                        Location
                                    </Typography>

                                    <div>
                                        <InputGroup className="border border-neutral-400 h-10 rounded-[.5rem] focus-visible:ring-0 bg-transparent">
                                            <InputGroupInput
                                                placeholder="Where are you going ?"
                                                className="placeholder:text-neutral-800 placeholder:text-4 placeholder:leading-6"
                                                {...register("Location")}
                                            />
                                            <InputGroupAddon>
                                                <MapPin className="size-6 text-[#1D4197]" />
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {errors.Location && (
                                            <span className="text-red-500 text-sm">{errors.Location.message}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full flex flex-col gap-2">
                                    <Typography styleName="p3" weight="regular" className="text-neutral-800 max-md:leading-[1.375rem]">
                                        Date
                                    </Typography>

                                    <div>
                                        <InputGroup className="border border-neutral-400 h-10 focus-visible:ring-0 bg-transparent">
                                            <InputGroupInput
                                                type="date"
                                                placeholder="Select a date"
                                                className="placeholder:text-neutral-800 placeholder:text-4 placeholder:leading-6"
                                                {...register("Date")}
                                            />
                                            <InputGroupAddon>
                                                <Calendar className="size-6 text-[#1D4197]" />
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {errors.Date && (
                                            <span className="text-red-500 text-sm">{errors.Date.message}</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button type="submit" variant="default" className="w-full h-10 md:w-auto px-5! flex! items-center! justify-center" disabled={mutation.isPending}>
                                    <Typography styleName="p3" weight="semibold" className="text-neutral-100 max-md:leading-[1.375rem]">
                                        Inquire
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
