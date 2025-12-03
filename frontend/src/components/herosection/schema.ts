import { z } from "zod";

export const heroSchema = z.object({
    location: z.string().min(1, "Location is required"),
    date: z.string().min(1, "Date is required"),
});

export type HeroFormData = z.infer<typeof heroSchema>;
