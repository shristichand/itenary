import { z } from "zod";

export const heroSchema = z.object({
    Location: z.string().min(1, "Location is required"),
    Date: z.string().min(1, "Date is required"),
});

export type HeroFormData = z.infer<typeof heroSchema>;
