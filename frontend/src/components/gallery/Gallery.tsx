import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";
import { getGallery } from "@/api/gallery";

export const Gallery = async () => {
    let allImages: string[] = [];

    try {
        const response = await getGallery();
        const galleries = response?.data || [];

        // Extract all images from all gallery entries
        galleries.forEach((gallery: any) => {
            const images = gallery.Image || [];
            images.forEach((image: any) => {
                // Construct the full image URL
                const baseUrl = process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337";
                const imageUrl = image.url
                    ? `${baseUrl}${image.url}`
                    : "";

                if (imageUrl) {
                    allImages.push(imageUrl);
                }
            });
        });
    } catch (error) {
        console.error("Failed to fetch gallery images:", error);
    }

    return (
        <MaxWidthWrapper>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-7.5 md:gap-y-10 gap-y-4">
                {allImages.length > 0 ? (
                    allImages.map((img, index) => (
                        <Card key={index} img={img} />
                    ))
                ) : (
                    <p className="text-center text-neutral-500 col-span-3">No gallery images found.</p>
                )}
            </div>
        </MaxWidthWrapper>
    )
}