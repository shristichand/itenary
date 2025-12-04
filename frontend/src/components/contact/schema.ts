import { z } from "zod";

export const contactSchema = z.object({
    Name: z.string().min(1, "Name is required"),
    Email: z.string().email("Invalid email address"),
    Message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
