import { z } from "zod";

export const reviewSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    rating: z.number().min(1, "Rating is required"),
    review: z.string().min(1, "Review is required"),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;
