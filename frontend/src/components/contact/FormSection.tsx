"use client";
import { Send } from "lucide-react";
import { Typography } from "../common/Typography";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactSchema, ContactFormData } from "./schema";
import { sendContactMessage } from "../../api/inquiry";

export const FormSection = () => {
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
        <div className="basis-1/2 max-w-300 h-fit md:p-5 md:bg-white rounded-[.5rem] md:shadow-[#00000040] md:shadow-[0px_4px_20px_0px] space-y-5  px-4 pb-[.9375rem] ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div className="space-y-1">
                    <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323] max-md:leading-[1.375rem]">Your Name</Typography>
                    <Input className="h-10 border border-neutral-700" placeholder="Enter your name" {...register("Name")} />
                    {errors.Name && <span className="text-red-500 text-xs">{errors.Name.message}</span>}
                </div>
                <div className="space-y-1">
                    <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323] max-md:leading-[1.375rem]">Email</Typography>
                    <Input className="h-10 border border-neutral-700" placeholder="Enter your email" {...register("Email")} />
                    {errors.Email && <span className="text-red-500 text-xs">{errors.Email.message}</span>}
                </div>
                <div className="space-y-1">
                    <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323] max-md:leading-[1.375rem]">Message</Typography>
                    <Textarea className="resize-none h-20 border border-neutral-700" placeholder="Enter your message" rows={4} {...register("Message")} />
                    {errors.Message && <span className="text-red-500 text-xs">{errors.Message.message}</span>}
                </div>

                <div className="max-md:pt-[2rem]">
                    <Button type="submit" variant="default" className="w-full py-[.5625rem] px-[12.9688rem]" disabled={mutation.isPending}>
                        <Typography styleName="p3" variant="p" weight="semibold" className="text-neutral-100 max-md:leading-[1.375rem]">
                            {mutation.isPending ? "Sending..." : "Send Message"}
                        </Typography>
                        <Send className="w-5" />
                    </Button>
                </div>
            </form>
        </div>
    );
};