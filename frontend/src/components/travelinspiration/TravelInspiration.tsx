import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";

interface TravelInspirationProps {
    blogs?: any[];
}

export const TravelInspiration = ({ blogs = [] }: TravelInspirationProps) => {
    return (
        <section>
            <MaxWidthWrapper className="max-md:bg-white">
                <div className="md:space-y-5 md:py-10 py-4 pb-5">
                    <SubHeadingContainer headingtext="Travel Inspiration" paragraphtext="Real experiences from real travelers who have explored the world with us." />
                    <div className="flex flex-wrap justify-center md:gap-x-7.5 md:gap-y-10 gap-4">
                        {blogs.length > 0 ? (
                            blogs.map((item, index) => {
                                const attr = item.attributes || item;
                                const blogImage = Array.isArray(attr?.Image) ? attr.Image[0] : attr?.Image;
                                const imageUrl = blogImage?.url
                                    ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${blogImage.url}`
                                    : "/image/country/Dubai.png"; // Fallback image

                                return (
                                    <Card
                                        key={index}
                                        image={imageUrl}
                                        date={attr.createdAt || "25 Dec 2024"}
                                        name={attr.author?.Name || "John Doe"}
                                        title={attr.Title}
                                        description={attr.Content}
                                        slug={attr.Slug}
                                    />
                                );
                            })
                        ) : (
                            <p className="text-center text-neutral-500">No blogs found.</p>
                        )}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};