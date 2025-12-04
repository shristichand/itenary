import { z } from "zod";

export const reviewSchema = z.object({
    Name: z.string().min(1, "Name is required"),
    Email: z.string().email("Invalid email address"),
    Location: z.string().min(1, "Location is required"),
    Rating: z.number().min(1, "Rating is required"),
    Review: z.string().min(1, "Review is required"),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;
