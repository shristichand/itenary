"use client"
import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";
import { getReviews } from "@/api/review";
import { useQuery } from "@tanstack/react-query";



export const Testimonial = () => {
     const { data: reviewsData } = useQuery({
        queryKey: ["reviews"],
        queryFn: () => getReviews()
        });

        

    const reviews = reviewsData?.data || [];
    return (
        <section>
            <MaxWidthWrapper>
                <div className="space-y-5 py-10 ">
                    <SubHeadingContainer headingtext="What Our Travelers Say" paragraphtext="Real experiences from real travelers who have explored the world with us." />
                    <div className="flex flex-wrap justify-center gap-x-7.5 gap-y-10 ">
                        {reviews.map((item: any, index: number) => (
                            <Card key={index} testimonial={item.Review} star={item.Rating} image={item.image} name={item.Name} location={item.Location} />
                        ))}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};