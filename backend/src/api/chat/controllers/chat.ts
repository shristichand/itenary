import axios from "axios";

declare var strapi: any;

export default {
    async handle(ctx) {
        try {
            const { message } = ctx.request.body;

            if (!message) {
                return ctx.badRequest("Message is required");
            }

            // 1. Fetch Packages
            const packages = await strapi.entityService.findMany('api::package.package', {
                populate: ['Places', 'country'],
            });

            // 2. Fetch Contact Info
            const contactInfos = await strapi.entityService.findMany('api::contact-info.contact-info');
            const contactInfo = contactInfos && contactInfos.length > 0 ? contactInfos[0] : null;

            // 3. Format Context
            let contextString = "Arc Global Travels offers the following travel packages:\n\n";

            if (packages && packages.length > 0) {
                packages.forEach((pkg: any, index: number) => {
                    const places = pkg.Places ? pkg.Places.map((p: any) => p.placeName).join(", ") : "";
                    const countryName = pkg.country ? pkg.country.name : "";
                    // Format: 1. [Title]: [Days] days, [Places]
                    contextString += `${index + 1}. ${pkg.Title}: ${pkg.Days} days, ${places}\n`;
                });
            } else {
                contextString += "No packages currently available.\n";
            }

            if (contactInfo) {
                contextString += `\nCompany Contact Info:\n`;
                if (contactInfo.Location) contextString += `Location: ${contactInfo.Location}\n`;
                if (contactInfo.PhoneNumber1) contextString += `Phone: ${contactInfo.PhoneNumber1}`;
                if (contactInfo.PhoneNumber2) contextString += `, ${contactInfo.PhoneNumber2}`;
                contextString += "\n";
                if (contactInfo.Email) contextString += `Email: ${contactInfo.Email}\n`;
            }

            contextString += "\nOnly provide information about these packages and the company. Do not give information about anything else.";

            // 4. Inject Prompt
            const finalMessage = `${contextString}\n\nUser Query: ${message}`;

            const model = "gemini-flash-latest"; // free-tier Gemini model
            const apiKey = process.env.GEMINI_API_KEY;

            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

            // ✅ Correctly send headers outside the data
            const response = await axios.post(
                url,
                {
                    contents: [
                        {
                            parts: [
                                {
                                    text: finalMessage // Injecting the context-enriched message
                                }
                            ]
                        }
                    ]
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-goog-api-key": apiKey
                    }
                }
            );

            const reply =
                response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";

            return ctx.send({ reply });

        } catch (error: any) {
            console.log("\n🔥 GEMINI ERROR 🔥");
            console.log(error?.response?.data || error.message);
            console.log("🔥 END 🔥\n");
            return ctx.internalServerError("AI processing failed");
        }
    }
};
