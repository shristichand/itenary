"use client";
import { Calendar, Clock, Mail, Phone, Send } from "lucide-react";
import { Typography } from "../common/Typography";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { contactSchema, ContactFormData } from "../contact/schema";
import { sendContactMessage } from "../../api/inquiry";
import { getContactInfo } from "@/api/home";

interface RightSectionProps {
    bestTime: string;
    days: number;
    nights: number;
    className: string;
}

export const RightSection = ({ bestTime, days, nights, className }: RightSectionProps) => {
    let contactInfo = useQuery({
        queryKey: ["contact-info"],
        queryFn: () => getContactInfo(),
        enabled: true,
    });
    const contactData = contactInfo?.data?.data?.[0];

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const mutation = useMutation({
        mutationFn: sendContactMessage,
        onSuccess: () => {
            alert("Message sent successfully!");
            reset();
        },
        onError: (error) => {
            console.error("Error sending message:", error);
            alert("Failed to send message.");
        },
    });

    const onSubmit = (data: ContactFormData) => {
        mutation.mutate(data);
    };

    return (
        <div className={`w-full md:w-102.5 h-fit space-y-5 p-5 rounded-[.5rem] bg-neutral-100 ${className}`}>

            <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323] max-md:text-[1.25rem] max-md:leading-[1.75rem]">
                Get in Touch
            </Typography>

            <div className="space-y-2">
                <div className="flex gap-2 items-center">
                    <Calendar className="size-6 text-primary-700" />
                    <div >
                        <Typography styleName="p3" weight="medium" variant="h1" className="text-[#242323] ">
                            Best Time to Visit
                        </Typography>
                        <Typography styleName="p2" weight="regular" variant="h1" className="text-neutral-700 ">
                            {bestTime}
                        </Typography>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <Clock className="size-6 text-primary-700" />
                    <div >
                        <Typography styleName="p3" weight="medium" variant="h1" className="text-[#242323] ">
                            Recommended Duration
                        </Typography>
                        <Typography styleName="p2" weight="regular" variant="h1" className="text-neutral-700 ">
                            {days} days {nights} nights
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="border-b border-[#777777] pb-5 space-y-5">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <div className="space-y-1">
                        <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323]">Your Name</Typography>
                        <Input placeholder="Enter your name" className="border border-neutral-700 max-md:h-10" {...register("Name")} />
                        {errors.Name && <span className="text-red-500 text-xs">{errors.Name.message}</span>}
                    </div>
                    <div className="space-y-1">
                        <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323]">Email</Typography>
                        <Input placeholder="Enter your email" className="border border-neutral-700 max-md:h-10" {...register("Email")} />
                        {errors.Email && <span className="text-red-500 text-xs">{errors.Email.message}</span>}
                    </div>
                    <div className="space-y-1">
                        <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323]">Message</Typography>
                        <Textarea placeholder="Tell us about your travel plans" className="resize-none border border-neutral-700 max-md:h-10" rows={4} {...register("Message")} />
                        {errors.Message && <span className="text-red-500 text-xs">{errors.Message.message}</span>}
                    </div>

                    <Button type="submit" variant="default" className="w-full py-[.5625rem] px-[12.9688rem] max-md:px-4" disabled={mutation.isPending}>
                        <Typography styleName="p3" variant="p" weight="semibold" className="text-neutral-100">
                            {mutation.isPending ? "Sending..." : "Send Message"}
                        </Typography>
                        <Send className="w-5" />
                    </Button>
                </form>
            </div>

            <Typography styleName="p3" weight="semibold" variant="h1" className="text-[#242323]">
                Need help planning your trip?
            </Typography>

            <div className="space-y-3">
                <div className="flex gap-3 items-center">
                    <Phone className="size-5 stroke-[.1044rem] text-primary-700" />
                    <Typography styleName="p3" weight="regular" variant="h1" className="text-[#242323]">
                        {contactData?.PhoneNumber1}/{contactData?.PhoneNumber2}
                    </Typography>
                </div>

                <div className="flex gap-3 items-center">
                    <Mail className="size-5 stroke-[.1044rem] text-primary-700" />
                    <Typography styleName="p3" weight="regular" variant="h1" className="text-[#242323]">
                        {contactData?.Email}
                    </Typography>
                </div>
            </div>
        </div>
    );
};