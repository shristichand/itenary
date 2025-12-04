import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";

interface TravelInspirationProps {
    blogs?: any[];
}

export const TravelInspiration = ({ blogs = [] }: TravelInspirationProps) => {
    return (
        <section>
            <MaxWidthWrapper>
                <div className="space-y-5 py-10 ">
                    <SubHeadingContainer headingtext="Travel Inspiration" paragraphtext="Real experiences from real travelers who have explored the world with us." />
                    <div className="flex flex-wrap justify-center gap-x-7.5 gap-y-10 ">
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